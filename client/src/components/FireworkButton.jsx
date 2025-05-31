import { useRef } from 'react';

const FireworkButton = ({onClick}) => {
  const containerRef = useRef(null);

  const createFireworkBurst = (xOrigin, yOrigin) => {
    const container = containerRef.current;
    if (!container) return;

    for (let i = 0; i < 25; i++) {
      const dot = document.createElement('div');
      dot.className = 'firework';

      const angle = Math.random() * 2 * Math.PI;
      const radius = 100 + Math.random() * 50;
      const x = Math.cos(angle) * radius + 'px';
      const y = Math.sin(angle) * radius + 'px';

      dot.style.setProperty('--x', x);
      dot.style.setProperty('--y', y);
      dot.style.left = `${xOrigin}px`;
      dot.style.top = `${yOrigin}px`;
      dot.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;

      container.appendChild(dot);

      setTimeout(() => dot.remove(), 1000);
    }
  };

  const handleClick = (e) => {
    const duration = 5000;
    const interval = 400;
    let elapsed = 0;

    const fireworkInterval = setInterval(() => {
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight * 0.6;
      createFireworkBurst(x, y);

      elapsed += interval;
      if (elapsed >= duration) clearInterval(fireworkInterval);
    }, interval);

    setTimeout(() => onClick(), 3000);

  };

  return (
    <>
      <button onClick={handleClick} className="mt-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-3 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-200 font-semibold">
        Do Something Cool!
      </button>
      <div className="firework-container fixed inset-0 pointer-events-none" ref={containerRef}></div>
    </>
  );
};

export default FireworkButton;