var gearHomepage = {
    clear_form: function() {
        var field = $('#modalName');
        field.val('');
        field.removeClass('form-warning');

        field = $('#modalPhone');
        field.val('');
        field.removeClass('form-warning');

        field = $('#modalQQ');
        field.val('');
        field.removeClass('form-warning');

        field = $('#modalNeeds');
        field.val('');
        field.removeClass('form-warning');

        $('.form-text-warning').hide();
      },
    open_modal: function() {
        gearHomepage.clear_form();
        var w = $(document).width(); 
        $('body').addClass('modal-open');
        if(w >= 768){
          $('header').addClass('modal-padding');
        }
        if(w <= 414){
          $('body').toggleClass('ph-fixed-body');
        }
        $('.modal').addClass('active');
        $('#MEIQIA-BTN-HOLDER').css({'display': 'none'});
      },
    close_modal: function() {
        $('body').removeClass('modal-open');
        var w = $(document).width();
        if(w >= 768){
          $('header').removeClass('modal-padding');
        }
        $('.modal').removeClass('active').addClass('init');
        $('.modal-form').removeClass('out');
        $('.modal-result').removeClass('in');
        $('#MEIQIA-BTN-HOLDER').css({'display': 'block'});
        $('body').removeClass('ph-fixed-body');
      },
    validate_proposal: function() {
        result = true;

        var field = $('#modalName');
        if (field.val()) {
          field.removeClass('form-warning');
        } else {
          field.addClass('form-warning');
          result = false;
        }

        field = $('#modalPhone');
        if (field.val()) {
          field.removeClass('form-warning');
        } else {
          field.addClass('form-warning');
          result = false;
        }

        field = $('#modalQQ');
        if (field.val()) {
          field.removeClass('form-warning');
        } else {
          field.addClass('form-warning');
          result = false;
        }

        field = $('#modalNeeds');
        if (field.val()) {
          field.removeClass('form-warning');
        } else {
          field.addClass('form-warning');
          result = false;
        }

        if (result) {
          $('.form-text-warning').hide();
        } else {
          $('.form-text-warning').show();
        }
        return result;
      },
    submit_proposal: function() {
        if (gearHomepage.validate_proposal()) {
          $('#proposal-form').ajaxSubmit({
              url: 'projects/submit_proposal', 
              type: 'post',
              beforeSend: function() {
                $('.modal-result').addClass('in');
                $('.result-loading').removeClass('hidden');
              },
              success: function() {
                $('.result-err-show').addClass('hidden');
                $('.result-succ-show').removeClass('hidden');
              },
              error: function() {
                $('.result-err-show').removeClass('hidden');
                $('.result-succ-show').addClass('hidden');
              },
              complete: function() {
                $('.result-loading').addClass('hidden');
              }
          });
          $('.modal-form').addClass('out');
        }
      },
  };
//首页微信页阴影
var switchshadow = function() {
  var w = $(window).width();
  var y = $(window).scrollTop();
  if (w <= 767 || y > 1) {
    $('header.site-header').addClass('with-shadow');
  } else {
    $('header.site-header').removeClass('with-shadow');
  }
};

$(document).ready(function() {
    $('#proposal-form').on('submit', function(e){
          e.preventDefault();
      });
    $('.open-modal').click(gearHomepage.open_modal);
    $('.close-modal').click(gearHomepage.close_modal);
    $('.submit-proposal').click(gearHomepage.submit_proposal);
    $('.modal-blur').click(gearHomepage.close_modal);
    $(window).scroll(function(event) {
        switchshadow();
      });
    switchshadow();
  });
