
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
        points = calculChenfrain(form, j);
        
        simulation.chenfrein.push(points[0].p1);
        simulation.chenfrein.push(points[0].p2);
        let line = drowline(form, points[0].p1, points[0].p2, "translate", 0.5, 1);
        document.getElementById("nav-form-chanfrein_" + ordre).appendChild(line);
    }

    drowPathFromchenfrein(simulation, "nav-form-path_" + ordre);
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