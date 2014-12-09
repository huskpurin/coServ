var thisPage = '<%=bi.uri%>';
var srvPath = '<%=bi.service%>', appCode, rs;
ctrl.startup = function() {
    service = srvPath.split('/');
    appCode = service[1], rs = service[2],
    srvPath = appCode + '/' + rs + '/';
};

ctrl.embedEditor = function(ngID) {
  var caCode = '<%=ctx.caCode%>';
  // var params = {"ca": getCA(), "appCode": getAppCode(), "rs": rs, "locale":getLocale(), "noCont":noCont, "disable": true};
  var params = { ca: caCode, appCode: appCode, rs: rs, srvPath: srvPath, ngID: ngID };
  if (ngID !== 'undefined')
    params.ngID = ngID;
  ctrl.embed('.editor', '/back/info/editor', {id: ngID, params: params}, function(emCtrl) {
    emCtrl.addHandler("reqCloseEditor", ctrl.closeEditor);
  });
};
ctrl.closeEditor = function() {
  ctrl.sel("#editorModal").modal('hide').on('hidden.bs.modal', function () {
    document.location = thisPage;
  });
};


ctrl.delete = function(ngID) {
  var params = { },
      req = { url: '/'+srvPath+'delete/', post: params };
  req.url += ngID;
  __.api(req, function(data) {
    if (data.errCode === 0) {
      document.location = thisPage;
    } else
      alert('error: '+JSON.stringify(data));
  });
};

ctrl.doLogout = function() {
  /* delToken and redirect */
  // var expires = new Date();
  // expires.setTime (expires.getTime() - 1);
  // document.cookie = "token=;expires=" + expires.toGMTString()+ ";" + "; path=/";

  window.location = '/back/login';
};