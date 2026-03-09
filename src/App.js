import React, { useEffect, useState } from "react";

export default function App() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className="container">
      {/* Animated Background Glow */}
      <div
        className="cursor-glow"
        style={{
          left: mouse.x - 150,
          top: mouse.y - 150,
        }}
      />

      <h1 className="glitch" data-text="EXTREME REACT">
        EXTREME REACT
      </h1>

      <div className="card-container">
        {[1, 2, 3].map((item) => (
          <div key={item} className="card">
            <h2>Card {item}</h2>
            <p>Hover me. I dare you.</p>
          </div>
        ))}
      </div>

      <button className="extreme-btn">CLICK THE CHAOS</button>

      {/* Floating particles */}
      {[...Array(25)].map((_, i) => (
        <div key={i} className="particle" />
      ))}

      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: sans-serif;
        }

        body {
          overflow: hidden;
        }

        .container {
          min-height: 100vh;
          background: radial-gradient(circle at center, #0f0f1a, #050509);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: white;
          position: relative;
          overflow: hidden;
        }

        /* Cursor Glow */
        .cursor-glow {
          position: fixed;
          width: 300px;
          height: 300px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(0,255,255,0.6), transparent 70%);
          pointer-events: none;
          transition: all 0.05s linear;
          filter: blur(40px);
        }

        /* Glitch Text */
        .glitch {
          font-size: 4rem;
          position: relative;
          text-transform: uppercase;
          animation: flicker 2s infinite alternate;
        }

        .glitch::before,
        .glitch::after {
          content: attr(data-text);
          position: absolute;
          left: 0;
          width: 100%;
          overflow: hidden;
          color: cyan;
          clip: rect(0, 900px, 0, 0);
        }

        .glitch::before {
          animation: glitchTop 2s infinite linear alternate-reverse;
          color: magenta;
        }

        .glitch::after {
          animation: glitchBottom 1.5s infinite linear alternate-reverse;
          color: cyan;
        }

        @keyframes glitchTop {
          0% { clip: rect(0, 9999px, 0, 0); transform: translate(0); }
          20% { clip: rect(0, 9999px, 50px, 0); transform: translate(-5px, -5px); }
          40% { clip: rect(0, 9999px, 20px, 0); transform: translate(5px, 5px); }
          60% { clip: rect(0, 9999px, 60px, 0); transform: translate(-5px, 0); }
          100% { clip: rect(0, 9999px, 0, 0); transform: translate(0); }
        }

        @keyframes glitchBottom {
          0% { clip: rect(0, 9999px, 0, 0); transform: translate(0); }
          20% { clip: rect(30px, 9999px, 80px, 0); transform: translate(5px, 5px); }
          40% { clip: rect(10px, 9999px, 40px, 0); transform: translate(-5px, -5px); }
          60% { clip: rect(20px, 9999px, 70px, 0); transform: translate(5px, 0); }
          100% { clip: rect(0, 9999px, 0, 0); transform: translate(0); }
        }

        @keyframes flicker {
          from { opacity: 0.8; }
          to { opacity: 1; }
        }

        /* Cards */
        .card-container {
          display: flex;
          gap: 2rem;
          margin: 3rem 0;
        }

        .card {
          width: 200px;
          height: 200px;
          background: linear-gradient(135deg, #111, #1f1f2e);
          border-radius: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          transform-style: preserve-3d;
        }

        .card:hover {
          transform: rotateY(20deg) rotateX(20deg) scale(1.1);
          box-shadow: 0 20px 40px rgba(0,255,255,0.5);
        }

        /* Button */
        .extreme-btn {
          padding: 15px 40px;
          font-size: 1.2rem;
          border: none;
          border-radius: 50px;
          background: linear-gradient(90deg, cyan, magenta);
          color: black;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: transform 0.3s ease;
        }

        .extreme-btn:hover {
          transform: scale(1.2) rotate(-3deg);
        }

        /* Floating Particles */
        .particle {
          position: absolute;
          width: 6px;
          height: 6px;
          background: white;
          border-radius: 50%;
          animation: float 10s infinite linear;
          opacity: 0.5;
        }

        .particle:nth-child(n) {
          left: calc(100% * var(--i));
        }

        @keyframes float {
          0% {
            transform: translateY(100vh) scale(0.5);
          }
          100% {
            transform: translateY(-10vh) scale(1.5);
          }
        }

        .particle {
          left: calc(100% * ${Math.random()});
          animation-duration: ${5 + Math.random() * 10}s;
        }
      `}</style>
    </div>
  );
}