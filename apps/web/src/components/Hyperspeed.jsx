import React, { useEffect, useRef } from 'react';

const Hyperspeed = ({ effectOptions }) => {
    const canvasRef = useRef(null);
    const requestRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', handleResize);

        // Basic hyperspeed star warp effect
        const stars = [];
        const numStars = effectOptions?.lightPairsPerRoadWay ? effectOptions.lightPairsPerRoadWay * 10 : 800;
        const speed = effectOptions?.speedUp || 2;

        for (let i = 0; i < numStars; i++) {
            stars.push({
                x: Math.random() * width - width / 2,
                y: Math.random() * height - height / 2,
                z: Math.random() * 2000,
                pz: Math.random() * 2000
            });
        }

        const animate = () => {
            ctx.fillStyle = 'rgba(3, 7, 18, 0.3)'; // Match background with trails
            ctx.fillRect(0, 0, width, height);

            ctx.translate(width / 2, height / 2);

            stars.forEach(star => {
                star.pz = star.z;
                star.z -= speed * 15; // Speed multiplier

                if (star.z < 1) {
                    star.x = Math.random() * width - width / 2;
                    star.y = Math.random() * height - height / 2;
                    star.z = 2000;
                    star.pz = 2000;
                }

                const sx = (star.x / star.z) * width;
                const sy = (star.y / star.z) * height;

                const px = (star.x / star.pz) * width;
                const py = (star.y / star.pz) * height;

                const zRatio = 1 - star.z / 2000;

                // Colors based on effect options or defaults
                const leftColors = effectOptions?.colors?.leftCars || [0x7C3AED, 0xA78BFA, 0x4C1D95];
                const rightColors = effectOptions?.colors?.rightCars || [0x06B6D4, 0x3B82F6, 0x1E3A8A];
                const colorPalette = star.x > 0 ? rightColors : leftColors;

                // Pick a color from palette based on index
                const colorInt = colorPalette[Math.floor(star.pz) % colorPalette.length];
                const colorStr = `#${colorInt.toString(16).padStart(6, '0')}`;

                ctx.strokeStyle = colorStr;
                ctx.lineWidth = zRatio * 4;

                ctx.beginPath();
                ctx.moveTo(px, py);
                ctx.lineTo(sx, sy);
                ctx.stroke();
            });

            ctx.translate(-width / 2, -height / 2);
            requestRef.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            if (requestRef.current) {
                cancelAnimationFrame(requestRef.current);
            }
        };
    }, [effectOptions]);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
        />
    );
};

export default Hyperspeed;
