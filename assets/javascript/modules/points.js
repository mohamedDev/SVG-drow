var points1 = {
    a: { x: 0, y: 0 },
    b: { x: 100, y: 0 },
    c: { x: 250, y: 0 },
    d: { x: 400, y: 0 },
    e: { x: 500, y: 0 },
    f: { x: 500, y: 100 },
    g: { x: 500, y: 250 },
    h: { x: 500, y: 400 },
    i: { x: 500, y: 500 },
    j: { x: 400, y: 500 },
    k: { x: 250, y: 500 },
    l: { x: 100, y: 500 },
    m: { x: 0, y: 500 },
    n: { x: 0, y: 400 },
    o: { x: 0, y: 250 },
    p: { x: 0, y: 100 },
    q: { x: 100, y: 100 },
    r: { x: 250, y: 100 },
    s: { x: 400, y: 100 },
    t: { x: 100, y: 250 },
    u: { x: 250, y: 250 },
    v: { x: 400, y: 250 },
    w: { x: 100, y: 400 },
    x: { x: 250, y: 400 },
    y: { x: 400, y: 400 },
};


var points = {
    a0: { x: 0, y: 0 },
    a1: { x: 50, y: 0 },
    a2: { x: 100, y: 0 },
    a3: { x: 150, y: 0 },
    a4: { x: 200, y: 0 },
    a5: { x: 250, y: 0 },
    a6: { x: 300, y: 0 },
    a7: { x: 350, y: 0 },
    a8: { x: 400, y: 0 },

    b0: { x: 0, y: 50 },
    b1: { x: 50, y: 50 },
    b2: { x: 100, y: 50 },
    b3: { x: 150, y: 50 },
    b4: { x: 200, y: 50 },
    b5: { x: 250, y: 50 },
    b6: { x: 300, y: 50 },
    b7: { x: 350, y: 50 },
    b8: { x: 400, y: 50 },

    c0: { x: 0, y: 100 },
    c1: { x: 50, y: 100 },
    c2: { x: 100, y: 100 },
    c3: { x: 150, y: 100 },
    c4: { x: 200, y: 100 },
    c5: { x: 250, y: 100 },
    c6: { x: 300, y: 100 },
    c7: { x: 350, y: 100 },
    c8: { x: 400, y: 100 },

    d0: { x: 0, y: 150 },
    d1: { x: 50, y: 150 },
    d2: { x: 100, y: 150 },
    d3: { x: 150, y: 150 },
    d4: { x: 200, y: 150 },
    d5: { x: 250, y: 150 },
    d6: { x: 300, y: 150 },
    d7: { x: 350, y: 150 },
    d8: { x: 400, y: 150 },

    e0: { x: 0, y: 200 },
    e1: { x: 50, y: 200 },
    e2: { x: 100, y: 200 },
    e3: { x: 150, y: 200 },
    e4: { x: 200, y: 200 },
    e5: { x: 250, y: 200 },
    e6: { x: 300, y: 200 },
    e7: { x: 350, y: 200 },
    e8: { x: 400, y: 200 },

    f0: { x: 0, y: 250 },
    f1: { x: 50, y: 250 },
    f2: { x: 100, y: 250 },
    f3: { x: 150, y: 250 },
    f4: { x: 200, y: 250 },
    f5: { x: 250, y: 250 },
    f6: { x: 300, y: 250 },
    f7: { x: 350, y: 250 },
    f8: { x: 400, y: 250 },

    g0: { x: 0, y: 300 },
    g1: { x: 50, y: 300 },
    g2: { x: 100, y: 300 },
    g3: { x: 150, y: 300 },
    g4: { x: 200, y: 300 },
    g5: { x: 250, y: 300 },
    g6: { x: 300, y: 300 },
    g7: { x: 350, y: 300 },
    g8: { x: 400, y: 300 },

    h0: { x: 0, y: 350 },
    h1: { x: 50, y: 350 },
    h2: { x: 100, y: 350 },
    h3: { x: 150, y: 350 },
    h4: { x: 200, y: 350 },
    h5: { x: 250, y: 350 },
    h6: { x: 300, y: 350 },
    h7: { x: 350, y: 350 },
    h8: { x: 400, y: 350 },

    i0: { x: 0, y: 400 },
    i1: { x: 50, y: 400 },
    i2: { x: 100, y: 400 },
    i3: { x: 150, y: 400 },
    i4: { x: 200, y: 400 },
    i5: { x: 250, y: 400 },
    i6: { x: 300, y: 400 },
    i7: { x: 350, y: 400 },
    i8: { x: 400, y: 400 },

};
var forms = {
    f1: {
        id: 1,
        name: "rectangle",
        points: [points.a0, points.a8, points.i8, points.i0],
        point_transform: [
            { "position": points.a0, "direction": ["x"], "for": ["0"] },
            { "position": points.a0, "direction": ["x"], "for": ["0"] },
            { "position": points.a0, "direction": ["x"], "for": ["0"] }
        ]
    },
    f2: {
        id: 2,
        name: "fenetre",
        points: [points.a0, points.a8, points.i0]
    },
    f3: {
        id: 3,
        name: "Octogone",
        points: [points.c0, points.a2, points.a6, points.c8, points.i8, points.i0]
    },
    f4: {
        id: 4,
        name: "quoitrfall",
        points: [points.c0, points.a2, points.a6, points.c8, points.g8, points.i6, points.i2, points.g0]
    }
}


var forms1 = {
    f1: {
        id: 1,
        name: "rectangle",
        points: [points.a, points.e, points.i, points.m]
    },
    f2: {
        id: 2,
        name: "triangle",
        points: [points.a, points.e, points.m]
    },
    /*f3: {
        id: 3,
        name: "demi cercle",
        points: [points.o, { name: "arc", val: 20 }, points.g]
    },*/
    f4: {
        id: 4,
        name: "porte",
        points: [points.q, points.l, points.m, points.a, points.e, points.i, points.j, points.s]
    },
    f5: {
        id: 5,
        name: "Losange",
        points: [points.c, points.g, points.k, points.o]
    },
    f6: {
        id: 6,
        name: "rectangle inversé",
        points: [points.m, points.i, points.e, points.a]
    },
    f7: {
        id: 7,
        name: "Quatrefoil",
        points: [points.p, points.q, points.b, points.d, points.s, points.f, points.h, points.y, points.j, points.l, points.w, points.n]
    },
    f8: {
        id: 8,
        name: "Octogone",
        points: [points.p, points.b, points.d, points.f, points.h, points.j, points.l, points.n]
    },
    f9: {
        id: 9,
        name: "DemiOctogone",
        points: [points.p, points.b, points.d, points.f, points.i, points.m]
    },
    f10: {
        id: 10,
        name: "Losangeinv",
        points: [points.o, points.k, points.g, points.c]
    },
    f11: {
        id: 2,
        name: "trianglein",
        points: [points.a, points.i, points.m]
    },

};
