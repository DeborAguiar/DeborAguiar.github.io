import React, { useRef } from 'react';
import * as THREE from 'three';
import sky from '../assets/sky.jpg';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import dinoModel from "../assets/tRex.glb";
import zombieModel from "../assets/Zombie.glb";

function MyScene() {
    const sceneRef = useRef(null);

    // Usando hook useEffect para criar a cena
    React.useEffect(() => {
        const scene = new THREE.Scene();

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 5;
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        document.body.appendChild(renderer.domElement);


        const loader = new GLTFLoader();
        
        //Dinossauro
        loader.load(dinoModel, (glb)=>{
            glb.scene.scale.set(0.1,0.1,0.1)
            scene.add(glb.scene)
        })

        //Zombie
        loader.load(dinoModel, (glb)=>{
            glb.scene.scale.set(0.1,0.1,0.1)
            scene.add(glb.scene)
        })

        //Chão
        const planeGeometry = new THREE.PlaneGeometry(10, 10);
        const planeMaterial = new THREE.MeshStandardMaterial({ color: 0xc2c2c2 });
        const plane = new THREE.Mesh(planeGeometry, planeMaterial);
        plane.rotation.x = -Math.PI / 2;
        plane.position.y = -1;
        plane.receiveShadow = true

        scene.add(plane);

        //Background
        const textureLoader = new THREE.TextureLoader();
        const texture = textureLoader.load(sky);
        scene.background = texture;

        //Luz branca ambiente
        const ambientLight = new THREE.AmbientLight(0xffffff, 1);
        scene.add(ambientLight);

        function animate() {
            requestAnimationFrame(animate);

            renderer.render(scene, camera);
        }

        animate();
    }, []);

    return <div ref={sceneRef} />;
}

export default MyScene;
