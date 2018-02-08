var drowSimulationContainer = function (simulation, container) {

    let form_group = document.createElementNS("http://www.w3.org/2000/svg", "g");
    form_group.setAttributeNS(null, "id", simulation.id);
    form_group.setAttributeNS(null, "data-id", simulation.order);
    form_group.setAttributeNS(null, "class", "form");

    let form_group_path = document.createElementNS("http://www.w3.org/2000/svg", "g");
    form_group_path.setAttributeNS(null, "id", container_path + simulation.order);
    form_group_path.setAttributeNS(null, "class", "form-path");

    let form_group_transform_point = document.createElementNS("http://www.w3.org/2000/svg", "g");
    form_group_transform_point.setAttributeNS(null, "id", container_transform_point + simulation.order);
    form_group_transform_point.setAttributeNS(null, "class", "form-transform-point");

    let form_group_chanfrein = document.createElementNS("http://www.w3.org/2000/svg", "g");
    form_group_chanfrein.setAttributeNS(null, "id", container_chanfrein + simulation.order);
    form_group_chanfrein.setAttributeNS(null, "class", "form-chanfrein");

    let form_group_clippath = document.createElementNS("http://www.w3.org/2000/svg", "g");
    form_group_clippath.setAttributeNS(null, "id", container_clippath + simulation.order);
    form_group_clippath.setAttributeNS(null, "class", "form-clippath");

    var clipPath = document.createElementNS("http://www.w3.org/2000/svg", "clipPath");
    clipPath.setAttributeNS(null, "id", "clippath_" + simulation.order);

    var image = document.createElementNS("http://www.w3.org/2000/svg", "image");
    image.setAttributeNS(null, "id", "image-" + simulation.order);
    image.setAttributeNS(null, "width", 1500);
    image.setAttributeNS(null, "height", 997);
    image.setAttributeNS("http://www.w3.org/1999/xlink", 'xlink:href', clippath_bgImage);
    image.setAttributeNS(null, "clip-path", "url(#clippath_" + simulation.order + ")");

    var pathelem = document.createElementNS("http://www.w3.org/2000/svg", "path");
    pathelem.setAttributeNS(null, "id", "path-" + simulation.order);
    pathelem.setAttributeNS(null, "d", simulation.path);

    document.getElementById(container).appendChild(form_group);
    document.getElementById(simulation.id).appendChild(form_group_clippath);
    document.getElementById(simulation.id).appendChild(form_group_path);
    document.getElementById(simulation.id).appendChild(form_group_chanfrein);
    document.getElementById(simulation.id).appendChild(form_group_transform_point);
    document.getElementById("form-clippath_" + simulation.order).appendChild(clipPath);
    document.getElementById("form-clippath_" + simulation.order).appendChild(image);
    document.getElementById("clippath_" + simulation.order).appendChild(pathelem);
}

var drowchenfrain = function (form) {
    let chenfrein = [];

    for (let j = 0; j < form.points.length; j++) {
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
        chenfrein.push(points[0].p1);
        chenfrein.push(points[0].p2);
        let line = drowline(form, points[0].p1, points[0].p2, "translate", 0.5, 1, "black");
        document.getElementById(container_chanfrein + nombre_simulation).appendChild(line);
    }

    return chenfrein;
}

var drowElement = function (simulation, container) {
    var path = "";
    var j = 0;
    for (var i = 0; i < simulation.chenfrein.length / 2; i++) {
        path = "M" + simulation.chenfrein[j].x + "," + simulation.chenfrein[j].y;
        path += " L" + simulation.chenfrein[j + 1].x + "," + simulation.chenfrein[j + 1].y;

        if ((simulation.chenfrein.length / 2) - 1 !== i) {
            path += " L" + simulation.chenfrein[j + 3].x + "," + simulation.chenfrein[j + 3].y;
            path += " L" + simulation.chenfrein[j + 2].x + "," + simulation.chenfrein[j + 2].y;
            j += 2;
        } else {
            path += " L" + simulation.chenfrein[1].x + "," + simulation.chenfrein[1].y;
            path += " L" + simulation.chenfrein[0].x + "," + simulation.chenfrein[0].y;
        }

        path += " z";
        let pathelem1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
        pathelem1.setAttributeNS(null, "d", path);
        pathelem1.setAttributeNS(null, "stroke-width", 0.5);
        pathelem1.setAttributeNS(null, "stroke", "black");
        pathelem1.setAttributeNS(null, "fill", "gray");

        document.getElementById(container).appendChild(pathelem1);
    }
}

