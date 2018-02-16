var imposteporte = {
    "top": [
        { p1: points.b2, p2: points.b6, direction: "y", change: [] }
    ],
    "left": [
        { p1: points.a3, p2: points.i3, direction: "x", change: [] }
    ],
    "right": [
        { p1: points.a5, p2: points.i5, direction: "x", change: [] }
    ],
    "left_right": [
        { p1: points.i2, p2: points.i3, direction: "y", change: [["1", "p1", "y"], ["1", "p2", "y"]] },
        { p1: points.i5, p2: points.i6, direction: "y", change: [["0", "p1", "y"], ["0", "p2", "y"]] },
        { p1: points.a3, p2: points.i3, direction: "x", change: [["3", "p1", "-x"], ["3", "p2", "-x"], ["0", "p2", "x"], ["1", "p1", "-x"]] },
        { p1: points.a5, p2: points.i5, direction: "x", change: [["2", "p1", "-x"], ["2", "p2", "-x"]] }
    ],
    "left_top": [
        { p1: points.i2, p2: points.i3, direction: "y", change: [] },
        { p1: points.b3, p2: points.i3, direction: "x", change: [["0", "p2", "x"]] },
        { p1: points.b2, p2: points.b6, direction: "y", change: [["1", "p1", "y"]] }
    ],
    "right_top": [
        { p1: points.i5, p2: points.i6, direction: "y", change: [] },
        { p1: points.b5, p2: points.i5, direction: "x", change: [["0", "p1", "x"]] },
        { p1: points.b2, p2: points.b6, direction: "y", change: [["1", "p1", "y"]] }
    ],
    "top_left": [
        { p1: points.i2, p2: points.i3, direction: "y", change: [] },
        { p1: points.b3, p2: points.b6, direction: "y", change: [] },
        { p1: points.a3, p2: points.i3, direction: "x", change: [["0", "p2", "x"], ["1", "p1", "x"]] }
    ],
    "top_right": [
        { p1: points.i5, p2: points.i6, direction: "y", change: [] },
        { p1: points.b2, p2: points.b5, direction: "y", change: [] },
        { p1: points.a5, p2: points.i5, direction: "x", change: [["0", "p1", "x"], ["1", "p2", "x"]] }
    ],
    "left_right_top": [
        { p1: points.i2, p2: points.i3, direction: "y", change: [["1", "p1", "y"], ["1", "p2", "y"]] },
        { p1: points.i5, p2: points.i6, direction: "y", change: [["0", "p1", "y"], ["0", "p2", "y"]] },
        { p1: points.b3, p2: points.i3, direction: "x", change: [["0", "p2", "x"], ["1", "p1", "-x"], ["3", "p1", "-x"], ["3", "p2", "-x"]] },
        { p1: points.b5, p2: points.i5, direction: "x", change: [["0", "p2", "-x"], ["1", "p1", "x"], ["2", "p1", "-x"], ["2", "p2", "-x"]] },
        { p1: points.b2, p2: points.b6, direction: "y", change: [["2", "p1", "y"], ["3", "p1", "y"]] }
    ],
    "top_left_right": [
        { p1: points.i2, p2: points.i3, direction: "y", change: [["1", "p1", "y"], ["1", "p2", "y"]] },
        { p1: points.i5, p2: points.i6, direction: "y", change: [["0", "p1", "y"], ["0", "p2", "y"]] },
        { p1: points.b3, p2: points.b5, direction: "y", change: [] },
        { p1: points.a3, p2: points.i3, direction: "x", change: [["0", "p2", "x"], ["1", "p1", "-x"], ["2", "p1", "x"], ["2", "p2", "-x"], ["4", "p1", "-x"], ["4", "p2", "-x"]] },
        { p1: points.a5, p2: points.i5, direction: "x", change: [["0", "p2", "-x"], ["1", "p1", "x"], ["2", "p1", "-x"], ["2", "p2", "x"], ["3", "p1", "-x"], ["3", "p2", "-x"]] }
    ],
};

