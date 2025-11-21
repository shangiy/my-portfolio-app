
'use client';

import React from 'react';
import { cn } from '@/lib/utils';

const logos = [
  { name: 'TypeScript', svg: <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none"><path fill="#3178C6" d="M0 0h24v24H0z"></path><path fill="#fff" d="M9.13 18.39h5.73v-1.52H11.4v-4.06h3.18v-1.52H11.4V8h3.42V6.51H9.13v11.88zM15.4 18.39h5.5v-1.52h-2.73v-2.03h2.46v-1.51h-2.46v-2.05h2.73V9.77h-5.5v8.62z"></path></svg> },
  { name: 'React', svg: <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="-11.5 -10.232 23 20.464"><circle r="2.05" fill="#61dafb"/><g stroke="#61dafb" strokeWidth="1" fill="none"><ellipse rx="11" ry="4.2"/><ellipse rx="11" ry="4.2" transform="rotate(60)"/><ellipse rx="11" ry="4.2" transform="rotate(120)"/></g></svg> },
  { name: 'Next.js', svg: <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 128 128" fill="none"><circle cx="64" cy="64" r="64" fill="#000"></circle><path fill="#fff" d="M97.26 38.255h-9.923v38.995c-1.42 5.034-7.854 8.01-12.023 5.922l-21.61-10.88v11.134h-9.28V38.254h9.923v38.42l23.5-11.83V38.255Z"></path></svg> },
  { name: 'Node.js', svg: <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 256 256" fill="none"><path fill="#333" d="M0 0h256v256H0z"></path><path fill="#8CC84B" d="M128 233.156c-58.11 0-105.156-47.047-105.156-105.156S69.89 22.844 128 22.844c58.11 0 105.156 47.047 105.156 105.156s-47.046 105.156-105.156 105.156Zm54.89-131.7c-3.515-5.22-9.25-8.58-15.187-9.563l-2.063-.312c-.937-.109-2.28-.22-3.157-.22-5.484 0-10.42 1.485-14.734 4.094-9.25 5.594-11.453 14.922-9.593 23.532 1.22 5.765 4.876 10.42 9.78 13.516 5.22 3.234 11.234 4.812 17.515 4.812 2.125 0 4.25-.312 6.313-.875l2.156-.562c2.156-.563 4.22-1.297 5.766-2.5 1.547-1.188 2.75-2.813 3.375-4.69-1.032 5.875-4.813 10.28-10.094 12.67-4.906 2.22-10.42 3.125-15.89 3.125-2.672 0-5.344-.375-7.969-1.125l-2.78-.813c-2.673-.812-5.157-2-7.126-3.72-5.062-4.437-7.906-10.61-7.906-17.516 0-10.093 4.812-18.312 13.093-23.062 7.735-4.406 17.407-5.969 26.688-5.969 2.625 0 5.25.25 7.844.75l2.656.5c2.656.5 5.094 1.344 7.03 2.657 5.345 3.515 8.58 9.03 8.58 15.61 0 1.906-.25 3.812-.75 5.656-.25 1.156-.562 2.312-.97 3.406-.187.375-.375.75-.625 1.125.625-2.25.938-4.594 1-6.938Z"></path></svg> },
  { name: 'Tailwind CSS', svg: <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="#38bdf8" d="M12 2.582c-1.854 0-3.602.766-4.88 2.05C5.842 5.908 5 7.665 5 9.518c0 1.854.842 3.611 2.12 4.886c1.278 1.284 3.026 2.05 4.88 2.05s3.602-.766 4.88-2.05c1.278-1.275 2.12-3.032 2.12-4.886c0-1.853-.842-3.61-2.12-4.886C15.602 3.348 13.854 2.582 12 2.582zM12 6.955c-1.02 0-1.945.422-2.607 1.088c-.662.667-1.083 1.59-1.083 2.611c0 1.02.421 1.944 1.083 2.61c.662.668 1.587 1.088 2.607 1.088c1.02 0 1.945-.42 2.607-1.088c.662-.666 1.083-1.59 1.083-2.61c0-1.021-.421-1.944-1.083-2.611C13.945 7.377 13.02 6.955 12 6.955z"></path></svg> },
  { name: 'Python', svg: <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="#3776ab" d="M12.89 1.45.92 6.54A.98.98 0 0 0 0 7.49v9.02c0 .48.35.9.82.98l11.09 5.04c.32.14.7.14.97 0l11.1-5.04c.46-.09.81-.5.81-.98V7.49c0-.48-.35-.9-.82-.98L13.86 1.45c-.29-.14-.68-.14-.97 0zM12 10.93V2.4l8.13 4.1zm.02 9.7V12.4h8.11l-8.1 4.12zM11 2.39v8.54H2.88zm-.01 9.7v8.2l-8.11-4.1z"/><path fill="#ffd43b" d="M12.89 1.45c-.3-.14-.68-.14-.97 0L.92 6.54a.98.98 0 0 0-.9.95v9.02c0 .48.35.9.q82.98l11.09 5.04c.32.14.7.14.97 0l11.1-5.04c.46-.09.81-.5.81-.98V7.49c0-.48-.35-.9-.82-.98L13.86 1.45zM12 9.07H4v-3h8zm0 10.47V13.4H4v3zm9.1-8.54c-.58 0-1.04-.47-1.04-1.04s.47-1.04 1.04-1.04 1.04.47 1.04 1.04-.47 1.04-1.04 1.04zm0 5c-.58 0-1.04-.47-1.04-1.04s.47-1.04 1.04-1.04 1.04.47 1.04 1.04-.47 1.04-1.04 1.04z"/></svg> },
  { name: 'PostgreSQL', svg: <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="#336791" d="M21.229 17.514c-1.393-2.228-2.6-4.526-2.6-7.228s1.173-5.061 2.6-7.228C19.761 1.01 17.184 0 14.286 0H4v24h10.286c2.898 0 5.475-1.01 6.943-3.057M14 4h2.771c.143 0 .286.07.357.215c.393.714.536 1.5.536 2.285c0 1.286-.321 2.501-.786 3.536c-.107.25-.25.5-.393.75H14zM14 20h2.179c.178 0 .357-.036.535-.143c.536-.321.965-.821 1.215-1.428s.357-1.25.357-1.929c0-.607-.072-1.214-.215-1.785a.707.707 0 0 0-.678-.5H14z"/><path fill="#fff" d="M14 4h-4v16h4v-5h-1a2 2 0 0 1-2-2v-2c0-1.1.9-2 2-2h1z"/></svg> },
];

export function TechCarousel() {
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section 
      id="skills"
      className="w-full py-12 md:py-16 bg-center bg-cover bg-fixed"
      style={{backgroundImage: "url('/parrallax.png')"}}
    >
        
        <div className="container relative">
             <div className="flex flex-col items-center text-center gap-4 mb-12">
                <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                My Skills
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-lg">
                Technologies I use to build amazing products
                </p>
            </div>
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
