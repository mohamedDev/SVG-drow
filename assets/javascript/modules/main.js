$(document).ready(function () {

    var optionstypes = "";
    for (item in forms.type2) {
        optionstypes += "<option value=\"" + item + "\">" + item + "</option>";
    }

    var listType = $("<select class=\"list-types\"></select>");
    $(".aside-menu").prepend(listType);
    $('.list-types').append(optionstypes);

    $('.list-types').change(function () {
        var objectTxt = $(this).val(),
            object = window.forms.type2[objectTxt];

        listforms.push(Object.create(window.myForms));
        listforms[window.order].init(object, objectTxt)
        listforms[window.order].drow();
        window.order++;
    });

    var optionsgeos = "";
    for (item in forms.geometrique) {
        optionsgeos += "<option value=\"" + item + "\">" + item + "</option>";
    }

    var listGeos = $("<select class=\"list-geos\"></select>");
    $(".aside-menu").prepend(listGeos);
    $('.list-geos').append(optionsgeos);

    listforms = [];
    $('.list-geos').change(function () {
        var objectTxt = $(this).val(),
            object = [];
        for (var i = 0; i < window.forms.geometrique[objectTxt].length; i++) {
            if (window.forms.geometrique[objectTxt][i] === "arc") {
                object[i] = window.forms.geometrique[objectTxt][i];
            } else {
                object[i] = {x: window.forms.geometrique[objectTxt][i].x, y: window.forms.geometrique[objectTxt][i].y};
            }
        }

        listforms[window.order] = Object.create(window.myForms);
        listforms[window.order].init(object, objectTxt)
        listforms[window.order].drow();
        window.order++;
    });


    var currentelem = -1,
        idCurrentPoint = -1,
        dragelemX = 0,
        dragelemY = 0,
        moveElem = "";

    $("body").on("mousedown", "#draggable-element", function (evt) {
        evt = evt || window.event;

        dragelemX = $(this).offset().left;
        dragelemY = $(this).offset().top;

        if (evt.target.nodeName === "rect") {
            currentelem = evt.target.parentElement.parentElement.attributes["data-order"].value;
            idCurrentPoint = evt.target.attributes["data-id"].value;

            moveElem = "#" + currentelem + "-" + listforms[currentelem].name;
            $(moveElem).find('path').css("opacity", "0.5");
        }

        if (evt.target.nodeName === "circle") {
            currentelem = evt.target.parentElement.parentElement.attributes["data-order"].value;
            idCurrentPoint = evt.target.attributes["data-id"].value;

            moveElem = "#" + currentelem + "-" + listforms[currentelem].name;
            $(moveElem).find('path').css("opacity", "0.5");
        }
    });

    $("body").on("mousemove", "#draggable-element", function (evt) {
        evt = evt || window.event;

        if (idCurrentPoint !== -1) {
            var offsetX = (evt.pageX - dragelemX),
                offsetY = (evt.pageY - dragelemY);

            if (listforms[currentelem].points[idCurrentPoint] !== "arc") {

                listforms[currentelem].points[idCurrentPoint].x = (offsetX - 25);
                listforms[currentelem].points[idCurrentPoint].y = (offsetY - 25);

            } else {
                listforms[currentelem].pControl[idCurrentPoint].x = (offsetX - 25);
                listforms[currentelem].pControl[idCurrentPoint].y = (offsetY - 25);
            }

            listforms[currentelem].update();
            listforms[currentelem].updatePoint(idCurrentPoint);
        }
    });

    $("body").on("mouseup", "#draggable-element", function () {
        $(moveElem).find('path').css("opacity", "1");
        currentelem = -1;
        idCurrentPoint = -1;
        moveElem = "";
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


/*
on calcule les coordonnées des droites
puis on fait une petite équation comme sa : "droite1 = droite2"
et puis on a tout les point d'intersections après il faut que le programme puisse géré sa ^^ mais ça marche

rappel (même si tu le sais peut-être sa m'occupe  :p ) :

- calcul d'une droite à partir de 2 points :
droite d'équation : y = ax + b
a = (y1 - y2 ) / (x1 - x2)
b = y1 - a.x1
    (Sachant que le point A a pour coordonnées : x1 et y1
et le point B : x2 et y2)

- savoir si elles sont sécantes :
    on a deux droite :
    y1 = a1.x + b1
y2 = a2.x + b2

on fait y1 = y2
ce qui revient à :
    y1 - y2 = 0
a1.x + b1 - a2.x - b2 = 0
x(a1 - a2) + b1 - b2 = 0
x = (b2 - b1) / (a1 - a2)

et donc on à la fin de l'équation on obtient la valeur x où elle se croisent
(si elles se croisent) et si elles se croisent pas alors tu aura un petit
a1 - a2 = 0 (donc tu fait une condition pour vérifié si a1 - a2 != 0 ;)

voilà
si je me trompe dites moi que je parte pas sans avoir dit n'importe quoi ^^
ça fait longtemps que j'ai pas fait de trigo ^^
*/