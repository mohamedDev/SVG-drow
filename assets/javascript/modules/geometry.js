
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

function getEquationOfLineFromTwoPoints(point1, point2) {

    console.log(point1)
    console.log(point2)
	var lineObj = {
		gradient: (point1.y - point2.y) / (point1.x - point2.x)
	}, parts;
 
    console.log(lineObj.gradient)

	lineObj.yIntercept = point1.y - lineObj.gradient * point1.x;
	lineObj.toString = function() {
		if(Math.abs(lineObj.gradient) === Infinity) {
			return 'x = ' + point1.x;
		}
		else {
			parts = [];
 
			if(lineObj.gradient !== 0) {
				parts.push(lineObj.gradient + 'x');
			}
 
			if(lineObj.yIntercept !== 0) {
				parts.push(lineObj.yIntercept);
			}
 
			return 'y = ' + parts.join(' + ');
		}
	};
 
	return lineObj;
}