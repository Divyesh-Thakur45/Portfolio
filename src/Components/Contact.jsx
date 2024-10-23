import React, { useEffect, useRef } from "react";
import "../Style/contact.css";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import worldTexture from "../Images/glob.jpg";

const Contact = () => {
  const Box = useRef(null);
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

    // Set up sizes
    const sizes = {
      width: 650,
      height: 650,
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

    // Handle window resizing
    window.addEventListener("resize", () => {
      sizes.width = 1000;
      sizes.height = 1000;

      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();

      renderer.setSize(sizes.width, sizes.height);
    });

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
  }, []);
  return (
    <div>
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
