$(document).ready(function(){

		function isEmail(email) {
	// pass regex for validating an e-mail address
	var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(email);
}

		$('#btnwrap').on('click',function(e) {
                        e.preventDefault();
                        var email = $("#email").val();
                        if (isEmail(email)==true) {
                        $.post('/subscribe.php', {email: email},function(){
                       	$("#email").removeAttr("value");
                        	$("#email").attr('placeholder','Thank you for subscribing!');
                        });
                        } else{
                        	$("#email").removeAttr("value");
                        	$("#email").attr('placeholder','Error! Invalid email');
                        }

                });

	});
