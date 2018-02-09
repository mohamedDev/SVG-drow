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
    DrowTransformPoint(simulation);
    drowPathFromchenfrein(simulation, container_path + simulation.order);
}