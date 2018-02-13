var drowSimulationContainer = function (simulation, container) {
    
        let form_group = document.createElementNS("http://www.w3.org/2000/svg", "g");
        form_group.setAttributeNS(null, "id", simulation.id);
        form_group.setAttributeNS(null, "data-id", simulation.order);
        form_group.setAttributeNS(null, "class", "form");
    
        let form_group_path = document.createElementNS("http://www.w3.org/2000/svg", "g");
        form_group_path.setAttributeNS(null, "id", container_path + simulation.order);
        form_group_path.setAttributeNS(null, "class", "form-path");
    
        let form_group_transform_point = document.createElementNS("http://www.w3.org/2000/svg", "g");
        form_group_transform_point.setAttributeNS(null, "id", container_transform_point + simulation.order);
        form_group_transform_point.setAttributeNS(null, "class", "form-transform-point");

        let form_group_transform_imposte_point = document.createElementNS("http://www.w3.org/2000/svg", "g");
        form_group_transform_imposte_point.setAttributeNS(null, "id", container_transform_imposte_point + simulation.order);
        form_group_transform_imposte_point.setAttributeNS(null, "class", "form-transform-imposte-point");
    
        let form_group_chanfrein = document.createElementNS("http://www.w3.org/2000/svg", "g");
        form_group_chanfrein.setAttributeNS(null, "id", container_chanfrein + simulation.order);
        form_group_chanfrein.setAttributeNS(null, "class", "form-chanfrein");
    
        let form_group_imposte = document.createElementNS("http://www.w3.org/2000/svg", "g");
        form_group_imposte.setAttributeNS(null, "id", container_imposte + simulation.order);
        form_group_imposte.setAttributeNS(null, "class", "form-imposte");
        form_group_imposte.setAttributeNS(null, "clip-path", "url(#clippath_" + simulation.order+")");

        let form_group_clippath = document.createElementNS("http://www.w3.org/2000/svg", "g");
        form_group_clippath.setAttributeNS(null, "id", container_clippath + simulation.order);
        form_group_clippath.setAttributeNS(null, "class", "form-clippath");
    
        var clipPath = document.createElementNS("http://www.w3.org/2000/svg", "clipPath");
        clipPath.setAttributeNS(null, "id", "clippath_" + simulation.order);
    
        var image = document.createElementNS("http://www.w3.org/2000/svg", "image");
        image.setAttributeNS(null, "id", "image-" + simulation.order);
        image.setAttributeNS(null, "width", 1500);
        image.setAttributeNS(null, "height", 997);
        image.setAttributeNS("http://www.w3.org/1999/xlink", 'xlink:href', clippath_bgImage);
        image.setAttributeNS(null, "clip-path", "url(#clippath_" + simulation.order + ")");
    
        var pathelem = document.createElementNS("http://www.w3.org/2000/svg", "path");
        pathelem.setAttributeNS(null, "id", "path-" + simulation.order);
        pathelem.setAttributeNS(null, "d", simulation.path);
    
        document.getElementById(container).appendChild(form_group);
        document.getElementById(simulation.id).appendChild(form_group_clippath);
        document.getElementById(simulation.id).appendChild(form_group_imposte);
        document.getElementById(simulation.id).appendChild(form_group_path);
        document.getElementById(simulation.id).appendChild(form_group_chanfrein);
        document.getElementById(simulation.id).appendChild(form_group_transform_point);
        document.getElementById(simulation.id).appendChild(form_group_transform_imposte_point);
        document.getElementById("form-clippath_" + simulation.order).appendChild(clipPath);
        document.getElementById("form-clippath_" + simulation.order).appendChild(image);
        document.getElementById("clippath_" + simulation.order).appendChild(pathelem);
    }
    