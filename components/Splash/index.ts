import dynamic from 'next/dynamic';

const Splash = dynamic(() => import('./Splash'));

export default Splash;
