import React, { useEffect, useRef, useCallback } from 'react';

const LiveBackground = () => {
    const canvasRef = useRef(null);
    const mouseRef = useRef({ x: -1000, y: -1000 });
    const frameRef = useRef(null);
    const particlesRef = useRef([]);
    const auroraTimeRef = useRef(0);
    const isMobileRef = useRef(false);

    const COLORS = {
        blue: { r: 37, g: 99, b: 235 },
        cyan: { r: 6, g: 182, b: 212 },
        purple: { r: 70, g: 105, b: 176 },
        white: { r: 255, g: 255, b: 255 },
    };

    const initParticles = useCallback((w, h) => {
        const isMobile = isMobileRef.current;
        const count = isMobile ? 30 : 70;
        const particles = [];
        for (let i = 0; i < count; i++) {
            const colorKeys = ['blue', 'cyan', 'purple', 'white'];
            const color = COLORS[colorKeys[Math.floor(Math.random() * colorKeys.length)]];
            particles.push({
                x: Math.random() * w,
                y: Math.random() * h,
                vx: (Math.random() - 0.5) * 0.4,
                vy: (Math.random() - 0.5) * 0.4,
                size: Math.random() * 2.5 + 0.8,
                baseSize: 0,
                opacity: Math.random() * 0.6 + 0.2,
                color,
                pulseSpeed: Math.random() * 0.02 + 0.005,
                pulseOffset: Math.random() * Math.PI * 2,
            });
            particles[particles.length - 1].baseSize = particles[particles.length - 1].size;
        }
        return particles;
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Reduced motion check
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) return;

        isMobileRef.current = window.innerWidth < 768;

        const resize = () => {
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;
            canvas.style.width = window.innerWidth + 'px';
            canvas.style.height = window.innerHeight + 'px';
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            isMobileRef.current = window.innerWidth < 768;
            particlesRef.current = initParticles(window.innerWidth, window.innerHeight);
        };

        const onMouseMove = (e) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
        };
        const onMouseLeave = () => {
            mouseRef.current = { x: -1000, y: -1000 };
        };
        const onTouchMove = (e) => {
            if (e.touches[0]) {
                mouseRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
            }
        };
        const onTouchEnd = () => {
            mouseRef.current = { x: -1000, y: -1000 };
        };

        window.addEventListener('resize', resize);
        window.addEventListener('mousemove', onMouseMove, { passive: true });
        window.addEventListener('mouseleave', onMouseLeave);
        window.addEventListener('touchmove', onTouchMove, { passive: true });
        window.addEventListener('touchend', onTouchEnd);
        resize();

        // ============ DRAWING FUNCTIONS ============

        // 1. Mesh Gradient Background
        const drawMeshGradient = (w, h, time) => {
            // Animated radial gradients that drift slowly
            const spots = [
                { cx: w * 0.2 + Math.sin(time * 0.3) * w * 0.08, cy: h * 0.3 + Math.cos(time * 0.25) * h * 0.06, r: w * 0.45, color: COLORS.blue, alpha: 0.18 },
                { cx: w * 0.75 + Math.cos(time * 0.2) * w * 0.06, cy: h * 0.2 + Math.sin(time * 0.35) * h * 0.08, r: w * 0.4, color: COLORS.purple, alpha: 0.15 },
                { cx: w * 0.5 + Math.sin(time * 0.25) * w * 0.1, cy: h * 0.75 + Math.cos(time * 0.3) * h * 0.07, r: w * 0.5, color: COLORS.cyan, alpha: 0.14 },
                { cx: w * 0.85 + Math.cos(time * 0.15) * w * 0.05, cy: h * 0.65 + Math.sin(time * 0.2) * h * 0.05, r: w * 0.3, color: COLORS.blue, alpha: 0.1 },
            ];

            for (const spot of spots) {
                const grad = ctx.createRadialGradient(spot.cx, spot.cy, 0, spot.cx, spot.cy, spot.r);
                grad.addColorStop(0, `rgba(${spot.color.r}, ${spot.color.g}, ${spot.color.b}, ${spot.alpha})`);
                grad.addColorStop(0.6, `rgba(${spot.color.r}, ${spot.color.g}, ${spot.color.b}, ${spot.alpha * 0.3})`);
                grad.addColorStop(1, 'transparent');
                ctx.fillStyle = grad;
                ctx.fillRect(0, 0, w, h);
            }
        };

        // 2. Aurora Effect — wavy light bands
        const drawAurora = (w, h, time) => {
            const isMobile = isMobileRef.current;
            const bands = isMobile ? 2 : 3;

            for (let b = 0; b < bands; b++) {
                ctx.beginPath();
                const baseY = h * (0.25 + b * 0.2);
                const amplitude = h * 0.08;
                const color = b === 0 ? COLORS.cyan : b === 1 ? COLORS.purple : COLORS.blue;
                const alpha = 0.06 + Math.sin(time * 0.5 + b) * 0.02;

                ctx.moveTo(0, baseY);
                for (let x = 0; x <= w; x += 4) {
                    const y = baseY
                        + Math.sin((x / w) * Math.PI * 2 + time * (0.6 + b * 0.15)) * amplitude
                        + Math.sin((x / w) * Math.PI * 4 + time * (0.3 + b * 0.1)) * (amplitude * 0.4);
                    ctx.lineTo(x, y);
                }
                ctx.lineTo(w, h);
                ctx.lineTo(0, h);
                ctx.closePath();

                const grad = ctx.createLinearGradient(0, baseY - amplitude, 0, baseY + h * 0.35);
                grad.addColorStop(0, `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha})`);
                grad.addColorStop(0.5, `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha * 0.3})`);
                grad.addColorStop(1, 'transparent');
                ctx.fillStyle = grad;
                ctx.fill();
            }
        };

        // 3. Particles + Network Lines
        const drawParticles = (w, h, time) => {
            const particles = particlesRef.current;
            const mx = mouseRef.current.x;
            const my = mouseRef.current.y;
            const mouseRadius = 160;
            const connectionDist = isMobileRef.current ? 90 : 120;

            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];

                // Update position
                p.x += p.vx;
                p.y += p.vy;

                // Wrap around edges
                if (p.x < -10) p.x = w + 10;
                if (p.x > w + 10) p.x = -10;
                if (p.y < -10) p.y = h + 10;
                if (p.y > h + 10) p.y = -10;

                // Mouse repulsion
                const dmx = mx - p.x;
                const dmy = my - p.y;
                const distMouse = Math.sqrt(dmx * dmx + dmy * dmy);
                if (distMouse < mouseRadius && distMouse > 0) {
                    const force = (mouseRadius - distMouse) / mouseRadius;
                    p.x -= (dmx / distMouse) * force * 3;
                    p.y -= (dmy / distMouse) * force * 3;
                    p.size = p.baseSize + force * 3;
                } else {
                    p.size += (p.baseSize - p.size) * 0.05;
                }

                // Pulse glow
                const pulse = Math.sin(time * p.pulseSpeed * 60 + p.pulseOffset) * 0.3 + 0.7;
                const alpha = p.opacity * pulse;

                // Draw glow
                const glowGrad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 4);
                glowGrad.addColorStop(0, `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${alpha * 0.4})`);
                glowGrad.addColorStop(1, 'transparent');
                ctx.fillStyle = glowGrad;
                ctx.fillRect(p.x - p.size * 4, p.y - p.size * 4, p.size * 8, p.size * 8);

                // Draw particle core
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${alpha})`;
                ctx.fill();

                // Network lines to nearby particles
                for (let j = i + 1; j < particles.length; j++) {
                    const q = particles[j];
                    const dx = p.x - q.x;
                    const dy = p.y - q.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < connectionDist) {
                        const lineAlpha = (1 - dist / connectionDist) * 0.25;
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(q.x, q.y);
                        ctx.strokeStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${lineAlpha})`;
                        ctx.lineWidth = 0.6;
                        ctx.stroke();
                    }
                }

                // Line from particle to mouse if close
                if (distMouse < mouseRadius && distMouse > 0) {
                    const lineAlpha = (1 - distMouse / mouseRadius) * 0.3;
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(mx, my);
                    ctx.strokeStyle = `rgba(6, 182, 212, ${lineAlpha})`;
                    ctx.lineWidth = 0.8;
                    ctx.stroke();
                }
            }
        };

        // 4. Mouse glow spotlight
        const drawMouseGlow = (w, h) => {
            const mx = mouseRef.current.x;
            const my = mouseRef.current.y;
            if (mx < 0 || my < 0) return;

            const grad = ctx.createRadialGradient(mx, my, 0, mx, my, 220);
            grad.addColorStop(0, 'rgba(6, 182, 212, 0.08)');
            grad.addColorStop(0.4, 'rgba(124, 58, 237, 0.04)');
            grad.addColorStop(1, 'transparent');
            ctx.fillStyle = grad;
            ctx.fillRect(mx - 220, my - 220, 440, 440);
        };

        // ============ MAIN LOOP ============
        const animate = () => {
            const w = window.innerWidth;
            const h = window.innerHeight;
            auroraTimeRef.current += 0.008;
            const time = auroraTimeRef.current;

            // Clear with transparent base to allow GalaxyBackground to show through
            ctx.clearRect(0, 0, w, h);

            // Layer 1: Mesh gradient
            drawMeshGradient(w, h, time);

            // Layer 2: Aurora bands
            drawAurora(w, h, time);

            // Layer 3: Particles and network
            drawParticles(w, h, time);

            // Layer 4: Mouse glow
            if (!isMobileRef.current) {
                drawMouseGlow(w, h);
            }

            frameRef.current = requestAnimationFrame(animate);
        };

        frameRef.current = requestAnimationFrame(animate);

        return () => {
            if (frameRef.current) cancelAnimationFrame(frameRef.current);
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseleave', onMouseLeave);
            window.removeEventListener('touchmove', onTouchMove);
            window.removeEventListener('touchend', onTouchEnd);
        };
    }, [initParticles]);

    return (
        <div className="fixed inset-0 z-[0] pointer-events-none overflow-hidden">
            {/* Canvas handles everything — gradient, aurora, particles, network */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full pointer-events-auto"
            />

            {/* Dark overlay for content readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#030712]/40 via-[#030712]/60 to-[#030712]/80 pointer-events-none" />
        </div>
    );
};

export default LiveBackground;
