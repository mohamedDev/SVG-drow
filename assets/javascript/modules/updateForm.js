var updateForm = function (form, type) {
    document.getElementById(container_chanfrein + form.order).innerHTML = "";
    let path = calculPath(form);

    form.chenfrein = []

    for (let j = 0; j < form.points.length; j++) {
        let points = [];
        points = calculChenfrain(form, j);

        form.chenfrein.push(points[0].p1);
        form.chenfrein.push(points[0].p2);
        let line = drowline(form, points[0].p1, points[0].p2, "translate", 0.5, 1);
        document.getElementById(container_chanfrein + form.order).appendChild(line);
    }

    document.getElementById("path-" + form.order).setAttribute("d", path);
    document.getElementById(container_path + form.order).innerHTML = "";
    document.getElementById(container_transform_point + form.order).innerHTML = "";
    document.getElementById(container_imposte + form.order).innerHTML = "";
    DrowTransformPoint(form);
    drowPathFromchenfrein(form, container_path + form.order);

    if (type !== "") {
        drowImposte(form, type);
        document.getElementById(container_transform_imposte_point + form.order).innerHTML = "";
        for (let i = 0; i < form.imposte[type].length; i++) {
            let circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            let cx = (form.imposte[type][i].p1.x + form.imposte[type][i].p2.x)/2;
            let cy = (form.imposte[type][i].p1.y + form.imposte[type][i].p2.y)/2;
            circle.setAttributeNS(null, "cx", cx);
            circle.setAttributeNS(null, "cy", cy);
            circle.setAttributeNS(null, "r", 5);
            circle.setAttributeNS(null, "stroke-width", 2);
            circle.setAttributeNS(null, "stroke", "blue");
            circle.setAttributeNS(null, "fill", "blue");
            circle.setAttributeNS(null, "id", "point-controle-imposte-" + i);
            circle.setAttributeNS(null, "data-id", i);
            circle.setAttributeNS(null, "data-imposte", type);
            circle.setAttributeNS(null, "data-form-id", form.order);
            document.getElementById(container_transform_imposte_point + form.order).appendChild(circle);
        }
    }
}