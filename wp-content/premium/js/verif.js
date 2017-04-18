// JavaScript Document

// JavaScript Document




function verifEmail() {
    valid = true;

    if ($("#email-address").val() == "") {
        $("#email-address").addClass("error");
        $(".error_message .error_mail").show();
        valid = false;
    } else {
        if (!$("#email-address").val().match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/)) {
            $("#email-address").addClass("error");
            $(".error_message .error_mail").show();
            valid = false;
        }
        else {
            $("#email-address").removeClass("error");
            $(".error_message .error_mail").hide();
        }
    }

    return valid;
}


function verifTitre() {
    valid = true;

    if ($("#titre").val() == "") {
        $("#titre").addClass("error");
        $(".error_message .error_field").show();
         valid = false;
        
    }
    else {
        $("#titre").removeClass("error");
        if(!$("input").find( ".error" )){
            $(".error_message .error_field").hide();
        }
    }


    return valid;
}


function verifDescription() {
    valid = true;

    if ($("#description").val() == "") {
        $("#description").addClass("error");
        $(".error_message .error_field").show();
         valid = false;
        
    }
    else {
        $("#description").removeClass("error");
        if(!$("input").find( ".error" )){
            $(".error_message .error_field").hide();
        }
    }


    return valid;
}






$(function () {
    validField =0;

    $("#email-address").blur(verifEmail);
    $("#titre").blur(verifTitre);




});


$(document).ready(function(){
    $("#weChatForm").submit(function(){
        var r = true;

        var valuePDF = $("#data-pdf").val();
        if (!verifEmail()) { r = false; }
        //if (!verifTitre()) { r = false; }
        //if (!verifDescription()) { r = false; }



        if (r == true) {
            $.ajax({type:"POST", data: $(this).serialize(), url:"verif.php",
                  success: function(data){
                   $("#post").show();
                   $(".error_message .error_mail").hide();
                   $(".error_message .error_field").hide();
                   $("#weChatForm").get(0).reset();
                 }
            });

            window.open('uploads/'+valuePDF,'_blank');

           
        }
        return false;
    });

});




