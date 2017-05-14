/**
 * Created by Ника Тихоновец on 11.05.2017.
 */

$(document.forms['loginForm']).on('submit',function () {
    var form = $(this);
    $.ajax({
        url: "/login",
        method: "POST",
        data: form.serialize(),
        statusCode: {
            200: function () {
                window.location.href = "/";
            },
            403: function(jqXHR){
                alert('ошибка!');
                //var error = JSON.parse(jqXHR.responseText);
                window.location.href = "/contact";
            }
        }
    });
    return false;
});