var for_imposte_porte = {
    left1: {
        "top": [["0", "p1", "x"]],
        "left": [["0", "p1", "x"], ["0", "p2", "x"]],
        "right": [],
        "left_right": [["0", "p1", "x"], ["0", "p2", "x"], ["2", "p1", "x"], ["2", "p2", "x"]],
        "left_top": [["0", "p1", "x"], ["0", "p2", "x"], ["1", "p1", "x"], ["1", "p2", "x"], ["2", "p1", "x"]],
        "right_top": [["2", "p1", "x"]],
        "top_left": [["0", "p1", "x"], ["0", "p2", "x"], ["1", "p1", "x"], ["2", "p1", "x"], ["2", "p2", "x"]],
        "top_right": [["1", "p1", "x"]],
        "left_right_top": [["0", "p1", "x"], ["0", "p2", "x"], ["2", "p1", "x"], ["2", "p2", "x"], ["4", "p1", "x"]],
        "top_left_right": [["0", "p1", "x"], ["0", "p2", "x"], ["2", "p1", "x"], ["3", "p1", "x"], ["3", "p2", "x"]]
    },
    left2: {
        "top": [["0", "p1", "x"], ["0", "p2", "-x"]],
        "left": [["0", "p1", "x"], ["0", "p2", "x"]],
        "right": [["0", "p1", "-x"], ["0", "p2", "-x"]],
        "left_right": [["0", "p1", "x"], ["0", "p2", "x"], ["1", "p1", "-x"], ["1", "p2", "-x"], ["2", "p1", "x"], ["2", "p2", "x"], ["3", "p1", "-x"], ["3", "p2", "-x"]],
        "left_top": [["0", "p1", "x"], ["0", "p2", "x"], ["1", "p1", "x"], ["1", "p2", "x"], ["2", "p1", "x"], ["2", "p2", "-x"]],
        "right_top": [["0", "p1", "-x"], ["0", "p2", "-x"], ["1", "p1", "-x"], ["1", "p2", "-x"], ["2", "p1", "x"], ["2", "p2", "-x"]],
        "top_left": [["0", "p1", "x"], ["0", "p2", "x"], ["1", "p1", "x"], ["1", "p2", "-x"], ["2", "p1", "x"], ["2", "p2", "x"]],
        "top_right": [["0", "p1", "x"], ["0", "p2", "-x"], ["1", "p1", "-x"], ["1", "p2", "-x"]],
        "left_right_top": [["0", "p1", "x"], ["0", "p2", "x"], ["1", "p1", "-x"], ["1", "p2", "-x"], ["2", "p1", "x"], ["2", "p2", "-x"]],
        "top_left_right": [["0", "p1", "x"], ["0", "p2", "-x"], ["1", "p1", "x"], ["1", "p2", "x"], ["2", "p1", "-x"], ["2", "p2", "-x"]]
    },
    top: {
        "top": [["0", "p1", "y"], ["0", "p2", "y"]],
        "left": [["0", "p1", "y"]],
        "right": [["0", "p1", "y"]],
        "left_right": [["2", "p1", "y"], ["3", "p1", "y"]],
        "left_top": [["1", "p1", "y"], ["2", "p1", "y"], ["2", "p2", "y"]],
        "right_top": [["1", "p1", "y"], ["2", "p1", "y"], ["2", "p2", "y"]],
        "top_left": [["1", "p1", "y"], ["1", "p2", "y"], ["2", "p1", "y"]],
        "top_right": [["1", "p1", "y"], ["1", "p2", "y"], ["2", "p1", "y"]],
        "left_right_top": [["2", "p1", "y"], ["3", "p1", "y"], ["4", "p1", "y"], ["4", "p2", "y"]],
        "top_left_right": [["2", "p1", "y"], ["2", "p2", "y"], ["3", "p1", "y"], ["4", "p1", "y"]]
    }
}

