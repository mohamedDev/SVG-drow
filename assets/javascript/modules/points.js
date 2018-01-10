var points = {
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

var forms = {
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
    f3: {
        id: 3,
        name: "demi cercle",
        points: [points.o, "arc", points.g]
    },
    f4: {
        id: 4,
        name: "porte",
        points: [points.q, points.l, points.m, points.a, points.e, points.i, points.j, points.s]
    },
     f4: {
        id: 5,
        name: "tttttt",
        points: [points.c, points.G, points.k, points.l]
    }
};
