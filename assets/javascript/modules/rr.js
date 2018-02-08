let points = [];
if (simulation.type === "porte") {
    if (j === 0) {
        let p1 = { "x": simulation.points[j].x - stroke_with, "y": simulation.points[j].y }
        let p2 = { "x": simulation.points[j].x + stroke_with, "y": simulation.points[j].y }
        points.push({ p1, p2 });
    } else if (j === (simulation.points.length - 1)) {
        let p1 = { "x": simulation.points[j].x + stroke_with, "y": simulation.points[j].y }
        let p2 = { "x": simulation.points[j].x - stroke_with, "y": simulation.points[j].y }
        points.push({ p1, p2 });
    } else {
        points.push(getchenfrainOfcurrentPoints(simulation, simulation.points[j], simulation.points[j + 1], simulation.points[j - 1], stroke_with));
    }
} else {
    if (j === 0) {
        points.push(getchenfrainOfcurrentPoints(simulation, simulation.points[j], simulation.points[j + 1], simulation.points[simulation.points.length - 1], stroke_with));
    } else if (j === (simulation.points.length - 1)) {
        points.push(getchenfrainOfcurrentPoints(simulation, simulation.points[j], simulation.points[0], simulation.points[j - 1], stroke_with));
    } else {
        points.push(getchenfrainOfcurrentPoints(simulation, simulation.points[j], simulation.points[j + 1], simulation.points[j - 1], stroke_with));
    }
}


imposte: [
    { "t": [{ p1: points.b2, p2: points.b6 }] },
    { "l": [{ p1: points.b2, p2: points.b6 }] },
    { "r": [{ p1: points.b2, p2: points.b6 }] },
    { "tl": [{ p1: points.b2, p2: points.b6 }, { p1: points.i3, p2: points.b3 }] },
    { "tr": [{ p1: points.b2, p2: points.b6 }, { p1: points.i5, p2: points.b5 }] },
    { "tlr": [{ p1: points.b2, p2: points.b6 }, { p1: points.i3, p2: points.b3 }, { p1: points.i5, p2: points.b5 }] }
],