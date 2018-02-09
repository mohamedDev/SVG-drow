var drowPathFromchenfrein = function (simulation, container) {
    let path = "";
    let j = 0;
    let chlength = simulation.chenfrein.length / 2;

    for (var i = 0; i < chlength; i++) {
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