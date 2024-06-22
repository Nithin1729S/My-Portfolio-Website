import React from 'react';
import { createRoot } from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.css';
import App from "./components/App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let particleArray = [];

// Function to detect mobile devices
function isMobileDevice() {
  return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
}

// Handle mouse
const mouse = {
  x: null,
  y: null,
  radius: 200
}

if (!isMobileDevice()) {




  ctx.font = '90px';
  ctx.fillText('A', 20, 50);
  ctx.strokeRect(0, 0, 100, 100);

  class Particle {
    constructor(x, y, randomMoveSpeed) {
      this.x = x;
      this.y = y;
      this.size = 1;
      this.baseX = this.x;
      this.baseY = this.y;
      this.density = (Math.random() * 9) + 1;
      this.randomMoveSpeed = randomMoveSpeed;
      this.velocityX = (Math.random() - 0.5) * randomMoveSpeed;
      this.velocityY = (Math.random() - 0.5) * randomMoveSpeed;
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fill();
    }
    update() {
      let dx = mouse.x - this.x;
      let dy = mouse.y - this.y;
      let distance = Math.sqrt(dx * dx + dy * dy);
      let forceDirectionX = dx / distance;
      let forceDirectionY = dy / distance;
      let maxDistance = mouse.radius;
      let force = (maxDistance - distance) / maxDistance;
      let directionX = forceDirectionX * force * this.density;
      let directionY = forceDirectionY * force * this.density;

      if (distance < mouse.radius) {
        this.x -= directionX;
        this.y -= directionY;
      } else {
        if (this.x !== this.baseX) {
          let dx = this.x - this.baseX;
          this.x -= dx / 50;
        }
        if (this.y !== this.baseY) {
          let dy = this.y - this.baseY;
          this.y -= dy / 50;
        }
      }

      // Random movement based on velocity
      this.velocityX += (Math.random() - 0.5) * this.randomMoveSpeed * 0.1; // Adjust the 0.1 to control randomness
      this.velocityY += (Math.random() - 0.5) * this.randomMoveSpeed * 0.1;

      this.x += this.velocityX;
      this.y += this.velocityY;

      // Ensure particles stay within canvas boundaries
      if (this.x < 0) {
        this.x = 0;
        this.velocityX *= -1;
      }
      if (this.x > canvas.width) {
        this.x = canvas.width;
        this.velocityX *= -1;
      }
      if (this.y < 0) {
        this.y = 0;
        this.velocityY *= -1;
      }
      if (this.y > canvas.height) {
        this.y = canvas.height;
        this.velocityY *= -1;
      }
    }
  }

  function init() {
    particleArray = [];
    let randomMoveSpeed = 0.2; // Control the speed of random movements here
    let numberOfParticles = Math.floor((canvas.width * canvas.height) / 3000); 
    for (let i = 0; i < numberOfParticles; i++) {
      
      let x = Math.random() * canvas.width;
      let y = Math.random() * canvas.height;
      particleArray.push(new Particle(x, y, randomMoveSpeed));
    }
  }
  init();
  function adjustCanvasSize() {
    const ratio = window.devicePixelRatio || 1;
    canvas.width = canvas.clientWidth * ratio;
    canvas.height = canvas.clientHeight * ratio;
    ctx.scale(ratio, ratio);
    init()
  }
  adjustCanvasSize();
  window.addEventListener('resize', adjustCanvasSize);
  window.addEventListener('mousemove', function (event) {
    mouse.x = event.x;
    mouse.y = event.y;
  });
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const element of particleArray) {
      element.draw();
      element.update();
    }
    requestAnimationFrame(animate);
  }
  animate();




}
else {
  const canvas = document.getElementById("canvas1");
  const ctx = canvas.getContext('2d');

  

  let particleArray = [];
  const speed = 0.3; // Speed multiplier to control particle speed

  ctx.font = '90px Arial';
  ctx.fillText('A', 20, 50);
  ctx.strokeRect(0, 0, 100, 100);

  class Particle {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.size = 1;
      this.baseX = this.x;
      this.baseY = this.y;
      this.density = (Math.random() * 9) + 1;
      this.directionX = (Math.random() * 2 - 1) * speed; // random direction on X-axis scaled by speed
      this.directionY = (Math.random() * 2 - 1) * speed; // random direction on Y-axis scaled by speed
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fill();
    }
    update() {
      // Random movement
      this.x += this.directionX;
      this.y += this.directionY;

      // Boundary check and bounce back
      if (this.x + this.size > canvas.width / (window.devicePixelRatio || 1) || this.x - this.size < 0) {
        this.directionX = -this.directionX;
      }
      if (this.y + this.size > canvas.height / (window.devicePixelRatio || 1) || this.y - this.size < 0) {
        this.directionY = -this.directionY;
      }
    }
  }

  function init() {
    particleArray = [];
    let numberOfParticles = Math.floor((canvas.width * canvas.height) / 10000); 
    for (let i = 0; i < numberOfParticles; i++) {
      let x = Math.random() * canvas.width / (window.devicePixelRatio || 1);
      let y = Math.random() * canvas.height / (window.devicePixelRatio || 1);
      particleArray.push(new Particle(x, y));
    }
  }
  init();
  // Adjust canvas size for high-DPI displays
  function adjustCanvasSize() {
    const ratio = window.devicePixelRatio || 1;
    canvas.width = canvas.clientWidth * ratio;
    canvas.height = canvas.clientHeight * ratio;
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0); // Use setTransform to ensure scaling
    init()
  }

  // Call the function to adjust canvas size
  adjustCanvasSize();

  window.addEventListener('resize', adjustCanvasSize);
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const element of particleArray) {
      element.draw();
      element.update();
    }
    requestAnimationFrame(animate);
  }
  animate();



}

root.render(
  <App />
);
