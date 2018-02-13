var Fenetre = {
    f1: {
        id: 1,
        name: "porte-rect",
        type: "fenetre",
        points: [points.i0, points.a0, points.a8, points.i8],
        point_transform: [
            {
                position: points.a4, direction: "y",
                for: [{ point: "1", direction: "y" }, { point: "2", direction: "y" }],
                for_pt: [{ point: "1", direction: "y", deplacement: 0.5 }],
                //limit: ["point_transform", "direction x || y", "points_sup", "point_inf"]
                limit: ["0", "y", "0"]
            },
            {
                position: points.e0, direction: "x",
                for: [{ point: "0", direction: "x" }, { point: "1", direction: "x" }],
                for_pt: [{ point: "0", direction: "x", deplacement: 0.5 }],
                limit: ["1", "x", "2"]
            }
        ],

    },
    f2: {
        id: 2,
        name: "fenetre-deg",
        type: "fenetre",
        points: [points.i0, points.a0, points.c8, points.i8],
        point_transform: [
            {
                position: points.c8, direction: "y",
                for: [{ point: "2", direction: "y" }],
                for_pt: [],
                limit: ["0", "y", "0", "1"]
            }
        ],
    },
    f3: {
        id: 3,
        name: "fenetre-ch",
        type: "fenetre",
        points: [points.i0, points.c0, points.a4, points.c8, points.i8],
        point_transform: [
            {
                position: "c0", direction: "y",
                for: [{ point: "1", direction: "y" }, { point: "3", direction: "y" }],
                for_pt: [],
                limit: ["0", "y", "0", "2"]
            }
        ]
    },
    f4: {
        id: 4,
        name: "quoitrfall",
        points: [points.c0, points.a2, points.a6, points.c8, points.g8, points.i6, points.i2, points.g0],
        point_transform: [
            {
                position: "a2", direction: "x",
                for: [{ point: "1", direction: "x" }, { point: "2", direction: "-x" }, { point: "5", direction: "-x" }, { point: "6", direction: "x" }],
                for_pt: [],
                limit: ["0", "x", "2", "0"]
            },
            {
                position: "c0", direction: "y",
                for: [{ point: "0", direction: "y" }, { point: "3", direction: "y" }, { point: "4", direction: "-y" }, { point: "7", direction: "-y" }],
                for_pt: [],
                limit: ["1", "y", "7", "1"]
            },
            {
                position: "e0", direction: "x",
                for: [{ point: "0", direction: "x" }, { point: "1", direction: "x" }, { point: "6", direction: "x" }, { point: "7", direction: "x" }],
                for_pt: [{ point: "0", direction: "x", deplacement: 1 }, { point: "1", direction: "x", deplacement: 1 }, { point: "3", direction: "x", deplacement: 0.5 }],
                limit: ["0", "x", "2"]
            },
            {
                position: "a4", direction: "y",
                for: [{ point: "0", direction: "y" }, { point: "1", direction: "y" }, { point: "2", direction: "y" }, { point: "3", direction: "y" }],
                for_pt: [{ point: "1", direction: "y", deplacement: 1 }, { point: "0", direction: "y", deplacement: 1 }, { point: "2", direction: "y", deplacement: 0.5 }],
                limit: ["1", "y", "7"]
            }
        ]
    },
    f6: {
        id: 7,
        name: "fenetre1",
        points: [points.b0, points.b1, points.a1, points.a7, points.b7, points.b8, points.h8, points.h7, points.i7, points.i1, points.h1, points.h0],
        point_transform: [
            {
                position: "a1", direction: "x",
                for: [{ point: "1", direction: "x" }, { point: "2", direction: "x" }, { point: "3", direction: "-x" }, { point: "4", direction: "-x" }, { point: "7", direction: "-x" }, { point: "8", direction: "-x" }, { point: "9", direction: "x" }, { point: "10", direction: "x" }],
                for_pt: [],
                limit: ["0", "x", "3", "0"]
            },
            {
                position: "b0", direction: "y",
                for: [{ point: "0", direction: "y" }, { point: "1", direction: "y" }, { point: "4", direction: "y" }, { point: "5", direction: "y" }, { point: "6", direction: "-y" }, { point: "7", direction: "-y" }, { point: "10", direction: "-y" }, { point: "11", direction: "-y" }],
                for_pt: [],
                limit: ["1", "y", "11", "2"]
            },
            {
                position: "a4", direction: "y",
                for: [{ point: "0", direction: "y" }, { point: "1", direction: "y" }, { point: "2", direction: "y" }, { point: "3", direction: "y" }, { point: "4", direction: "y" }, { point: "5", direction: "y" }],
                for_pt: [{ point: "0", direction: "y", deplacement: 1 }, { point: "1", direction: "y", deplacement: 1 }, { point: "3", direction: "y", deplacement: 0.5 }],
                limit: ["1", "y", "11"]
            },
            {
                position: "e0", direction: "x",
                for: [{ point: "0", direction: "x" }, { point: "1", direction: "x" }, { point: "2", direction: "x" }, { point: "9", direction: "x" }, { point: "10", direction: "x" }, { point: "11", direction: "x" }],
                for_pt: [{ point: "0", direction: "x", deplacement: 1 }, { point: "1", direction: "x", deplacement: 1 }, { point: "2", direction: "x", deplacement: 0.5 }],
                limit: ["0", "x", "3"]
            },
        ]
    },
    f7: {
        id: 8,
        name: "triangle1",
        points: [points.a4, points.i8, points.i0],
        point_transform: [
            {
                position: "a4", direction: "y",
                for: [{ point: "0", direction: "y" }],
                for_pt: []
            },
            {
                position: "i0", direction: "x",
                for: [{ point: "1", direction: "-x" }, { point: "2", direction: "x" }],
                for_pt: []
            }
        ]
    },
    f8: {
        id: 9,
        name: "triangle2",
        points: [points.a8, points.i0, points.i8],
        point_transform: [
            {
                position: "a8", direction: "y",
                for: [{ point: "0", direction: "y" }],
                for_pt: []
            },
            {
                position: "i0", direction: "x",
                for: [{ point: "1", direction: "x" }],
                for_pt: []
            }
        ]
    },
    f9: {
        id: 10,
        name: "ttttt",
        points: [points.a0, points.a2, points.c2, points.c3, points.a3, points.a5, points.c5, points.c6, points.a6, points.a8, points.i8, points.i0],
        point_transform: [
            {
                position: "e0", direction: "x",
                for: [{ point: "0", direction: "x" }, { point: "11", direction: "x" }],
                for_pt: [
                    { point: "1", direction: "x", deplacement: 0.5 }
                ]
            },
            {
                position: "a1", direction: "y",
                for: [{ point: "0", direction: "y" }, { point: "1", direction: "y" }, { point: "4", direction: "y" }, { point: "5", direction: "y" }],
                for_pt: [
                    { point: "0", direction: "y", deplacement: 0.5 },
                    { point: "2", direction: "y", deplacement: 0.5 }
                ]
            },
            {
                position: "b2", direction: "x",
                for: [
                    { point: "1", direction: "x" },
                    { point: "2", direction: "x" },
                    { point: "3", direction: "-x/2" },
                    { point: "4", direction: "-x/2" },
                    { point: "5", direction: "x/2" },
                    { point: "6", direction: "x/2" },
                    { point: "7", direction: "-x" },
                    { point: "8", direction: "-x" },
                ]
                ,
                for_pt: [
                    { point: "1", direction: "x", deplacement: 0.5 }
                ]
            }
        ]
    },
    f10: {
        id: 10,
        name: "Octogone",
        points: [points.c0, points.a2, points.a6, points.c8, points.i8, points.i0],
        point_transform: [
            {
                position: "a2", direction: "x",
                for: [{ point: "1", direction: "x" }, { point: "2", direction: "-x" }],
                for_pt: [],
                limit: ["0", "x", "2", "0"]
            },
            {
                position: "c0", direction: "y",
                for: [{ point: "0", direction: "y" }, { point: "3", direction: "y" }],
                for_pt: [{ point: "3", direction: "y", deplacement: 0.5 }],
                limit: ["1", "y", "5", "1"]
            },
            {
                position: "a4", direction: "y",
                for: [{ point: "0", direction: "y" }, { point: "1", direction: "y" }, { point: "2", direction: "y" }, { point: "3", direction: "y" }],
                for_pt: [{ point: "0", direction: "y", deplacement: 1 }, { point: "1", direction: "y", deplacement: 1 }, { point: "3", direction: "y", deplacement: 0.5 }],
                limit: ["1", "y", "5"]
            },
            {
                position: "f0", direction: "x",
                for: [{ point: "0", direction: "x" }, { point: "1", direction: "x" }, { point: "5", direction: "x" }],
                for_pt: [{ point: "0", direction: "x", deplacement: 1 }, { point: "1", direction: "x", deplacement: 1 }, { point: "2", direction: "x", deplacement: 0.5 }],
                limit: ["0", "x", "2"]
            },
        ]
    },
}




