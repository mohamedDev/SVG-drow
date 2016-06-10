(function ($) {
    "use strict";

    window.order = 0;

    var myForms = {
        name: "",
        points: [],
        path: "",
        state: "",
        order: 0,
        bgImage: "",
        pControl: [],
        pchanfrein: [],

        init: function (forme, name) {
            this.points = forme
            this.name = name;
            this.order = window.order;
            this.bgImage = "./assets/images/bg.jpg";
        },

        drowPoint: function () {

            var i = 0;

            for (i; i < this.points.length; i++) {

                if (this.points[i] !== "arc") {

                    var rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
                    rect.setAttributeNS(null, "x", (this.points[i].x - 20));
                    rect.setAttributeNS(null, "y", (this.points[i].y - 20));
                    rect.setAttributeNS(null, "width", 40);
                    rect.setAttributeNS(null, "height", 40);
                    rect.setAttributeNS(null, "stroke-width", 2);
                    rect.setAttributeNS(null, "stroke", "blue");
                    rect.setAttributeNS(null, "fill", "transparent");
                    rect.setAttributeNS(null, "id", (this.order + "-" + i + "-" + this.name));
                    rect.setAttributeNS(null, "data-id", i);
                    document.getElementById(this.order + "-" + this.name).children[3].appendChild(rect);

                } else {

                    var pc = document.createElementNS("http://www.w3.org/2000/svg", "circle");
                    pc.setAttributeNS(null, "id", (this.order + "-pc-" + i + "-" + this.name));
                    pc.setAttributeNS(null, "data-id", i);
                    pc.setAttributeNS(null, "r", 15);
                    pc.setAttributeNS(null, "stroke-width", 1);
                    pc.setAttributeNS(null, "stroke", "red");
                    pc.setAttributeNS(null, "fill", "transparent");
                    pc.setAttributeNS(null, "cx", this.pControl[i].x);
                    pc.setAttributeNS(null, "cy", this.pControl[i].y);

                    document.getElementById(this.order + "-" + this.name).children[3].appendChild(pc);

                }
            }
        },

        updatePoint: function (idPoint) {

            if (this.points[idPoint] !== "arc") {
                var rect = document.getElementById((this.order + "-" + idPoint + "-" + this.name));
                rect.setAttributeNS(null, "x", (this.points[idPoint].x - 20));
                rect.setAttributeNS(null, "y", (this.points[idPoint].y - 20));

                var p1 = idPoint - 1,
                    p2 = p1 + 2;

                if (p1 < 0) {
                    p1 = this.points.length - 1;
                }

                if (this.points[p1] === "arc") {

                    var pc1 = document.getElementById((this.order + "-pc-" + p1 + "-" + this.name));

                    pc1.setAttributeNS(null, "cx", this.pControl[p1].x);
                    pc1.setAttributeNS(null, "cy", this.pControl[p1].y);

                }

                if (this.points[p2] === "arc") {

                    var pc2 = document.getElementById((this.order + "-pc-" + p2 + "-" + this.name));

                    pc2.setAttributeNS(null, "cx", this.pControl[p2].x);
                    pc2.setAttributeNS(null, "cy", this.pControl[p2].y);

                }

            } else {

                var pc1 = document.getElementById((this.order + "-pc-" + idPoint + "-" + this.name));

                pc1.setAttributeNS(null, "cx", this.pControl[idPoint].x);
                pc1.setAttributeNS(null, "cy", this.pControl[idPoint].y);

            }


        },

        calculPath: function () {

            var i = 1,
                dx,
                dy;

            this.path = "M" + this.points[0].x + "," + this.points[0].y;

            getchenfrainOfcurrentPoints(this.points[0], this.points[1], this.points[this.points.length - 1]);

            for (i; i < this.points.length; i++) {

                if (this.points[i] === "arc") {

                    if ((i + 1) === this.points.length) {
                        dx = ((this.points[0].x - this.points[i - 1].x ) / 2) + this.points[i - 1].x;
                        dy = ((this.points[0].y - this.points[i - 1].y ) / 2) + this.points[i - 1].y;

                    } else {
                        dx = ((this.points[i + 1].x - this.points[i - 1].x ) / 2) + this.points[i - 1].x;
                        dy = ((this.points[i + 1].y - this.points[i - 1].y ) / 2) + this.points[i - 1].y;
                    }

                    this.pControl[i] = {x: dx, y: dy}

                    this.path += " Q" + dx + "," + dy + " ";

                    i++;
                }

                if (this.points[i - 1] !== "arc") {
                    this.path += " L";
                }

                /*if (i === (this.points.length - 1)) {

                    getchenfrainOfcurrentPoints(this.points[i], this.points[0], this.points[i - 1]);

                } else {

                    getchenfrainOfcurrentPoints(this.points[i], this.points[i + 1], this.points[i - 1]);

                }*/

                if (i === this.points.length) {

                    this.path += this.points[0].x + "," + this.points[0].y;

                } else {

                    this.path += this.points[i].x + "," + this.points[i].y;

                }

            }

            this.path += " z";

        },

        updatePath: function () {

            var i = 1,
                dx,
                dy;

            getchenfrainOfcurrentPoints(this.points[0], this.points[1], this.points[this.points.length - 1]);


            this.path = "M" + this.points[0].x + "," + this.points[0].y;

            for (i; i < this.points.length; i++) {

                if (this.points[i] === "arc") {

                    dx = this.pControl[i].x;
                    dy = this.pControl[i].y;

                    this.path += " Q" + dx + "," + dy + " ";

                    i++;
                }

                if (this.points[i - 1] !== "arc") {
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
        }
        ,

        update: function () {

            this.updatePath();

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


function checkLineCircleIntersection(a, b, cx, cy, r) {

    /*var pc = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    pc.setAttributeNS(null, "r", r);
    pc.setAttributeNS(null, "stroke-width", 0.5);
    pc.setAttributeNS(null, "stroke", "black");
    pc.setAttributeNS(null, "fill", "transparent");
    pc.setAttributeNS(null, "cx", cx);
    pc.setAttributeNS(null, "cy", cy);

    document.getElementById("translate").appendChild(pc);*/

    var A = 1 + (a * a),
        B = 2 * ( a * b - a * cy - cx),
        C = (cx * cx) + (cy * cy) + (b * b) - (2 * b * cy) - (r * r),
        delta = (B * B) - (4 * A * C),
        lst = [];

    if (delta > 0) {
        var x = (-B - Math.sqrt(delta)) / (2 * A);
        var y = a * x + b;
        lst.push({x: x, y: y});

        x = (-B + Math.sqrt(delta)) / (2 * A);
        y = a * x + b;
        lst.push({x: x, y: y});
    }
    else if (delta == 0) {
        var x = -B / (2 * A);
        var y = a * x + b;

        lst.push({x: x, y: y});
    }

    return lst;
}

function checkLineIntersection(point1, point2, point3, point4) {
    var denominator, a, b, numerator1, numerator2, result = {
        x: null,
        y: null,
        onLine1: false,
        onLine2: false
    };
    denominator = ((point4.y - point3.y) * (point2.x - point1.x)) - ((point4.x - point3.x) * (point2.y - point1.y));
    if (denominator == 0) {
        return result;
    }
    a = point1.y - point3.y;
    b = point1.x - point3.x;
    numerator1 = ((point4.x - point3.x) * a) - ((point4.y - point3.y) * b);
    numerator2 = ((point2.x - point1.x) * a) - ((point2.y - point1.y) * b);
    a = numerator1 / denominator;
    b = numerator2 / denominator;

    result.x = point1.x + (a * (point2.x - point1.x));
    result.y = point1.y + (a * (point2.y - point1.y));

    if (a > 0 && a < 1) {
        result.onLine1 = true;
    }
    if (b > 0 && b < 1) {
        result.onLine2 = true;
    }
    return result;
}


//********************************//

function getEquationOfverticalLineFromTwoPoints(point1, point2) {

    var lineObj = {
        a: 0,
    }, linevObj = {
        a: 0,
        b: 0
    }, parts;

    if ((point1.x - point2.x) !== 0) {
        lineObj.a = (point1.y - point2.y) / (point1.x - point2.x);
    } else {
        lineObj.a = 1;
    }

    linevObj.a = -(1 / lineObj.a);
    linevObj.b = point1.y - (linevObj.a * point1.x);

    linevObj.toString = function () {

        parts = [];

        if (linevObj.a !== 0) {
            parts.push(linevObj.a + 'x');
        }

        if (linevObj.b !== 0) {
            parts.push(linevObj.b);
        }

        return 'y = ' + parts.join(' + ');
    };

    var p1 = {
            x: 0,
            y: 0
        },
        p2 = {
            x: 0,
            y: 0
        };

    p1.x = 0;
    p1.y = (linevObj.a * p1.x) + linevObj.b;

    p2.x = 1000;
    p2.y = (linevObj.a * p2.x) + linevObj.b;


    /*var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttributeNS(null, "x1", p1.x);
    line.setAttributeNS(null, "y1", p1.y);
    line.setAttributeNS(null, "x2", p2.x);
    line.setAttributeNS(null, "y2", p2.y);
    line.setAttributeNS(null, "stroke-width", 1);
    line.setAttributeNS(null, "class", 'nlinev');
    line.setAttributeNS(null, "stroke", "red");

    document.getElementById("translate").appendChild(line);*/

    return linevObj;
}

curNextInter = {},
    nextCurInter = {},
    curPrevInter = {},
    prevCurInter = {};

function getchenfrainOfcurrentPoints(currentPoint, nextpoint, prevPoint) {

    var t = getEquationOfverticalLineFromTwoPoints(currentPoint, nextpoint);
    curNextInter = checkLineCircleIntersection(t.a, t.b, currentPoint.x, currentPoint.y, 10);

    t = getEquationOfverticalLineFromTwoPoints(nextpoint, currentPoint);
    nextCurInter = checkLineCircleIntersection(t.a, t.b, nextpoint.x, nextpoint.y, 10);

    t = getEquationOfverticalLineFromTwoPoints(currentPoint, prevPoint);
    curPrevInter = checkLineCircleIntersection(t.a, t.b, currentPoint.x, currentPoint.y, 10);

    t = getEquationOfverticalLineFromTwoPoints(prevPoint, currentPoint);
    prevCurInter = checkLineCircleIntersection(t.a, t.b, prevPoint.x, prevPoint.y, 10);


    p1 = checkLineIntersection(curNextInter[1], nextCurInter[1], curPrevInter[0], prevCurInter[0]);
    p2 = checkLineIntersection(curNextInter[0], nextCurInter[0], curPrevInter[1], prevCurInter[1]);

    var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttributeNS(null, "x1", p1.x);
    line.setAttributeNS(null, "y1", p1.y);
    line.setAttributeNS(null, "x2", p2.x);
    line.setAttributeNS(null, "y2", p2.y);
    line.setAttributeNS(null, "stroke-width", 0.5);
    line.setAttributeNS(null, "stroke-opacity", 0.5);
    line.setAttributeNS(null, "stroke", "red");

    document.getElementById("translate").lastElementChild.setAttributeNS(null, "stroke-width", 0);
    document.getElementById("translate").appendChild(line)
}