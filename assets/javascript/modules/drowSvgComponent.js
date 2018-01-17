function drowline(form, p1, p2, elemtoadd, stroke_width, stroke_opacity, stroke_color) {
    var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttributeNS(null, "x1", p1.x);
    line.setAttributeNS(null, "y1", p1.y);
    line.setAttributeNS(null, "x2", p2.x);
    line.setAttributeNS(null, "y2", p2.y);
    line.setAttributeNS(null, "stroke-width", stroke_width);
    line.setAttributeNS(null, "stroke-opacity", stroke_opacity);
    line.setAttributeNS(null, "stroke", stroke_color);

    document.getElementById(form.name).children[2].appendChild(line);
}

function drowPath(form, path, stroke_width = 20, stroke_color = "gray") {
    let pathelem1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    pathelem1.setAttributeNS(null, "d", path);
    pathelem1.setAttributeNS(null, "stroke-width", stroke_width);
    pathelem1.setAttributeNS(null, "class", form.name);
    pathelem1.setAttributeNS(null, "stroke", stroke_color);
    pathelem1.setAttributeNS(null, "stroke-linejoin", "miter");
    pathelem1.setAttributeNS(null, "stroke-miterlimit", 10);

    return pathelem1;
}

function drowRect(form, order, rect_width = 40, stroke_width = 2, stroke_color = "blue") {
    let rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttributeNS(null, "x", (form.points[order].x - (rect_width / 2)));
    rect.setAttributeNS(null, "y", (form.points[order].y - (rect_width / 2)));
    rect.setAttributeNS(null, "width", rect_width);
    rect.setAttributeNS(null, "height", rect_width);
    rect.setAttributeNS(null, "stroke-width", stroke_width);
    rect.setAttributeNS(null, "stroke", stroke_color);
    rect.setAttributeNS(null, "fill", "transparent");
    rect.setAttributeNS(null, "id", ("pointcontrole-" + order + "-" + form.name));
    rect.setAttributeNS(null, "data-id", order);

    return rect;
}

function drowCircle() {

}