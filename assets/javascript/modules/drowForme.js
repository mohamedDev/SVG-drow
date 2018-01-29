var drowTransformPoint = function (form) {
    for (let i = 0; i < form.points.length; i++) {
        let rect = drowRect(form, i);
        document.getElementById(container_transform_point + form.order).appendChild(rect);
    }
}

var drowTransformline = function (form) {
    let i = 0;
    let x, y;

    for (i; i < form.points.length; i++) {
        let rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        rect.setAttributeNS(null, "data-id", i);
        rect.setAttributeNS(null, "width", 10);
        rect.setAttributeNS(null, "height", 10);
        rect.setAttributeNS(null, "stroke-width", 1);
        rect.setAttributeNS(null, "stroke", "blue");
        rect.setAttributeNS(null, "fill", "blue");
        rect.setAttributeNS(null, "data-form-id", form.order);

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

            document.getElementById(container_transform_line + form.order).appendChild(rect);
        }
    }
}

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

    let form_group_transform_line = document.createElementNS("http://www.w3.org/2000/svg", "g");
    form_group_transform_line.setAttributeNS(null, "id", container_transform_line + simulation.order);
    form_group_transform_line.setAttributeNS(null, "class", "form-transform-line");

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
    document.getElementById(simulation.id).appendChild(form_group_transform_line);
    document.getElementById("form-clippath_" + simulation.order).appendChild(clipPath);
    document.getElementById("form-clippath_" + simulation.order).appendChild(image);
    document.getElementById("clippath_" + simulation.order).appendChild(pathelem);
}

var drowchenfrain = function (form) {
    let chenfrein = [];
    for (let j = 0; j < form.points.length; j++) {
        let points = [];
        if (j === 0) {
            points.push(getchenfrainOfcurrentPoints(form, form.points[j], form.points[j + 1], form.points[form.points.length - 1], stroke_with));
        } else if (j === (form.points.length - 1)) {
            points.push(getchenfrainOfcurrentPoints(form, form.points[j], form.points[0], form.points[j - 1], stroke_with));
        } else {
            points.push(getchenfrainOfcurrentPoints(form, form.points[j], form.points[j + 1], form.points[j - 1], stroke_with));
        }
        chenfrein.push(points[0].p1);
        chenfrein.push(points[0].p2);
        let line = drowline(form, points[0].p1, points[0].p2, "translate", 0.5, 1, "red");
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
        pathelem1.setAttributeNS(null, "fill", "red");

        document.getElementById(container).appendChild(pathelem1);
    }
}

var drowForm = function (form, container) {
    nombre_simulation++;
    let simulation = {
        id: form.name + "_" + nombre_simulation,
        name: form.name,
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

    //{ "position": "a4", "for": [{ point: "a0", direction: "x" }] }
    for (let a = 0; a < form.point_transform.length; a++) {
        simulation.point_transform[a] = {
            "position": { x: points[form.point_transform[a].position].x, y: points[form.point_transform[a].position].y },
            "direction": form.point_transform[a].direction,
            "for": form.point_transform[a].for,
            "for_pt": form.point_transform[a].for_pt
        };
    }

    simulations.push(simulation);
    document.getElementById(container_transform_point + simulation.order).innerHTML = "";
    document.getElementById(container_transform_line + simulation.order).innerHTML = "";
    //drowTransformline(simulation)
    //drowTransformPoint(simulation);
    newDrowTransformPoint(simulation);
    drowElement(simulation, container_path + simulation.order);
}

var updateForm = function (simulation) {
    let path = calculPath(simulation);
    simulation.chenfrein = []
    document.getElementById(container_chanfrein + simulation.order).innerHTML = "";

    for (let j = 0; j < simulation.points.length; j++) {
        let points = [];
        if (j === 0) {
            points.push(getchenfrainOfcurrentPoints(simulation, simulation.points[j], simulation.points[j + 1], simulation.points[simulation.points.length - 1], stroke_with));
        } else if (j === (simulation.points.length - 1)) {
            points.push(getchenfrainOfcurrentPoints(simulation, simulation.points[j], simulation.points[0], simulation.points[j - 1], stroke_with));
        } else {
            points.push(getchenfrainOfcurrentPoints(simulation, simulation.points[j], simulation.points[j + 1], simulation.points[j - 1], stroke_with));
        }
        simulation.chenfrein.push(points[0].p1);
        simulation.chenfrein.push(points[0].p2);
        let line = drowline(simulation, points[0].p1, points[0].p2, "translate", 0.5, 1, "red");
        document.getElementById(container_chanfrein + simulation.order).appendChild(line);
    }

    document.getElementById("path-" + simulation.order).setAttribute("d", path);
    document.getElementById(container_path + simulation.order).innerHTML = "";
    document.getElementById(container_transform_point + simulation.order).innerHTML = "";
    document.getElementById(container_transform_line + simulation.order).innerHTML = "";
    //drowTransformline(simulation)
    //drowTransformPoint(simulation);
    newDrowTransformPoint(simulation);
    drowElement(simulation, container_path + simulation.order);
}

var newDrowTransformPoint = function (simuation) {

    for (let i = 0; i < simuation.point_transform.length; i++) {
        let rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        rect.setAttributeNS(null, "x", simuation.point_transform[i].position.x - 15);
        rect.setAttributeNS(null, "y", simuation.point_transform[i].position.y - 15);
        rect.setAttributeNS(null, "width", 30);
        rect.setAttributeNS(null, "height", 30);
        rect.setAttributeNS(null, "stroke-width", 1);
        rect.setAttributeNS(null, "stroke", "blue");
    
        rect.setAttributeNS(null, "fill", "transparent");
        rect.setAttributeNS(null, "id", "point-controle-" + i);
        rect.setAttributeNS(null, "data-id", i);
        rect.setAttributeNS(null, "data-form-id", simuation.order);
        document.getElementById(container_transform_point + simuation.order).appendChild(rect);
    }
}