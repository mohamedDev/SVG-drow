$(document).ready(function () {

    var optionstypes = "";
    optionstypes += "<option > ... </option>";
    for (item in forms) {
        optionstypes += "<option value=\"" + item + "\">" + forms[item].name + "</option>";
    }
    /*for (item in forms) {
        let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        //svg.setAttributeNS(null, "xmlns", "http://www.w3.org/2000/svg");
        //svg.setAttributeNS(null, "xml:lang", "fr");
        svg.setAttributeNS(null, "viewBox", "0 0 550 550");
        //svg.setAttributeNS(null, "xmlns:xlink", "http://www.w3.org/1999/xlink");
        svg.setAttributeNS(null, "width", 200);
        svg.setAttributeNS(null, "height", 200);
        svg.setAttributeNS(null, "id", forms[item].name + "t");
        svg.setAttributeNS(null, "preserveAspectRatio", "xMidYMid meet");
        svg.setAttributeNS(null, "smiling", "fake");

        let g = document.createElementNS("http://www.w3.org/2000/svg", "g");
        g.setAttributeNS(null, "id", forms[item].name + "tt");
        g.setAttributeNS(null, "class", "translate");

        document.getElementById("menu").appendChild(svg);
        document.getElementById(forms[item].name + "t").appendChild(g);
        drowForm(forms[item], forms[item].name + "tt");
    }*/

    var listType = $("<select class=\"list-types\"></select>");
    $(".aside-menu").prepend(listType);
    $('.list-types').append(optionstypes);

    $('.list-types').change(function () {
        let form_key = $(this).val();
        let form = forms[form_key];

        selectedform = form;
        drowForm(form, "drowforme");
    });

    /*$('.arcdeg').on('input', function () {
        for (let i = 0; i < listforms.length; i++) {
            updateForm(selectedform);
        }
    });*/

    $("body").on("mousedown", "#draggable-element", function (evt) {
        evt = evt || window.event;

        dragelemX = $(this).offset().left;
        dragelemY = $(this).offset().top;

        if (evt.target.nodeName === "rect") {
            currentelem = evt.target.dataset.formId;
            idCurrentPoint = evt.target.dataset.id;
            console.log(currentelem);
        }
    });

    $("body").on("mousemove", "#draggable-element", function (evt) {
        evt = evt || window.event;

        if (idCurrentPoint !== -1) {
            var offsetX = (evt.pageX - dragelemX),
                offsetY = (evt.pageY - dragelemY);

            simulations[currentelem].points[idCurrentPoint].x = (offsetX - 25);
            simulations[currentelem].points[idCurrentPoint].y = (offsetY - 25);

            updateForm(simulations[currentelem]);
        }
    });

    $("body").on("mouseup", "#draggable-element", function () {
        currentelem = -1;
        idCurrentPoint = -1;
        dragelemX = 0;
        dragelemY = 0;
    });
});


/*
 window.addEventListener('load', function(){ // on page load

 var idCurrentPoint = -1;

 document.getElementById("draggable-element").addEventListener('touchstart', function(evt){

 evt = evt || window.event;


 dragelemX = $(this).offset().left;
 dragelemY = $(this).offset().top;

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

 }, false)*/



/*$("body").on('click', '.menu a', function (e) {
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
 });*/
