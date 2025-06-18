import { stagger, useAnimate } from "framer-motion";
import { useEffect } from "react";
import SplitType from "split-type";

const useTextRevealAnimation = () => {
    const [scope, animate] = useAnimate();

    useEffect(() => {
        if (!scope.current) return;

        // Delay until the DOM is ready
        const timeout = setTimeout(() => {
            const split = new SplitType(scope.current, {
                types: "lines,words",
                tagName: "span",
            });

            // Optional: Clean up on unmount
            return () => split.revert();
        }, 10); // Small delay to ensure DOM is loaded

        return () => clearTimeout(timeout);
    }, [scope]);

    const entranceAnimation = () => {
        const words = scope.current?.querySelectorAll(".word");
        if (!words?.length) return;

        return animate(
            words,
            { transform: "translateY(0)", opacity: 1 },
            {
                duration: 0.5,
                delay: stagger(0.1),
            }
        );
    };

    const exitAnimation = () => {
        const words = scope.current?.querySelectorAll(".word");
        if (!words?.length) return;

        return animate(
            words,
            { transform: "translateY(100%)", opacity: 0 },
            {
                duration: 0.3,
                delay: stagger(-0.05, {
                    startDelay: words.length * 0.02,
                }),
            }
        );
    };

    return {
        scope,
        entranceAnimation,
        exitAnimation,
    };
};

export default useTextRevealAnimation;
