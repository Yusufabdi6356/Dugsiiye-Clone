export default function PodiumSection() {
  return (
    <div className="mb-8 text-center">
      <svg viewBox="0 0 44 30" aria-hidden="true" className="mx-auto mb-4 h-7 w-auto text-[#1E1E1E] dark:text-neutral-100">
        <rect x="0" y="12" width="12" height="18" rx="3" fill="currentColor" opacity="0.35" />
        <rect x="16" y="0" width="12" height="30" rx="3" fill="currentColor" />
        <rect x="32" y="19" width="12" height="11" rx="3" fill="currentColor" opacity="0.2" />
      </svg>
      <h1 className="font-display text-4xl font-semibold tracking-[-0.03em] text-[#1E1E1E] md:text-[44px] md:leading-[1.08] dark:text-neutral-50">
        Weekly Lessons League
      </h1>
      <p className="mx-auto mt-3 max-w-xl text-base leading-6 text-[#8D8D8D] dark:text-neutral-400">
        Every lesson scores points; the board resets Monday.
      </p>
      <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-[#8D8D8D] dark:text-neutral-400">
        <span>
          This week: Sep 21 to Sep 27
        </span>
        <span className="font-medium text-[#1E1E1E] dark:text-neutral-100">
          Resets in 3d 11h
        </span>
        <span className="inline-flex items-center gap-1">
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-3 w-3" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M244.8,150.4a8,8,0,0,1-11.2-1.6A51.6,51.6,0,0,0,192,128a8,8,0,0,1-7.37-4.89,8,8,0,0,1,0-6.22A8,8,0,0,1,192,112a24,24,0,1,0-23.24-30,8,8,0,1,1-15.5-4A40,40,0,1,1,219,117.51a67.94,67.94,0,0,1,27.43,21.68A8,8,0,0,1,244.8,150.4ZM190.92,212a8,8,0,1,1-13.84,8,57,57,0,0,0-98.16,0,8,8,0,1,1-13.84-8,72.06,72.06,0,0,1,33.74-29.92,48,48,0,1,1,58.36,0A72.06,72.06,0,0,1,190.92,212ZM128,176a32,32,0,1,0-32-32A32,32,0,0,0,128,176ZM72,120a8,8,0,0,0-8-8A24,24,0,1,1,87.24,82a8,8,0,1,0,15.5-4A40,40,0,1,0,37,117.51,67.94,67.94,0,0,0,9.6,139.19a8,8,0,1,0,12.8,9.61A51.6,51.6,0,0,1,64,128,8,8,0,0,0,72,120Z" />
          </svg>
          220 students competing
        </span>
        <a className="font-medium text-[#1E1E1E] underline-offset-4 hover:underline dark:text-neutral-100" href="/sprints">
          Sprint Champions →
        </a>
      </div>
    </div>
  );
}
