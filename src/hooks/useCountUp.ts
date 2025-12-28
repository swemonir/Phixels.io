import { useState, useEffect } from 'react';

export const useCountUp = (end: number, duration: number = 1000) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTime: number | null = null;
        let animationFrameId: number;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);

            // Easing function for smooth animation (easeOutExpo)
            const easeOutExpo = (x: number): number => {
                return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
            };

            const currentCount = end * easeOutExpo(percentage);

            // If end is an integer, round it. If float, keep decimals (adjust precision as needed)
            // For this specific use case, we strictly want integers for the animation flow usually, 
            // but let's handle mild decimal precision if 'end' is a float like 1.5
            if (Number.isInteger(end)) {
                setCount(Math.floor(currentCount));
            } else {
                // Keep 1 decimal place for floats like 1.5
                setCount(parseFloat(currentCount.toFixed(1)));
            }

            if (progress < duration) {
                animationFrameId = requestAnimationFrame(animate);
            } else {
                setCount(end);
            }
        };

        animationFrameId = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrameId);
    }, [end, duration]);

    return count;
};
