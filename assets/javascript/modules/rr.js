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