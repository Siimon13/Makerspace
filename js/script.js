/*

Javascript for Makerspace's Website

*/

$(document).ready(function () {

    // Activate Carousel
    $("#spaces-carousel").carousel();

    // Enable Carousel Indicators
    $(".item1").click(function () {
        $("#spaces-carousel").carousel(0);
    });
    $(".item2").click(function () {
        $("#spaces-carousel").carousel(1);
    });
    $(".item3").click(function () {
        $("#spaces-carousel").carousel(2);
    });
    $(".item4").click(function () {
        $("#spaces-carousel").carousel(3);
    });
    $(".item5").click(function () {
        $("#spaces-carousel").carousel(4);
    });

    // Enable Carousel Controls
    $(".left").click(function () {
        $("#spaces-carousel").carousel("prev");
    });
    $(".right").click(function () {
        $("#spaces-carousel").carousel("next");
    });

    /* Code to edit SVG images with CSS */

    jQuery('img.svg').each(function () {
        var $img = jQuery(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');

        jQuery.get(imgURL, function (data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find('svg');

            // Add replaced image's ID to the new SVG
            if (typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if (typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass + ' replaced-svg');
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');

            // Replace image with new SVG
            $img.replaceWith($svg);

        }, 'xml');

    });
});



/*

Special thanks to the writers of the following links for their help and guidance:

https://stackoverflow.com/questions/11978995/how-to-change-color-of-svg-image-using-css-jquery-svg-image-replacement/11978996#11978996?newreg=e366aae55a674b8eb2c480be4be89981

http://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_ref_js_carousel_js&stacked=h

https://stackoverflow.com/questions/18622508/bootstrap-3-and-youtube-in-modal

*/
