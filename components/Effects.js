"use client";
import { useEffect } from "react";

// Efeitos interativos: parallax do mouse, tilt 3D nos cards, ripple e faíscas no clique.
// Tudo desliga com prefers-reduced-motion.
export default function Effects() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const fine = window.matchMedia("(pointer: fine)").matches;
    const root = document.documentElement;
    const off = [];
    const on = (el, ev, fn, opt) => { el.addEventListener(ev, fn, opt); off.push(() => el.removeEventListener(ev, fn, opt)); };

    // Mouse global suavizado -> --mx / --my (-1 a 1)
    let tx = 0, ty = 0, x = 0, y = 0, raf;
    const loop = () => {
      x += (tx - x) * 0.08; y += (ty - y) * 0.08;
      root.style.setProperty("--mx", x.toFixed(4));
      root.style.setProperty("--my", y.toFixed(4));
      raf = requestAnimationFrame(loop);
    };
    if (fine) {
      on(window, "pointermove", (e) => { tx = (e.clientX / innerWidth) * 2 - 1; ty = (e.clientY / innerHeight) * 2 - 1; }, { passive: true });
      loop();
    }

    // Rolagem -> --scroll (px), para camadas do fundo
    const onScroll = () => root.style.setProperty("--scroll", String(scrollY));
    on(window, "scroll", onScroll, { passive: true }); onScroll();

    // Tilt 3D
    if (fine) {
      document.querySelectorAll("[data-tilt]").forEach((el) => {
        const max = Number(el.dataset.tilt) || 8;
        on(el, "pointermove", (e) => {
          const r = el.getBoundingClientRect();
          const px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height;
          el.style.setProperty("--rx", `${(0.5 - py) * max}deg`);
          el.style.setProperty("--ry", `${(px - 0.5) * max}deg`);
          el.style.setProperty("--gx", `${px * 100}%`);
          el.style.setProperty("--gy", `${py * 100}%`);
          el.classList.add("tilting");
        });
        on(el, "pointerleave", () => {
          el.style.setProperty("--rx", "0deg"); el.style.setProperty("--ry", "0deg");
          el.classList.remove("tilting");
        });
      });

      // Botões magnéticos
      document.querySelectorAll(".btn").forEach((b) => {
        on(b, "pointermove", (e) => {
          const r = b.getBoundingClientRect();
          b.style.setProperty("--bx", `${(e.clientX - r.left - r.width / 2) * 0.18}px`);
          b.style.setProperty("--by", `${(e.clientY - r.top - r.height / 2) * 0.3}px`);
        });
        on(b, "pointerleave", () => { b.style.setProperty("--bx", "0px"); b.style.setProperty("--by", "0px"); });
      });
    }

    // Clique: ripple nos botões + faíscas em qualquer lugar
    on(document, "pointerdown", (e) => {
      const b = e.target.closest(".btn");
      if (b) {
        const r = b.getBoundingClientRect();
        const s = document.createElement("span");
        s.className = "ripple";
        s.style.left = `${e.clientX - r.left}px`; s.style.top = `${e.clientY - r.top}px`;
        b.appendChild(s); setTimeout(() => s.remove(), 650);
        b.classList.remove("boing"); void b.offsetWidth; b.classList.add("boing");
      }
      const n = 10;
      for (let i = 0; i < n; i++) {
        const p = document.createElement("i");
        p.className = "spark";
        const a = (Math.PI * 2 * i) / n + Math.random() * 0.4, d = 34 + Math.random() * 30;
        p.style.left = `${e.clientX}px`; p.style.top = `${e.clientY}px`;
        p.style.setProperty("--dx", `${Math.cos(a) * d}px`);
        p.style.setProperty("--dy", `${Math.sin(a) * d}px`);
        p.style.background = i % 2 ? "#FF4C80" : "#FFB0CB";
        document.body.appendChild(p); setTimeout(() => p.remove(), 700);
      }
    });

    return () => { cancelAnimationFrame(raf); off.forEach((f) => f()); };
  }, []);
  return null;
}
