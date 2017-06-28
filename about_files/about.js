$(document).ready(function() {
    var showarticle = function(classname) {
        $('article').hide();
        $('.' + classname).show();
      };
    var switchcontent = function(hash) {
        $(window).scrollTop(0);
        $('.more_info-nav-inner a').removeClass('active');
        if (hash == '#关于齿轮' || decodeURI(hash) == '#关于齿轮' || hash == '') {
          name = 'more_info-about_us';
          $('.more_info-nav-inner .a_about').addClass('active');
          $('.about-map').hide();
        }
        if (hash == '#团队介绍' || decodeURI(hash) == '#团队介绍') {
          name = 'more_info-about_team';
          $('.more_info-nav-inner .a_team').addClass('active');
          $('.about-map').show();
        }
        if (hash == '#加入我们' || decodeURI(hash) == '#加入我们') {
          name = 'more_info-join_us';
          $('.more_info-nav-inner .a_join').addClass('active');
          $('.about-map').hide();
        }
        showarticle(name);
      };
    var hashchange = function() {
        var hash = location.hash;
        var name = 'about_us';
        switchcontent(hash);
      };
    window.addEventListener('hashchange', hashchange, false);
    var hash = location.hash;
    switchcontent(hash);
    var teamslider = $('.team-slider').unslider({
        dots: false,
        fluid: false,
        arrows: {
          //  Unslider default behaviour
          //prev: ' <div class="fl"></div>',
          //next: '<div class="fr"></div>',
        },
      });
    $('.fl').click(function() {
        teamslider.unslider('prev');
      });
    $('.fr').click(function() {
        teamslider.unslider('next');
      });

  });
