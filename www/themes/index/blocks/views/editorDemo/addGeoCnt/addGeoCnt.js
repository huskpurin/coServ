var isPri = 0;
ctrl.startup = function() {
  var req = { post:{"detail": 1}, hasCA:true };
  if (getGe() === 'undefined') return false;

  if (getNg() === 'undefined') {
    req.url = getCA()+'/'+getAppCode()+'/'+getRs()+'/info/'+getGe();
  } else {
    req.url = getCA()+'/'+getAppCode()+'/'+getRs()+'/view/'+getNg();
    req.post = {geo:1};
  }

  __.api(req, function(data) {
    if (data.errCode === 0) {
      var geoInfo, ge;
      if (data.value.geoList) {
        ge = getGe();
        data.value.geoList.forEach(function(item) {
          if (item.geID === +ge)
            geoInfo = item;
        });
      } else {
        geoInfo = data.value;
      }
      setData(geoInfo);

    } else {
      alert( data.message );
    }
  });
};
ctrl.save = function() {
  var pdata = collectData(),
      op = ( getGe() === 'undefined' ? ( getNg() === 'undefined' && isDisabled() === 'undefined' ? 'add' : 'addGeo/'+getNg() ) : 'update/'+getGe() );
      req = {post:pdata, hasCA:true};
  if (getNg() === 'undefined' || getGe() == 'undefined' ) {
    req.url = getCA()+'/'+getAppCode()+'/'+getRs()+'/'+op;
  } else {
    req.url = 'wcoim/cms/geoLoc/'+op;
  }

  __.api(req, function(data) {
    if (data.errCode === 0) {
      ctrl.closeModal();
    } else {
      alert( data.message );
    }
  });
};
ctrl.delCnt = function() {
  var pdata = {geID:getGe()},
      req = {url: getCA()+'/'+getAppCode()+'/'+getRs()+'/delGeo/'+getNg(),
              post:pdata, hasCA:true};
  __.api(req, function(data) {
    if (data.errCode === 0) {
      ctrl.closeModal();
    } else {
      alert(data.message);
    }
  });
};
ctrl.closeModal = function() {
  ctrl.callHandler("regCloseAddGeoCnt");
};
ctrl.searchAddr = function() {
  /* latlng */
  // var url = 'http://maps.googleapis.com/maps/api/geocode/json?latlng=22.605077,120.301028&sensor=true'
  /* address */
  var url = 'http://maps.googleapis.com/maps/api/geocode/json?address='
            +ctrl.sel('textarea[name="addr"]').val()+'&sensor=true';
  $.getJSON(url, function(data) {
    if ( data.status === "OK" ) {
      var result = data.results[0],
          loc = result.geometry.location,
          zip = result.address_components.reverse()[0];

      var geoInfo = {
            "addr": result.formatted_address,
            "latitude": loc.lat,
            "longitude": loc.lng,
          };

      if (zip.types=='postal_code')
          geoInfo.zip = zip.long_name;

      setData(geoInfo);
    }
  });
};

ctrl.changeStatus = function() {
  isPri = ++isPri % 2;
  ctrl.sel('input[name="pri"]').val(isPri);
};
function setData(geoInfo) {
  ctrl.sel('textarea[name="addr"]').val(geoInfo.addr);
  ctrl.sel('input[name="zip"]').val(geoInfo.zip);
  ctrl.sel('input[name="lat"]').val(geoInfo.latitude);
  ctrl.sel('input[name="lng"]').val(geoInfo.longitude);
  if (geoInfo.title)
    ctrl.sel('input[name="title"]').val(geoInfo.title);
  if (!data.value.isPublic)
    ctrl.sel('input[name="pri"]').prop('checked', true);
}
function  collectData()  {
  var  pdata = { lat: ctrl.sel('input[name="lat"]').val(),
                 lng: ctrl.sel('input[name="lng"]').val(),
                 title: ctrl.sel('input[name="title"]').val(),
                 zip: ctrl.sel('input[name="zip"]').val(),
                 addr: ctrl.sel('textarea[name="addr"]').val(),
                 pri: ctrl.sel('input:checked[name="pri"]').val()};

  if (pdata.pri != '1')
    pdata.pri = '0';

  return  pdata;
};

function getCA() {
  return ctrl.sel('#addGeoCnt').attr('ca');
}
function getAppCode() {
  return ctrl.sel('#addGeoCnt').attr('appCode');
}
function getRs() {
  return ctrl.sel('#addGeoCnt').attr('rs');
}
function getGe() {
  return ctrl.sel('#addGeoCnt').attr('ge');
}
function getNg() {
  return ctrl.sel('#addGeoCnt').attr('ng');
}
function isDisabled() {
  return ctrl.sel('#addGeoCnt').attr('disable');
}
