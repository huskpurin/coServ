// var siID = +'<%=bi.id%>'
/* /back/session/list */
var thisPage = '<%=bi.uri%>'
ctrl.startup = function() {};

ctrl.delete = function(siID) {
  var params = { },
      req = { url: '/wdContent/session/delete/', post: params };
  req.url += siID;
  __.api(req, function(data) {
    if (data.errCode === 0) {
      document.location = thisPage;
    } else
      alert('error: '+JSON.stringify(data));
  });
};

ctrl.showInfo = function(siID) {
  var params = { };
  ctrl.sel('#myModal').modal('show');
  ctrl.embed('.modal-content', '/back/session/info', {id: siID, params: params}, function(emCtrl) {
    emCtrl.addHandler("reqSessionList", function() {
      document.location = thisPage;
    });
  });
};

ctrl.doLogout = function() {
  /* delToken and redirect */
  // var expires = new Date();
  // expires.setTime (expires.getTime() - 1);
  // document.cookie = "token=;expires=" + expires.toGMTString()+ ";" + "; path=/";

  window.location = '/back/login';
};