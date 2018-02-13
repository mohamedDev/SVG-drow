var drowForm = function (form, container, type) {
    nombre_simulation++;
    let simulation = {
        id: form.name + "_" + nombre_simulation,
        name: form.name,
        type: form.type,
        path: calculPath(form),
        order: nombre_simulation,
        chenfrein: [],
        points: [],
        point_transform: [],
        imposte: []
    };

    drowSimulationContainer(simulation, container);
    simulation.chenfrein = drowchenfrain(form);

    for (let a = 0; a < form.points.length; a++) {
        simulation.points[a] = JSON.parse(JSON.stringify(form.points[a]));
    }
    simulation.point_transform = JSON.parse(JSON.stringify(form.point_transform))
    simulation.imposte = JSON.parse(JSON.stringify(form.imposte));
    //simulation.point_transform_imposte = JSON.parse(JSON.stringify(form.point_transform_imposte));

    simulations.push(simulation);
    DrowTransformPoint(simulation);
    drowPathFromchenfrein(simulation, container_path + simulation.order);

    if (type !== "") {
        drowImposte(simulation, type);

        for (let i = 0; i < simulation.imposte[type].length; i++) {
            let circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            let cx = (simulation.imposte[type][i].p1.x + simulation.imposte[type][i].p2.x)/2;
            let cy = (simulation.imposte[type][i].p1.y + simulation.imposte[type][i].p2.y)/2;
            circle.setAttributeNS(null, "cx", cx);
            circle.setAttributeNS(null, "cy", cy);
            circle.setAttributeNS(null, "r", 5);
            circle.setAttributeNS(null, "stroke-width", 2);
            circle.setAttributeNS(null, "stroke", "blue");
            circle.setAttributeNS(null, "fill", "blue");
            circle.setAttributeNS(null, "data-id", i);
            circle.setAttributeNS(null, "data-imposte", type);
            circle.setAttributeNS(null, "data-form-id", simulation.order);
            document.getElementById(container_transform_imposte_point + simulation.order).appendChild(circle);
        }
    }
}