
var calculChenfrain = function (form, j) {
    let points = [];

    if (form.type === "porte") {
        if (j === 0 && form.points[j].y > form.points[j + 1].y || j === (form.points.length - 1) && form.points[form.points.length - 1].y < form.points[form.points.length - 2].y) {
            let p1 = { "x": form.points[j].x - stroke_with, "y": form.points[j].y }
            let p2 = { "x": form.points[j].x + stroke_with, "y": form.points[j].y }
            points.push({ p1, p2 });
        } else if (j === 0 && form.points[j].y < form.points[j + 1].y || j === (form.points.length - 1) && form.points[form.points.length - 1].y > form.points[form.points.length - 2].y) {
            let p1 = { "x": form.points[j].x + stroke_with, "y": form.points[j].y }
            let p2 = { "x": form.points[j].x - stroke_with, "y": form.points[j].y }
            points.push({ p1, p2 });
        } else {
            points.push(getchenfrainOfcurrentPoints(form, form.points[j], form.points[j + 1], form.points[j - 1], stroke_with));
        }
    } else {
        if (j === 0) {
            points.push(getchenfrainOfcurrentPoints(form, form.points[j], form.points[j + 1], form.points[form.points.length - 1], stroke_with));
        } else if (j === (form.points.length - 1)) {
            points.push(getchenfrainOfcurrentPoints(form, form.points[j], form.points[0], form.points[j - 1], stroke_with));
        } else {
            points.push(getchenfrainOfcurrentPoints(form, form.points[j], form.points[j + 1], form.points[j - 1], stroke_with));
        }
    }

    return points;
}

var drowchenfrain = function (form) {
    let chenfrein = [];

    for (let j = 0; j < form.points.length; j++) {
        let points = [];
        points = calculChenfrain(form, j);

        chenfrein.push(points[0].p1);
        chenfrein.push(points[0].p2);
        let line = drowline(form, points[0].p1, points[0].p2, "translate", 0.5, 1);
        document.getElementById(container_chanfrein + nombre_simulation).appendChild(line);
    }
    return chenfrein;
}