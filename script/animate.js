/**
 * Created by chrischang on 15/7/30.
 */
(function () {
    "use strict";
    window.onload = function () {
        var container = document.getElementById('defaultCanvas');
        var renderer = new THREE.WebGLRenderer();
        renderer.setSize(container.offsetWidth, container.offsetHeight);
        container.appendChild(renderer.domElement);

        var scene = new THREE.Scene();

        var camera = new THREE.PerspectiveCamera(45, container.offsetWidth / container.offsetHeight, 1, 4000);
        camera.position.set(0, 0, 3.333);
        scene.add(camera);

        var geometry = new THREE.PlaneGeometry(1, 1);
        var mesh = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial());
        scene.add(mesh);

        renderer.render(scene, camera);
    }
})();