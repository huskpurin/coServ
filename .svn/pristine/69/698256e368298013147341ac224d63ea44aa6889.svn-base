var path = require('path'),
		request = require('request'),
		EventEmitter = require('events').EventEmitter,
		async = require('async');

var  index = new EventEmitter(),
	 modCtx = {},
	 engine;

index.setContext = function setContext(ctx)  {
	// modCtx = ctx;
	for (var key in ctx) {
		modCtx[key] = ctx[key];
	}
	delete modCtx.basePath;
	engine = require( path.join(ctx.basePath, './api/ApiEngine.js'));
};

index.run = function run(inData, res)  {
	var apiPath = '/wdSite/wdContent/news/list';
	var result = { value: { list: [] } };
	engine.request(apiPath, modCtx, function(ctype, apiObj, gotList) {
		if (gotList) {
			var items = apiObj.value.list,
					max = items.length, i = 0;
			async.whilst(
				function() { return max > i; },
				function(cb) {
					apiObj.value.list.forEach(function(item) {
						apiPath = '/wdSite/wdContent/news/view/'+items[i].ngID;
						engine.request(apiPath, modCtx, function(ctype, rtnObj, isDone) {
							if (isDone) {
								result.value.list.push(rtnObj.value.body);
								i++;
								cb();
							}
						});
					});
				},
				function(err) {
					index.emit('done', result);
				}
			);
		}
	});
};

module.exports = index;
