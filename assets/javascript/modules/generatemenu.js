
var drowMenuForm = function (form, container, ordre) {

    let simulation = {};
    simulation.id = "nav-" + form.name + "_" + ordre;
    simulation.chenfrein = [];

    let form_group = document.createElementNS("http://www.w3.org/2000/svg", "g");
    form_group.setAttributeNS(null, "id", simulation.id);

    let form_group_path = document.createElementNS("http://www.w3.org/2000/svg", "g");
    form_group_path.setAttributeNS(null, "id", "nav-form-path_" + ordre);

    let form_group_chanfrein = document.createElementNS("http://www.w3.org/2000/svg", "g");
    form_group_chanfrein.setAttributeNS(null, "id", "nav-form-chanfrein_" + ordre);

    document.getElementById(container).appendChild(form_group);
    document.getElementById(simulation.id).appendChild(form_group_path);
    document.getElementById(simulation.id).appendChild(form_group_chanfrein);

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
        simulation.chenfrein.push(points[0].p1);
        simulation.chenfrein.push(points[0].p2);
        let line = drowline(form, points[0].p1, points[0].p2, "translate", 0.5, 1);
        document.getElementById("nav-form-chanfrein_" + ordre).appendChild(line);
    }

    var t = "nav-form-path_" + ordre;
    drowElement(simulation, t);
}

var generateMenu = function (forms) {
    let i = 0;
    for (item in forms) {
        let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttributeNS(null, "viewBox", "0 0 450 450");
        svg.setAttributeNS(null, "width", 120);
        svg.setAttributeNS(null, "height", 120);
        svg.setAttributeNS(null, "id", forms[item].name);
        svg.setAttributeNS(null, "data-key", item);
        svg.setAttributeNS(null, "preserveAspectRatio", "xMidYMid meet");
        svg.setAttributeNS(null, "smiling", "fake");

        let g = document.createElementNS("http://www.w3.org/2000/svg", "g");
        g.setAttributeNS(null, "id", "nav-" + forms[item].name);
        g.setAttributeNS(null, "class", "translate");

        document.getElementById("menu").appendChild(svg);
        document.getElementById(forms[item].name).appendChild(g);
        drowMenuForm(forms[item], "nav-" + forms[item].name, i);
        i++;
    }
}