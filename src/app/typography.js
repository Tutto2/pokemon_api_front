import { Allan, Bangers } from 'next/font/google';

const allanBold = Allan({ 
  weight: '700', 
  style: 'normal',
  subsets: ["latin"],
 });

const allanRegular = Allan({ 
  weight: '400', 
  style: 'normal',
  subsets: ["latin"],
 });


const bangersRegular = Bangers({
  weight: '400', 
  style: 'normal',
  subsets: ['latin'],
});

export { allanBold, allanRegular, bangersRegular }