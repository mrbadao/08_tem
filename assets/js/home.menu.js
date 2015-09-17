/**
 * Created by HieuNguyen on 9/17/2015.
 */
$(document).ready(function () {
    $('.home-menu .nav-tabs li').hover(function () {
        var tabImg = $(this).find('img:first-child');
        var src = tabImg.attr('src').substring(0, tabImg.attr('src').lastIndexOf('/') + 1);
        var currFile = tabImg.attr('src').substring(tabImg.attr('src').lastIndexOf('/') + 1);
        var ext = currFile.substring(currFile.lastIndexOf('.'), currFile.length);
        currFile = currFile.substring(0, currFile.lastIndexOf('.'));

        if ($(this).hasClass('active')) {
            currFile = currFile.lastIndexOf("_hover") > -1
                ? currFile
                : currFile = currFile + "_hover";
        } else {
            currFile = currFile.lastIndexOf("_hover") > -1
                ? currFile.substring(0, currFile.lastIndexOf("_hover"))
                : currFile = currFile + "_hover";
        }

        tabImg.attr('src', src + currFile + ext);
    });
});