var getchenfrainOfcurrentPoints = function (form, currentPoint, nextpoint, prevPoint, stroke_width) {

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