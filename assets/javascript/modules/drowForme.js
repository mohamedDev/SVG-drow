var calculPath = function (form) {
    let i = 1,
        dx,
        dy,
        path = "M" + form.points[0].x + "," + form.points[0].y;

    for (i; i < form.points.length; i++) {
        if (form.points[i].name === "arc") {
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

var drowTransformPoint = function (form) {

    var i = 0;
    for (i; i < form.points.length; i++) {
        if (form.points[i] !== "arc") {
            let rect = drowRect(form, i);
            document.getElementById(form.name + "_" + nombre_simulation).children[1].appendChild(rect);
        } else {
            var pc = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            pc.setAttributeNS(null, "id", ("pointcontrole-" + i + "-" + form.name));
            pc.setAttributeNS(null, "data-id", form.name + "_" + i);
            pc.setAttributeNS(null, "r", 15);
            pc.setAttributeNS(null, "stroke-width", 1);
            pc.setAttributeNS(null, "stroke", "red");
            pc.setAttributeNS(null, "fill", "transparent");
            pc.setAttributeNS(null, "cx", form.pControl[i].x);
            pc.setAttributeNS(null, "cy", form.pControl[i].y);
            document.getElementById(form.name + "_" + nombre_simulation).children[3].appendChild(pc);
        }
    }
}

var drowTransformline = function (form) {
    let i = 0;
    let x, y;

    for (i; i < form.points.length; i++) {
        let rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        rect.setAttributeNS(null, "width", 10);
        rect.setAttributeNS(null, "height", 10);
        rect.setAttributeNS(null, "stroke-width", 1);
        rect.setAttributeNS(null, "stroke", "blue");
        rect.setAttributeNS(null, "fill", "blue");

        if (form.points[i] !== "arc") {
            if (i === 0) {
                x = (form.points[i].x + form.points[form.points.length - 1].x) / 2;
                y = (form.points[i].y + form.points[form.points.length - 1].y) / 2;
                rect.setAttributeNS(null, "data-prev", form.points.length - 1);
            } else {
                x = (form.points[i].x + form.points[i - 1].x) / 2;
                y = (form.points[i].y + form.points[i - 1].y) / 2;
                rect.setAttributeNS(null, "data-prev", i - 1);
            }
            rect.setAttributeNS(null, "data-next", i);
            rect.setAttributeNS(null, "x", x - 5);
            rect.setAttributeNS(null, "y", y - 5);

            document.getElementById(form.name + "_" + nombre_simulation).children[1].appendChild(rect);
        }
    }
}

function getchenfrainOfcurrentPoints(form, currentPoint, nextpoint, prevPoint, stroke_width) {

    var curNextInter = [],
        nextCurInter = [],
        curPrevInter = [],
        prevCurInter = [],
        t = {};

    if (currentPoint.x === prevPoint.x) {
        if (prevPoint.y > currentPoint.y) {
            prevCurInter.push({ x: prevPoint.x - stroke_width, y: prevPoint.y });
            prevCurInter.push({ x: prevPoint.x + stroke_width, y: prevPoint.y });
            curPrevInter.push({ x: currentPoint.x - stroke_width, y: currentPoint.y });
            curPrevInter.push({ x: currentPoint.x + stroke_width, y: currentPoint.y });
        } else {
            prevCurInter.push({ x: prevPoint.x + stroke_width, y: prevPoint.y });
            prevCurInter.push({ x: prevPoint.x - stroke_width, y: prevPoint.y });
            curPrevInter.push({ x: currentPoint.x + stroke_width, y: currentPoint.y });
            curPrevInter.push({ x: currentPoint.x - stroke_width, y: currentPoint.y });
        }
    }
    if (currentPoint.y === nextpoint.y) {
        if (nextpoint.x > currentPoint.x) {
            curNextInter.push({ x: currentPoint.x, y: currentPoint.y - stroke_width });
            curNextInter.push({ x: currentPoint.x, y: currentPoint.y + stroke_width });
            nextCurInter.push({ x: nextpoint.x, y: nextpoint.y - stroke_width });
            nextCurInter.push({ x: nextpoint.x, y: nextpoint.y + stroke_width });
        } else {
            curNextInter.push({ x: currentPoint.x, y: currentPoint.y + stroke_width });
            curNextInter.push({ x: currentPoint.x, y: currentPoint.y - stroke_width });
            nextCurInter.push({ x: nextpoint.x, y: nextpoint.y + stroke_width });
            nextCurInter.push({ x: nextpoint.x, y: nextpoint.y - stroke_width });
        }
    }

    if (currentPoint.y === prevPoint.y) {
        if (prevPoint.x < currentPoint.x) {
            prevCurInter.push({ x: prevPoint.x, y: prevPoint.y - stroke_width });
            prevCurInter.push({ x: prevPoint.x, y: prevPoint.y + stroke_width });
            curPrevInter.push({ x: currentPoint.x, y: currentPoint.y - stroke_width });
            curPrevInter.push({ x: currentPoint.x, y: currentPoint.y + stroke_width });
        } else {
            prevCurInter.push({ x: prevPoint.x, y: prevPoint.y + stroke_width });
            prevCurInter.push({ x: prevPoint.x, y: prevPoint.y - stroke_width });
            curPrevInter.push({ x: currentPoint.x, y: currentPoint.y + stroke_width });
            curPrevInter.push({ x: currentPoint.x, y: currentPoint.y - stroke_width });
        }
    }
    if (currentPoint.x === nextpoint.x) {
        if (nextpoint.y < currentPoint.y) {
            curNextInter.push({ x: currentPoint.x - stroke_width, y: currentPoint.y });
            curNextInter.push({ x: currentPoint.x + stroke_width, y: currentPoint.y });
            nextCurInter.push({ x: nextpoint.x - stroke_width, y: nextpoint.y });
            nextCurInter.push({ x: nextpoint.x + stroke_width, y: nextpoint.y });
        } else {
            curNextInter.push({ x: currentPoint.x + stroke_width, y: currentPoint.y });
            curNextInter.push({ x: currentPoint.x - stroke_width, y: currentPoint.y });
            nextCurInter.push({ x: nextpoint.x + stroke_width, y: nextpoint.y });
            nextCurInter.push({ x: nextpoint.x - stroke_width, y: nextpoint.y });
        }
    }

    if (prevPoint.x < currentPoint.x && prevPoint.y > currentPoint.y) {
        t = getEquationOfverticalLineFromTwoPoints(prevPoint, currentPoint);
        prevCurInter = checkLineCircleIntersection(t.a, t.b, prevPoint.x, prevPoint.y, stroke_width, "left");
        t = getEquationOfverticalLineFromTwoPoints(currentPoint, prevPoint);
        curPrevInter = checkLineCircleIntersection(t.a, t.b, currentPoint.x, currentPoint.y, stroke_width, "left");
    }
    if (currentPoint.x < nextpoint.x && currentPoint.y < nextpoint.y) {
        t = getEquationOfverticalLineFromTwoPoints(currentPoint, nextpoint);
        curNextInter = checkLineCircleIntersection(t.a, t.b, currentPoint.x, currentPoint.y, stroke_width, "letf");
        t = getEquationOfverticalLineFromTwoPoints(nextpoint, currentPoint);
        nextCurInter = checkLineCircleIntersection(t.a, t.b, nextpoint.x, nextpoint.y, stroke_width, "right");
    }
    if (prevPoint.x < currentPoint.x && prevPoint.y < currentPoint.y) {
        t = getEquationOfverticalLineFromTwoPoints(prevPoint, currentPoint);
        prevCurInter = checkLineCircleIntersection(t.a, t.b, prevPoint.x, prevPoint.y, stroke_width, "right");
        t = getEquationOfverticalLineFromTwoPoints(currentPoint, prevPoint);
        curPrevInter = checkLineCircleIntersection(t.a, t.b, currentPoint.x, currentPoint.y, stroke_width, "right");
    }
    if (currentPoint.x > nextpoint.x && currentPoint.y < nextpoint.y) {
        t = getEquationOfverticalLineFromTwoPoints(currentPoint, nextpoint);
        curNextInter = checkLineCircleIntersection(t.a, t.b, currentPoint.x, currentPoint.y, stroke_width, "letf");
        t = getEquationOfverticalLineFromTwoPoints(nextpoint, currentPoint);
        nextCurInter = checkLineCircleIntersection(t.a, t.b, nextpoint.x, nextpoint.y, stroke_width, "right");
    }
    if (prevPoint.x > currentPoint.x && prevPoint.y < currentPoint.y) {
        t = getEquationOfverticalLineFromTwoPoints(prevPoint, currentPoint);
        prevCurInter = checkLineCircleIntersection(t.a, t.b, prevPoint.x, prevPoint.y, stroke_width, "right");
        t = getEquationOfverticalLineFromTwoPoints(currentPoint, prevPoint);
        curPrevInter = checkLineCircleIntersection(t.a, t.b, currentPoint.x, currentPoint.y, stroke_width, "right");
    }
    if (currentPoint.x > nextpoint.x && currentPoint.y > nextpoint.y) {
        t = getEquationOfverticalLineFromTwoPoints(currentPoint, nextpoint);
        curNextInter = checkLineCircleIntersection(t.a, t.b, currentPoint.x, currentPoint.y, stroke_width, "left");
        t = getEquationOfverticalLineFromTwoPoints(nextpoint, currentPoint);
        nextCurInter = checkLineCircleIntersection(t.a, t.b, nextpoint.x, nextpoint.y, stroke_width, "left");
    }
    if (prevPoint.x > currentPoint.x && prevPoint.y > currentPoint.y) {
        t = getEquationOfverticalLineFromTwoPoints(prevPoint, currentPoint);
        prevCurInter = checkLineCircleIntersection(t.a, t.b, prevPoint.x, prevPoint.y, stroke_width, "left");
        t = getEquationOfverticalLineFromTwoPoints(currentPoint, prevPoint);
        curPrevInter = checkLineCircleIntersection(t.a, t.b, currentPoint.x, currentPoint.y, stroke_width, "left");
    }
    if (currentPoint.x < nextpoint.x && currentPoint.y > nextpoint.y) {
        t = getEquationOfverticalLineFromTwoPoints(currentPoint, nextpoint);
        curNextInter = checkLineCircleIntersection(t.a, t.b, currentPoint.x, currentPoint.y, stroke_width, "left");
        t = getEquationOfverticalLineFromTwoPoints(nextpoint, currentPoint);
        nextCurInter = checkLineCircleIntersection(t.a, t.b, nextpoint.x, nextpoint.y, stroke_width, "left");
    }


    var p1 = checkLineIntersection(prevCurInter[0], curPrevInter[0], curNextInter[0], nextCurInter[0]);
    var p2 = checkLineIntersection(prevCurInter[1], curPrevInter[1], curNextInter[1], nextCurInter[1]);
    return { p1, p2 };
}

var drowForm = function (form, container) {

    let simulation = {};
    nombre_simulation++;
    simulation.id = form.name + "_" + nombre_simulation;
    simulation.name = form.name;
    simulation.points = [];

    let path = calculPath(form);
    let g = document.createElementNS("http://www.w3.org/2000/svg", "g");
    g.setAttributeNS(null, "id", simulation.id);

    let transformpoint = document.createElementNS("http://www.w3.org/2000/svg", "g");
    transformpoint.setAttributeNS(null, "id", "transform-points_" + nombre_simulation);
    transformpoint.setAttributeNS(null, "class", "transform-points");

    let chanfreinPoint = document.createElementNS("http://www.w3.org/2000/svg", "g");
    chanfreinPoint.setAttributeNS(null, "id", "chanfrein-points_" + nombre_simulation);
    chanfreinPoint.setAttributeNS(null, "class", "chanfrein-points");

    let form_path = drowPath(form, path, 20);

    document.getElementById(container).appendChild(g);
    document.getElementById(simulation.id).appendChild(form_path);
    document.getElementById(simulation.id).appendChild(transformpoint);
    document.getElementById(simulation.id).appendChild(chanfreinPoint);
    drowTransformPoint(form);
    //drowTransformline(form);

    // getchenfrainOfcurrentPoints(currentPoint, nextpoint, prevPoint)
    for (let j = 0; j < form.points.length; j++) {
        let points = [];
        if (j === 0) {
            points.push(getchenfrainOfcurrentPoints(form, form.points[j], form.points[j + 1], form.points[form.points.length - 1], 10));
        } else if (j === (form.points.length - 1)) {
            points.push(getchenfrainOfcurrentPoints(form, form.points[j], form.points[0], form.points[j - 1], 10));
        } else {
            points.push(getchenfrainOfcurrentPoints(form, form.points[j], form.points[j + 1], form.points[j - 1], 10));
        }
        simulation.points.push(points[0].p1);
        simulation.points.push(points[0].p2);
        let line = drowline(form, points[0].p1, points[0].p2, "translate", 0.5, 1, "red");
        document.getElementById(simulation.id).children[2].appendChild(line);
    }

    simulations.push(simulation);
}

var updateElement = function (path, name) {
    var groupForm = document.getElementById((name)),
        groupFormClippath = document.getElementById(("cp-" + name));

    groupForm.children[2].setAttributeNS(null, "d", path);
    groupFormClippath.children[0].setAttributeNS(null, "d", path);
}