export default function StandingsSection() {
  return (
    <div className="space-y-12">
      <div className="rounded-[2rem] border border-neutral-200/80 bg-[#F4F4F2] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] sm:p-8 dark:border-neutral-800 dark:bg-neutral-900 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
        <div className="mb-6 text-center text-[11px] font-semibold uppercase tracking-wider text-[#8D8D8D] dark:text-neutral-400">
          This week's leaders
        </div>
        <div className="grid gap-4 sm:grid-cols-3 sm:items-end">
          <div className="flex flex-col items-center rounded-2xl border border-neutral-200/60 bg-white p-5 text-center shadow-[0_1px_3px_rgb(var(--ink-rgb)/0.03),0_6px_16px_rgb(var(--ink-rgb)/0.05)] dark:border-neutral-700/60 dark:bg-neutral-800/60">
            <div className="relative mb-3">
              <span className="relative flex shrink-0 overflow-hidden rounded-full h-16 w-16 ring-2 ring-offset-2 ring-offset-white dark:ring-offset-neutral-800 ring-neutral-200 dark:ring-neutral-600">
                <span className="flex h-full w-full items-center justify-center rounded-full dark:bg-neutral-800 dark:text-neutral-200 text-base font-semibold bg-cyan-500 text-white">
                  RA
                </span>
              </span>
              <span className="absolute -bottom-1.5 -right-1.5 flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-bold tabular-nums shadow-sm bg-neutral-500 text-white dark:bg-neutral-300 dark:text-(--ink)">
                2
              </span>
            </div>
            <p className="text-sm font-semibold text-[#1E1E1E] dark:text-neutral-50">
              Ruqiyo Abdirashid Nor
            </p>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-[#8D8D8D] dark:text-neutral-400">
              2nd place
            </p>
            <div className="mt-3 flex items-center gap-3 text-xs text-[#8D8D8D] dark:text-neutral-400">
              <span>
                <span className="font-semibold tabular-nums text-[#1E1E1E] dark:text-neutral-100">
                  123.5
                </span>
                {" "}pts
              </span>
              <span>
                <span className="tabular-nums">
                  56
                </span>
                {" "}lessons
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center rounded-2xl border border-neutral-200/60 bg-white p-5 text-center shadow-[0_1px_3px_rgb(var(--ink-rgb)/0.03),0_6px_16px_rgb(var(--ink-rgb)/0.05)] dark:border-neutral-700/60 dark:bg-neutral-800/60 sm:-translate-y-3 sm:shadow-[0_10px_30px_rgb(var(--ink-rgb)/0.07)]">
            <div className="relative mb-3">
              <span className="relative flex shrink-0 overflow-hidden rounded-full h-16 w-16 ring-2 ring-offset-2 ring-offset-white dark:ring-offset-neutral-800 ring-(--ink) dark:ring-white">
                <img className="aspect-square h-full w-full rounded-full object-cover" alt="Maxamed Ibraahim" src="/cdn/avatars/6a8c78838d7d2414b77eebf8-1787905191844.jpg" />
              </span>
              <span className="absolute -bottom-1.5 -right-1.5 flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-bold tabular-nums shadow-sm bg-(--ink) text-white dark:bg-white dark:text-(--ink)">
                1
              </span>
            </div>
            <p className="text-sm font-semibold text-[#1E1E1E] dark:text-neutral-50">
              Maxamed Ibraahim
            </p>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-[#8D8D8D] dark:text-neutral-400">
              1st place
            </p>
            <div className="mt-3 flex items-center gap-3 text-xs text-[#8D8D8D] dark:text-neutral-400">
              <span>
                <span className="font-semibold tabular-nums text-[#1E1E1E] dark:text-neutral-100">
                  211
                </span>
                {" "}pts
              </span>
              <span>
                <span className="tabular-nums">
                  94
                </span>
                {" "}lessons
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center rounded-2xl border border-neutral-200/60 bg-white p-5 text-center shadow-[0_1px_3px_rgb(var(--ink-rgb)/0.03),0_6px_16px_rgb(var(--ink-rgb)/0.05)] dark:border-neutral-700/60 dark:bg-neutral-800/60">
            <div className="relative mb-3">
              <span className="relative flex shrink-0 overflow-hidden rounded-full h-16 w-16 ring-2 ring-offset-2 ring-offset-white dark:ring-offset-neutral-800 ring-neutral-200 dark:ring-neutral-600">
                <span className="flex h-full w-full items-center justify-center rounded-full dark:bg-neutral-800 dark:text-neutral-200 text-base font-semibold bg-pink-500 text-white">
                  SJ
                </span>
              </span>
              <span className="absolute -bottom-1.5 -right-1.5 flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-bold tabular-nums shadow-sm bg-neutral-300 text-[#1E1E1E] dark:bg-neutral-700 dark:text-neutral-100">
                3
              </span>
            </div>
            <p className="text-sm font-semibold text-[#1E1E1E] dark:text-neutral-50">
              Sabiriin Jamac
            </p>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-[#8D8D8D] dark:text-neutral-400">
              3rd place
            </p>
            <div className="mt-3 flex items-center gap-3 text-xs text-[#8D8D8D] dark:text-neutral-400">
              <span>
                <span className="font-semibold tabular-nums text-[#1E1E1E] dark:text-neutral-100">
                  109
                </span>
                {" "}pts
              </span>
              <span>
                <span className="tabular-nums">
                  56
                </span>
                {" "}lessons
              </span>
            </div>
          </div>
        </div>
      </div>
      <section>
        <h2 className="mb-4 font-display text-lg font-semibold tracking-[-0.02em] text-[#1E1E1E] dark:text-neutral-50">
          Chasing the podium
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-neutral-200/60 bg-white shadow-[0_1px_3px_rgb(var(--ink-rgb)/0.03),0_6px_16px_rgb(var(--ink-rgb)/0.05)] dark:border-neutral-800 dark:bg-neutral-900">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-neutral-200 text-left text-[11px] uppercase tracking-wider text-[#8D8D8D] dark:border-neutral-800 dark:text-neutral-400">
                <th className="px-4 py-3 font-semibold">
                  #
                </th>
                <th className="px-4 py-3 font-semibold">
                  Student
                </th>
                <th className="px-4 py-3 text-right font-semibold">
                  Points
                </th>
                <th className="px-4 py-3 text-right font-semibold">
                  Lessons
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100 dark:divide-neutral-800">
              <tr className="transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-800/50">
                <td className="px-4 py-3 tabular-nums text-[#8D8D8D] dark:text-neutral-400">
                  4
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <span className="relative flex shrink-0 overflow-hidden rounded-full h-7 w-7">
                      <img className="aspect-square h-full w-full rounded-full object-cover" alt="Mohamed Khalif" src="/cdn/avatars/6a802c47f001c064d6669ea1-1789397807193.jpg" />
                    </span>
                    <span className="font-medium text-[#1E1E1E] dark:text-neutral-100">
                      Mohamed Khalif
                    </span>
                  </div>
                </td>
                <td className="px-4 py-3 text-right font-semibold tabular-nums text-[#1E1E1E] dark:text-neutral-100">
                  94
                </td>
                <td className="px-4 py-3 text-right tabular-nums text-[#8D8D8D] dark:text-neutral-400">
                  45
                </td>
              </tr>
              <tr className="transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-800/50">
                <td className="px-4 py-3 tabular-nums text-[#8D8D8D] dark:text-neutral-400">
                  5
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <span className="relative flex shrink-0 overflow-hidden rounded-full h-7 w-7">
                      <span className="flex h-full w-full items-center justify-center rounded-full dark:bg-neutral-800 dark:text-neutral-200 text-[10px] font-medium bg-amber-500 text-white">
                        MA
                      </span>
                    </span>
                    <span className="font-medium text-[#1E1E1E] dark:text-neutral-100">
                      maryam abdiasiis ibrahim
                    </span>
                  </div>
                </td>
                <td className="px-4 py-3 text-right font-semibold tabular-nums text-[#1E1E1E] dark:text-neutral-100">
                  91.5
                </td>
                <td className="px-4 py-3 text-right tabular-nums text-[#8D8D8D] dark:text-neutral-400">
                  34
                </td>
              </tr>
              <tr className="transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-800/50">
                <td className="px-4 py-3 tabular-nums text-[#8D8D8D] dark:text-neutral-400">
                  6
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <span className="relative flex shrink-0 overflow-hidden rounded-full h-7 w-7">
                      <img className="aspect-square h-full w-full rounded-full object-cover" alt="Ahmed  Yacquub Ali" src="/cdn/avatars/6a083efed765dc738eba0584-1779082821628.jpg" />
                    </span>
                    <span className="font-medium text-[#1E1E1E] dark:text-neutral-100">
                      Ahmed Yacquub Ali
                    </span>
                  </div>
                </td>
                <td className="px-4 py-3 text-right font-semibold tabular-nums text-[#1E1E1E] dark:text-neutral-100">
                  74
                </td>
                <td className="px-4 py-3 text-right tabular-nums text-[#8D8D8D] dark:text-neutral-400">
                  31
                </td>
              </tr>
              <tr className="transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-800/50">
                <td className="px-4 py-3 tabular-nums text-[#8D8D8D] dark:text-neutral-400">
                  7
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <span className="relative flex shrink-0 overflow-hidden rounded-full h-7 w-7">
                      <img className="aspect-square h-full w-full rounded-full object-cover" alt="Ibrahim Said" src="/cdn/avatars/6a7363f1da89a0e255cd9b9d-1785991353829.jpg" />
                    </span>
                    <span className="font-medium text-[#1E1E1E] dark:text-neutral-100">
                      Ibrahim Said
                    </span>
                  </div>
                </td>
                <td className="px-4 py-3 text-right font-semibold tabular-nums text-[#1E1E1E] dark:text-neutral-100">
                  73.5
                </td>
                <td className="px-4 py-3 text-right tabular-nums text-[#8D8D8D] dark:text-neutral-400">
                  26
                </td>
              </tr>
              <tr className="transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-800/50">
                <td className="px-4 py-3 tabular-nums text-[#8D8D8D] dark:text-neutral-400">
                  8
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <span className="relative flex shrink-0 overflow-hidden rounded-full h-7 w-7">
                      <span className="flex h-full w-full items-center justify-center rounded-full dark:bg-neutral-800 dark:text-neutral-200 text-[10px] font-medium bg-emerald-500 text-white">
                        AD
                      </span>
                    </span>
                    <span className="font-medium text-[#1E1E1E] dark:text-neutral-100">
                      Abdifatah Dige
                    </span>
                  </div>
                </td>
                <td className="px-4 py-3 text-right font-semibold tabular-nums text-[#1E1E1E] dark:text-neutral-100">
                  72.5
                </td>
                <td className="px-4 py-3 text-right tabular-nums text-[#8D8D8D] dark:text-neutral-400">
                  32
                </td>
              </tr>
              <tr className="transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-800/50">
                <td className="px-4 py-3 tabular-nums text-[#8D8D8D] dark:text-neutral-400">
                  9
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <span className="relative flex shrink-0 overflow-hidden rounded-full h-7 w-7">
                      <img className="aspect-square h-full w-full rounded-full object-cover" alt="Ibrahim Issack Aden" src="/cdn/avatars/6aa80b0877e497ef59583316-1789474012890.jpg" />
                    </span>
                    <span className="font-medium text-[#1E1E1E] dark:text-neutral-100">
                      Ibrahim Issack Aden
                    </span>
                  </div>
                </td>
                <td className="px-4 py-3 text-right font-semibold tabular-nums text-[#1E1E1E] dark:text-neutral-100">
                  71
                </td>
                <td className="px-4 py-3 text-right tabular-nums text-[#8D8D8D] dark:text-neutral-400">
                  24
                </td>
              </tr>
              <tr className="transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-800/50">
                <td className="px-4 py-3 tabular-nums text-[#8D8D8D] dark:text-neutral-400">
                  10
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <span className="relative flex shrink-0 overflow-hidden rounded-full h-7 w-7">
                      <span className="flex h-full w-full items-center justify-center rounded-full dark:bg-neutral-800 dark:text-neutral-200 text-[10px] font-medium bg-rose-500 text-white">
                        NA
                      </span>
                    </span>
                    <span className="font-medium text-[#1E1E1E] dark:text-neutral-100">
                      Nimo Ali
                    </span>
                  </div>
                </td>
                <td className="px-4 py-3 text-right font-semibold tabular-nums text-[#1E1E1E] dark:text-neutral-100">
                  68
                </td>
                <td className="px-4 py-3 text-right tabular-nums text-[#8D8D8D] dark:text-neutral-400">
                  26
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section>
        <h2 className="mb-4 flex items-center gap-2 font-display text-lg font-semibold tracking-[-0.02em] text-[#1E1E1E] dark:text-neutral-50">
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-5 w-5 text-[#1E1E1E] dark:text-neutral-200" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M248,80a28,28,0,1,0-51.12,15.77l-26.79,33L146,73.4a28,28,0,1,0-36.06,0L85.91,128.74l-26.79-33a28,28,0,1,0-26.6,12L47,194.63A16,16,0,0,0,62.78,208H193.22A16,16,0,0,0,209,194.63l14.47-86.85A28,28,0,0,0,248,80ZM128,40a12,12,0,1,1-12,12A12,12,0,0,1,128,40ZM24,80A12,12,0,1,1,36,92,12,12,0,0,1,24,80ZM193.22,192H62.78L48.86,108.52,81.79,149A8,8,0,0,0,88,152a7.83,7.83,0,0,0,1.08-.07,8,8,0,0,0,6.26-4.74l29.3-67.4a27,27,0,0,0,6.72,0l29.3,67.4a8,8,0,0,0,6.26,4.74A7.83,7.83,0,0,0,168,152a8,8,0,0,0,6.21-3l32.93-40.52ZM220,92a12,12,0,1,1,12-12A12,12,0,0,1,220,92Z" />
          </svg>
          Last week's champions
        </h2>
        <div className="flex flex-wrap gap-2">
          <div className="flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1.5 dark:border-neutral-800 dark:bg-neutral-900">
            <span className="flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold tabular-nums bg-(--ink) text-white dark:bg-white dark:text-(--ink)">
              1
            </span>
            <span className="relative flex shrink-0 overflow-hidden rounded-full h-6 w-6">
              <img className="aspect-square h-full w-full rounded-full object-cover" alt="Nouradine Kahiyeh" src="/cdn/avatars/6948fe573edaad08d40d4648-1785079908578.jpg" />
            </span>
            <span className="text-xs font-medium text-[#1E1E1E] dark:text-neutral-100">
              Nouradine Kahiyeh
            </span>
            <span className="text-xs tabular-nums text-[#8D8D8D] dark:text-neutral-400">
              228 pts
            </span>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1.5 dark:border-neutral-800 dark:bg-neutral-900">
            <span className="flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold tabular-nums bg-neutral-500 text-white dark:bg-neutral-300 dark:text-(--ink)">
              2
            </span>
            <span className="relative flex shrink-0 overflow-hidden rounded-full h-6 w-6">
              <img className="aspect-square h-full w-full rounded-full object-cover" alt="Abdulaziz Mohamed" src="/cdn/avatars/681e101caec00e4f6887b32f-1789421283218.jpg" />
            </span>
            <span className="text-xs font-medium text-[#1E1E1E] dark:text-neutral-100">
              Abdulaziz Mohamed
            </span>
            <span className="text-xs tabular-nums text-[#8D8D8D] dark:text-neutral-400">
              195 pts
            </span>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1.5 dark:border-neutral-800 dark:bg-neutral-900">
            <span className="flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold tabular-nums bg-neutral-300 text-[#1E1E1E] dark:bg-neutral-700 dark:text-neutral-100">
              3
            </span>
            <span className="relative flex shrink-0 overflow-hidden rounded-full h-6 w-6">
              <img className="aspect-square h-full w-full rounded-full object-cover" alt="Kawsar ahmed" src="/cdn/avatars/663331f7acb4fc2e516ead65-1789746259042.jpg" />
            </span>
            <span className="text-xs font-medium text-[#1E1E1E] dark:text-neutral-100">
              Kawsar ahmed
            </span>
            <span className="text-xs tabular-nums text-[#8D8D8D] dark:text-neutral-400">
              194.5 pts
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
