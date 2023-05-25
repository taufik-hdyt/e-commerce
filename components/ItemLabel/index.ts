import dynamic from 'next/dynamic';

const ItemLabel = dynamic(() => import('./ItemLabel'));

export default ItemLabel;
