var gear_wx = {
    clear_form: function () {
        var field = $("#bottom-form input[name='name']");
        field.val('');
        field.removeClass('form-warning');

        field = $("#bottom-form input[name='phone']");
        field.val('');
        field.removeClass('form-warning');

        field = $("#bottom-form input[name='wechat_qq']");
        field.val('');
        field.removeClass('form-warning');

        field = $("#bottom-form textarea[name='description']");
        field.val('');
        field.removeClass('form-warning');

        $(".form-text-warning").hide();
    },
    open_modal: function () {
        gear_wx.clear_form();
        $('body').addClass('modal-open');
        $('.modal').addClass('active');
    },
    close_modal: function () {
        $('body').removeClass('modal-open');
        $('.modal')
            .removeClass('active')
            .addClass('init');
        $('.modal-form').removeClass('out');
        $('.modal-result').removeClass('in');
    },
    validate_proposal: function () {
        result = true;

        var field = $("#bottom-form input[name='name']");
        if (field.val()) {
            field.removeClass("form-warning");
        } else {
            field.addClass("form-warning");
            result = false;
        }

        field = $("input[name='phone']");
        if (field.val()) {
            field.removeClass("form-warning");
        } else {
            field.addClass("form-warning");
            result = false;
        }

        field = $("#bottom-form input[name='wechat_qq']");
        if (field.val()) {
            field.removeClass("form-warning");
        } else {
            field.addClass("form-warning");
            result = false;
        }
        field = $("#bottom-form textarea[name='description']");
        if (field.val()) {
            field.removeClass("form-warning");
        } else {
            field.addClass("form-warning");
            result = false;
        }
        if (result) {
            $(".form-text-warning").hide();
        } else {
            $(".form-text-warning").show();
        }
        return result;
    },
    submit_proposal: function () {

        if (gear_wx.validate_proposal()) {
            $('#bottom-form').ajaxSubmit({
                url: 'projects/submit_proposal_wx',
                type: 'post',
                beforeSend: function() {
                    gear_wx.open_modal();
                    $('.modal-form').addClass('out');
                    $('.modal-result').addClass('in');
                },
                success: function () {
                    $('.result-loading').addClass('hidden');
                    $('.result-err-show').addClass('hidden');
                    $('.result-succ-show').removeClass('hidden');
                },
                error: function () {
                    $('.result-loading').addClass('hidden');
                    $('.result-err-show').removeClass('hidden');
                    $('.result-succ-show').addClass('hidden');
                }
            });
        }
    }
};
$(document).ready(function () {
    $(".open-modal").click(gear_wx.open_modal);
    $(".close-modal").click(gear_wx.close_modal);
    $(".wx-submit-proposal").click(gear_wx.submit_proposal);
    $(".modal-blur").click(gear_wx.close_modal);
    setTimeout(function() {
        var wxVideo = document.getElementById('wxDemo');
        wxVideo.play();
    }, 200);
});