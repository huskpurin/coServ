ctrl.update = function(siID) {
    var pdata = collectData(),
        req = { url: '/wdContent/session/update/'+siID, post: pdata };
    __.api(req, function(data) {
      if (data.errCode == 0) {
        alert('已儲存');
        ctrl.callHandler('reqSessionList');
      }
      else
        alert('err:'+JSON.stringify(data));
    });
};

ctrl.new = function() {
  var pdata = collectData(),
      req = { url: '/wdContent/session/add/8077', post: pdata };
  __.api(req, function(data) {
    if (data.errCode == 0) {
      alert('已新增');
      ctrl.callHandler('reqSessionList');
    } else
      alert('err:'+JSON.stringify(data));
  });
};

function collectData()  {
  var  pdata = { title: ctrl.sel('input[name="title"]').val(),
                 summary: ctrl.sel('input[name="summary"]').val(),
                 fromTm: ctrl.sel('input[name="fromTm"]').val(),
                 toTm: ctrl.sel('input[name="toTm"]').val(),
                 regFromTm: ctrl.sel('input[name="regFromTm"]').val(),
                 regToTm: ctrl.sel('input[name="regToTm"]').val(),
                 body: ctrl.sel('input[name="body"]').val(),
                 addr: ctrl.sel('input[name="addr"]').val(),
                 place: ctrl.sel('input[name="place"]').val()
              };

  return  pdata;
};
