import React, { useContext, useEffect, useRef } from "react";
import "../Style/contact.css";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import worldTexture from "../Images/glob.jpeg";
import { themeContext } from "./Context/Allcontext";

const Contact = () => {
  const Box = useRef(null);

  const { Theme } = useContext(themeContext);
  useEffect(() => {
    const scene = new THREE.Scene();

    // Load texture
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(worldTexture);

    // Create sphere mesh with texture
    const mesh = new THREE.Mesh(
      new THREE.SphereGeometry(1, 35, 35),
      new THREE.MeshBasicMaterial({ map: texture })
    );
    scene.add(mesh);

    // Initialize sizes object
    const sizes = {
      width: window.innerWidth * 0.8, // Initial responsive width
      height: window.innerHeight * 0.8, // Initial responsive height
    };

    // Create camera
    const camera = new THREE.PerspectiveCamera(
      75,
      sizes.width / sizes.height,
      0.1,
      100
    );
    camera.position.z = 3;
    scene.add(camera);

    // Create OrbitControls
    const controls = new OrbitControls(camera, Box.current);
    controls.enableDamping = true;

    // Create renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: Box.current,
    });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Function to handle resizing based on screen size
    const handleResize = () => {
      if (window.innerWidth <= 576) {
        sizes.width = 300;
        sizes.height = 300;
      } else if (window.innerWidth > 576 && window.innerWidth <= 768) {
        sizes.width = 500;
        sizes.height = 500;
      } else if (window.innerWidth > 768 && window.innerWidth <= 992) {
        sizes.width = 650;
        sizes.height = 650;
      } else if (window.innerWidth > 992 && window.innerWidth <= 1200) {
        sizes.width = 800;
        sizes.height = 800;
      } else if (window.innerWidth > 1200 && window.innerWidth <= 1400) {
        sizes.width = 1000;
        sizes.height = 1000;
      } else {
        sizes.width = 1200;
        sizes.height = 1200;
      }

      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();

      renderer.setSize(sizes.width, sizes.height);
    };

    // Set initial sizes
    handleResize();

    // Listen for window resizing
    window.addEventListener("resize", handleResize);

    // Animation function
    const clock = new THREE.Clock();
    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Rotate the mesh
      mesh.rotation.y = elapsedTime;

      // Update controls with damping
      controls.update();

      // Render the scene
      renderer.render(scene, camera);

      // Call the next frame
      requestAnimationFrame(animate);
    };

    // Start the animation loop
    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
    };
  }, [worldTexture]);
  return (
    <div className={`${Theme ? 'bg-[#000000]' : 'bg-[#ECF0F3]'}`}>
      <div className="contact-page-header">
        <h1>My Skills</h1>
        <span className="line-1"></span>
        <span className="line-2"></span>
      </div>
      <div className="contact-container">
        <div className="contact-form">
          <h1>Contact.</h1>
          <form>
            <label>Your Name</label>
            <input type="text" placeholder="What's your good name?" />

            <label>Your Email</label>
            <input type="email" placeholder="What's your web address?" />

            <label>Your Message</label>
            <textarea placeholder="What you want to say?"></textarea>

            <button type="submit">Send</button>
          </form>
        </div>

        <div className="contact-globe">
          {/* This is where the 3D globe animation would go */}
          <div className="globe-placeholder">
            {/* Placeholder for the globe, replace this with Three.js or another animation */}
            <canvas ref={Box} className="global"></canvas>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;