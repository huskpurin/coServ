ctrl.cancel = function(siID, regCode) {
  var params = { regCode: regCode },
      req = { url: '/wdContent/attendee/cancel/', post: params };
  req.url += siID;
  __.api(req, function(data) {
    if (data.errCode === 0) {
      document.location = '<%=bi.uri%>';
    } else
      alert('error: '+JSON.stringify(data));
  });
};
