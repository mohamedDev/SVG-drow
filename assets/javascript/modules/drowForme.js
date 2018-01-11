var calculPath = function (form) {

    let i = 1,
        dx,
        dy,
        path = "M" + form.points[0].x + "," + form.points[0].y;



    for (i; i < form.points.length; i++) {
        if (form.points[i] === "arc") {
            if ((i + 1) === form.points.length) {
                dx = ((form.points[0].x - form.points[i - 1].x) / 2) + form.points[i - 1].x;
                dy = ((form.points[0].y - form.points[i - 1].y) / 2) + form.points[i - 1].y;
            } else {
                dx = ((form.points[i + 1].x - form.points[i - 1].x) / 2) + form.points[i - 1].x;
                dy = ((form.points[i + 1].y - form.points[i - 1].y) / 2) + form.points[i - 1].y;
            }
            //this.pControl[i] = { x: dx, y: dy }
            path += " Q" + dx + "," + dy + " ";
            i++;
        }


        console.log(i);

        if (i === 1) {
            // getchenfrainOfcurrentPoints(currentPoint, nextpoint, prevPoint) 
            getchenfrainOfcurrentPoints(form.points[i], form.points[i + 1], form.points[form.points.length - 1]);
        } else if (i === (form.points.length - 1)) {
            // getchenfrainOfcurrentPoints(currentPoint, nextpoint, prevPoint) 
            getchenfrainOfcurrentPoints(form.points[i], form.points[0], form.points[i - 1]);
        } else {
            getchenfrainOfcurrentPoints(form.points[i], form.points[i + 1], form.points[i - 1]);
        }

        if (form.points[i - 1] !== "arc") {
            path += " L";
        }

        if (i === form.points.length) {
            path += form.points[0].x + "," + form.points[0].y;
        } else {
            path += form.points[i].x + "," + form.points[i].y;
        }
    }
    path += " z";
    return path;
}

var drowForm = function (form, container) {

    let path = calculPath(form);
    let g = document.createElementNS("http://www.w3.org/2000/svg", "g");
    g.setAttributeNS(null, "id", form.name);

    var transformpoint = document.createElementNS("http://www.w3.org/2000/svg", "g");
    transformpoint.setAttributeNS(null, "class", "transform-points");

    var pathelem1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    pathelem1.setAttributeNS(null, "d", path);
    pathelem1.setAttributeNS(null, "stroke-width", 20);
    pathelem1.setAttributeNS(null, "class", form.name);
    pathelem1.setAttributeNS(null, "stroke", "gray");
    pathelem1.setAttributeNS(null, "stroke-linejoin", "miter");
    pathelem1.setAttributeNS(null, "stroke-miterlimit", 10);

    var pathelem2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    pathelem2.setAttributeNS(null, "d", path);
    pathelem2.setAttributeNS(null, "class", form.name);
    document.getElementById("drowforme").appendChild(g);
    document.getElementById(form.name).appendChild(pathelem1);
    document.getElementById(form.name).appendChild(transformpoint);
}

var drowTransformPoint = function (form) {

    var i = 0;
    for (i; i < form.points.length; i++) {
        if (form.points[i] !== "arc") {
            var rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
            rect.setAttributeNS(null, "x", (form.points[i].x - 20));
            rect.setAttributeNS(null, "y", (form.points[i].y - 20));
            rect.setAttributeNS(null, "width", 40);
            rect.setAttributeNS(null, "height", 40);
            rect.setAttributeNS(null, "stroke-width", 2);
            rect.setAttributeNS(null, "stroke", "blue");
            rect.setAttributeNS(null, "fill", "transparent");
            rect.setAttributeNS(null, "id", ("pointcontrole-" + i + "-" + form.name));
            rect.setAttributeNS(null, "data-id", i);
            document.getElementById(form.name).children[1].appendChild(rect);
        } else {
            var pc = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            pc.setAttributeNS(null, "id", ("pointcontrole-" + i + "-" + form.name));
            pc.setAttributeNS(null, "data-id", i);
            pc.setAttributeNS(null, "r", 15);
            pc.setAttributeNS(null, "stroke-width", 1);
            pc.setAttributeNS(null, "stroke", "red");
            pc.setAttributeNS(null, "fill", "transparent");
            pc.setAttributeNS(null, "cx", form.pControl[i].x);
            pc.setAttributeNS(null, "cy", form.pControl[i].y);
            document.getElementById(form.name).children[3].appendChild(pc);
        }
    }
}

var updateElement = function (path, name) {
    var groupForm = document.getElementById((name)),
        groupFormClippath = document.getElementById(("cp-" + name));

    groupForm.children[2].setAttributeNS(null, "d", path);
    groupFormClippath.children[0].setAttributeNS(null, "d", path);
}

function checkLineCircleIntersection(a, b, cx, cy, r) {

    var A = 1 + (a * a),
        B = 2 * (a * b - a * cy - cx),
        C = (cx * cx) + (cy * cy) + (b * b) - (2 * b * cy) - (r * r),
        delta = (B * B) - (4 * A * C),
        lst = [];

    if (delta > 0) {
        var x = (-B - Math.sqrt(delta)) / (2 * A);
        var y = a * x + b;
        lst.push({ x: x, y: y });

        x = (-B + Math.sqrt(delta)) / (2 * A);
        y = a * x + b;
        lst.push({ x: x, y: y });
    } else if (delta == 0) {
        var x = -B / (2 * A);
        var y = a * x + b;

        lst.push({ x: x, y: y });
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

var curNextInter = {},
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