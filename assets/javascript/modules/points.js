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
            {
                position: "a4", direction: "y",
                for: [{ point: "0", direction: "y" }, { point: "1", direction: "y" }],
                for_pt: [{ point: "1", direction: "y", deplacement: 0.5 }],
                limitX: ["0", "1"],
                limitY: ["3"]
            },
            {
                position: "e0", direction: "x",
                for: [{ point: "3", direction: "x" }, { point: "0", direction: "x" }],
                for_pt: [{ point: "0", direction: "x", deplacement: 0.5 }],
                limitX: ["1"],
                limitY: ["0", "3"]
            }
        ]
    },
    f2: {
        id: 2,
        name: "triangle",
        points: [points.a0, points.a8, points.i0],
        point_transform: [
            {
                position: "a4", direction: "y",
                for: [{ point: "0", direction: "y" }, { point: "1", direction: "y" }],
                for_pt: [{ point: "1", direction: "y", deplacement: 0.5 }],
                limitX: ["0", "1"],
                limitY: ["2"]
            },
            {
                position: "e0", direction: "x",
                for: [{ point: "2", direction: "x" }, { point: "0", direction: "x" }],
                for_pt: [{ point: "0", direction: "x", deplacement: 0.5 }],
                limitX: ["1"],
                limitY: ["0", "2"]
            }
        ]
    },/*
    f3: {
        id: 3,
        name: "Octogone",
        points: [points.c0, points.a2, points.a6, points.c8, points.i8, points.i0],
        point_transform: [
            { position: "a4", direction: "y", for: [{ point: "0", direction: "y" }, { point: "1", direction: "y" }] }
        ]
    },*/
    f4: {
        id: 4,
        name: "quoitrfall",
        points: [points.c0, points.a2, points.a6, points.c8, points.g8, points.i6, points.i2, points.g0],
        point_transform: [
            {
                id: 0,
                position: "a2", direction: "x",
                for: [{ point: "1", direction: "x" }, { point: "2", direction: "-x" }, { point: "5", direction: "-x" }, { point: "6", direction: "x" }],
                for_pt: []
            },
            {
                id: 1,
                position: "c0", direction: "y",
                for: [{ point: "0", direction: "y" }, { point: "3", direction: "y" }, { point: "4", direction: "-y" }, { point: "7", direction: "-y" }],
                for_pt: []
            },
            {
                id: 2,
                position: "e0", direction: "x",
                for: [{ point: "0", direction: "x" }, { point: "1", direction: "x" }, { point: "6", direction: "x" }, { point: "7", direction: "x" }],
                for_pt: [
                    { point: "1", direction: "x", deplacement: 1 },
                    { point: "0", direction: "x", deplacement: 1 },
                    { point: "3", direction: "x", deplacement: 0.5 }
                ]
            },
            {
                id: 3,
                position: "a4", direction: "y",
                for: [{ point: "0", direction: "y" }, { point: "1", direction: "y" }, { point: "2", direction: "y" }, { point: "3", direction: "y" }],
                for_pt: [
                    { point: "1", direction: "y", deplacement: 1 },
                    { point: "0", direction: "y", deplacement: 1 },
                    { point: "2", direction: "y", deplacement: 0.5 }
                ]
            }
        ]
    },/*
    f5: {
        id: 5,
        name: "porte1",
        points: [points.b0, points.a1, points.a7, points.b8, points.i8, points.i7, points.c7, points.b6, points.b2, points.c1, points.i1, points.i0],
        point_transform: [
            { position: "a4", direction: "y", for: [{ point: "0", direction: "y" }, { point: "1", direction: "y" }] }
        ]
    },
    f6: {
        id: 7,
        name: "fenetre1",
        points: [points.b0, points.b1, points.a1, points.a7, points.b7, points.b8, points.h8, points.h7, points.i7, points.i1, points.h1, points.h0],
        point_transform: [
            { position: "a1", direction: "x", for: [{ point: "2", direction: "x" }, { point: "3", direction: "-x" }, { point: "8", direction: "-x" }, { point: "9", direction: "x" }] },
            { position: "b0", direction: "y", for: [{ point: "0", direction: "y" }, { point: "5", direction: "y" }, { point: "6", direction: "-y" }, { point: "11", direction: "-y" }] }
        ]
    },
    f7: {
        id: 8,
        name: "triangle1",
        points: [points.a4, points.i0, points.i8],
        point_transform: [
            { position: "a4", direction: "y", for: [{ point: "0", direction: "y" }, { point: "1", direction: "y" }] }
        ]
    },
    f8: {
        id: 9,
        name: "triangle2",
        points: [points.a8, points.i0, points.i8],
        point_transform: [
            { position: "a4", direction: "y", for: [{ point: "0", direction: "y" }, { point: "1", direction: "y" }] }
        ]
    }*/
}