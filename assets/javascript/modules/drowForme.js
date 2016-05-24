(function ($) {
    "use strict";
	
	window.order = 0;

    var myForms = {
		name : "",
        points: [],
		path: "",
        coefficientArc: 0,
        state : "",

        init: function (forme, name) {
            this.points = forme;
			this.name = name;
			window.order++;
			
			
			console.log(this.points);
        },

        drowPoint: function () {

            var i = 0;

            $("#transform-points").children("rect").remove();

            for (i; i < this.points.length; i++) {

                if (this.points[i] !== "arcD" && this.points[i] !== "arcG") {

                    var rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
                    rect.setAttributeNS(null, "x", (this.points[i].x - 15));
                    rect.setAttributeNS(null, "y", (this.points[i].y - 15));
                    rect.setAttributeNS(null, "width", 30);
                    rect.setAttributeNS(null, "height", 30);
                    rect.setAttributeNS(null, "stroke-width", 2);
                    rect.setAttributeNS(null, "stroke", "blue");
                    rect.setAttributeNS(null, "fill", "transparent");
                    rect.setAttributeNS(null, "data-id", i);
                    document.getElementById("transform-points").appendChild(rect);
                }
            }
        },

        drow: function () {

            var coif = this.coefficientArc,
                i = 1,
                dx,
                dy;

            var degArc = parseInt($('input[type=range]').val());

            this.path = "M" + this.points[0].x + "," + this.points[0].y;

            for (i; i < this.points.length; i++) {

                if (this.points[i] === "arcD" || this.points[i] === "arcG") {
                    if ((i + 1) === this.points.length) {
                        coif = ( this.points[0].x - this.points[i - 1].x ) / ( this.points[0].y - this.points[i - 1].y );
                        dx = ((this.points[0].x - this.points[i - 1].x ) / 2) + this.points[i - 1].x;
                        dy = ((this.points[0].y - this.points[i - 1].y ) / 2) + this.points[i - 1].y;

                    } else {
                        coif = ( this.points[i + 1].x - this.points[i - 1].x ) / ( this.points[i + 1].y - this.points[i - 1].y );
                        dx = ((this.points[i + 1].x - this.points[i - 1].x ) / 2) + this.points[i - 1].x;
                        dy = ((this.points[i + 1].y - this.points[i - 1].y ) / 2) + this.points[i - 1].y;
                    }
                    if (this.points[i] === "arcD") {
                        this.path += " Q" + (dx + degArc) + "," + (dy - (coif * degArc )) + " ";
                    }
                    if (this.points[i] === "arcG") {
                        this.path += " Q" + (dx - degArc) + "," + (dy + (coif * degArc )) + " ";
                    }
                    i++;
                }

                if (this.points[i - 1] !== "arcD" && this.points[i - 1] !== "arcG") {
                    this.path += " L";
                }

                if (i === this.points.length) {
                    this.path += this.points[0].x + "," + this.points[0].y;
                } else {
                    this.path += this.points[i].x + "," + this.points[i].y;
                }
            }

            this.path += " z";

			var g = document.createElementNS("http://www.w3.org/2000/svg", "g");
			g.setAttributeNS(null, "id", (window.order + "-" + this.name));
			
			
			var clipPath = document.createElementNS("http://www.w3.org/2000/svg", "clipPath");
			clipPath.setAttributeNS(null, "id", (window.order + "-cp-" + this.name));
			
			
            var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
            path.setAttributeNS(null, "d", this.path);
            path.setAttributeNS(null, "stroke-width", 20);
            path.setAttributeNS(null, "class", this.name);
            path.setAttributeNS(null, "stroke", "gray");
			
			document.getElementById("drowforme").appendChild(g);
			
            
			
			document.getElementById((window.order + "-" + this.name)).appendChild(clipPath);
			document.getElementById((window.order + "-cp-" + this.name)).appendChild(path);
			
			document.getElementById((window.order + "-" + this.name)).appendChild(path);
			
            
            this.drowPoint();
        }
    }

    window.myForms = myForms;

}(jQuery));