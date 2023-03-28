import React, { useRef } from 'react';
import * as THREE from 'three';

function MyScene() {
    const sceneRef = useRef(null);

    // Usando hook useEffect para criar a cena
    React.useEffect(() => {
        const scene = new THREE.Scene();

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 5;
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);
        
        //Cubo
        const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
        const cubeMaterial = new THREE.MeshStandardMaterial({
            color: 0xff0000,
        });
        const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

        //Chão
        const planeGeometry = new THREE.PlaneGeometry(10, 10);
        const planeMaterial = new THREE.MeshStandardMaterial({ color: 0xebebeb });
        const plane = new THREE.Mesh(planeGeometry, planeMaterial);
        plane.rotation.x = -Math.PI / 2;
        plane.position.y = -1;
        plane.receiveShadow = true;

        scene.add(cube);
        scene.add(plane);

        //Luz branca ambiente
        const pointLight = new THREE.PointLight(0xffffff, 1, 100);
        pointLight.position.set(2, 2, 2);
        pointLight.castShadow = true
        scene.add(pointLight);

        function animate() {
            requestAnimationFrame(animate);
            
            renderer.render(scene, camera);
        }
        
        animate();
    }, []);

    return <div ref={sceneRef} />;
}

export default MyScene;
