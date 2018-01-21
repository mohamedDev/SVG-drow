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
        let form_name = $(this).val();
        let form = forms[form_name];

        selectedform = form;
        drowForm(form, form_name, "drowforme");
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
            let form_id = evt.target.dataset.formId;
            currentelem = evt.target.dataset.key;
            idCurrentPoint = evt.target.dataset.id;
            idCurrentPoint = evt.target.dataset.id;
        }
    });

    $("body").on("mousemove", "#draggable-element", function (evt) {
        evt = evt || window.event;

        if (idCurrentPoint !== -1) {
            var offsetX = (evt.pageX - dragelemX),
                offsetY = (evt.pageY - dragelemY);

            forms[currentelem].points[idCurrentPoint].x = (offsetX - 20);
            forms[currentelem].points[idCurrentPoint].y = (offsetY - 20);

            console.log(forms[currentelem].points)

            //listforms[currentelem].update();
            //listforms[currentelem].updatePoint(idCurrentPoint);
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
on calcule les coordonn�es des droites
puis on fait une petite �quation comme sa : "droite1 = droite2"
et puis on a tout les point d'intersections apr�s il faut que le programme puisse g�r� sa ^^ mais �a marche

rappel (m�me si tu le sais peut-�tre sa m'occupe  :p ) :

- calcul d'une droite � partir de 2 points :
droite d'�quation : y = ax + b
a = (y1 - y2 ) / (x1 - x2)
b = y1 - a.x1
    (Sachant que le point A a pour coordonn�es : x1 et y1
et le point B : x2 et y2)

- savoir si elles sont s�cantes :
    on a deux droite :
    y1 = a1.x + b1
y2 = a2.x + b2

on fait y1 = y2
ce qui revient � :
    y1 - y2 = 0
a1.x + b1 - a2.x - b2 = 0
x(a1 - a2) + b1 - b2 = 0
x = (b2 - b1) / (a1 - a2)

et donc on � la fin de l'�quation on obtient la valeur x o� elle se croisent
(si elles se croisent) et si elles se croisent pas alors tu aura un petit
a1 - a2 = 0 (donc tu fait une condition pour v�rifi� si a1 - a2 != 0 ;)

voil�
si je me trompe dites moi que je parte pas sans avoir dit n'importe quoi ^^
�a fait longtemps que j'ai pas fait de trigo ^^
*/