$(document).ready(function () {

    var currentx,
        currenty,
        formid = -1;

    generateMenu(forms);

    $(document).on("click", "#menu svg", function () {
        let form_key = $(this).attr("data-key");
        let form = forms[form_key];

        selectedform = form;
        drowForm(form, "drowforme");
    });


    /*$("body").on("mousedown", "#draggable-element .form-transform-line rect", function (evt) {
        evt = evt || window.event;
        evt.stopPropagation();

        dragelemX = $(this).offset().left;
        dragelemY = $(this).offset().top;
        currentelem = evt.target.dataset.formId;
        idCurrentPoint = evt.target.dataset.id;
        idPrevPoint = evt.target.dataset.prev;
        idNextPoint = evt.target.dataset.next;
        type_transform = "line";
        form_id = -1;
    });

    $("body").on("mousedown", "#draggable-element .form-transform-point rect", function (evt) {
        evt = evt || window.event;
        evt.stopPropagation()

        currentelem = evt.target.dataset.formId;
        idCurrentPoint = evt.target.dataset.id;
        type_transform = "point";
        form_id = -1;
    });

    $("body").on("mousemove", "#draggable-element", function (evt) {
        evt = evt || window.event;

        if (idCurrentPoint !== -1) {
            let offsetX = (evt.pageX - $(this).find("#form-transform-" + type_transform + "_" + currentelem + " rect[data-id=" + idCurrentPoint + "]").offset().left),
                offsetY = (evt.pageY - $(this).find("#form-transform-" + type_transform + "_" + currentelem + " rect[data-id=" + idCurrentPoint + "]").offset().top);

            if (type_transform === "point") {
                simulations[currentelem].points[idCurrentPoint].x += (offsetX - 15);
                simulations[currentelem].points[idCurrentPoint].y += (offsetY - 15);
            }
            if (type_transform === "line") {
                simulations[currentelem].points[idPrevPoint].x += (offsetX - 5);
                simulations[currentelem].points[idPrevPoint].y += (offsetY - 5);
                simulations[currentelem].points[idNextPoint].x += (offsetX - 5);
                simulations[currentelem].points[idNextPoint].y += (offsetY - 5);
            }
            updateForm(simulations[currentelem]);
        }
    });

    $("body").on("mouseup", "#draggable-element", function () {
        currentelem = -1;
        idCurrentPoint = -1;
        dragelemX = 0;
        dragelemY = 0;
        idPrevPoint = -1;
        idNextPoint = -1;
        type_transform = "";
        form_id = -1;
    });*/


    $("body").on("mousedown", ".form", function (evt) {
        evt = evt || window.event;

        form_id = $(this).attr("data-id");
        currentx = evt.pageX;
        currenty = evt.pageY;
    });

    $("body").on("mousemove", ".form", function (evt) {
        evt = evt || window.event;

        if (form_id !== -1) {
            let offsetX = (evt.pageX - currentx),
                offsetY = (evt.pageY - currenty);
            for (let i = 0; i < simulations[form_id].points.length; i++) {
                simulations[form_id].points[i].x += offsetX;
                simulations[form_id].points[i].y += offsetY;
                updateForm(simulations[form_id]);
            }
            for (let i = 0; i < simulations[form_id].point_transform.length; i++) {
                simulations[form_id].point_transform[i].position.x += offsetX;
                simulations[form_id].point_transform[i].position.y += offsetY;
            }
                
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

        if (formid !== -1) {
            let offsetX = (evt.pageX - currentx),
                offsetY = (evt.pageY - currenty);

            for (let i = 0; i < simulations[formid].point_transform[idCurrentPoint].for.length; i++) {
                if (simulations[formid].point_transform[idCurrentPoint].for[i].direction === "x") {
                    simulations[formid].points[simulations[formid].point_transform[idCurrentPoint].for[i].point]["x"] += offsetX;
                }
                if (simulations[formid].point_transform[idCurrentPoint].for[i].direction === "-x") {
                    simulations[formid].points[simulations[formid].point_transform[idCurrentPoint].for[i].point]["x"] -= offsetX;
                }
                if (simulations[formid].point_transform[idCurrentPoint].for[i].direction === "y") {
                    simulations[formid].points[simulations[formid].point_transform[idCurrentPoint].for[i].point]["y"] += offsetY;
                }
                if (simulations[formid].point_transform[idCurrentPoint].for[i].direction === "-y") {
                    simulations[formid].points[simulations[formid].point_transform[idCurrentPoint].for[i].point]["y"] -= offsetY;
                }
                if (simulations[formid].point_transform[idCurrentPoint].for[i].direction === "xy") {
                    simulations[formid].points[simulations[formid].point_transform[idCurrentPoint].for[i].point]["x"] += offsetX;
                    simulations[formid].points[simulations[formid].point_transform[idCurrentPoint].for[i].point]["y"] += offsetY;
                }
            }
            if (simulations[formid].point_transform[idCurrentPoint].direction === "x") {
                simulations[formid].point_transform[idCurrentPoint].position.x += offsetX;
            }
            if (simulations[formid].point_transform[idCurrentPoint].direction === "y") {
                simulations[formid].point_transform[idCurrentPoint].position.y += offsetY;
            }
            if (simulations[formid].point_transform[idCurrentPoint].direction === "xy") {
                simulations[formid].point_transform[idCurrentPoint].position.x += offsetX;
                simulations[formid].point_transform[idCurrentPoint].position.y += offsetY;
            }
            updateForm(simulations[formid]);
            currentx = evt.pageX;
            currenty = evt.pageY;
        }
    });

    $("body").on("mouseup", "#draggable-element", function () {
        formid = -1;
    });

});