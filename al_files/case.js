
$(document).ready(function() {
    homepageLink();
    initPic();
    caseTabChange();
  });

function initPic() {
  $('.phone-app-slick').slick({
      arrows: false,
      dots: true
    });
};

var caseTabChange = function() {
  $('.select-content').on('click' , '.container ul li' , function(e) {
      e.preventDefault();
      $(this).addClass('case-active').siblings('li').removeClass('case-active');
      var total = '.' + $(this).attr('data-name');
      if (total == '.all') {
        $('.cases-container > div').show();
      }else {
        $(total).show();
        $('.cases-container > div').not(total).hide();
      }
      $('.phone-app-slick').slick('slickGoTo', 0, true);
      $('.phone-app-slick').slick('slickGoTo', 0, true);
    });
};

var homepageLink = function() {
  var hash = location.hash.split('#')[1];
  switch (hash){
    case 'server':
      changeTab(hash);
    break;
    case 'travel':
      changeTab(hash);
    break;
    case 'e-business':
      changeTab(hash);
    break;
    case 'finance':
      changeTab(hash);
    break;
    case 'education':
      changeTab(hash);
    break;
    case 'building':
      changeTab(hash);
    break;
  }
};

var changeTab = function(arg) {
  var passName = '.' + arg;
  $('li[data-name = "' + arg + '"]').addClass('case-active').siblings('li').removeClass('case-active');
  $(passName).show();
  $('.cases-container > div').not(passName).hide();
};
