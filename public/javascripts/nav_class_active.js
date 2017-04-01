/**
 * Created by Ника Тихоновец on 27.03.2017.
 */
$(document).ready(function () {
    $('nav li a').click(function(e) {

        $('ul li').removeClass('active');

        var $parent = $(this).parent();
        if (!$parent.hasClass('active')) {
            $parent.addClass('active');
        }
    });
});
