
'use client';

import React from 'react';
import { cn } from '@/lib/utils';

const logos = [
  { name: 'TypeScript', svg: <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none"><path fill="#3178C6" d="M0 0h24v24H0z"></path><path fill="#fff" d="M9.13 18.39h5.73v-1.52H11.4v-4.06h3.18v-1.52H11.4V8h3.42V6.51H9.13v11.88zM15.4 18.39h5.5v-1.52h-2.73v-2.03h2.46v-1.51h-2.46v-2.05h2.73V9.77h-5.5v8.62z"></path></svg> },
  { name: 'React', svg: <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="-11.5 -10.232 23 20.464"><circle r="2.05" fill="#61dafb"/><g stroke="#61dafb" strokeWidth="1" fill="none"><ellipse rx="11" ry="4.2"/><ellipse rx="11" ry="4.2" transform="rotate(60)"/><ellipse rx="11" ry="4.2" transform="rotate(120)"/></g></svg> },
  { name: 'Next.js', svg: <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 128 128" fill="none"><circle cx="64" cy="64" r="64" fill="#000"></circle><path fill="#fff" d="M97.26 38.255h-9.923v38.995c-1.42 5.034-7.854 8.01-12.023 5.922l-21.61-10.88v11.134h-9.28V38.254h9.923v38.42l23.5-11.83V38.255Z"></path></svg> },
  { name: 'Node.js', svg: <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="#8CC84B" d="M22.2,11.3c-0.2-0.8-0.6-1.5-1.1-2.1c-0.1-0.2-0.3-0.3-0.5-0.4c-0.8-0.7-1.8-1-2.8-1.2l-0.5-0.1c-0.2,0-0.4-0.1-0.6-0.1h-4V6.9c0-0.3-0.3-0.6-0.6-0.6s-0.6,0.3-0.6,0.6v1.1c-2.4,0.1-4.2,0.8-5.3,2.2C5,11.3,4.7,12.4,5.1,13.4c0.2,0.6,0.6,1.2,1.1,1.6c0.6,0.4,1.2,0.7,1.9,0.9l0.5,0.1c0.2,0.1,0.5,0.1,0.7,0.2c0.7,0.2,1.3,0.5,1.7,1c0.5,0.5,0.8,1.2,0.6,2c-0.2,0.8-0.6,1.5-1.2,2c-0.6,0.5-1.4,0.8-2.2,0.9l-0.5,0.1c-0.2,0-0.4,0.1-0.6,0.1h-4v0.9c0,0.3-0.3,0.6-0.6,0.6s-0.6-0.3-0.6-0.6v-1c2.4-0.1,4.2-0.8,5.3-2.2c1.1-1.4,1.4-2.8,1,4.2c-0.2-0.7-0.5-1.3-1-1.8c-0.6-0.5-1.2-0.8-1.9-1l-0.5-0.1c-0.2,0-0.5-0.1-0.7-0.2c-0.7-0.2-1.3-0.5-1.7-1c-0.5-0.5-0.8-1.2-0.6-2c0.4-1.6,2-2.8,4.5-3.1V7.5h3.4v0.9c2,0.2,3.5,0.8,4.5,2.1c1.1,1.4,1.4,2.8,1,4.2c-0.1,0.3-0.2,0.5-0.3,0.8C22.4,11.7,22.3,11.5,22.2,11.3z"></path></svg> },
  { name: 'Tailwind CSS', svg: <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 32 32" fill="none"><path fill="#38BDF8" d="M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16c8.837 0 16-7.163 16-16S24.837 0 16 0Zm0 3.297c2.316 0 4.502.733 6.355 2.05 1.853 1.317 3.321 3.129 4.238 5.253-1.854-1.722-4.148-2.78-6.6-2.78-5.44 0-9.849 4.409-9.849 9.848 0 5.44 4.409 9.848 9.85 9.848 2.451 0 4.745-1.058 6.599-2.78-1.03 2.124-2.5 3.936-4.353 5.253C20.502 31.267 18.316 32 16 32c-2.316 0-4.502-.733-6.355-2.05S6.324 26.82 5.407 24.696c1.854 1.722 4.148 2.78 6.6 2.78 5.44 0 9.849-4.409 9.849-9.848S12.008 5.344 6.599 8.124C6.33 8.412 7.799 6.6 9.652 5.283S13.837 3.297 16 3.297Z"></path></svg> },
  { name: 'Python', svg: <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="#3776ab" d="M12.89 1.45.92 6.54A.98.98 0 0 0 0 7.49v9.02c0 .48.35.9.82.98l11.09 5.04c.32.14.7.14.97 0l11.1-5.04c.46-.09.81-.5.81-.98V7.49c0-.48-.35-.9-.82-.98L13.86 1.45c-.29-.14-.68-.14-.97 0zM12 10.93V2.4l8.13 4.1zm.02 9.7V12.4h8.11l-8.1 4.12zM11 2.39v8.54H2.88zm-.01 9.7v8.2l-8.11-4.1z"/><path fill="#ffd43b" d="M12.89 1.45c-.3-.14-.68-.14-.97 0L.92 6.54a.98.98 0 0 0-.9.95v9.02c0 .48.35.9.82.98l11.09 5.04c.32.14.7.14.97 0l11.1-5.04c.46-.09.81-.5.81-.98V7.49c0-.48-.35-.9-.82-.98L13.86 1.45zM12 9.07H4v-3h8zm0 10.47V13.4H4v3zm9.1-8.54c-.58 0-1.04-.47-1.04-1.04s.47-1.04 1.04-1.04 1.04.47 1.04 1.04-.47 1.04-1.04 1.04zm0 5c-.58 0-1.04-.47-1.04-1.04s.47-1.04 1.04-1.04 1.04.47 1.04 1.04-.47 1.04-1.04 1.04z"/></svg> },
  { name: 'PostgreSQL', svg: <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="#336791" d="M21.229 17.514c-1.393-2.228-2.6-4.526-2.6-7.228s1.173-5.061 2.6-7.228C19.761 1.01 17.184 0 14.286 0H4v24h10.286c2.898 0 5.475-1.01 6.943-3.057M14 4h2.771c.143 0 .286.07.357.215c.393.714.536 1.5.536 2.285c0 1.286-.321 2.501-.786 3.536c-.107.25-.25.5-.393.75H14zM14 20h2.179c.178 0 .357-.036.535-.143c.536-.321.965-.821 1.215-1.428s.357-1.25.357-1.929c0-.607-.072-1.214-.215-1.785a.707.707 0 0 0-.678-.5H14z"/><path fill="#fff" d="M14 4h-4v16h4v-5h-1a2 2 0 0 1-2-2v-2c0-1.1.9-2 2-2h1z"/></svg> },
];

export function TechCarousel() {
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section 
      className="w-full py-12 md:py-16 bg-center bg-cover bg-fixed"
      style={{backgroundImage: "url('/parrallax.png')"}}
    >
        <div className="absolute inset-0 bg-background/80"></div>
        <div className="container relative">
            <div className="relative overflow-hidden w-full group">
            <div className="flex animate-marquee group-hover:[animation-play-state:paused]">
                {duplicatedLogos.map((logo, index) => (
                <div key={index} className="px-8 flex-shrink-0 flex items-center justify-center gap-4">
                    <div className="flex items-center justify-center w-12 h-12">
                        {logo.svg}
                    </div>
                    <span className="text-lg font-semibold text-foreground">{logo.name}</span>
                </div>
                ))}
            </div>
            </div>
      </div>
    </section>
  );
}
