import { useEffect, useRef } from 'react';
import * as React from 'react';

/*interface Ref {
    propsRef : React.useRef<HTMLElement>;
}*/

interface Handler {
    closeHandler : () => void;
}

function useOnClickOutside(ref : Ref, handler : Handler) {
    useEffect(
        () => {
            const listener = event => {
                if (!ref.propsRef.current || ref.current.contains(event.target) ) {
                    return;
                }

                handler(event);
            };

            document.addEventListener('mousedown', listener);
            document.addEventListener('touchstart', listener);

            return () => {
                document.removeEventListener('mousedown', listener);
                document.removeEventListener('touchstart', listener);
            };
        },

        [ref, handler]
    );
}

export default useOnClickOutside;