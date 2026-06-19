export default function Footer() {
  return (
    <footer className="row-start-3 flex gap-6 md:gap-16 flex-wrap items-center justify-center py-4 sm:py-6 px-8 mt-12 md:mt-20 lg:mt-30 border-t border-stone-100 dark:border-stone-800">
      <div className="text-sm text-stone-500 dark:text-stone-400">
        Copyright © {new Date().getFullYear()} Patrick Allen. All rights
        reserved.
      </div>

      <a
        href="https://www.x.com/patrickallenxyz"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_15_4)">
            <path
              d="M10.7142 7.62262L17.4162 0H15.8286L10.0068 6.61726L5.3604 0H0L7.0278 10.0074L0 17.9999H1.5876L7.7316 11.0104L12.6396 17.9999H18M2.1606 1.17142H4.5996L15.8274 16.8861H13.3878"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_15_4">
              <rect width="18" height="18" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </a>
    </footer>
  );
}
