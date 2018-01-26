$(document).ready(function () {

    var currentx,
        currenty;

    generateMenu(forms);

    $(document).on("click", "#menu svg", function () {
        let form_key = $(this).attr("data-key");
        let form = forms[form_key];

        selectedform = form;
        drowForm(form, "drowforme");
    });

    $("body").on("mousedown", "#draggable-element .form-transform-line rect", function (evt) {
        evt = evt || window.event;

        dragelemX = $(this).offset().left;
        dragelemY = $(this).offset().top;

        currentelem = evt.target.dataset.formId;
        idCurrentPoint = evt.target.dataset.id;
        idPrevPoint = evt.target.dataset.prev;
        idNextPoint = evt.target.dataset.next;

    });

    $("body").on("mousedown", "#draggable-element .form-transform-line rect", function (evt) {
        evt = evt || window.event;

        evt.stopPropagation()

        currentelem = evt.target.dataset.formId;
        idPrevPoint = evt.target.dataset.prev;
        idNextPoint = evt.target.dataset.next;
        type_transform = "line";
        form_id = -1;

    });

    $("body").on("mousedown", "#draggable-element .form-transform-point rect", function (evt) {
        evt = evt || window.event;
        evt.stopPropagation()

        currentelem = evt.target.dataset.formId;
        idCurrentPoint = evt.target.dataset.id;
        type_transform = "point";
        form_id = -1;

    });

    $("body").on("mousemove", "#draggable-element", function (evt) {
        evt = evt || window.event;

        if (idCurrentPoint !== -1) {
            let offsetX = (evt.pageX - $(this).find("#form-transform-" + type_transform + "_" + currentelem + " rect[data-id=" + idCurrentPoint + "]").offset().left),
                offsetY = (evt.pageY - $(this).find("#form-transform-" + type_transform + "_" + currentelem + " rect[data-id=" + idCurrentPoint + "]").offset().top);

            if (type_transform === "point") {
                simulations[currentelem].points[idCurrentPoint].x += (offsetX - 15);
                simulations[currentelem].points[idCurrentPoint].y += (offsetY - 15);
            }
            if (type_transform === "line") {
                simulations[currentelem].points[idPrevPoint].x += (offsetX - 5);
                simulations[currentelem].points[idPrevPoint].y += (offsetY - 5);
                simulations[currentelem].points[idNextPoint].x += (offsetX - 5);
                simulations[currentelem].points[idNextPoint].y += (offsetY - 5);
            }
            updateForm(simulations[currentelem]);
        }

    });

    $("body").on("mouseup", "#draggable-element", function () {
        currentelem = -1;
        idCurrentPoint = -1;
        dragelemX = 0;
        dragelemY = 0;
        idPrevPoint = -1;
        idNextPoint = -1;
        type_transform = "";
        form_id = -1;
    });


    $("body").on("mousedown", ".form", function (evt) {
        evt = evt || window.event;

        form_id = $(this).attr("data-id");
        currentx = evt.pageX;
        currenty = evt.pageY;
    });

    $("body").on("mousemove", ".form", function (evt) {
        evt = evt || window.event;

        if (form_id !== -1) {
            let offsetX = (evt.pageX - currentx),
                offsetY = (evt.pageY - currenty);
            for (let i = 0; i < simulations[form_id].points.length; i++) {
                simulations[form_id].points[i].x += offsetX;
                simulations[form_id].points[i].y += offsetY;
                updateForm(simulations[form_id]);
            }
            currentx = evt.pageX;
            currenty = evt.pageY;
        }
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
