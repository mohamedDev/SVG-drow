$(document).ready(function () {

    var optionstypes = "";

    for (item in forms.type2) {
        optionstypes += "<option value=\"" + item + "\">" + item + "</option>";
    }

    var listType = $("<select class=\"list-types\"></select>")
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

    var listGeos = $("<select class=\"list-geos\"></select>")
    $(".aside-menu").prepend(listGeos)
    $('.list-geos').append(optionsgeos);

    listforms = [];
    $('.list-geos').change(function () {
        var objectTxt = $(this).val(),
		object = [];
			for(let i = 0; i < window.forms.geometrique[objectTxt].length; i++ ) {
				if(window.forms.geometrique[objectTxt][i] === "arcD" || window.forms.geometrique[objectTxt][i] === "arcG") {
					object[i] =  window.forms.geometrique[objectTxt][i];
				} else {
					object[i] =  { x : window.forms.geometrique[objectTxt][i].x , y : window.forms.geometrique[objectTxt][i].y};
				}
			}
			
			console.log(window.forms.geometrique);
			
			console.log(object)

        listforms[window.order] = Object.create(window.myForms);
        listforms[window.order].init(object, objectTxt)
        listforms[window.order].drow();
        window.order++;
    });


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


    $('.arcdeg').on('input', function () {

        for (let i = 0; i < listforms.length; i++) {
            listforms[i].update();
        }

    });

    var currentelem = -1,
        idCurrentPoint = -1,
        dragelemX = 0,
        dragelemY = 0;

    $("body").on("mousedown", "#draggable-element", function (evt) {
        evt = evt || window.event;

        dragelemX = $(this).offset().left;
        dragelemY = $(this).offset().top;

        console.log(dragelemX + " " + dragelemY);


        if (evt.target.nodeName === "rect") {
            currentelem = evt.target.parentElement.parentElement.attributes["data-order"].value;
            idCurrentPoint = evt.target.attributes["data-id"].value;
            console.log(currentelem + " " + idCurrentPoint);
        }

    });


    $("body").on("mousemove", "#draggable-element", function (evt) {
        evt = evt || window.event;

        if (idCurrentPoint !== -1) {
            var offsetX = (evt.pageX - dragelemX),
                offsetY = (evt.pageY - dragelemY);


            listforms[currentelem].points[idCurrentPoint].x = (offsetX - 25);
            listforms[currentelem].points[idCurrentPoint].y = (offsetY - 25);

			console.log(listforms[currentelem]);
			
            listforms[currentelem].update();
            listforms[currentelem].updatePoint(idCurrentPoint);
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

 }, false)*/