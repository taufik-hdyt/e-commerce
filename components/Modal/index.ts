import dynamic from 'next/dynamic';

const Modal = dynamic(() => import('./Modal'));

export default Modal;
