/**
 * Created by Ника Тихоновец on 13.05.2017.
 */

$(document.forms['registrationForm']).on('submit',function () {
    var form = $(this);
    $.ajax({
        url: "/newSchool",
        method: "POST",
        data: form.serialize(),
        statusCode: {
            200: function () {
               /* var xmlhttp = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
                xmlhttp.open('POST', 'https://mandrillapp.com/api/1.0/messages/send.json');
                xmlhttp.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
                xmlhttp.onreadystatechange = function() {
                    if (xmlhttp.readyState == 4) {
                        if(xmlhttp.status == 200) alert('Mail sended!')
                        else if(xmlhttp.status == 500) alert('Check apikey')
                        else alert('Request error');
                    }
                };
                xmlhttp.send(JSON.stringify({'key': '6039247dd13bebac854570eded2aebb2-us15',
                    'message': {
                        'from_email': 'nika.tikhonovets@gmail.com',
                        'to': [{'email': 'nika.tikhonovets@gmail.com', 'type': 'to'}],
                        'autotext': 'true',
                        'subject': 'Yeah!',
                        'html': '<h1>Its work!</h1>'
                    }}));*/
                window.location.href = "/";
            },
            403: function(jqXHR){
                alert('ошибка!');
                window.location.href = "/contact";
            }
        }
    });
    return false;
});