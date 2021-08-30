import {useEffect, useRef} from 'react';
import useOnClickOutside from 'use-onclickoutside';

export default function Modal({isOpened, close, children}) {
  useEffect(() => {
    if (isOpened) {
      return document.body.classList.add('overflow-y-hidden');
    } else {
      return document.body.classList.remove('overflow-y-hidden');
    }
  }, [isOpened]);
  const modalContentRef = useRef(null);
  useOnClickOutside(modalContentRef, close);

  if (!isOpened) return null;

  return (
    <>
      <div className="absolute inset-0 bg-gray-500 opacity-70"/>

      <div className="absolute inset-0 items-center py-20 overflow-y-auto px-2 md:px-0">
        <div className="mb-20 bg-white md:w-1/3 w-full p-4 rounded shadow mx-auto" ref={modalContentRef}>
          {children}
        </div>
      </div>
    </>
  );
}