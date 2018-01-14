var calculPath = function (form) {

    let i = 1,
        dx,
        dy,
        path = "M" + form.points[0].x + "," + form.points[0].y;

    // getchenfrainOfcurrentPoints(currentPoint, nextpoint, prevPoint) 
    //getchenfrainOfcurrentPoints(form.points[0], form.points[1], form.points[3]);
    //getchenfrainOfcurrentPoints(form.points[2], form.points[3], form.points[1]);


    for (j = 0; j < form.points.length; j++) {
        if (j === 0) {
            getchenfrainOfcurrentPoints(form.points[j], form.points[j + 1], form.points[form.points.length - 1]);
        } else if (j === (form.points.length - 1)) {
            getchenfrainOfcurrentPoints(form.points[j], form.points[0], form.points[j - 1]);
        } else {
            getchenfrainOfcurrentPoints(form.points[j], form.points[j + 1], form.points[j - 1]);
        }
    }


    for (i; i < form.points.length; i++) {
        if (form.points[i] === "arc") {
            if ((i + 1) === form.points.length) {
                dx = ((form.points[0].x - form.points[i - 1].x) / 2) + form.points[i - 1].x;
                dy = ((form.points[0].y - form.points[i - 1].y) / 2) + form.points[i - 1].y;
            } else {
                dx = ((form.points[i + 1].x - form.points[i - 1].x) / 2) + form.points[i - 1].x;
                dy = ((form.points[i + 1].y - form.points[i - 1].y) / 2) + form.points[i - 1].y;
            }
            path += " Q" + dx + "," + dy + " ";
            i++;
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



function getchenfrainOfcurrentPoints(currentPoint, nextpoint, prevPoint) {

    var curNextInter = [],
        nextCurInter = [],
        curPrevInter = [],
        prevCurInter = [];

    if (currentPoint.x === prevPoint.x && prevPoint.y > currentPoint.y) {
        prevCurInter.push({ x: prevPoint.x - 10, y: prevPoint.y });
        prevCurInter.push({ x: prevPoint.x + 10, y: prevPoint.y });
        curPrevInter.push({ x: currentPoint.x - 10, y: currentPoint.y });
        curPrevInter.push({ x: currentPoint.x + 10, y: currentPoint.y });
    }

    if (currentPoint.x === prevPoint.x && prevPoint.y < currentPoint.y) {
        prevCurInter.push({ x: prevPoint.x + 10, y: prevPoint.y });
        prevCurInter.push({ x: prevPoint.x - 10, y: prevPoint.y });
        curPrevInter.push({ x: currentPoint.x + 10, y: currentPoint.y });
        curPrevInter.push({ x: currentPoint.x - 10, y: currentPoint.y });
    }

    if (currentPoint.y === nextpoint.y && nextpoint.x > currentPoint.x) {
        curNextInter.push({ x: currentPoint.x, y: currentPoint.y - 10 });
        curNextInter.push({ x: currentPoint.x, y: currentPoint.y + 10 });
        nextCurInter.push({ x: nextpoint.x, y: nextpoint.y - 10 });
        nextCurInter.push({ x: nextpoint.x, y: nextpoint.y + 10 });
    }

    if (currentPoint.y === nextpoint.y && nextpoint.x < currentPoint.x) {
        curNextInter.push({ x: currentPoint.x, y: currentPoint.y + 10 });
        curNextInter.push({ x: currentPoint.x, y: currentPoint.y - 10 });
        nextCurInter.push({ x: nextpoint.x, y: nextpoint.y + 10 });
        nextCurInter.push({ x: nextpoint.x, y: nextpoint.y - 10 });
    }

    ////////////////////////

    if (currentPoint.y === prevPoint.y && prevPoint.x < currentPoint.x) {
        prevCurInter.push({ x: prevPoint.x, y: prevPoint.y - 10 });
        prevCurInter.push({ x: prevPoint.x, y: prevPoint.y + 10 });
        curPrevInter.push({ x: currentPoint.x, y: currentPoint.y - 10 });
        curPrevInter.push({ x: currentPoint.x, y: currentPoint.y + 10 });
    }

    if (currentPoint.y === prevPoint.y && prevPoint.x > currentPoint.x) {
        prevCurInter.push({ x: prevPoint.x, y: prevPoint.y + 10 });
        prevCurInter.push({ x: prevPoint.x, y: prevPoint.y - 10 });
        curPrevInter.push({ x: currentPoint.x, y: currentPoint.y + 10 });
        curPrevInter.push({ x: currentPoint.x, y: currentPoint.y - 10 });
    }

    if (currentPoint.x === nextpoint.x && nextpoint.y < currentPoint.y) {
        curNextInter.push({ x: currentPoint.x - 10, y: currentPoint.y });
        curNextInter.push({ x: currentPoint.x + 10, y: currentPoint.y });
        nextCurInter.push({ x: nextpoint.x - 10, y: nextpoint.y });
        nextCurInter.push({ x: nextpoint.x + 10, y: nextpoint.y });
    }

    if (currentPoint.x === nextpoint.x && nextpoint.y > currentPoint.y) {
        curNextInter.push({ x: currentPoint.x + 10, y: currentPoint.y });
        curNextInter.push({ x: currentPoint.x - 10, y: currentPoint.y });
        nextCurInter.push({ x: nextpoint.x + 10, y: nextpoint.y });
        nextCurInter.push({ x: nextpoint.x - 10, y: nextpoint.y });
    }




    console.log("prevCurInter : ")
    console.log(prevCurInter)
    console.log("curPrevInter : ")
    console.log(curPrevInter)
    console.log("curNextInter : ")
    console.log(curNextInter)
    console.log("nextCurInter : ")
    console.log(nextCurInter)
    console.log("---")

    var p1 = checkLineIntersection(prevCurInter[0], curPrevInter[0], curNextInter[0], nextCurInter[0]);
    var p2 = checkLineIntersection(prevCurInter[1], curPrevInter[1], curNextInter[1], nextCurInter[1]);

    console.log(p1)
    console.log(p2)
    console.log("-------------------------------")
    console.log("-------------------------------")

    drowline(p1, p2, "translate");


    /*
    var t = getEquationOfverticalLineFromTwoPoints(prevPoint, currentPoint);
    prevCurInter = checkLineCircleIntersection(t.a, t.b, prevPoint.x, prevPoint.y, 10);
    console.log("-----------");
    console.log(t);
    console.log(prevCurInter);
    
    t = getEquationOfverticalLineFromTwoPoints(currentPoint, nextpoint);
    curNextInter = checkLineCircleIntersection(t.a, t.b, currentPoint.x, currentPoint.y, 10);
    console.log("-----------");
    console.log(t);
    console.log(curNextInter);
    
    t = getEquationOfverticalLineFromTwoPoints(nextpoint, currentPoint);
    nextCurInter = checkLineCircleIntersection(t.a, t.b, nextpoint.x, nextpoint.y, 10);
    console.log("-----------");
    console.log(t);
    console.log(nextCurInter);
    
    t = getEquationOfverticalLineFromTwoPoints(currentPoint, prevPoint);
    curPrevInter = checkLineCircleIntersection(t.a, t.b, currentPoint.x, currentPoint.y, 10);
    console.log("-----------");
    console.log(t);
    console.log(curPrevInter);



    p1 = checkLineIntersection(curNextInter[1], nextCurInter[1], curPrevInter[0], prevCurInter[0]);
    p2 = checkLineIntersection(curNextInter[0], nextCurInter[0], curPrevInter[1], prevCurInter[1]);
    */

}

var updateElement = function (path, name) {
    var groupForm = document.getElementById((name)),
        groupFormClippath = document.getElementById(("cp-" + name));

    groupForm.children[2].setAttributeNS(null, "d", path);
    groupFormClippath.children[0].setAttributeNS(null, "d", path);
}