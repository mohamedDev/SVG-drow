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
        point_transform: [],
        imposte : []
    };

    drowSimulationContainer(simulation, container);
    simulation.chenfrein = drowchenfrain(form);

    for (let a = 0; a < form.points.length; a++) {
        simulation.points[a] = JSON.parse(JSON.stringify(form.points[a]));
    }
    simulation.point_transform = JSON.parse(JSON.stringify(form.point_transform))
    simulation.imposte = JSON.parse(JSON.stringify(form.imposte))

    simulations.push(simulation);
    DrowTransformPoint(simulation);
    drowPathFromchenfrein(simulation, container_path + simulation.order);
    drowImposte(simulation);
}