var srvPath = '<%=bi.service%>';
ctrl.startup = function() {
  var str = srvPath.split('/').reverse()[0];
  srvPath = srvPath.replace(str, '');

  var req = { };
  ctrl.sel('.result').each(function(){
    var result = this;
    req.url = srvPath + 'view/' + $(result).attr('ngID');
    __.api(req, function(data) {
      $(result).html(data.value.body);
    });
  });
};
