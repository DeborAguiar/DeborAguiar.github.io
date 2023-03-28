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

        //Esfera
        const sphereGeometry = new THREE.SphereGeometry(0.05, 32, 32);
        const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
        const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
        sphere.position.set(2, 1, 3)

        const sphereLight = new THREE.PointLight(0xff0000, 2, 50);
        sphereLight.position.set(0, 0, 0);
        sphere.add(sphereLight);

        scene.add(cube);
        scene.add(plane);
        scene.add(sphere);


        //Luz branca ambiente
        /* const pointLight = new THREE.PointLight(0xffffff, 1, 100);
        pointLight.position.set(2, 2, 2);
        pointLight.castShadow = true
        scene.add(pointLight); */

        const radius = 2;
        let angle = 0;
        
        function animate() {
            requestAnimationFrame(animate);

            // Atualizando o ângulo da esfera
            angle += 0.01;

            // Calculando a nova posição da esfera
            sphere.position.x = radius * Math.cos(angle);
            sphere.position.z = radius * Math.sin(angle);
            
            renderer.render(scene, camera);
        }
        
        animate();
    }, []);

    return <div ref={sceneRef} />;
}

export default MyScene;
