var DrowTransformPoint = function (simuation) {

    for (let i = 0; i < simuation.point_transform.length; i++) {
        let rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        rect.setAttributeNS(null, "x", simuation.point_transform[i].position.x - 10);
        rect.setAttributeNS(null, "y", simuation.point_transform[i].position.y - 10);
        rect.setAttributeNS(null, "width", 20);
        rect.setAttributeNS(null, "height", 20);
        rect.setAttributeNS(null, "stroke-width", 2);
        rect.setAttributeNS(null, "stroke", "blue");
        rect.setAttributeNS(null, "fill", "transparent");
        rect.setAttributeNS(null, "data-id", i);
        rect.setAttributeNS(null, "data-form-id", simuation.order);
        document.getElementById(container_transform_point + simuation.order).appendChild(rect);
    }
}