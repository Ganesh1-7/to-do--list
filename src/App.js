import { useEffect, useState } from "react";

export default function App() {
  const [show, setShow] = useState(false);
  const [style, setStyle] = useState({});

  useEffect(() => {
    setTimeout(() => setShow(true), 200);
  }, []);

  function handleMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = -(y - rect.height / 2) / 15;
    const rotateY = (x - rect.width / 2) / 15;

    setStyle({
      transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    });
  }

  function reset() {
    setStyle({ transform: "rotateX(0deg) rotateY(0deg)" });
  }

  return (
    <div className="page">
      <div
        className={`card ${show ? "show" : ""}`}
        style={style}
        onMouseMove={handleMove}
        onMouseLeave={reset}
      >
        <h1>Interactive Card</h1>
        <p>Move your mouse to tilt the card</p>
        <button className="btn">Explore</button>
      </div>

      <style>{`

      body{
        margin:0;
      }

      .page{
        height:100vh;
        display:flex;
        justify-content:center;
        align-items:center;
        font-family:sans-serif;

        background: linear-gradient(120deg,#00c6ff,#0072ff,#6a11cb);
        background-size:300% 300%;
        animation:bgMove 8s ease infinite;
      }

      .card{
        width:340px;
        padding:40px;
        border-radius:20px;
        background:rgba(255,255,255,0.1);
        backdrop-filter:blur(15px);
        color:white;
        text-align:center;

        transition:transform .2s ease, opacity .6s ease;
        transform-style:preserve-3d;

        opacity:0;
        transform:translateY(40px);
      }

      .show{
        opacity:1;
        transform:translateY(0);
      }

      .btn{
        margin-top:20px;
        padding:12px 25px;
        border:none;
        border-radius:10px;
        background:white;
        font-weight:bold;
        cursor:pointer;
        transition:all .25s;
      }

      .btn:hover{
        box-shadow:0 0 15px rgba(255,255,255,0.7);
        transform:scale(1.1);
      }

      @keyframes bgMove{
        0%{background-position:0% 50%;}
        50%{background-position:100% 50%;}
        100%{background-position:0% 50%;}
      }

      `}</style>
    </div>
  );
}