var drowForm = function (form, container) {
    nombre_simulation++;
    let simulation = {
        id: form.name + "_" + nombre_simulation,
        name: form.name,
        type: form.type,
        path: calculPath(form),
        order: nombre_simulation,
        chenfrein: [],
        points: [],
        point_transform: []
    };

    drowSimulationContainer(simulation, container);
    simulation.chenfrein = drowchenfrain(form);

    for (let a = 0; a < form.points.length; a++) {
        simulation.points[a] = { x: form.points[a].x, y: form.points[a].y };
    }

    for (let a = 0; a < form.point_transform.length; a++) {
        simulation.point_transform[a] = {
            "position": { x: points[form.point_transform[a].position].x, y: points[form.point_transform[a].position].y },
            "direction": form.point_transform[a].direction,
            "for": form.point_transform[a].for,
            "for_pt": form.point_transform[a].for_pt,
            "limit": form.point_transform[a].limit
        };
    }

    simulations.push(simulation);
    document.getElementById(container_transform_point + simulation.order).innerHTML = "";
    DrowTransformPoint(simulation);
    drowElement(simulation, container_path + simulation.order);
}

var updateForm = function (simulation) {
    let path = calculPath(simulation);
    simulation.chenfrein = []
    document.getElementById(container_chanfrein + simulation.order).innerHTML = "";

    for (let j = 0; j < simulation.points.length; j++) {

        let points = [];
        if (simulation.type === "porte") {
            if (j === 0 && simulation.points[j].y > simulation.points[j + 1].y || j === (simulation.points.length - 1) && simulation.points[simulation.points.length - 1].y < simulation.points[simulation.points.length - 2].y) {
                let p1 = { "x": simulation.points[j].x - stroke_with, "y": simulation.points[j].y }
                let p2 = { "x": simulation.points[j].x + stroke_with, "y": simulation.points[j].y }
                points.push({ p1, p2 });
            } else if (j === 0 && simulation.points[j].y < simulation.points[j + 1].y || j === (simulation.points.length - 1) && simulation.points[simulation.points.length - 1].y > simulation.points[simulation.points.length - 2].y) {
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



        simulation.chenfrein.push(points[0].p1);
        simulation.chenfrein.push(points[0].p2);
        let line = drowline(simulation, points[0].p1, points[0].p2, "translate", 0.5, 1);
        document.getElementById(container_chanfrein + simulation.order).appendChild(line);
    }

    document.getElementById("path-" + simulation.order).setAttribute("d", path);
    document.getElementById(container_path + simulation.order).innerHTML = "";
    document.getElementById(container_transform_point + simulation.order).innerHTML = "";
    DrowTransformPoint(simulation);
    drowElement(simulation, container_path + simulation.order);
}

var DrowTransformPoint = function (simuation) {

    for (let i = 0; i < simuation.point_transform.length; i++) {
        let rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        rect.setAttributeNS(null, "x", simuation.point_transform[i].position.x - 10);
        rect.setAttributeNS(null, "y", simuation.point_transform[i].position.y - 10);
        rect.setAttributeNS(null, "width", 20);
        rect.setAttributeNS(null, "height", 20);
        rect.setAttributeNS(null, "stroke-width", 2);
        rect.setAttributeNS(null, "stroke", "blue");
        rect.setAttributeNS(null, "fill", "transparent");
        rect.setAttributeNS(null, "id", "point-controle-" + i);
        rect.setAttributeNS(null, "data-id", i);
        rect.setAttributeNS(null, "data-form-id", simuation.order);
        document.getElementById(container_transform_point + simuation.order).appendChild(rect);
    }
}