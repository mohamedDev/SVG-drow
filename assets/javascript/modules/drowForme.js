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

var drowForm = function (form) {

    let path = calculPath(form);
    let g = document.createElementNS("http://www.w3.org/2000/svg", "g");
    g.setAttributeNS(null, "id", form.name);

    var transformpoint = document.createElementNS("http://www.w3.org/2000/svg", "g");
    transformpoint.setAttributeNS(null, "class", "transform-points");

    var chanfreinPoint = document.createElementNS("http://www.w3.org/2000/svg", "g");
    chanfreinPoint.setAttributeNS(null, "class", "chanfrein-points");

    var pathelem1 = drowPath(form, path, 20);

    document.getElementById("drowforme").appendChild(g);
    document.getElementById(form.name).appendChild(pathelem1);
    document.getElementById(form.name).appendChild(transformpoint);
    document.getElementById(form.name).appendChild(chanfreinPoint);

    // getchenfrainOfcurrentPoints(currentPoint, nextpoint, prevPoint) 
    getchenfrainOfcurrentPoints(form, form.points[0], form.points[1], form.points[3]);
/*    
    for (j = 0; j < form.points.length; j++) {
        if (j === 0) {
            getchenfrainOfcurrentPoints(form, form.points[j], form.points[j + 1], form.points[form.points.length - 1]);
        } else if (j === (form.points.length - 1)) {
            getchenfrainOfcurrentPoints(form, form.points[j], form.points[0], form.points[j - 1]);
        } else {
            getchenfrainOfcurrentPoints(form, form.points[j], form.points[j + 1], form.points[j - 1]);
        }
    }
*/
}

