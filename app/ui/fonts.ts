import { Lusitana, Montserrat } from 'next/font/google';

// weight: ['400', '500', '600', '700']
export const montserrat = Montserrat({
    subsets: ['latin'],
    weight: '400'
});

export const lusitana = Lusitana({
    subsets: ['latin'],
    weight: ['400','700']
});