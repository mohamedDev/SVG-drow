$(document).ready(function () {

    var optionstypes = "";

    for (item in forms.type2) {
        optionstypes += "<option value=\"" + item + "\">" + item + "</option>";
    }
    var listType = $("<select class=\"list-types\"></select>")
    $(".aside-menu").prepend(listType);
    $('.list-types').append(optionstypes);

    $('.list-types').change(function () {
        objet = $(this).val();
        objet = window.forms.ype2[objet]
        listforms.push( Object.create(window.myForms));
        listforms[0].drow(objet);
    });


    var optionsgeos = "";
    for (item in forms.geometrique) {
        optionsgeos += "<option value=\"" + item + "\">" + item + "</option>";
    }
    var listGeos = $("<select class=\"list-geos\"></select>")
    $(".aside-menu").prepend(listGeos)
    $('.list-geos').append(optionsgeos);

    listforms = [];
    $('.list-geos').change(function () {
        objet = $(this).val();
        objet = window.forms.geometrique[objet]
        listforms.push( Object.create(window.myForms));
        listforms[0].drow(objet);
    });


    $("body").on('click', '.menu a', function (e) {
        e.preventDefault();

        var url = $(this).attr('href');
        var width = $(this).children('img').width();
        var height = $(this).children('img').height();

        var patternsource = document.getElementById('pattern1');

        patternsource.attributes["width"].value = width;
        patternsource.attributes["height"].value = height;

        var imagespattern = patternsource.children[0].attributes;
        imagespattern["width"].value = width;
        imagespattern["height"].value = height;
        imagespattern["xlink:href"].value = url;

        $('.form1').attr('stroke', 'url(#pattern1)');
        $('.form2').attr('stroke', 'url(#pattern1)');

    });


    $('.text-pattern').on('change', function () {

        var url = $(this).val();
        var p = $("<a href=\"" + url + "\"><img src=\"" + url + "\"></a>");

        $('.menu').append(p);
        var url = $(this).val("");
    });


    $('.arcdeg').on('input', function () {

        var t = $('.list-geos').val();
        drowForms(window.forms.geometrique[t]);
        $('.form1').attr('d', path);
    });

    var idCurrentPoint = -1,
        dragelemX = 0,
        dragelemY = 0;

    $("body").on("mousedown", "#draggable-element", function (evt) {
        evt = evt || window.event;

        dragelemX = $(this).offset().left;
        dragelemY = $(this).offset().top;

        if (evt.target.nodeName === "rect") {
            idCurrentPoint = evt.target.attributes["id"].value;
        }
    });


    $("body").on("mousemove", "#draggable-element", function (evt) {
        evt = evt || window.event;

        if (idCurrentPoint !== -1) {
            var offsetX = (evt.pageX - dragelemX),
                offsetY = (evt.pageY - dragelemY),
                t = $('.list-geos').val();

            window.forms.geometrique[t][idCurrentPoint].x = (offsetX - 25);
            window.forms.geometrique[t][idCurrentPoint].y = (offsetY - 25);

            drowForms(window.forms.geometrique[t]);
            $('.form1').attr('d', path);
        }
    });

    $("body").on("mouseup", "#draggable-element", function () {
        idCurrentPoint = -1;
        var t = $('.list-geos').val();
    });

});

window.addEventListener('load', function(){ // on page load

    var idCurrentPoint = -1;

    document.getElementById("draggable-element").addEventListener('touchstart', function(evt){

        evt = evt || window.event;

        console.log(evt);

        dragelemX = $(this).offset().left;
        dragelemY = $(this).offset().top;

        console.log(dragelemX + "//" + dragelemY);

        if (evt.target.nodeName === "rect") {
            idCurrentPoint = evt.target.attributes["data-id"].value;
        }

    }, false)


    document.getElementById("draggable-element").addEventListener('touchmove', function(evt){

        evt = evt || window.event;

        if (idCurrentPoint !== -1) {

            var offsetX = (evt.changedTouches[0].pageX - dragelemX),
                offsetY = (evt.changedTouches[0].pageY - dragelemY),
                t = $('.list-geos').val();


            window.forms.geometrique[t][idCurrentPoint].x = (offsetX - 25);
            window.forms.geometrique[t][idCurrentPoint].y = (offsetY - 25);

            drowForms(window.forms.geometrique[t]);
            $('.form1').attr('d', path);
        }

    }, false)


    document.getElementById("draggable-element").addEventListener('touchend', function(){
        idCurrentPoint = -1;
        var t = $('.list-geos').val();
    }, false)

}, false)