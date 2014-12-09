var thisPage = '<%=bi.uri%>';
ctrl.startup = function() {
    ctrl.showRegBtn();
};

ctrl.showRegBtn = function() {
  $('.reg + a').hide();
  $('.reg').hover(function(e) {
    $(this).hide();
    $(this).siblings('a').show();
  });
  $('.reg + a').mouseout(function(e) {
    $(this).hide();
    $(this).siblings('.reg').show();
  });
}

ctrl.fillSession = function(siID) {
  $('.modal').on('hidden.bs.modal', function (e) {
    $('.dropmenu').show(500);
    ctrl.sel('select[name="siID"]').val(siID).focus();
  });
  $('.modal').modal('show');
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
  var req = { url: '/wdContent/attendee/register/'+pdata.siID, post: pdata };
  __.api(req, function(data) {
    if (data.errCode === 0) {
      alert('報名完成');
      document.location = thisPage;
    } else
      alert('error: '+JSON.stringify(data));
  });
};

function collectData()  {
  var  pdata = { siID: ctrl.sel('select[name="siID"]').val(),
                 fname: ctrl.sel('input[name="fname"]').val(),
                 gender: ctrl.sel('select[name="gender"]').val(),
                 orgName: ctrl.sel('input[name="orgName"]').val(),
                 jobTitle: ctrl.sel('input[name="jobTitle"]').val(),
                 phone: ctrl.sel('input[name="phone"]').val(),
                 fax: ctrl.sel('input[name="fax"]').val(),
                 email: ctrl.sel('input[name="email"]').val(),
                 addr: ctrl.sel('input[name="addr"]').val(),
                 siTitle: ctrl.sel('#siID option:selected').attr('siTitle'),
                 siSum: ctrl.sel('#siID option:selected').attr('siSum'),
                 siPeriod: ctrl.sel('#siID option:selected').attr('siPeriod'),
                 siBody: ctrl.sel('#siID option:selected').attr('siBody'),
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