var updateForm = function (form) {
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
    DrowTransformPoint(form);
    drowPathFromchenfrein(form, container_path + form.order);
}