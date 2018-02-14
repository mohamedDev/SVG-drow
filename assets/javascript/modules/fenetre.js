var impostefenetre = {
    "t": [
        { p1: points.c0, p2: points.c8, direction: "y", change: [] }
    ],
    "l": [
        { p1: points.a2, p2: points.i2, direction: "x", change: [] }
    ],
    "r": [
        { p1: points.a6, p2: points.i6, direction: "x", change: [] }
    ],
    "lr": [
        { p1: points.a2, p2: points.i2, direction: "x", change: [["1", "p1", "-x"], ["1", "p2", "-x"]] },
        { p1: points.a6, p2: points.i6, direction: "x", change: [["0", "p1", "-x"], ["0", "p2", "-x"]] }
    ],
    "tl1": [
        { p1: points.c2, p2: points.i2, direction: "x", change: [] },
        { p1: points.c0, p2: points.c8, direction: "y", change: [["0", "p1", "y"]] }
    ],
    "tl2": [
        { p1: points.c2, p2: points.c8, direction: "y", change: [] },
        { p1: points.a2, p2: points.i2, direction: "x", change: [["0", "p1", "x"]] }
    ],
    "tr1": [
        { p1: points.c6, p2: points.i6, direction: "x", change: [] },
        { p1: points.c0, p2: points.c8, direction: "y", change: [["0", "p1", "y"]] }
    ],
    "tr2": [
        { p1: points.c0 , p2: points.c6, direction: "y", change: [] },
        { p1: points.a6, p2: points.i6, direction: "x", change: [["0", "p2", "x"]] }
    ],
    "tlr1": [
        { p1: points.c2, p2: points.i2, direction: "x", change: [["1", "p1", "-x"], ["1", "p2", "-x"]] },
        { p1: points.c6, p2: points.i6, direction: "x", change: [["0", "p1", "-x"], ["0", "p2", "-x"]] },
        { p1: points.c0, p2: points.c8, direction: "y", change: [["0", "p1", "y"], ["1", "p1", "y"]] },       
        
    ],
    "tlr2": [
        { p1: points.c2, p2: points.c6, direction: "y", change: [] },
        { p1: points.a2, p2: points.i2, direction: "x", change: [["0", "p1", "x"], ["0", "p2", "-x"], ["2", "p1", "-x"], ["2", "p2", "-x"]] },
        { p1: points.a6, p2: points.i6, direction: "x", change: [["0", "p1", "-x"], ["0", "p2", "x"], ["1", "p1", "-x"], ["1", "p2", "-x"]] }
    ],
};


var for_imposte_fenetre = {
    left1: {
        "t": [["0", "p1", "x"]],
        "l": [["0", "p1", "x"], ["0", "p2", "x"]],
        "r": [],
        "lr": [["0", "p1", "x"], ["0", "p2", "x"]],
        "tl1": [["0", "p1", "x"], ["0", "p2", "x"], ["1", "p1", "x"]],
        "tl2": [["0", "p1", "x"], ["1", "p1", "x"], ["1", "p2", "x"]],
        "tr1": [["1", "p1", "x"]],
        "tr2": [["0", "p1", "x"]],
        "tlr1": [["0", "p1", "x"], ["0", "p2", "x"], ["2", "p1", "x"]],
        "tlr2": [["0", "p1", "x"], ["1", "p1", "x"], ["1", "p2", "x"]]
    },
    left2: {
        "t": [["0", "p1", "x"], ["0", "p2", "-x"]],
        "l": [["0", "p1", "x"], ["0", "p2", "x"]],
        "r": [["0", "p1", "-x"], ["0", "p2", "-x"]],
        "lr": [["0", "p1", "x"], ["0", "p2", "x"], ["1", "p1", "-x"], ["1", "p2", "-x"]],
        "tl1": [["0", "p1", "x"], ["0", "p2", "x"], ["1", "p1", "x"], ["1", "p2", "-x"]],
        "tl2": [["0", "p1", "x"], ["0", "p2", "-x"], ["1", "p1", "x"], ["1", "p2", "x"]],
        "tr1": [["0", "p1", "-x"], ["0", "p2", "-x"], ["1", "p1", "x"], ["1", "p2", "-x"]],
        "tr2": [["0", "p1", "x"], ["0", "p2", "-x"], ["1", "p1", "-x"], ["1", "p2", "-x"]],
        "tlr1": [["0", "p1", "x"], ["0", "p2", "x"], ["1", "p1", "-x"], ["1", "p2", "-x"], ["2", "p1", "x"], ["2", "p2", "-x"]],
        "tlr2": [["0", "p1", "x"], ["0", "p2", "-x"], ["1", "p1", "x"], ["1", "p2", "x"], ["2", "p1", "-x"], ["2", "p2", "-x"]]
    },
    top: {
        "t": [["0", "p1", "y"], ["0", "p2", "y"]],
        "l": [["0", "p1", "y"]],
        "r": [["0", "p1", "y"]],
        "lr": [["0", "p1", "y"], ["1", "p1", "y"]],
        "tl1": [["0", "p1", "y"], ["1", "p1", "y"], ["1", "p2", "y"]],
        "tl2": [["0", "p1", "y"], ["0", "p2", "y"], ["1", "p1", "y"]],
        "tr1": [["0", "p1", "y"], ["1", "p1", "y"], ["1", "p2", "y"]],
        "tr2": [["0", "p1", "y"], ["0", "p2", "y"], ["1", "p1", "y"]],
        "tlr1": [["0", "p1", "y"], ["1", "p1", "y"], ["2", "p1", "y"], ["2", "p2", "y"]],
        "tlr2": [["0", "p1", "y"], ["0", "p2", "y"], ["1", "p1", "y"], ["2", "p1", "y"]]
    }
}

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
                for_imposte: for_imposte_fenetre.top,                
                //limit: ["point_transform", "direction x || y", "points_sup", "point_inf"]
                limit: ["0", "y", "0"]
            },
            {
                position: points.e0, direction: "x",
                for: [{ point: "0", direction: "x" }, { point: "1", direction: "x" }],
                for_pt: [{ point: "0", direction: "x", deplacement: 0.5 }],
                for_imposte: for_imposte_fenetre.left1,                
                limit: ["1", "x", "2"]
            }
        ],
        imposte: impostefenetre  
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
        imposte: impostefenetre          
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
        ],
        imposte: impostefenetre                  
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
        ],
        imposte: impostefenetre                  
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
        ],
        imposte: impostefenetre                  
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
        ],
        imposte: impostefenetre                  
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
        ],
        imposte: impostefenetre                  
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
        ],
        imposte: impostefenetre                  
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
        ],
        imposte: impostefenetre                  
    },
}




