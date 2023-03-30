import React, { useRef } from 'react';
import * as THREE from 'three';
import sky from '../assets/sky.jpg';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import dinoModel from "../assets/tRex.glb";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { TransformControls } from 'three/examples/jsm/controls/TransformControls';
import zombieModel from "../assets/Zombie.glb";

function MyScene() {
    const sceneRef = useRef(null);

    // Usando hook useEffect para criar a cena
    React.useEffect(() => {
        const scene = new THREE.Scene();

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.set(0,3,5);
        camera.rotation.x -= THREE.MathUtils.degToRad(30);
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        document.body.appendChild(renderer.domElement);

        const loader = new GLTFLoader();
        
        //Controle de camera por orbita
        //const orbitControls = new OrbitControls(camera, renderer.domElement);
        
        //Dinossauro (tem animacao)
        loader.load(dinoModel, (glb)=>{
            glb.scene.scale.set(0.1,0.1,0.1)
            glb.scene.position.x-=2
            const transformControls = new TransformControls(camera, renderer.domElement);
            transformControls.attach(glb.scene)
            scene.add(transformControls);
            scene.add(glb.scene)
        })
        
        //Zombie (n tem animacao)
        loader.load(zombieModel, (glb)=>{
            glb.scene.scale.set(0.1,0.1,0.1)
            glb.scene.position.x+=2
            const transformControls = new TransformControls(camera, renderer.domElement);
            transformControls.attach(glb.scene)
            scene.add(transformControls);
            scene.add(glb.scene)
        })

        //Chão
        const planeGeometry = new THREE.PlaneGeometry(10, 10);
        const planeMaterial = new THREE.MeshStandardMaterial({ color: 0xc2c2c2 });
        const plane = new THREE.Mesh(planeGeometry, planeMaterial);
        plane.rotation.x = -Math.PI / 2;
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
