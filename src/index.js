import React from 'react';
import { createRoot } from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.css';
import App from "./components/App";
import index from './index.css';

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
    window.addEventListener('mousemove', function(event){
        mouse.x = event.x;
        mouse.y = event.y;
    });

    ctx.font = '90px';
    ctx.fillText = ('A', 20, 50);
    ctx.strokeRect(0,0,100,100);

    class Particle {
        constructor(x,y){
            this.x = x;
            this.y = y;
            this.size = 1;
            this.baseX = this.x;
            this.baseY = this.y;
            this.density = (Math.random()* 9)+1;
        }
        draw(){
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI*2);
            ctx.closePath();
            ctx.fill();
        }
        update(){
            let dx = mouse.x - this.x;
            let dy = mouse.y - this.y;
            let distance = Math.sqrt(dx*dx + dy*dy);
            let forceDirectionX = dx / distance;
            let forceDirectionY = dy / distance;
            let maxDistance = mouse.radius;
            let force = (maxDistance - distance) / maxDistance;
            let directionX = forceDirectionX*force*this.density;
            let directionY = forceDirectionY*force*this.density;

            if(distance<mouse.radius){
                this.x -= directionX;
                this.y -= directionY;
            } else{
                if(this.x !== this.baseX){
                    let dx = this.x - this.baseX;
                    this.x -=dx/50;
                }
                if(this.y !== this.baseY){
                    let dy = this.y - this.baseY;
                    this.y -=dy/50;
                }
            }
        }
    }

    function init(){
        particleArray = [];
        for(let i =0; i < 500; i++){
            let x = Math.random()*canvas.width;
            let y = Math.random()*canvas.height;
            particleArray.push(new Particle(x,y));
        }
    }
    init();

    function animate(){
        ctx.clearRect(0,0,canvas.width, canvas.height);
        for(const element of particleArray){
            element.draw();
            element.update();
        }
        requestAnimationFrame(animate);
    }
    animate();
}
else{
    const canvas = document.getElementById("canvas1");
  const ctx = canvas.getContext('2d');

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  let particleArray = [];

  const mouse = {
    x: null,
    y: null,
    radius: 200
  }

  function handleMouse(event) {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
  }

  function handleTouch(event) {
    const touch = event.touches[0];
    mouse.x = touch.clientX;
    mouse.y = touch.clientY;
  }

  // Add event listeners based on device type
  if (!isMobileDevice()) {
    window.addEventListener('mousemove', handleMouse);
  } else {
    window.addEventListener('touchmove', handleTouch);
  }

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
    }
  }

  function init() {
    particleArray = [];
    for (let i = 0; i < 50; i++) {
      let x = Math.random() * canvas.width;
      let y = Math.random() * canvas.height;
      particleArray.push(new Particle(x, y));
    }
  }
  init();

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
