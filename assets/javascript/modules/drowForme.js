(function ($) {
    "use strict";

    var myForms = {
        path: "",
        coefficientArc: 0,
        state : "active",
        name : "",

        getActiveForm: function () {
            return this.state;
        },

        drowPoint: function (forme) {

            var i = 0;

            $("#transform-points").children("rect").remove();

            for (i; i < forme.length; i++) {

                if (forme[i] !== "arcD" && forme[i] !== "arcG") {

                    var rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
                    rect.setAttributeNS(null, "x", (forme[i].x - 15));
                    rect.setAttributeNS(null, "y", (forme[i].y - 15));
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

        drow: function (forme) {

            var coif = this.coefficientArc,
                i = 1,
                dx,
                dy;

            var degArc = parseInt($('input[type=range]').val());

            this.path = "M" + forme[0].x + "," + forme[0].y;

            for (i; i < forme.length; i++) {

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
                        this.path += " Q" + (dx + degArc) + "," + (dy - (coif * degArc )) + " ";
                    }
                    if (forme[i] === "arcG") {
                        this.path += " Q" + (dx - degArc) + "," + (dy + (coif * degArc )) + " ";
                    }
                    i++;
                }

                if (forme[i - 1] !== "arcD" && forme[i - 1] !== "arcG") {
                    this.path += " L";
                }

                if (i === forme.length) {
                    this.path += forme[0].x + "," + forme[0].y;
                } else {
                    this.path += forme[i].x + "," + forme[i].y;
                }
            }

            this.path += " z";
            this.name = forme;

            var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
            path.setAttributeNS(null, "d", this.path);
            path.setAttributeNS(null, "filter", "url(#dropshadow)");
            path.setAttributeNS(null, "stroke-width", 20);
            path.setAttributeNS(null, "class", this.name);
            path.setAttributeNS(null, "stroke", "gray");
            document.getElementById("clip1").appendChild(path);
            document.getElementById("drowforme").appendChild(path);

            this.drowPoint(forme);
        }
    }

    window.myForms = myForms;

}(jQuery));