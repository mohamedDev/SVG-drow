$(document).ready(function () {

    var currentx,
        currenty,
        formid = -1,
        gtype = "top"

    generateMenu(Porte);

    $(document).on("click", "#menu svg", function () {
        let form_key = $(this).attr("data-key");

        let type = $(".switcherforms select").val();
        let form;
        if (type === "porte") {
            form = Porte[form_key];
        } else {
            form = Fenetre[form_key];
        }
        drowForm(form, "drowforme", gtype);
    });

    $(".switcherforms select").change(function () {
        $("#menu").html("");
        let type = $(this).val();

        if (type === "porte") {
            generateMenu(Porte);
        } else {
            generateMenu(Fenetre);
        }
    });

    $(".switchertype select").change(function () {
        let type = $(this).val();
        gtype = type;
        let iter = simulations.length;

        for (let i = 0; i < iter; i++) {
            updateForm(simulations[i], type);
        }

    });

    $("body").on("mousedown", ".form", function (evt) {
        evt = evt || window.event;

        form_id = $(this).attr("data-id");
        currentx = evt.pageX;
        currenty = evt.pageY;
    });

    $("body").on("mousemove", "#draggable-element", function (evt) {
        evt = evt || window.event;

        if (form_id !== -1) {
            let offsetX = (evt.pageX - currentx),
                offsetY = (evt.pageY - currenty);

            for (let i = 0; i < simulations[form_id].points.length; i++) {
                simulations[form_id].points[i].x += offsetX;
                simulations[form_id].points[i].y += offsetY;
            }

            for (let i = 0; i < simulations[form_id].point_transform.length; i++) {
                simulations[form_id].point_transform[i].position.x += offsetX;
                simulations[form_id].point_transform[i].position.y += offsetY;
            }

            for (let j in simulations[form_id].imposte) {
                for (let i = 0; i < simulations[form_id].imposte[j].length; i++) {
                    simulations[form_id].imposte[j][i].p1.x += offsetX;
                    simulations[form_id].imposte[j][i].p1.y += offsetY;
                    simulations[form_id].imposte[j][i].p2.x += offsetX;
                    simulations[form_id].imposte[j][i].p2.y += offsetY;
                }
            }

            updateForm(simulations[form_id], gtype);

            currentx = evt.pageX;
            currenty = evt.pageY;
        }
    });

    $("body").on("mouseup", ".form", function () {
        form_id = -1;
    });

    $("body").on("mousedown", ".form-transform-point rect", function (evt) {
        evt = evt || window.event;
        evt.stopPropagation()

        formid = $(this).attr("data-form-id");
        idCurrentPoint = $(this).attr("data-id");
        currentx = evt.pageX;
        currenty = evt.pageY;
    });

    $("body").on("mousemove", "#draggable-element", function (evt) {
        evt = evt || window.event;

        if (formid !== -1 && imposte === "") {

            let offsetX = (evt.pageX - currentx),
                offsetY = (evt.pageY - currenty),
                transform_Point = simulations[formid].point_transform[idCurrentPoint];

            if (transform_Point.limit[3] !== undefined) {
                if (transform_Point.limit.length > 0 && transform_Point.limit[1] === "x"
                    && simulations[formid].point_transform[transform_Point.limit[0]].position.x + offsetX + 40 < simulations[formid].points[transform_Point.limit[2]]["x"]
                    && simulations[formid].point_transform[transform_Point.limit[0]].position.x + offsetX - 40 > simulations[formid].points[transform_Point.limit[3]]["x"]) {

                    if (transform_Point.direction === "x") {
                        transform_Point.position.x += offsetX;
                    }

                    for (let i = 0; i < transform_Point.for.length; i++) {
                        if (transform_Point.for[i].direction === "x") {
                            simulations[formid].points[transform_Point.for[i].point]["x"] += offsetX;
                        }
                        if (transform_Point.for[i].direction === "-x") {
                            simulations[formid].points[transform_Point.for[i].point]["x"] -= offsetX;
                        }
                    }

                    for (let i = 0; i < transform_Point.for_pt.length; i++) {
                        if (transform_Point.for_pt[i].direction === "x") {
                            simulations[formid].point_transform[transform_Point.for_pt[i].point].position.x += offsetX * transform_Point.for_pt[i].deplacement;
                        }
                    }
                }

                if (transform_Point.limit.length > 0 && transform_Point.limit[1] === "y"
                    && simulations[formid].point_transform[transform_Point.limit[0]].position.y + offsetY + 40 < simulations[formid].points[transform_Point.limit[2]]["y"]
                    && simulations[formid].point_transform[transform_Point.limit[0]].position.y + offsetY - 40 > simulations[formid].points[transform_Point.limit[3]]["y"]) {


                    if (transform_Point.direction === "y") {
                        transform_Point.position.y += offsetY;
                    }

                    for (let i = 0; i < transform_Point.for.length; i++) {
                        if (transform_Point.for[i].direction === "y") {
                            simulations[formid].points[transform_Point.for[i].point]["y"] += offsetY;
                        }
                        if (transform_Point.for[i].direction === "-y") {
                            simulations[formid].points[transform_Point.for[i].point]["y"] -= offsetY;
                        }
                    }

                    for (let i = 0; i < transform_Point.for_pt.length; i++) {
                        if (transform_Point.for_pt[i].direction === "y") {
                            simulations[formid].point_transform[transform_Point.for_pt[i].point].position.y += offsetY * transform_Point.for_pt[i].deplacement;
                        }
                    }
                }
            } else {
                if (transform_Point.limit.length > 0 && transform_Point.limit[1] === "x"
                    && simulations[formid].point_transform[transform_Point.limit[0]].position.x + offsetX + 40 < simulations[formid].points[transform_Point.limit[2]]["x"]) {

                    if (transform_Point.direction === "x") {
                        transform_Point.position.x += offsetX;
                    }

                    for (let i = 0; i < transform_Point.for.length; i++) {
                        if (transform_Point.for[i].direction === "x") {
                            simulations[formid].points[transform_Point.for[i].point]["x"] += offsetX;
                        }
                        if (transform_Point.for[i].direction === "-x") {
                            simulations[formid].points[transform_Point.for[i].point]["x"] -= offsetX;
                        }
                    }

                    for (let i = 0; i < transform_Point.for_pt.length; i++) {
                        if (transform_Point.for_pt[i].direction === "x") {
                            simulations[formid].point_transform[transform_Point.for_pt[i].point].position.x += offsetX * transform_Point.for_pt[i].deplacement;
                        }
                    }

                    for (let i = 0; i < transform_Point.for_imposte[gtype].length; i++) {
                        if (transform_Point.for_imposte[gtype][i][2] === "x") {
                            simulations[formid].imposte[gtype][transform_Point.for_imposte[gtype][i][0]][transform_Point.for_imposte[gtype][i][1]].x += offsetX;
                        }
                        if (transform_Point.for_imposte[gtype][i][2] === "-x") {
                            simulations[formid].imposte[gtype][transform_Point.for_imposte[gtype][i][0]][transform_Point.for_imposte[gtype][i][1]].x -= offsetX;
                        }
                    }
                    for (let j in transform_Point.for_imposte) {
                        if (j !== gtype) {
                            for (let i = 0; i < transform_Point.for_imposte[j].length; i++) {
                                if (transform_Point.for_imposte[j][i][2] === "x") {
                                    simulations[formid].imposte[j][transform_Point.for_imposte[j][i][0]][transform_Point.for_imposte[j][i][1]].x += offsetX;
                                }
                                if (transform_Point.for_imposte[j][i][2] === "-x") {
                                    j
                                    simulations[formid].imposte[j][transform_Point.for_imposte[j][i][0]][transform_Point.for_imposte[j][i][1]].x -= offsetX;
                                }
                            }
                        }
                    }
                }

                if (transform_Point.limit.length > 0 && transform_Point.limit[1] === "y"
                    && simulations[formid].point_transform[transform_Point.limit[0]].position.y + offsetY + 40 < simulations[formid].points[transform_Point.limit[2]]["y"]) {

                    if (transform_Point.direction === "y") {
                        transform_Point.position.y += offsetY;
                    }

                    for (let i = 0; i < transform_Point.for.length; i++) {
                        if (transform_Point.for[i].direction === "y") {
                            simulations[formid].points[transform_Point.for[i].point]["y"] += offsetY;
                        }
                        if (transform_Point.for[i].direction === "-y") {
                            simulations[formid].points[transform_Point.for[i].point]["y"] -= offsetY;
                        }
                    }

                    for (let i = 0; i < transform_Point.for_pt.length; i++) {
                        if (transform_Point.for_pt[i].direction === "y") {
                            simulations[formid].point_transform[transform_Point.for_pt[i].point].position.y += offsetY * transform_Point.for_pt[i].deplacement;
                        }
                    }

                    for (let i = 0; i < transform_Point.for_imposte[gtype].length; i++) {
                        if (transform_Point.for_imposte[gtype][i][2] === "y") {
                            simulations[formid].imposte[gtype][transform_Point.for_imposte[gtype][i][0]][transform_Point.for_imposte[gtype][i][1]].y += offsetY;
                        }
                        if (transform_Point.for_imposte[gtype][i][2] === "-y") {
                            simulations[formid].imposte[gtype][transform_Point.for_imposte[gtype][i][0]][transform_Point.for_imposte[gtype][i][1]].y -= offsetY;
                        }
                    }

                    for (let j in transform_Point.for_imposte) {
                        if (j !== gtype) {
                            for (let i = 0; i < transform_Point.for_imposte[j].length; i++) {
                                if (transform_Point.for_imposte[j][i][2] === "y") {
                                    simulations[formid].imposte[j][transform_Point.for_imposte[j][i][0]][transform_Point.for_imposte[j][i][1]].y += offsetY;
                                }
                                if (transform_Point.for_imposte[j][i][2] === "-y") {
                                    simulations[formid].imposte[j][transform_Point.for_imposte[j][i][0]][transform_Point.for_imposte[j][i][1]].y -= offsetY;
                                }
                            }
                        }
                    }
                }
            }

            updateForm(simulations[formid], gtype);
            currentx = evt.pageX;
            currenty = evt.pageY;
        }

    });

    $("body").on("mouseup", "#draggable-element", function () {
        formid = -1;
    });

    /*var y = 0;
    var u = 0;
    for (var key in points) {
        if (points[key].x !== 0) {
            points[key].x -= 30 * y;
        }


        if (points[key].y !== 0) {
            points[key].y -= 30 * u;
        }
        y++;
        if (y === 9) {
            y = 0
            u++;
        }
    }*/


    $("body").on("mousedown", ".form-transform-imposte-point circle", function (evt) {
        evt = evt || window.event;
        evt.stopPropagation()

        formid = $(this).attr("data-form-id");
        idCurrentPoint = $(this).attr("data-id");
        imposte = $(this).attr("data-imposte");

        currentx = evt.pageX;
        currenty = evt.pageY;
    });

    $("body").on("mousemove", "#draggable-element", function (evt) {
        evt = evt || window.event;

        if (formid !== -1 && imposte !== "") {

            let offsetX = (evt.pageX - currentx),
                offsetY = (evt.pageY - currenty),
                transform_Point_imposte = simulations[formid].imposte[imposte][idCurrentPoint];


            console.log("------------------------------");
            console.log("sup :" + simulations[formid].points[transform_Point_imposte.limit_extrene[0]][transform_Point_imposte.direction]);
            console.log(transform_Point_imposte.p1[transform_Point_imposte.direction]);
            console.log("inf :" + simulations[formid].points[transform_Point_imposte.limit_extrene[1]][transform_Point_imposte.direction]);
            console.log("------------------------------");


            if (transform_Point_imposte.direction === "y"
                && transform_Point_imposte.p1["y"] + offsetY <= simulations[formid].points[transform_Point_imposte.limit_extrene[0]]["y"]
                && transform_Point_imposte.p1["y"] + offsetY >= simulations[formid].points[transform_Point_imposte.limit_extrene[1]]["y"]) {

                transform_Point_imposte.p1.y += offsetY;
                transform_Point_imposte.p2.y += offsetY;

                for (let i = 0; i < transform_Point_imposte.change.length; i++) {
                    if (transform_Point_imposte.change[i][2] === "y") {
                        simulations[formid].imposte[imposte]
                        [transform_Point_imposte.change[i][0]]
                        [transform_Point_imposte.change[i][1]]
                        ["y"] += offsetY;
                    }
                    if (transform_Point_imposte.change[i][2] === "-y") {
                        simulations[formid].imposte[imposte]
                        [transform_Point_imposte.change[i][0]]
                        [transform_Point_imposte.change[i][1]]
                        ["y"] -= offsetY;
                    }
                }
            }

            if (transform_Point_imposte.direction === "x"
                && transform_Point_imposte.p1["x"] + offsetX <= simulations[formid].points[transform_Point_imposte.limit_extrene[0]]["x"]
                && transform_Point_imposte.p1["x"] + offsetX >= simulations[formid].points[transform_Point_imposte.limit_extrene[1]]["x"]) {

                transform_Point_imposte.p1.x += offsetX;
                transform_Point_imposte.p2.x += offsetX;

                for (let i = 0; i < transform_Point_imposte.change.length; i++) {
                    if (transform_Point_imposte.change[i][2] === "x") {
                        simulations[formid].imposte[imposte]
                        [transform_Point_imposte.change[i][0]]
                        [transform_Point_imposte.change[i][1]]
                        ["x"] += offsetX;
                    }
                    if (transform_Point_imposte.change[i][2] === "-x") {
                        simulations[formid].imposte[imposte]
                        [transform_Point_imposte.change[i][0]]
                        [transform_Point_imposte.change[i][1]]
                        ["x"] -= offsetX;
                    }
                }
            }

            updateForm(simulations[formid], imposte);
            currentx = evt.pageX;
            currenty = evt.pageY;

        }
    });

    $("body").on("mouseup", ".form", function () {
        formid = -1;
        imposte = ""
    });

});