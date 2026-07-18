"use client";

import { useEffect, useRef, useState } from "react";
import {
  Bodies,
  Engine,
  Events,
  Mouse,
  MouseConstraint,
  Render,
  Runner,
  World,
} from "matter-js";

import { useMemo } from "react";

type FooterPhysicsProps = {
  boardTextureURLs?: string[]; // Made optional to handle undefined gracefully
  className?: string;
};

export function FooterPhysics({
  boardTextureURLs = [],
  className,
}: FooterPhysicsProps) {
  const scene = useRef<HTMLDivElement>(null);

  const engine = useRef(
    Engine.create({
      enableSleeping: true,
    }),
  );

  const [inView, setInView] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        setIsMobile(window.matchMedia("(max-width: 768px)").matches);
      }
    };

    handleResize(); // Run on mount
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const limitedBoardTextures = useMemo(() => {
    return isMobile ? boardTextureURLs.slice(0, 3) : boardTextureURLs;
  }, [boardTextureURLs, isMobile]);

  useEffect(() => {
    const currentScene = scene.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.5 },
    );

    if (currentScene) observer.observe(currentScene);

    return () => {
      if (currentScene) observer.unobserve(currentScene);
    };
  }, []);

  useEffect(() => {
    if (!scene.current || !inView) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) return;

    // ✅ Recreate a fresh engine every time this effect runs
    engine.current = Engine.create({
      enableSleeping: true,
    });

    engine.current.gravity.y = 0.5;

    const cw = scene.current.clientWidth;
    const ch = scene.current.clientHeight;

    const render = Render.create({
      element: scene.current,
      engine: engine.current,
      options: {
        width: cw,
        height: ch,
        pixelRatio: window.devicePixelRatio,
        wireframes: false,
        background: "transparent",
      },
    });

    render.canvas.style.touchAction = "none";
    render.canvas.style.userSelect = "none";
    render.canvas.style.cursor = "grab";

    let boundaries = createBoundaries(cw, ch);
    World.add(engine.current.world, boundaries);

    const mouse = Mouse.create(render.canvas);

    // @ts-expect-error
    mouse.element.removeEventListener("wheel", mouse.mousewheel);

    // @ts-expect-error
    mouse.element.removeEventListener("mousewheel", mouse.mousewheel);

    render.mouse = mouse;

    const mouseConstraint = MouseConstraint.create(engine.current, {
      mouse,
      constraint: {
        stiffness: 0.9,
        damping: 0.1,
        render: {
          visible: false,
        },
      },
    });

    World.add(engine.current.world, mouseConstraint);

    Events.on(mouseConstraint, "startdrag", (event) => {
      console.log("START DRAG", event.name);
    });

    Events.on(mouseConstraint, "enddrag", (event) => {
      console.log("END DRAG", event.name);
    });

    window.addEventListener("resize", onResize);

    function onResize() {
      if (!scene.current) return;

      const cw = scene.current.clientWidth;
      const ch = scene.current.clientHeight;

      render.canvas.width = cw;
      render.canvas.height = ch;
      render.options.width = cw;
      render.options.height = ch;
      Render.setPixelRatio(render, window.devicePixelRatio);

      World.remove(engine.current.world, boundaries);
      boundaries = createBoundaries(cw, ch);
      World.add(engine.current.world, boundaries);
    }

    function createBoundaries(width: number, height: number) {
      return [
        Bodies.rectangle(width / 2, -10, width, 20, { isStatic: true }),
        Bodies.rectangle(-10, height / 2, 20, height, { isStatic: true }),
        Bodies.rectangle(width / 2, height + 10, width, 20, { isStatic: true }),
        Bodies.rectangle(width + 10, height / 2, 20, height, {
          isStatic: true,
        }),
      ];
    }

    const runner = Runner.create();
    Runner.run(runner, engine.current);
    Render.run(render);

    const currentEngine = engine.current;

    return () => {
      window.removeEventListener("resize", onResize);

      Render.stop(render);
      Runner.stop(runner);
      if (currentEngine) {
        World.clear(currentEngine.world, false);
        Engine.clear(currentEngine);
      }
      render.canvas.remove();
      render.textures = {};
    };
  }, [inView]);

  useEffect(() => {
    if (!scene.current || !inView) return;

    const world = engine.current.world;
    const cw = scene.current.clientWidth;
    const ch = scene.current.clientHeight;

    const boards = limitedBoardTextures.map((texture) => {
      const x = Math.random() * cw;
      const y = Math.random() * (ch / 2 - 100) + 50;
      const rotation = ((Math.random() * 100 - 50) * Math.PI) / 180;

      return Bodies.rectangle(x, y, 110, 310, {
        chamfer: { radius: 40 },
        angle: rotation,
        restitution: 0.3,
        friction: 0.05,
        render: {
          sprite: {
            texture,
            xScale: 0.5,
            yScale: 0.5,
          },
        },
      });
    });

    if (boards.length > 0) {
      World.add(engine.current.world, boards);
    }

    return () => {
      World.remove(world, boards);
    };
  }, [limitedBoardTextures, inView]);

  return <div ref={scene} className={className} />;
}
