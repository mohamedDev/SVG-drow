var drowImposte = function (form, type) {

    for (let i = 0; i < form.imposte[type].length; i++) {

        let path = "";

        var p1 = { x: form.imposte[type][i].p1.x - stroke_with, y: form.imposte[type][i].p1.y }
        var p2 = { x: form.imposte[type][i].p1.x + stroke_with, y: form.imposte[type][i].p1.y }
        var p3 = { x: form.imposte[type][i].p2.x + stroke_with, y: form.imposte[type][i].p2.y }
        var p4 = { x: form.imposte[type][i].p2.x - stroke_with, y: form.imposte[type][i].p2.y }

        if (form.imposte[type][i].p1.y === form.imposte[type][i].p2.y) {
            p1 = { x: form.imposte[type][i].p1.x, y: form.imposte[type][i].p1.y - stroke_with }
            p2 = { x: form.imposte[type][i].p1.x, y: form.imposte[type][i].p1.y + stroke_with }
            p3 = { x: form.imposte[type][i].p2.x, y: form.imposte[type][i].p2.y + stroke_with }
            p4 = { x: form.imposte[type][i].p2.x, y: form.imposte[type][i].p2.y - stroke_with }
        }

        path = "M" + p1.x + "," + p1.y;
        path += " L" + p2.x + "," + p2.y;
        path += " L" + p3.x + "," + p3.y;
        path += " L" + p4.x + "," + p4.y;
        path += " z";

        let pathelem = document.createElementNS("http://www.w3.org/2000/svg", "path");
        pathelem.setAttributeNS(null, "d", path);
        pathelem.setAttributeNS(null, "stroke-width", 0.5);
        pathelem.setAttributeNS(null, "stroke", "black");
        pathelem.setAttributeNS(null, "fill", "gray");

        document.getElementById(container_imposte + form.order).appendChild(pathelem);
    }
}