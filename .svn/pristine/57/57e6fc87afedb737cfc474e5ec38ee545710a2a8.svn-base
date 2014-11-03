var thisPage = '<%=bi.uri%>';
ctrl.startup = function() {
    ctrl.sel('.modal').modal('show');

    /* TODO: regForm 收合 */
};

ctrl.fillSession = function(siID) {
  ctrl.sel('select[name="siID"]').val(siID).focus();
  /* TODO: regForm 開啓 */
};

ctrl.regist = function() {
  var pdata;

  /* validate */
  if ( get('#fname') == '' || !get('#email') ) {
    alert('姓名和E-mail為必要資料，請填寫');
    return false;
  }

  pdata = collectData();
  /* showRegRecipt */
  ctrl.sel('.modal').modal('show');;
  ctrl.embed('.modal-content', '/notice', {params: pdata}, function(emCtrl) {
    emCtrl.addHandler("doReg", ctrl.doRegist);
  });
}

ctrl.doRegist = function() {
  var pdata = collectData();
  /*
    send api: attendee/register/[siID],
    with pdata but no token
    to regist.
  */
  var req = { url: '/bustime/attendee/register/'+pdata.siID, post: pdata };
  __.api(req, function(data) {
    if (data.errCode === 0) {
      alert('報名完成');
      document.location = thisPage;
    } else
      alert('error: '+JSON.stringify(data));
  });
};

function collectData()  {
  /* TODO: api未提供三公司欄位，等吧
  *  orgYear, orgType, product
  *  修改後記得更新collectData()
  */
  var  pdata = { siID: ctrl.sel('select[name="siID"]').val(),
                 fname: ctrl.sel('input[name="fname"]').val(),
                 gender: ctrl.sel('select[name="gender"]').val(),
                 orgName: ctrl.sel('input[name="orgName"]').val(),
                 jobTitle: ctrl.sel('input[name="jobTitle"]').val(),
                 phone: ctrl.sel('input[name="phone"]').val(),
                 fax: ctrl.sel('input[name="fax"]').val(),
                 email: ctrl.sel('input[name="email"]').val(),
                 addr: ctrl.sel('input[name="addr"]').val(),
                 siTitle: ctrl.sel('#siID option:selected').text(),
                 siSum: ctrl.sel('#siID option:selected').attr('siSum'),
                 siPeriod: ctrl.sel('#siID option:selected').attr('siPeriod'),
                 siPlace: ctrl.sel('#siID option:selected').attr('siPlace'),
                 json: { orgType: ctrl.sel('select[name="orgType"]').val(),
                         orgYear: ctrl.sel('select[name="orgYear"]').val(),
                         product: ctrl.sel('input[name="product"]').val()
                       }
              };

  return  pdata;
};

function get(el) {
  return ctrl.sel(el).val();
};

function set(el, val) {
  ctrl.sel(el).val(val);
};

function reset() {
  // $('form input').each(function(input) {
  //   $(this).val('');
  // });
};

//自訂捲軸
ctrl.startup = function()  {
   scrollbar();
};
function scrollbar() {
  var $scrollbar = $("#scrollbar1");
      $scrollbar.tinyscrollbar(); 
};