var Porte = {
    f1: {
        id: 1,
        name: "rectangle",
        type: "porte",
        points: [points.i2, points.a2, points.a6, points.i6],
        point_transform: [
            {
                position: points.a5, direction: "y",
                for: [{ point: "1", direction: "y" }, { point: "2", direction: "y" }],
                for_pt: [{ point: "1", direction: "y", deplacement: 0.5 }],
                for_imposte: for_imposte_porte.top,
                //limit: ["point_transform", "direction x || y", "points_sup", "point_inf"]
                limit: ["0", "y", "0"]
            },
            {
                position: points.e2, direction: "x",
                for: [{ point: "0", direction: "x" }, { point: "1", direction: "x" }],
                for_pt: [{ point: "0", direction: "x", deplacement: 0.5 }],
                for_imposte: for_imposte_porte.left1,
                limit: ["1", "x", "2"]
            }
        ],
        imposte: imposteporte,
    },

    f2: {
        id: 2,
        name: "DemiHexag",
        type: "porte",
        points: [points.i2, points.c2, points.a4, points.c6, points.i6],
        point_transform: [
            {
                position: points.c2, direction: "y",
                for: [{ point: "1", direction: "y" }, { point: "3", direction: "y" }],
                for_pt: [{ point: "2", direction: "y", deplacement: 0.5 }],
                limit: ["0", "y", "0", "2"]
            },
            {
                position: points.a4, direction: "y",
                for: [{ point: "1", direction: "y" }, { point: "2", direction: "y" }, { point: "3", direction: "y" }],
                for_pt: [{ point: "0", direction: "y", deplacement: 1 }, { point: "2", direction: "y", deplacement: 0.5 }],
                for_imposte: for_imposte_porte.top,
                limit: ["0", "y", "0"]
            },
            {
                position: points.f2, direction: "x",
                for: [{ point: "0", direction: "x" }, { point: "1", direction: "x" }, { point: "3", direction: "-x" }, { point: "4", direction: "-x" }],
                for_pt: [{ point: "0", direction: "x", deplacement: 1 }],
                for_imposte: for_imposte_porte.left2,
                limit: ["2", "x", "3"]
            }
        ],
        imposte: imposteporte
    },

    f3: {
        id: 3,
        name: "porte-deg",
        type: "porte",
        points: [points.i2, points.c2, points.a6, points.i6],
        point_transform: [
            {
                position: points.c2, direction: "y",
                for: [{ point: "1", direction: "y" }],
                for_pt: [{ point: "2", direction: "y", deplacement: 0.5 }],
                limit: ["0", "y", "0", "2"]
            },
            {
                position: points.a4, direction: "y",
                for: [{ point: "1", direction: "y" }, { point: "2", direction: "y" }],
                for_pt: [{ point: "0", direction: "y", deplacement: 1 }, { point: "2", direction: "y", deplacement: 0.5 }],
                for_imposte: for_imposte_porte.top,
                limit: ["0", "y", "0"]
            },
            {
                position: points.f2, direction: "x",
                for: [{ point: "0", direction: "x" }, { point: "1", direction: "x" }],
                for_pt: [{ point: "0", direction: "x", deplacement: 1 }, { point: "1", direction: "x", deplacement: 0.5 }],
                for_imposte: for_imposte_porte.left1,
                limit: ["2", "x", "2"]
            }
        ],
        imposte: imposteporte
    },

    f4: {
        id: 4,
        name: "porte-deg-inv",
        type: "porte",
        points: [points.i2, points.a2, points.c6, points.i6],
        point_transform: [
            {
                position: points.c6, direction: "y",
                for: [{ point: "2", direction: "y" }],
                for_pt: [],
                limit: ["0", "y", "0", "1"]
            },
            {
                position: points.a4, direction: "y",
                for: [{ point: "1", direction: "y" }, { point: "2", direction: "y" }],
                for_pt: [{ point: "0", direction: "y", deplacement: 1 }, { point: "2", direction: "y", deplacement: 0.5 }],
                for_imposte: for_imposte_porte.top,
                limit: ["0", "y", "0"]
            },
            {
                position: points.e2, direction: "x",
                for: [{ point: "0", direction: "x" }, { point: "1", direction: "x" }],
                for_pt: [{ point: "1", direction: "x", deplacement: 0.5 }],
                for_imposte: for_imposte_porte.left1,
                limit: ["2", "x", "2"]
            }
        ],
        imposte: imposteporte
    },

    f5: {
        id: 5,
        name: "ChanfreinG",
        type: "porte",
        points: [points.i2, points.c2, points.a4, points.a6, points.i6],
        point_transform: [
            {
                position: points.a5, direction: "y",
                for: [{ point: "1", direction: "y" }, { point: "2", direction: "y" }, { point: "3", direction: "y" }],
                for_pt: [{ point: "1", direction: "y", deplacement: 0.5 }, { point: "2", direction: "y", deplacement: 1 }, { point: "3", direction: "y", deplacement: 1 }],
                for_imposte: for_imposte_porte.top,
                limit: ["3", "y", "0"]
            },
            {
                position: points.f2, direction: "x",
                for: [{ point: "0", direction: "x" }, { point: "1", direction: "x" }, { point: "2", direction: "x" }],
                for_pt: [{ point: "0", direction: "x", deplacement: 0.5 }, { point: "2", direction: "x", deplacement: 1 }, { point: "3", direction: "x", deplacement: 1 }],
                for_imposte: for_imposte_porte.left1,
                limit: ["2", "x", "3"]
            },
            {
                position: points.a4, direction: "x",
                for: [{ point: "2", direction: "x" }],
                for_pt: [{ point: "0", direction: "x", deplacement: 0.5 }],
                limit: ["2", "x", "3", "1"]
            },
            {
                position: points.c2, direction: "y",
                for: [{ point: "1", direction: "y" }],
                for_pt: [{ point: "1", direction: "y", deplacement: 0.5 }],
                limit: ["3", "y", "0", "2"]
            }
        ],
        imposte: imposteporte
    },
    f6: {
        id: 6,
        name: "ChanfreinD",
        type: "porte",
        points: [points.i2, points.a2, points.a4, points.c6, points.i6],
        point_transform: [
            {
                position: points.a3, direction: "y",
                for: [{ point: "1", direction: "y" }, { point: "2", direction: "y" }, { point: "3", direction: "y" }],
                for_pt: [{ point: "1", direction: "y", deplacement: 0.5 }, { point: "2", direction: "y", deplacement: 1 }, { point: "3", direction: "y", deplacement: 1 }],
                for_imposte: for_imposte_porte.top,
                limit: ["3", "y", "0"]
            },
            {
                position: points.e2, direction: "x",
                for: [{ point: "0", direction: "x" }, { point: "1", direction: "x" }],
                for_pt: [{ point: "0", direction: "x", deplacement: 0.5 }],
                for_imposte: for_imposte_porte.left1,
                limit: ["1", "x", "2"]
            },
            {
                position: points.a4, direction: "x",
                for: [{ point: "2", direction: "x" }],
                for_pt: [{ point: "0", direction: "x", deplacement: 0.5 }],
                limit: ["2", "x", "3", "1"]
            },
            {
                position: points.c6, direction: "y",
                for: [{ point: "3", direction: "y" }],
                for_pt: [],
                limit: ["3", "y", "0", "1"]
            }
        ],
        imposte: imposteporte
    },
    f7: {
        id: 7,
        name: "Octogone",
        type: "porte",
        points: [points.h2, points.b2, points.a3, points.a5, points.b6, points.h6],
        point_transform: [
            {
                position: points.a3, direction: "x",
                for: [{ point: "2", direction: "x" }, { point: "3", direction: "-x" }],
                for_pt: [],
                limit: ["0", "x", "3", "0"]
            },
            {
                position: points.b2, direction: "y",
                for: [{ point: "1", direction: "y" }, { point: "4", direction: "y" }],
                for_pt: [{ point: "3", direction: "y", deplacement: 0.5 }],
                limit: ["1", "y", "0", "2"]
            },
            {
                position: points.a4, direction: "y",
                for: [{ point: "1", direction: "y" }, { point: "2", direction: "y" }, { point: "3", direction: "y" }, { point: "4", direction: "y" }],
                for_pt: [{ point: "0", direction: "y", deplacement: 1 }, { point: "1", direction: "y", deplacement: 1 }, { point: "3", direction: "y", deplacement: 0.5 }],
                for_imposte: for_imposte_porte.top,
                limit: ["1", "y", "5"]
            },
            {
                position: points.e2, direction: "x",
                for: [{ point: "0", direction: "x" }, { point: "1", direction: "x" }, { point: "2", direction: "x" }],
                for_pt: [{ point: "0", direction: "x", deplacement: 1 }, { point: "1", direction: "x", deplacement: 1 }, { point: "2", direction: "x", deplacement: 0.5 }],
                for_imposte: for_imposte_porte.left1,
                limit: ["0", "x", "3"]
            },
        ],
        imposte: imposteporte
    }
}
