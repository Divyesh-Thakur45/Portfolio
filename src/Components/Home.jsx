import React, { useEffect, useRef } from "react";
// import * as THREE from "three";
// import { OrbitControls } from "three/addons/controls/OrbitControls.js";
// import screen from "../Images/ss.jpg";
// import KeyBoard from "../Images/Board.png";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

import { Canvas } from "@react-three/fiber";
import MacModel from "../mac.js";
import { OrbitControls } from "@react-three/drei";

import "../Style/Home.css";

const Home = () => {
  const LaptopRef = useRef(null);
  // const LaptopModal = () => {
  //   // Create Scene
  //   const scene = new THREE.Scene();

  //   // Load Textures for each part of the computer
  //   const textureLoader = new THREE.TextureLoader();
  //   const topTexture = textureLoader.load(screen);
  //   topTexture.minFilter = THREE.NearestFilter;
  //   topTexture.magFilter = THREE.NearestFilter;
  //   const bottomTexture = textureLoader.load(KeyBoard);
  //   bottomTexture.minFilter = THREE.NearestFilter;
  //   bottomTexture.magFilter = THREE.NearestFilter;
  //   // Create Top Part (Screen) with different materials for each side
  //   const TopPartMaterials = [
  //     new THREE.MeshBasicMaterial({ color: 0xe8eef2 }), // Red for the right side
  //     new THREE.MeshBasicMaterial({ color: 0xe8eef2 }), // Green for the left side
  //     new THREE.MeshBasicMaterial({ color: 0xe8eef2 }), // Blue for the top side
  //     new THREE.MeshBasicMaterial({ color: 0xe8eef2 }), // Yellow for the bottom side
  //     new THREE.MeshBasicMaterial({ map: topTexture }), // Texture for the front side
  //     new THREE.MeshBasicMaterial({ color: 0xe8eef2 }), // Black for the back side
  //   ];

  //   const TopPart = new THREE.Mesh(
  //     new THREE.BoxGeometry(2, 1, 0.1), // Added depth for 3D effect
  //     TopPartMaterials
  //   );
  //   TopPart.position.y = 0.5; // Move screen up a bit for better proportions

  //   // Add border (outline) to TopPart
  //   const topPartEdges = new THREE.LineSegments(
  //     new THREE.EdgesGeometry(TopPart.geometry),
  //     new THREE.LineBasicMaterial({ color: 0x000000 }) // Black border
  //   );
  //   TopPart.add(topPartEdges);

  //   const BottomPartMaterials = [
  //     new THREE.MeshBasicMaterial({ color: 0xe8eef2 }), // Red for the right side
  //     new THREE.MeshBasicMaterial({ color: 0xe8eef2 }), // Green for the left side
  //     new THREE.MeshBasicMaterial({ color: 0xe8eef2 }), // Blue for the top side
  //     new THREE.MeshBasicMaterial({ color: 0xe8eef2 }), // Yellow for the bottom side
  //     new THREE.MeshBasicMaterial({ map: bottomTexture }), // Texture for the front side
  //     new THREE.MeshBasicMaterial({ color: 0xe8eef2 }), // Black for the back side
  //   ];

  //   // Create Bottom Part (Keyboard area) with texture
  //   const BottomPart = new THREE.Mesh(
  //     new THREE.BoxGeometry(2, 1, 0.1),
  //     BottomPartMaterials,
  //     new THREE.MeshBasicMaterial({
  //       map: bottomTexture,
  //       side: THREE.DoubleSide,
  //     })
  //   );

  //   const Light = new THREE.PointLight(0xffffff, 50);
  //   scene.add(Light);

  //   BottomPart.position.y = -0.2;
  //   BottomPart.position.z = 0.5;
  //   BottomPart.rotation.x = -1.3;

  //   // Add border (outline) to BottomPart
  //   const bottomPartEdges = new THREE.LineSegments(
  //     new THREE.EdgesGeometry(BottomPart.geometry),
  //     new THREE.LineBasicMaterial({ color: 0x000000 }) // Black border
  //   );
  //   BottomPart.add(bottomPartEdges);

  //   // Combine the two parts into one group
  //   const computerGroup = new THREE.Group();
  //   computerGroup.add(TopPart);
  //   computerGroup.add(BottomPart);

  //   // Add the group to the scene
  //   scene.add(computerGroup);

  //   const sizes = {
  //     width: 500,
  //     height: 400,
  //   };
  //   // Set up Camera
  //   const camera = new THREE.PerspectiveCamera(
  //     75,
  //     sizes.width / sizes.height,
  //     1,
  //     100
  //   );
  //   camera.position.z = 2.5;

  //   // OrbitControl
  //   const controls = new OrbitControls(camera, LaptopRef.current);
  //   controls.enableDamping = true;

  //   // Set up Renderer
  //   const renderer = new THREE.WebGLRenderer({
  //     canvas: LaptopRef.current,
  //     alpha: true,
  //   });
  //   renderer.setSize(sizes.width, sizes.height);

  //   // Add lighting to make the model look better
  //   const ambientLight = new THREE.AmbientLight(0xffffff, 0.6); // Soft white light
  //   scene.add(ambientLight);

  //   const pointLight = new THREE.PointLight(0xffffff, 1);
  //   pointLight.position.set(2, 3, 5);
  //   scene.add(pointLight);

  //   // Animation function for smooth rendering and rotation
  //   const clock = new THREE.Clock();
  //   const animate = () => {
  //     const elapsedTime = clock.getElapsedTime();

  //     // Rotate the entire group for some dynamic effect
  //     // computerGroup.rotation.y = elapsedTime * 0.5; // Adjust rotation speed if needed

  //     // Render the scene
  //     renderer.render(scene, camera);
  //     controls.update();
  //     // Loop the animation
  //     requestAnimationFrame(animate);
  //   };

  //   // Start the animation
  //   animate();
  // };
  useEffect(() => {
    // LaptopModal();
  }, []);
  return (
    <div>
      <div className="container -z-10 h-screen w-full relative overflow-hidden bg-[#000000]">
        <div className="bubbles relative flex">
          <span style={{ "--i": 20 }} className="bubble"></span>
          <span style={{ "--i": 11 }} className="bubble"></span>
          <span style={{ "--i": 15 }} className="bubble"></span>
          <span style={{ "--i": 5 }} className="bubble"></span>
          <span style={{ "--i": 25 }} className="bubble"></span>
          <span style={{ "--i": 10 }} className="bubble"></span>
          <span style={{ "--i": 13 }} className="bubble"></span>
          <span style={{ "--i": 18 }} className="bubble"></span>
          <span style={{ "--i": 14 }} className="bubble"></span>
          <span style={{ "--i": 22 }} className="bubble"></span>
          <span style={{ "--i": 28 }} className="bubble"></span>
          <span style={{ "--i": 16 }} className="bubble"></span>
          <span style={{ "--i": 30 }} className="bubble"></span>
          <span style={{ "--i": 15 }} className="bubble"></span>
          <span style={{ "--i": 11 }} className="bubble"></span>
          <span style={{ "--i": 18 }} className="bubble"></span>
          <span style={{ "--i": 8 }} className="bubble"></span>
          <span style={{ "--i": 35 }} className="bubble"></span>
          <span style={{ "--i": 13 }} className="bubble"></span>
          <span style={{ "--i": 17 }} className="bubble"></span>
          <span style={{ "--i": 23 }} className="bubble"></span>
          <span style={{ "--i": 13 }} className="bubble"></span>
          <span style={{ "--i": 20 }} className="bubble"></span>
          <span style={{ "--i": 10 }} className="bubble"></span>
          <span style={{ "--i": 15 }} className="bubble"></span>
          <span style={{ "--i": 32 }} className="bubble"></span>
          <span style={{ "--i": 40 }} className="bubble"></span>
          <span style={{ "--i": 11 }} className="bubble"></span>
        </div>
      </div>
      <div className="main my-detail">
        <div className="text-white">
          <h4 className="Welcome">Welcome to my porfolio</h4>
          <h1 className="font-Montserratt font-semibold title">
            Hello , I'm{" "}
            <span style={{ color: "#00f7f7", fontWeight: "bold" }}>
              Divyesh Thakur
            </span>
          </h1>
          <h1 className="title">
            a
            <span style={{ color: "#00f7f7", fontWeight: "bold" }}>
              {/* Style will be inherited from the parent element */}
              <Typewriter
                words={[
                  " Frontend Developer",
                  " Backend Developer",
                  " FullStack Developer",
                ]}
                loop={5}
                cursor
                cursorStyle=".|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
                // onLoopDone={handleDone}
                // onType={handleType}
              />
            </span>
          </h1>
          <p class="description">
            <span>
              I use animation as a third dimension by which to simplify
              experiences and kuiding thro each and every interaction. I’m not
              adding motion just to spruce things up, but doing it in ways that.
            </span>
          </p>
          <div className="flex toolIcone">
            <div className="box-shadow flex items-center justify-center">
              <FaGithub className="text-2xl" />
            </div>
            <div className="box-shadow flex items-center justify-center">
              <FaLinkedin className="text-2xl" />
            </div>

            <div className="box-shadow flex items-center justify-center">
              <FaTwitterSquare className="text-2xl" />
            </div>
          </div>
        </div>
        <div className="Laptop-Model">
          {/* <h1>Laptop</h1> */}
          {/* <canvas ref={LaptopRef} className="MacBook"></canvas> */}
          <div className="intro-mac-container">
            <Canvas style={{ width: "500px", height: "500px" }}>
              <ambientLight />
              <OrbitControls enableZoom={false} />
              <pointLight position={[1, 10, 10]} />
              <MacModel />
            </Canvas>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
