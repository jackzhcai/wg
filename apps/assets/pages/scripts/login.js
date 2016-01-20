var Login = function($, _, window, document) {
    var mainDomain = "http://192.168.36.98";
    var requestAjax = function(options){
        $.ajax(_.extend(options, {
            url: mainDomain + options.url,
            type: options.type || "GET",
            success: options.success || (function(msg, status, res){ }),
            error: options.error || (function(msg, status, res){ })
        }));
    };


    var handleLogin = function() {
        var vertifyCodeImg = $("#vertifyCodeImg");

        var getVertifyCode = function(){
            $.ajax({
                url: mainDomain + "/api/v1/passport/vertifyCode/uc_login/",
                type: "GET",
                success: function(msg, status, res){
                    vertifyCodeImg.attr("src", msg);
                },
                error: function(){
                    console.log("get vertifyCode error.")
                }
            });
        };
        var submitLoginFrom = function(){
            $.ajax({
                url: mainDomain + "/api/v1/passport/login/?service=" + window.location.href ,
                type: "GET",
                data: {},
                success: function(msg, status, res){
                    vertifyCodeImg.attr("src", msg);
                },
                error: function(){
                    console.log("get vertifyCode error.")
                }
            });
        };
        var init = function(){
            getVertifyCode()
        }


        $('.login-form').validate({
            debug: true,
            errorElement: 'span', //default input error message container
            errorClass: 'help-block', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            rules: {
                username: {
                    required: true
                },
                password: {
                    required: true
                },
                vertifyCode: {
                    required: true
                },
                remember: {
                    required: false
                }
            },
            messages: {
                username: {
                    required: "Username is required."
                },
                password: {
                    required: "Password is required."
                },
                vertifyCode: {
                    required: "VertifyCode is required."
                }
            },
            invalidHandler: function(event, validator) { //display error alert on form submit
                $('.alert-danger', $('.login-form')).show();
            },
            highlight: function(element) { // hightlight error inputs
                $(element).closest('.form-group').addClass('has-error'); // set error class to the control group
            },
            success: function(label) {
                label.closest('.form-group').removeClass('has-error');
                label.remove();
            },
            errorPlacement: function(error, element) {
                error.insertAfter(element.closest('.input-icon'));
            },

            submitHandler: function(form) {
                alert("submit!");
                //form.submit(); // form validation success, call ajax form submit
            }
        });

        $('.login-form input').keypress(function(e) {
            if (e.which === 13) {
                if ($('.login-form').validate().form()) {
                    //提交表单
                    //$('.login-form').submit();
                }
                return false;
            }
        });

        //
        init();

    };
    /**
     * @description 忘记密码
     */
    var handleForgetPassword = function() {
        $('.forget-form').validate({
            errorElement: 'span', //default input error message container
            errorClass: 'help-block', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            ignore: "",
            rules: {
                email: {
                    required: true,
                    email: true
                }
            },

            messages: {
                email: {
                    required: "Email is required."
                }
            },

            invalidHandler: function(event, validator) { //display error alert on form submit

            },

            highlight: function(element) { // hightlight error inputs
                $(element)
                    .closest('.form-group').addClass('has-error'); // set error class to the control group
            },

            success: function(label) {
                label.closest('.form-group').removeClass('has-error');
                label.remove();
            },

            errorPlacement: function(error, element) {
                error.insertAfter(element.closest('.input-icon'));
            },

            submitHandler: function(form) {
                form.submit();
            }
        });

        $('.forget-form input').keypress(function(e) {
            if (e.which == 13) {
                if ($('.forget-form').validate().form()) {
                    $('.forget-form').submit();
                }
                return false;
            }
        });

        $('#forget-password').click(function() {
            $('.login-form').hide();
            $('.forget-form').show();
        });

        $('#back-btn').click(function() {
            $('.login-form').show();
            $('.forget-form').hide();
        });
    };

    /**
     * @description 注册
     */
    var handleRegister = function() {
        function format(state) {
            if (!state.id) { return state.text; }
            var $state = $(
             '<span><img src="../assets/global/img/flags/' + state.element.value.toLowerCase() + '.png" class="img-flag" /> ' + state.text + '</span>'
            );

            return $state;
        }

        if ($().select2 && $('#country_list').size() > 0) {
            $("#country_list").select2({
	            placeholder: '<i class="fa fa-map-marker"></i>&nbsp;Select a Country',
	            templateResult: format,
                templateSelection: format,
                width: 'auto',
	            escapeMarkup: function(m) {
	                return m;
	            }
	        });


	        $('#country_list').change(function() {
	            $('.register-form').validate().element($(this)); //revalidate the chosen dropdown value and show error or success message for the input
	        });
    	}

        $('.register-form').validate({
            errorElement: 'span', //default input error message container
            errorClass: 'help-block', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            ignore: "",
            rules: {

                fullname: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                address: {
                    required: true
                },
                city: {
                    required: true
                },
                country: {
                    required: true
                },

                username: {
                    required: true
                },
                password: {
                    required: true
                },
                rpassword: {
                    equalTo: "#register_password"
                },

                tnc: {
                    required: true
                }
            },

            messages: { // custom messages for radio buttons and checkboxes
                tnc: {
                    required: "Please accept TNC first."
                }
            },

            invalidHandler: function(event, validator) { //display error alert on form submit

            },

            highlight: function(element) { // hightlight error inputs
                $(element)
                    .closest('.form-group').addClass('has-error'); // set error class to the control group
            },

            success: function(label) {
                label.closest('.form-group').removeClass('has-error');
                label.remove();
            },

            errorPlacement: function(error, element) {
                if (element.attr("name") == "tnc") { // insert checkbox errors after the container
                    error.insertAfter($('#register_tnc_error'));
                } else if (element.closest('.input-icon').size() === 1) {
                    error.insertAfter(element.closest('.input-icon'));
                } else {
                    error.insertAfter(element);
                }
            },

            submitHandler: function(form) {
                form.submit();
            }
        });

        $('.register-form input').keypress(function(e) {
            if (e.which == 13) {
                if ($('.register-form').validate().form()) {
                    $('.register-form').submit();
                }
                return false;
            }
        });

        $('#register-btn').click(function() {
            $('.login-form').hide();
            $('.register-form').show();
        });

        $('#register-back-btn').click(function() {
            $('.login-form').show();
            $('.register-form').hide();
        });
    }

    return {
        //main function to initiate the module
        init: function() {
            handleLogin();
            handleForgetPassword();
            handleRegister();
        }
    };
}(jQuery, _, window, document);

jQuery(document).ready(function() {
    Login.init();
});
