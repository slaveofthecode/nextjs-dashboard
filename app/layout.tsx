// import { montserrat } from './ui/fonts';
// import './ui/global.css';

import { montserrat } from '@/app/ui/fonts';
import '@/app/ui/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">      
        <body className={`${montserrat.className} antialiased`} >
          {children}
          {/* <footer className='h-10 bg-blue-500 flex items-center justify-center text-cyan-200 sticky bottom-0'> */}
          <footer className='h-10 bg-blue-500 flex items-center justify-center text-cyan-200'>
            <p>Made for me ♥️</p>
          </footer>
      </body>
    </html>
  );
}
