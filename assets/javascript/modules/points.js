(function ($) {
    "use strict";

    var points = {
        a: {x: 0, y: 0},
        b: {x: 100, y: 0},
        c: {x: 250, y: 0},
        d: {x: 400, y: 0},
        e: {x: 500, y: 0},
        f: {x: 500, y: 100},
        g: {x: 500, y: 250},
        h: {x: 500, y: 400},
        i: {x: 500, y: 500},
        j: {x: 400, y: 500},
        k: {x: 250, y: 500},
        l: {x: 100, y: 500},
        m: {x: 0, y: 500},
        n: {x: 0, y: 400},
        o: {x: 0, y: 250},
        p: {x: 0, y: 100}
    };

    var forms = {
        geometrique: {
            insert: " ",
            cercle: [points.c, "arcD", points.g,"arcD", points.k, "arcG" ,points.o , "arcG"],
            rect: [points.a, points.e, points.i, points.m],
            triangleIarcDarcG: [points.c, "arcD", points.i, points.m, "arcG"],
            poliG: [points.b, points.c, points.k, points.l, points.n, points.p],
            poliD: [points.c, points.d, points.f, points.h, points.j, points.k],
            poli: [points.b, points.d, points.f, points.h, points.j, points.l, points.n, points.p],
            porte: [points.b, points.l, points.m, points.a, points.e, points.i, points.j, points.d],
        },
        type2: {
            itop: [points.p, points.f],
            ibottom: [points.n, points.h],
            ldroite: [points.d, points.j],
            lgauche: [points.b, points.l]
        }
    };

    window.points = points;
    window.forms = forms;

})(jQuery);