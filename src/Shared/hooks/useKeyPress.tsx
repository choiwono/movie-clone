import { useEffect } from 'react';

export default function useKeyPress(targetKey, handler, isOpen) {
    useEffect(() => {
        function downHandler({ key }) {
            if (key === targetKey) {
                handler();
            }
        }

        if (isOpen) {
            document.addEventListener('keydown', downHandler)
        }
        return () => {
            document.removeEventListener('keydown', downHandler)
        };

    }, [isOpen, targetKey, handler]);
}

