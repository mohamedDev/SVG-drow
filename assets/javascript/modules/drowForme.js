	
var path = "";

var qdeg = 0;


drowTransformPoint = function () {

	$("#transform-points").children("rect").remove();

	var t = $('.list-geos').val();
	var points = window.forms.geometrique[t];

	for (var i = 0; i < points.length; i++) {

		if (points[i] !== "arcD" && points[i] !== "arcG") {
			var rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");

			rect.setAttributeNS(null, "x", (points[i].x - 10));
			rect.setAttributeNS(null, "y", (points[i].y - 10));
			rect.setAttributeNS(null, "width", 20);
			rect.setAttributeNS(null, "height", 20);
			rect.setAttributeNS(null, "stroke-width", 2);
			rect.setAttributeNS(null, "stroke", "blue");
			rect.setAttributeNS(null, "fill", "transparent");
			rect.setAttributeNS(null, "id", i);

			document.getElementById("transform-points").appendChild(rect);
		}
	}

}

var drowForms = function (forme) {

	qdeg = parseInt($('input[type=range]').val());

	path = "M" + forme[0].x + "," + forme[0].y;
	var coif = 0;

	drowTransformPoint();

	for (i = 1; i < forme.length; i++) {

		if (forme[i] === "arcD" || forme[i] === "arcG") {

			if ((i + 1) === forme.length) {
				coif = ( forme[0].x - forme[i - 1].x ) / ( forme[0].y - forme[i - 1].y );
				dx = ((forme[0].x - forme[i - 1].x ) / 2) + forme[i - 1].x;
				dy = ((forme[0].y - forme[i - 1].y ) / 2) + forme[i - 1].y;
			} else {
				coif = ( forme[i + 1].x - forme[i - 1].x ) / ( forme[i + 1].y - forme[i - 1].y );
				dx = ((forme[i + 1].x - forme[i - 1].x ) / 2) + forme[i - 1].x;
				dy = ((forme[i + 1].y - forme[i - 1].y ) / 2) + forme[i - 1].y;
			}
			if (forme[i] === "arcD") {
				path += " Q" + (dx + qdeg) + "," + (dy - (coif * qdeg )) + " ";
			}
			if (forme[i] === "arcG") {
				path += " Q" + (dx - qdeg) + "," + (dy + (coif * qdeg )) + " ";
			}
			i++;
		}

		if (forme[i - 1] !== "arcD" && forme[i - 1] !== "arcG") {
			path += " L";
		}

		if (i === forme.length) {
			path += forme[0].x + "," + forme[0].y;
		} else {
			path += forme[i].x + "," + forme[i].y;
		}
	}

	path += " z";
}




$(document).ready(function () {

	var optionstypes = "";

	for (item in forms.type2) {
		optionstypes += "<option value=\"" + item + "\">" + item + "</option>";
	}
	var listType = $("<select class=\"list-types\"></select>")
	$(".aside-menu").prepend(listType);
	$('.list-types').append(optionstypes);

	$('.list-types').change(function () {
		t = $(this).val();
		drowForms(window.forms.type2[t]);
		$('.form2').attr('d', path);
	});


	var optionsgeos = "";
	for (item in forms.geometrique) {
		optionsgeos += "<option value=\"" + item + "\">" + item + "</option>";
	}
	var listGeos = $("<select class=\"list-geos\"></select>")
	$(".aside-menu").prepend(listGeos)
	$('.list-geos').append(optionsgeos);

	$('.list-geos').change(function () {
		t = $(this).val();
		drowForms(window.forms.geometrique[t]);
		$('.form1').attr('d', path);

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
		
		console.log(evt);
		
		dragelemX = $(this).offset().left;
		dragelemY = $(this).offset().top;
		
		if(evt.target.nodeName === "rect") {
			idCurrentPoint = evt.target.attributes["id"].value;
		}
	});


	$("body").on("mousemove", "#draggable-element", function (evt) {
		evt = evt || window.event;

		if (idCurrentPoint !== -1 ) {
			var offsetX = (evt.pageX - dragelemX),
				offsetY = (evt.pageY - dragelemY),
				t = $('.list-geos').val();
				
			window.forms.geometrique[t][idCurrentPoint].x = (offsetX - 25);
			window.forms.geometrique[t][idCurrentPoint].y = (offsetY - 25);

			drowForms(window.forms.geometrique[t]);

		}
	});

	$("body").on("mouseup","#draggable-element", function () {

		idCurrentPoint = -1;
		var t = $('.list-geos').val();
		$('.form1').attr('d', path);

	});

});