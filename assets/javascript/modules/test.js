drowPoint: function () {

    var i = 0;

    for (i; i < this.points.length; i++) {

        if (this.points[i] !== "arc") {

            var rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
            rect.setAttributeNS(null, "x", (this.points[i].x - 20));
            rect.setAttributeNS(null, "y", (this.points[i].y - 20));
            rect.setAttributeNS(null, "width", 40);
            rect.setAttributeNS(null, "height", 40);
            rect.setAttributeNS(null, "stroke-width", 2);
            rect.setAttributeNS(null, "stroke", "blue");
            rect.setAttributeNS(null, "fill", "transparent");
            rect.setAttributeNS(null, "id", (this.order + "-" + i + "-" + this.name));
            rect.setAttributeNS(null, "data-id", i);
            document.getElementById(this.order + "-" + this.name).children[3].appendChild(rect);

        } else {

            var pc = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            pc.setAttributeNS(null, "id", (this.order + "-pc-" + i + "-" + this.name));
            pc.setAttributeNS(null, "data-id", i);
            pc.setAttributeNS(null, "r", 15);
            pc.setAttributeNS(null, "stroke-width", 1);
            pc.setAttributeNS(null, "stroke", "red");
            pc.setAttributeNS(null, "fill", "transparent");
            pc.setAttributeNS(null, "cx", this.pControl[i].x);
            pc.setAttributeNS(null, "cy", this.pControl[i].y);

            document.getElementById(this.order + "-" + this.name).children[3].appendChild(pc);

        }
    }
},

updatePoint: function (idPoint) {

    if (this.points[idPoint] !== "arc") {
        var rect = document.getElementById((this.order + "-" + idPoint + "-" + this.name));
        rect.setAttributeNS(null, "x", (this.points[idPoint].x - 20));
        rect.setAttributeNS(null, "y", (this.points[idPoint].y - 20));

        var p1 = idPoint - 1,
            p2 = p1 + 2;

        if (p1 < 0) {
            p1 = this.points.length - 1;
        }

        if (this.points[p1] === "arc") {

            var pc1 = document.getElementById((this.order + "-pc-" + p1 + "-" + this.name));

            pc1.setAttributeNS(null, "cx", this.pControl[p1].x);
            pc1.setAttributeNS(null, "cy", this.pControl[p1].y);

        }

        if (this.points[p2] === "arc") {

            var pc2 = document.getElementById((this.order + "-pc-" + p2 + "-" + this.name));

            pc2.setAttributeNS(null, "cx", this.pControl[p2].x);
            pc2.setAttributeNS(null, "cy", this.pControl[p2].y);

        }

    } else {

        var pc1 = document.getElementById((this.order + "-pc-" + idPoint + "-" + this.name));

        pc1.setAttributeNS(null, "cx", this.pControl[idPoint].x);
        pc1.setAttributeNS(null, "cy", this.pControl[idPoint].y);

    }


},
