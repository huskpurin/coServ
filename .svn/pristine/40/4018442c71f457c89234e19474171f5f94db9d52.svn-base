ctrl.startup = function()  {
    $(".contactForm").animate({top:$(window).height()-32},0);   
 
    if ('<%=bi.client.category%>' === 'mobile') {    
        mobileContact();
    } 
    else {
        sideBarClick();
    };
};

function mobileContact(){
      var defaultWidth = '245px';
      var openWidth = $(window).width()-50;
      var defaultHeight = $(window).height()-60;
      var openHeight = '570px';
      // var openHeight = $(window).height()-550;
      var time = 100;

      $(".down").hide(); 
      $(".up").hide();
      $(".contactForm").css('width', defaultWidth); 
      $(".contactForm").animate({top: defaultHeight}, time); 
      ctrl.sel(".contactForm").addClass('mobile'); 
      
      $(".contactTitle").click(function(event){ 
          //$(".contactForm").animate({top: openHeight}, time);
          $(".contactForm").css('width', openWidth);
          // $(".contactForm").css('height', openHeight);
          $(".contactForm").animate({height: openHeight}, time, null ,function() {
            window.scroll(0, window.pageYOffset + 570);
          });
          $(".up").hide(); 
          $(".down").show();
          $(".contactContent").css ('display', 'block'); 
      });
      $(".down").click(function(event){
          $(".contactForm").css('width', defaultWidth);
          $(".contactForm").animate({top: defaultHeight}, time);  
          $(".down").hide(); 
          $(".up").hide(); 
          $(".contactContent").css('display', 'none'); 
          $(".contactForm").css('height', '75px');   
      });
};

function sideBarClick(){
    $(".down").hide();
    $(".up").click(function(event){ 
        $(".contactForm").animate({top:$(window).height()-280},100);           
        $(".down").show();
        $(".up").hide();       
    });
    $(".down").click(function(event){
        $(".contactForm").animate({top:$(window).height()-32},100);       
        $(".up").show();
        $(".down").hide();
    });       
};

ctrl.send = function() {
      var pdata, req = {};

      if ( !!validator() ) {
        alert("請輸入完整資料");
        return false;
      }
      pdata = collectData();
      req.url = '/coim/contactUs/post',
      req.post = pdata;
      var options = {
        url: '/_api/post',
        type: 'POST',
        data: JSON.stringify(req),
        processData: false,
        contentType: 'application/json'
      };
      $.ajax(options).done(function(data) {
        alert('訊息已送出，我們會儘快與您聯繫');
        $(".contactForm").animate({top:$(window).height()-35},100);
        $(".up").show();
        $(".down").hide();
        document.getElementById('sendQA').reset();
      });
};

function validator() {
    var name = $('input[name="name"]').val(),
        email = $('input[name="mail"]').val(),
        title = $('input[name="sub"]').val(),
        summary = $('textarea[name="massage"]').val();
    return (name === "" || email === "" || title === "" || summary === "");
};
    
function collectData() {
  var name = $('input[name="name"]').val(),
      email = $('input[name="mail"]').val(),
      title = $('input[name="sub"]').val(),
      summary = $('textarea[name="massage"]').val();
  return {"name": name, "email": email, "title": title, "summary": summary};
};