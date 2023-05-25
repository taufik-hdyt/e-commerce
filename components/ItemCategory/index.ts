import dynamic from 'next/dynamic';

const ItemCategory = dynamic(() => import('./ItemCategory'));

export default ItemCategory;
