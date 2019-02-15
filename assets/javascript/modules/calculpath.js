var calculPath = function (form) {
    let i = 1,
        dx,
        dy,
        path = "M" + form.points[0].x + "," + form.points[0].y;

    for (i; i < form.points.length; i++) {
        if (form.points[i].name === "arc") {
            if ((i + 1) === form.points.length) {
                dx = ((form.points[0].x - form.points[i - 1].x) / 2) + form.points[i - 1].x;
                dy = ((form.points[0].y - form.points[i - 1].y) / 2) + form.points[i - 1].y;
            } else {
                dx = ((form.points[i + 1].x - form.points[i - 1].x) / 2) + form.points[i - 1].x;
                dy = ((form.points[i + 1].y - form.points[i - 1].y) / 2) + form.points[i - 1].y;
            }
            path += " Q" + dx + "," + dy + " ";
            i++;
        }

        if (form.points[i - 1].name !== "arc") {
            path += " L";
        }

        if (i === form.points.length) {
            path += form.points[0].x + "," + form.points[0].y;
        } else {
            path += form.points[i].x + "," + form.points[i].y;
        }
    }

    path += " z";
    return path;
}