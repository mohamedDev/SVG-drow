(function ($) {
    "use strict";

    var points = {
        a : {
            x : 0 , y  : 0
        },
        b : {
            x : 100 , y  : 0
        },
        c : {
            x : 250 , y  : 0
        },
        d : {
            x : 400 , y  : 0
        },
        e : {
            x : 500 , y  : 0,
        },
        f : {
            x : 500 , y  : 100
        },
        g : {
            x : 500 , y  : 250
        },
        h : {
            x : 500 , y  : 400
        },
        i : {
            x : 500 , y  : 500
        },
        j : {
            x : 400 , y  : 500
        },
        k : {
            x : 250 , y  : 500
        },
        l : {
            x : 100 , y  : 500
        },
        m : {
            x : 0 , y  : 500
        },
        n : {
            x : 0 , y  : 400
        },
        o : {
            x : 0 , y  : 250
        },
        p : {
            x : 0 , y  : 100
        }
    };

    var forms = {
        rect: [points.a, points.b, points.c, points.d],
        triangleD: [points.a, points.i, points.m],
        triangleG: [points.e, points.i, points.m],
        triangleI: [points.c, points.m, points.i],
        test: [points.b, points.d, points.f, points.h, points.j, points.l, points.n, points.p],
        test2: [points.p, points.b, points.l, points.n],
        tt: [points.c, points.g, points.k, points.o],
        ttt: [points.e, points.g, points.k, points.m]

    };

    window.points = points;
    window.forms = forms;

})(jQuery);


var drowForms = function (forme) {

    var path = "M" + forme[0].x + "," + forme[0].y;

    for (i = 1; i < forme.length; i++) {
        path += " L" + forme[i].x + "," + forme[i].y;
    }
    path += " z";

    $('.drowforme path').attr( 'd',path);
}