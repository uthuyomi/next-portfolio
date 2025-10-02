"use client";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles"; // 全オプションを読み込み

export default function Particle() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine); // プラグインを読み込み
  }, []);

  const meshOptions = {
    background: {
      color: "#0f172a",
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" },
      },
      modes: {
        repulse: { distance: 100 },
      },
    },
    particles: {
      color: { value: "#ffffff" },
      links: {
        enable: true,
        color: "#38bdf8",
        distance: 140,
        opacity: 0.4,
        width: 1,
      },
      move: { enable: true, speed: 1 },
      number: { value: 80, density: { enable: true, area: 800 } },
      size: { value: 2 },
    },
    detectRetina: true,
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={meshOptions}
      className="fixed z-10"
    />
  );
}
