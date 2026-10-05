import { useEffect } from 'react';

const useReveal = (rootRef) => {
    useEffect(() => {
        const elements = rootRef.current?.querySelectorAll('.reveal');
        if (!elements || elements.length === 0) return undefined;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
        );

        elements.forEach((element) => observer.observe(element));
        return () => observer.disconnect();
    }, [rootRef]);
};

export default useReveal;
