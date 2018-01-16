
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

    return linevObj;
}

function drowline(form, p1, p2, elemtoadd, stroke_width, stroke_opacity, stroke_color) {
    var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttributeNS(null, "x1", p1.x);
    line.setAttributeNS(null, "y1", p1.y);
    line.setAttributeNS(null, "x2", p2.x);
    line.setAttributeNS(null, "y2", p2.y);
    line.setAttributeNS(null, "stroke-width", stroke_width);
    line.setAttributeNS(null, "stroke-opacity", stroke_opacity);
    line.setAttributeNS(null, "stroke", stroke_color);

    document.getElementById(form.name).children[2].appendChild(line);
}

function getIntersectionCircleLine(x1, y1, x2, y2, Cx, Cy, Cr) {

    // compute the euclidean distance between A and B
    var LAB = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
    // compute the direction vector D from A to B
    var Dx = (x2 - x1) / LAB;
    var Dy = (y2 - y1) / LAB;

    // compute the value t of the closest point to the circle center (Cx, Cy)
    var t = Dx * (Cx - x1) + Dy * (Cy - y1);

    // This is the projection of C on the line from A to B.
    // compute the coordinates of the point E on line and closest to C
    var Ex = (t * Dx) + x1;
    var Ey = (t * Dy) + y1;

    // compute the euclidean distance from E to C
    var LEC = Math.sqrt(Math.pow((Ex - Cx), 2) + Math.pow((Ey - Cy), 2));

    // test if the line intersects the circle
    if (LEC < Cr) {
        // compute distance from t to circle intersection point
        var dt = Math.sqrt(Math.pow(Cr, 2) - Math.pow(LEC, 2));

        // compute first intersection point
        var Fx = (t - dt) * Dx + x1;
        var Fy = (t - dt) * Dy + y1;


        // compute second intersection point
        var Gx = (t + dt) * Dx + x1;
        var Gy = (t + dt) * Dy + y1;


        return [{ x: Fx, y: Fy }, { x: Gx, y: Gy }];
    }
}
