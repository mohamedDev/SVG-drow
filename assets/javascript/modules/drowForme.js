(function ($) {
    "use strict";

    window.order = 0;

    var myForms = {
        name: "",
        points: [],
        path: "",
        coefficientArc: 0,
        state: "",
        order: 0,
        bgImage: "",

        init: function (forme, name) {
            this.points = forme
            this.name = name;
            this.order = window.order;
            this.bgImage = "./assets/images/bg.jpg";
        },

        drowPoint: function () {

            var i = 0;

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
                    rect.setAttributeNS(null, "id", (this.order + "-" + i + "-" + this.name));
                    rect.setAttributeNS(null, "data-id", i);
                    document.getElementById(this.order + "-" + this.name).children[3].appendChild(rect);
                }
            }
        },

        updatePoint: function (idPoint) {

            var rect = document.getElementById((this.order + "-" + idPoint + "-" + this.name));
            rect.setAttributeNS(null, "x", (this.points[idPoint].x - 15));
            rect.setAttributeNS(null, "y", (this.points[idPoint].y - 15));

        },

        calculPath: function () {

            var coif = this.coefficientArc,
                i = 1,
                dx,
                dy,
                degArc = parseInt($('input[type=range]').val());

            this.path = "M" + this.points[0].x + "," + this.points[0].y;

            for (i; i < this.points.length; i++) {

                if (this.points[i] === "arcD" || this.points[i] === "arcG") {

                    if ((i + 1) === this.points.length) {

                        if ((this.points[0].y - this.points[i - 1].y) === 0) {

                            coif = ( this.points[0].x - this.points[i - 1].x );

                        } else {

                            coif = ( this.points[0].x - this.points[i - 1].x ) / ( this.points[0].y - this.points[i - 1].y );

                        }

                        dx = ((this.points[0].x - this.points[i - 1].x ) / 2) + this.points[i - 1].x;
                        dy = ((this.points[0].y - this.points[i - 1].y ) / 2) + this.points[i - 1].y;

                    } else {

                        if (( this.points[i + 1].y - this.points[i - 1].y ) === 0) {

                            coif = ( this.points[i + 1].x - this.points[i - 1].x );

                        } else {

                            coif = ( this.points[i + 1].x - this.points[i - 1].x ) / ( this.points[i + 1].y - this.points[i - 1].y );

                        }

                        dx = ((this.points[i + 1].x - this.points[i - 1].x ) / 2) + this.points[i - 1].x;
                        dy = ((this.points[i + 1].y - this.points[i - 1].y ) / 2) + this.points[i - 1].y;
                    }
                    var rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
                    rect.setAttributeNS(null, "width", 1);
                    rect.setAttributeNS(null, "height", 1);
                    rect.setAttributeNS(null, "stroke-width", 1);
                    rect.setAttributeNS(null, "stroke", "red");
                    rect.setAttributeNS(null, "fill", "transparent");

                    if (this.points[i] === "arcD") {
                        this.path += " Q" + (dx + degArc) + "," + (dy - (coif * degArc )) + " ";
                        rect.setAttributeNS(null, "x", (dx + degArc));
                        rect.setAttributeNS(null, "y", (dy - (coif * degArc )));
                    }

                    if (this.points[i] === "arcG") {
                        this.path += " Q" + (dx - degArc) + "," + (dy + (coif * degArc )) + " ";
                        rect.setAttributeNS(null, "x", (dx - degArc));
                        rect.setAttributeNS(null, "y", (dy + (coif * degArc )));
                    }
                    document.getElementById("drowforme").appendChild(rect);
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

        },

        drow: function () {

            this.calculPath();

            createElement(this.path, this.name, this.order, this.bgImage)

            this.drowPoint();
        },

        update: function () {

            this.calculPath();

            updateElement(this.path, this.name, this.order);
        }

    }


    var createElement = function (path, name, order, bgImage) {

        var g = document.createElementNS("http://www.w3.org/2000/svg", "g");
        g.setAttributeNS(null, "id", (order + "-" + name));
        g.setAttributeNS(null, "data-order", order);

        var transformpoint = document.createElementNS("http://www.w3.org/2000/svg", "g");
        transformpoint.setAttributeNS(null, "class", "transform-points");

        var clipPath = document.createElementNS("http://www.w3.org/2000/svg", "clipPath");
        clipPath.setAttributeNS(null, "id", (order + "-cp-" + name));

        var image = document.createElementNS("http://www.w3.org/2000/svg", "image");
        image.setAttributeNS(null, "id", (order + "-image-" + name));
        image.setAttributeNS(null, "width", 1500);
        image.setAttributeNS(null, "height", 997);
        image.setAttributeNS("http://www.w3.org/1999/xlink", 'xlink:href', bgImage);
        image.setAttributeNS(null, "clip-path", "url(#" + order + "-cp-" + name + ")");

        var pathelem1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
        pathelem1.setAttributeNS(null, "d", path);
        pathelem1.setAttributeNS(null, "stroke-width", 20);
        pathelem1.setAttributeNS(null, "class", name);
        pathelem1.setAttributeNS(null, "stroke", "gray");
        pathelem1.setAttributeNS(null, "stroke-linejoin", "miter");
        pathelem1.setAttributeNS(null, "stroke-miterlimit", 10);

        var pathelem2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
        pathelem2.setAttributeNS(null, "d", path);
        pathelem2.setAttributeNS(null, "class", name);


        document.getElementById("drowforme").appendChild(g);

        document.getElementById((order + "-" + name)).appendChild(clipPath);
        document.getElementById((order + "-cp-" + name)).appendChild(pathelem2);
        document.getElementById((order + "-" + name)).appendChild(image);

        document.getElementById((order + "-" + name)).appendChild(pathelem1);
        document.getElementById((order + "-" + name)).appendChild(transformpoint);

    }

    var updateElement = function (path, name, order) {

        var groupForm = document.getElementById((order + "-" + name)),
            groupFormClippath = document.getElementById((order + "-cp-" + name));

        groupForm.children[2].setAttributeNS(null, "d", path);
        groupFormClippath.children[0].setAttributeNS(null, "d", path);

    }

    window.myForms = myForms;

}(jQuery));