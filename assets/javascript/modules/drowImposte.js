var drowImposte = function (form) {



    for (let i = 0; i < form.imposte.tlr2.length; i++) {


        let path = "";

        if (form.imposte.tlr2[i].p1.y === form.imposte.tlr2[i].p2.y) {

            var p1 = { x: form.imposte.tlr2[i].p1.x, y: form.imposte.tlr2[i].p1.y - stroke_with }
            var p2 = { x: form.imposte.tlr2[i].p1.x, y: form.imposte.tlr2[i].p1.y + stroke_with }
            var p3 = { x: form.imposte.tlr2[i].p2.x, y: form.imposte.tlr2[i].p2.y + stroke_with }
            var p4 = { x: form.imposte.tlr2[i].p2.x, y: form.imposte.tlr2[i].p2.y - stroke_with }
        } else {
            var p1 = { x: form.imposte.tlr2[i].p1.x - stroke_with, y: form.imposte.tlr2[i].p1.y }
            var p2 = { x: form.imposte.tlr2[i].p1.x + stroke_with, y: form.imposte.tlr2[i].p1.y }
            var p3 = { x: form.imposte.tlr2[i].p2.x + stroke_with, y: form.imposte.tlr2[i].p2.y }
            var p4 = { x: form.imposte.tlr2[i].p2.x - stroke_with, y: form.imposte.tlr2[i].p2.y }
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