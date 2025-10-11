"use client";

import Particles from "@/components/site/Particles";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative scroll-mt-24 py-24 md:py-32 px-6 md:px-10"
      style={{ background: "#000" }}
    >
      {/* background stars */}
      <Particles count={100} />

      <div className="container">
        <h1>My Skills</h1>
        <p className="subtitle">Crafting digital experiences with cutting-edge technology</p>

        {/* Skills grid */}
        <div className="grid">
          {/* React */}
          <div className="card">
            <div className="icon">
              <div className="react-icon">
                <div className="electron-orbit orbit1" />
                <div className="electron-orbit orbit2" />
                <div className="electron-orbit orbit3" />
                <div className="nucleus" />
              </div>
            </div>
            <div className="card-title">React</div>
          </div>

          {/* UI/UX */}
          <div className="card">
            <div className="icon design-icon" />
            <div className="card-title">UI/UX Design</div>
          </div>

          {/* Node.js */}
          <div className="card">
            <div className="icon nodejs-icon" />
            <div className="card-title">Node.js</div>
          </div>

          {/* Express.js */}
          <div className="card">
            <div className="icon express-icon" />
            <div className="card-title">Express.js</div>
          </div>

          {/* MongoDB */}
          <div className="card">
            <div className="icon mongodb-icon" />
            <div className="card-title">MongoDB</div>
          </div>

          {/* Cloud Deploy */}
          <div className="card">
            <div className="icon cloud-icon" />
            <div className="card-title">Cloud Deploy</div>
          </div>
        </div>

        <h2>Programming Languages</h2>

        {/* Languages grid */}
        <div className="grid">
          <div className="card">
            <div className="icon badge-icon js-badge">JS</div>
            <div className="card-title">JavaScript</div>
          </div>

          <div className="card">
            <div className="icon badge-icon ts-badge">TS</div>
            <div className="card-title">TypeScript</div>
          </div>

          <div className="card">
            <div className="icon badge-icon python-badge">PY</div>
            <div className="card-title">Python</div>
          </div>

          <div className="card">
            <div className="icon badge-icon java-badge">
              <span style={{ fontSize: "0.6em" }}>☕</span>
            </div>
            <div className="card-title">Java</div>
          </div>

          <div className="card">
            <div className="icon badge-icon cpp-badge">C++</div>
            <div className="card-title">C++</div>
          </div>

          <div className="card">
            <div className="icon badge-icon c-badge">C</div>
            <div className="card-title">C</div>
          </div>

          <div className="card">
            <div className="icon badge-icon html-badge">5</div>
            <div className="card-title">HTML</div>
          </div>

          <div className="card">
            <div className="icon badge-icon sql-badge">SQL</div>
            <div className="card-title">SQL</div>
          </div>
        </div>
      </div>

      {/* styled-jsx to reproduce your exact CSS/animation */}
      <style jsx>{`
        * { box-sizing: border-box; }
        .container {
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        h1 {
          text-align: center;
          font-size: 3.5em;
          margin-bottom: 20px;
          background: linear-gradient(135deg, #a855f7 0%, #ec4899 50%, #06b6d4 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientShift 3s ease infinite;
          background-size: 200% 200%;
          font-weight: 800;
        }
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .subtitle {
          text-align: center;
          font-size: 1.2em;
          color: #9ca3af;
          margin-bottom: 60px;
          animation: fadeInUp 1s ease;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        h2 {
          text-align: center;
          font-size: 2.8em;
          margin: 100px 0 60px;
          background: linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 700;
          animation: fadeInUp 1s ease;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 30px;
          margin-bottom: 60px;
        }

        .card {
          background: rgba(15, 23, 42, 0.7);
          border: 1px solid rgba(139, 92, 246, 0.3);
          border-radius: 20px;
          padding: 50px 40px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          backdrop-filter: blur(10px);
          position: relative;
          overflow: hidden;
          animation: fadeInScale 0.6s ease backwards;
        }
        .card:nth-child(1) { animation-delay: 0.1s; }
        .card:nth-child(2) { animation-delay: 0.2s; }
        .card:nth-child(3) { animation-delay: 0.3s; }
        .card:nth-child(4) { animation-delay: 0.4s; }
        .card:nth-child(5) { animation-delay: 0.5s; }
        .card:nth-child(6) { animation-delay: 0.6s; }
        .card:nth-child(7) { animation-delay: 0.7s; }
        .card:nth-child(8) { animation-delay: 0.8s; }

        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(0.9); }
          to   { opacity: 1; transform: scale(1); }
        }

        .card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, rgba(6, 182, 212, 0.1) 100%);
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        .card::after {
          content: '';
          position: absolute;
          top: -50%; left: -50%;
          width: 200%; height: 200%;
          background: linear-gradient(45deg, transparent, rgba(168, 85, 247, 0.1), transparent);
          transform: rotate(45deg);
          transition: all 0.6s ease;
          opacity: 0;
        }
        .card:hover {
          transform: translateY(-15px) scale(1.02);
          box-shadow: 0 25px 50px rgba(168, 85, 247, 0.4);
          border-color: rgba(168, 85, 247, 0.6);
        }
        .card:hover::before { opacity: 1; }
        .card:hover::after  { opacity: 1; animation: shimmer 1.5s ease-in-out; }
        @keyframes shimmer {
          0%   { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
          100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
        }

        .icon {
          width: 130px; height: 130px;
          margin-bottom: 30px;
          position: relative; z-index: 1;
          animation: floatIcon 3s ease-in-out infinite;
        }
        @keyframes floatIcon {
          0%, 100% { transform: translateY(0px); }
          50%      { transform: translateY(-10px); }
        }
        .card:hover .icon { animation: floatIcon 1.5s ease-in-out infinite, pulse 2s ease-in-out infinite; }
        @keyframes pulse {
          0%, 100% { transform: scale(1) translateY(0px); }
          50%      { transform: scale(1.05) translateY(-10px); }
        }

        .card-title {
          font-size: 1.6em;
          font-weight: 600;
          background: linear-gradient(135deg, #06b6d4 0%, #a855f7 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          position: relative;
          z-index: 1;
        }

        /* React icon */
        .react-icon { position: relative; width: 130px; height: 130px; animation: reactSpin 20s linear infinite; }
        @keyframes reactSpin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .card:hover .react-icon { animation: reactSpin 10s linear infinite; }
        .electron-orbit {
          position: absolute; border: 3px solid; border-radius: 50%;
          box-shadow: 0 0 30px currentColor; animation: orbitGlow 2s ease-in-out infinite;
          width: 100%; height: 40%; top: 30%; left: 0;
        }
        @keyframes orbitGlow { 0%,100% { filter: brightness(1); } 50% { filter: brightness(1.5); } }
        .orbit1 { transform: rotate(60deg);  color: #61dafb; }
        .orbit2 { transform: rotate(-60deg); color: #06b6d4; }
        .orbit3 { color: #a855f7; }
        .nucleus {
          position: absolute; width: 24px; height: 24px; border-radius: 50%;
          background: linear-gradient(135deg, #61dafb 0%, #a855f7 100%);
          top: 50%; left: 50%; transform: translate(-50%, -50%);
          box-shadow: 0 0 40px rgba(97, 218, 251, 1);
          animation: nucleusPulse 2s ease-in-out infinite;
        }
        @keyframes nucleusPulse { 0%,100% { transform: translate(-50%, -50%) scale(1); } 50% { transform: translate(-50%, -50%) scale(1.2); } }

        /* Node.js hex */
        .nodejs-icon {
          width: 130px; height: 130px;
          background: linear-gradient(135deg, #68a063 0%, #8cc84b 100%);
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          box-shadow: 0 15px 40px rgba(104, 160, 99, 0.6);
          position: relative; animation: hexRotate 4s ease-in-out infinite;
        }
        @keyframes hexRotate { 0%,100% { transform: rotate(0deg); } 50% { transform: rotate(360deg); } }
        .nodejs-icon::after {
          content: ''; position: absolute; width: 60%; height: 60%; top: 20%; left: 20%;
          background: rgba(255,255,255,0.15);
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        }

        /* MongoDB leaf */
        .mongodb-icon {
          width: 130px; height: 130px; border-radius: 50% 50% 0 0;
          background: linear-gradient(180deg, #4db33d 0%, #3fa037 100%);
          position: relative; box-shadow: 0 15px 40px rgba(77,179,61,0.6);
          animation: mongoLeaf 3s ease-in-out infinite;
        }
        @keyframes mongoLeaf { 0%,100% { transform: rotate(-5deg); } 50% { transform: rotate(5deg); } }
        .mongodb-icon::after {
          content: ''; position: absolute; width: 25%; height: 50%;
          background: rgba(255,255,255,0.4); left: 22%; top: 15%; border-radius: 50%;
          animation: leafShine 2s ease-in-out infinite;
        }
        @keyframes leafShine { 0%,100% { opacity: 0.4; } 50% { opacity: 0.7; } }

        /* Express */
        .express-icon {
          width: 130px; height: 130px; border-radius: 15px;
          background: linear-gradient(135deg, #4a5568 0%, #1a202c 100%);
          display: flex; align-items: center; justify-content: center;
          color: #fff; box-shadow: 0 15px 40px rgba(0,0,0,0.6); position: relative;
          font-size: 4em; font-weight: bold;
        }
        .express-icon::before {
          content: 'E';
          text-shadow: 0 0 30px rgba(255,255,255,0.7);
          animation: textGlow 2s ease-in-out infinite;
        }
        @keyframes textGlow { 0%,100% { text-shadow: 0 0 30px rgba(255,255,255,0.7); } 50% { text-shadow: 0 0 50px rgba(168,85,247,0.9); } }

        /* Design (pen tablet) */
        .design-icon {
          width: 130px; height: 90px; border-radius: 12px;
          background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
          position: relative; box-shadow: 0 15px 40px rgba(44,62,80,0.6);
        }
        .design-icon::before {
          content: ''; position: absolute; width: 80%; height: 70%;
          top: 10%; left: 10%; border-radius: 6px;
          background: linear-gradient(135deg, #ecf0f1 0%, #bdc3c7 100%);
          animation: screenGlow 2s ease-in-out infinite;
        }
        @keyframes screenGlow { 0%,100% { box-shadow: inset 0 0 20px rgba(168, 85, 247, 0.3); } 50% { box-shadow: inset 0 0 30px rgba(6, 182, 212, 0.5); } }
        .design-icon::after {
          content: ''; position: absolute; width: 5px; height: 70px; right: 20px; bottom: -25px;
          border-radius: 3px; transform: rotate(-45deg);
          background: linear-gradient(180deg, #a855f7 0%, #ec4899 100%);
          box-shadow: 0 0 20px rgba(168,85,247,0.8);
          animation: penDraw 2s ease-in-out infinite;
        }
        @keyframes penDraw { 0%,100% { transform: rotate(-45deg) translateY(0); } 50% { transform: rotate(-45deg) translateY(-5px); } }

        /* Cloud deploy */
        .cloud-icon {
          width: 130px; height: 90px; border-radius: 50px;
          background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%);
          position: relative; box-shadow: 0 15px 40px rgba(6,182,212,0.6);
          animation: cloudFloat 4s ease-in-out infinite;
        }
        @keyframes cloudFloat { 0%,100% { transform: translateX(0); } 50% { transform: translateX(10px); } }
        .cloud-icon::before {
          content: ''; position: absolute; width: 55px; height: 55px; top: -22px; left: 22px; border-radius: 50%;
          background: linear-gradient(135deg, #22d3ee 0%, #06b6d4 100%);
          animation: cloudPuff 3s ease-in-out infinite;
        }
        @keyframes cloudPuff { 0%,100% { transform: scale(1); } 50% { transform: scale(1.1); } }
        .cloud-icon::after {
          content: ''; position: absolute; width: 45px; height: 45px; top: -12px; right: 18px; border-radius: 50%;
          background: linear-gradient(135deg, #67e8f9 0%, #22d3ee 100%);
        }

        /* Language badges */
        .badge-icon {
          width: 130px; height: 130px; border-radius: 18px;
          display: flex; align-items: center; justify-content: center;
          font-size: 2.8em; font-weight: bold; position: relative;
          box-shadow: 0 15px 40px rgba(0,0,0,0.4);
          transition: all 0.4s ease;
        }
        .badge-icon::before {
          content: ''; position: absolute; inset: 12px; border-radius: 12px;
          background: rgba(255,255,255,0.1);
          animation: badgeShine 3s ease-in-out infinite;
        }
        @keyframes badgeShine { 0%,100% { opacity: 0.1; } 50% { opacity: 0.2; } }
        .card:hover .badge-icon { transform: rotateY(360deg); }

        .js-badge   { background: linear-gradient(135deg, #f7df1e 0%, #f0db4f 100%); color: #000; }
        .ts-badge   { background: linear-gradient(135deg, #3178c6 0%, #235a97 100%); color: #fff; }
        .python-badge { background: linear-gradient(135deg, #4B8BBE 0%, #306998 50%, #FFD43B 50%, #FFE873 100%); color:#fff; }
        .java-badge  { background: linear-gradient(135deg, #f89820 0%, #e76f00 100%); color: #fff; }
        .cpp-badge   { background: linear-gradient(135deg, #00599C 0%, #004482 100%); color:#fff; }
        .c-badge     { background: linear-gradient(135deg, #A8B9CC 0%, #7B8D9E 100%); color:#1e3a8a; }
        .html-badge  {
          background: linear-gradient(135deg, #e34c26 0%, #c7391b 100%);
          color:#fff;
          clip-path: polygon(10% 0%, 90% 0%, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0% 90%, 0% 10%);
        }
        .sql-badge   { background: linear-gradient(135deg, #00758f 0%, #005266 100%); color:#fff; }

        @media (max-width: 768px) {
          h1 { font-size: 2.5em; }
          h2 { font-size: 2em; }
          .grid { grid-template-columns: 1fr; }
          .icon, .nodejs-icon, .react-icon { width: 110px; height: 110px; }
          .badge-icon { width: 110px; height: 110px; }
        }
      `}</style>
    </section>
  );
}