var drowTransformPoint = function (form) {

    var i = 0;
    for (i; i < form.points.length; i++) {
        if (form.points[i] !== "arc") {
            let rect = drowRect(form, i);
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

function getchenfrainOfcurrentPoints(form, currentPoint, nextpoint, prevPoint) {

    var curNextInter = [],
        nextCurInter = [],
        curPrevInter = [],
        prevCurInter = [],
        t = {};

    if (currentPoint.x === prevPoint.x) {
        if (prevPoint.y > currentPoint.y) {
            prevCurInter.push({ x: prevPoint.x - 10, y: prevPoint.y });
            prevCurInter.push({ x: prevPoint.x + 10, y: prevPoint.y });
            curPrevInter.push({ x: currentPoint.x - 10, y: currentPoint.y });
            curPrevInter.push({ x: currentPoint.x + 10, y: currentPoint.y });
        } else {
            prevCurInter.push({ x: prevPoint.x + 10, y: prevPoint.y });
            prevCurInter.push({ x: prevPoint.x - 10, y: prevPoint.y });
            curPrevInter.push({ x: currentPoint.x + 10, y: currentPoint.y });
            curPrevInter.push({ x: currentPoint.x - 10, y: currentPoint.y });
        }
    }

    if (currentPoint.x !== prevPoint.x && currentPoint.y !== prevPoint.y && currentPoint.x !== nextpoint.x && currentPoint.y !== nextpoint.y) {

        if (prevPoint.x < currentPoint.x && prevPoint.y > currentPoint.y) {
            t = getEquationOfverticalLineFromTwoPoints(prevPoint, currentPoint);
            prevCurInter = checkLineCircleIntersection(t.a, t.b, prevPoint.x, prevPoint.y, 10, "left");
            console.log(prevCurInter)

            t = getEquationOfverticalLineFromTwoPoints(currentPoint, prevPoint);
            curPrevInter = checkLineCircleIntersection(t.a, t.b, currentPoint.x, currentPoint.y, 10, "left");
            console.log(curPrevInter)
        } 

        /*if (prevPoint.x > currentPoint.x && prevPoint.y > currentPoint.x) {            
            t = getEquationOfverticalLineFromTwoPoints(prevPoint, currentPoint);
            prevCurInter = checkLineCircleIntersection(t.a, t.b, prevPoint.x, prevPoint.y, 10, "left");

            t = getEquationOfverticalLineFromTwoPoints(currentPoint, prevPoint);
            curPrevInter = checkLineCircleIntersection(t.a, t.b, currentPoint.x, currentPoint.y, 10, "right");
        }*/

        if (currentPoint.x < nextpoint.x && currentPoint.y < nextpoint.y) {
            t = getEquationOfverticalLineFromTwoPoints(currentPoint, nextpoint);
            curNextInter = checkLineCircleIntersection(t.a, t.b, currentPoint.x, currentPoint.y, 10, "letf");
            console.log(curNextInter)

            t = getEquationOfverticalLineFromTwoPoints(nextpoint, currentPoint);
            nextCurInter = checkLineCircleIntersection(t.a, t.b, nextpoint.x, nextpoint.y, 10, "right");
            console.log(nextCurInter)
        } 

        /*else {
            t = getEquationOfverticalLineFromTwoPoints(currentPoint, nextpoint);
            curNextInter = checkLineCircleIntersection(t.a, t.b, currentPoint.x, currentPoint.y, 10, "left");

            t = getEquationOfverticalLineFromTwoPoints(nextpoint, currentPoint);
            nextCurInter = checkLineCircleIntersection(t.a, t.b, nextpoint.x, nextpoint.y, 10, "right");
        }*/
    }

    if (currentPoint.y === nextpoint.y) {
        if (nextpoint.x > currentPoint.x) {
            curNextInter.push({ x: currentPoint.x, y: currentPoint.y - 10 });
            curNextInter.push({ x: currentPoint.x, y: currentPoint.y + 10 });
            nextCurInter.push({ x: nextpoint.x, y: nextpoint.y - 10 });
            nextCurInter.push({ x: nextpoint.x, y: nextpoint.y + 10 });
        } else {
            curNextInter.push({ x: currentPoint.x, y: currentPoint.y + 10 });
            curNextInter.push({ x: currentPoint.x, y: currentPoint.y - 10 });
            nextCurInter.push({ x: nextpoint.x, y: nextpoint.y + 10 });
            nextCurInter.push({ x: nextpoint.x, y: nextpoint.y - 10 });
        }
    }

    /*if (currentPoint.y !== nextpoint.y && currentPoint.x !== nextpoint.x) {
        if (nextpoint.x < currentPoint.x) {
            t = getEquationOfverticalLineFromTwoPoints(currentPoint, nextpoint);
            curNextInter = checkLineCircleIntersection(t.a, t.b, currentPoint.x, currentPoint.y, 10, "left");

            t = getEquationOfverticalLineFromTwoPoints(nextpoint, currentPoint);
            nextCurInter = checkLineCircleIntersection(t.a, t.b, nextpoint.x, nextpoint.y, 10, "right");
        } else {
            t = getEquationOfverticalLineFromTwoPoints(currentPoint, nextpoint);
            curNextInter = checkLineCircleIntersection(t.a, t.b, currentPoint.x, currentPoint.y, 10, "right");

            t = getEquationOfverticalLineFromTwoPoints(nextpoint, currentPoint);
            nextCurInter = checkLineCircleIntersection(t.a, t.b, nextpoint.x, nextpoint.y, 10, "left");
        }
    }*/

    ////////////////////////

    if (currentPoint.y === prevPoint.y) {
        if (prevPoint.x < currentPoint.x) {
            prevCurInter.push({ x: prevPoint.x, y: prevPoint.y - 10 });
            prevCurInter.push({ x: prevPoint.x, y: prevPoint.y + 10 });
            curPrevInter.push({ x: currentPoint.x, y: currentPoint.y - 10 });
            curPrevInter.push({ x: currentPoint.x, y: currentPoint.y + 10 });
        } else {
            prevCurInter.push({ x: prevPoint.x, y: prevPoint.y + 10 });
            prevCurInter.push({ x: prevPoint.x, y: prevPoint.y - 10 });
            curPrevInter.push({ x: currentPoint.x, y: currentPoint.y + 10 });
            curPrevInter.push({ x: currentPoint.x, y: currentPoint.y - 10 });
        }
    }

    if (currentPoint.x === nextpoint.x) {
        if (nextpoint.y < currentPoint.y) {
            curNextInter.push({ x: currentPoint.x - 10, y: currentPoint.y });
            curNextInter.push({ x: currentPoint.x + 10, y: currentPoint.y });
            nextCurInter.push({ x: nextpoint.x - 10, y: nextpoint.y });
            nextCurInter.push({ x: nextpoint.x + 10, y: nextpoint.y });
        } else {
            curNextInter.push({ x: currentPoint.x + 10, y: currentPoint.y });
            curNextInter.push({ x: currentPoint.x - 10, y: currentPoint.y });
            nextCurInter.push({ x: nextpoint.x + 10, y: nextpoint.y });
            nextCurInter.push({ x: nextpoint.x - 10, y: nextpoint.y });
        }
    }

    console.log("-----")
    console.log(prevCurInter[0])
    console.log(curPrevInter[0])
    console.log(curNextInter[0])
    console.log(nextCurInter[0])

    var p1 = checkLineIntersection(prevCurInter[0], curPrevInter[0], curNextInter[0], nextCurInter[0]);
    var p2 = checkLineIntersection(prevCurInter[1], curPrevInter[1], curNextInter[1], nextCurInter[1]);

    drowline(form, p1, p2, "translate", 0.5, 1, "red");

}

var updateElement = function (path, name) {
    var groupForm = document.getElementById((name)),
        groupFormClippath = document.getElementById(("cp-" + name));

    groupForm.children[2].setAttributeNS(null, "d", path);
    groupFormClippath.children[0].setAttributeNS(null, "d", path);
}