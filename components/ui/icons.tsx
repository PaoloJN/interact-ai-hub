'use client'

import * as React from 'react'

import { cn } from '@/lib/utils'
import Image from 'next/image'

function IconOllama({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      width="133"
      height="185"
      viewBox="0 0 133 185"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className={cn('size-4 bg-white', className)}
      {...props}
    >
      <rect width="133" height="185" fill="url(#pattern0)" />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_406_1657"
            transform="matrix(0.00552486 0 0 0.00397193 0 -0.00840675)"
          />
        </pattern>
        <image
          id="image0_406_1657"
          width="181"
          height="256"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  )
}

function IconNextChat({
  className,
  inverted,
  ...props
}: React.ComponentProps<'svg'> & { inverted?: boolean }) {
  const id = React.useId()

  return (
    <svg
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('size-4', className)}
      {...props}
    >
      <defs>
        <linearGradient
          id={`gradient-${id}-1`}
          x1="10.6889"
          y1="10.3556"
          x2="13.8445"
          y2="14.2667"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={inverted ? 'white' : 'black'} />
          <stop
            offset={1}
            stopColor={inverted ? 'white' : 'black'}
            stopOpacity={0}
          />
        </linearGradient>
        <linearGradient
          id={`gradient-${id}-2`}
          x1="11.7555"
          y1="4.8"
          x2="11.7376"
          y2="9.50002"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={inverted ? 'white' : 'black'} />
          <stop
            offset={1}
            stopColor={inverted ? 'white' : 'black'}
            stopOpacity={0}
          />
        </linearGradient>
      </defs>
      <path
        d="M1 16L2.58314 11.2506C1.83084 9.74642 1.63835 8.02363 2.04013 6.39052C2.4419 4.75741 3.41171 3.32057 4.776 2.33712C6.1403 1.35367 7.81003 0.887808 9.4864 1.02289C11.1628 1.15798 12.7364 1.8852 13.9256 3.07442C15.1148 4.26363 15.842 5.83723 15.9771 7.5136C16.1122 9.18997 15.6463 10.8597 14.6629 12.224C13.6794 13.5883 12.2426 14.5581 10.6095 14.9599C8.97637 15.3616 7.25358 15.1692 5.74942 14.4169L1 16Z"
        fill={inverted ? 'black' : 'white'}
        stroke={inverted ? 'black' : 'white'}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <mask
        id="mask0_91_2047"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x={1}
        y={0}
        width={16}
        height={16}
      >
        <circle cx={9} cy={8} r={8} fill={inverted ? 'black' : 'white'} />
      </mask>
      <g mask="url(#mask0_91_2047)">
        <circle cx={9} cy={8} r={8} fill={inverted ? 'black' : 'white'} />
        <path
          d="M14.2896 14.0018L7.146 4.8H5.80005V11.1973H6.87681V6.16743L13.4444 14.6529C13.7407 14.4545 14.0231 14.2369 14.2896 14.0018Z"
          fill={`url(#gradient-${id}-1)`}
        />
        <rect
          x="11.2222"
          y="4.8"
          width="1.06667"
          height="6.4"
          fill={`url(#gradient-${id}-2)`}
        />
      </g>
    </svg>
  )
}

function IconPaperPlane({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      className={cn('size-4', className)}
      {...props}
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.20308 1.04312C1.00481 0.954998 0.772341 1.0048 0.627577 1.16641C0.482813 1.32802 0.458794 1.56455 0.568117 1.75196L3.92115 7.50002L0.568117 13.2481C0.458794 13.4355 0.482813 13.672 0.627577 13.8336C0.772341 13.9952 1.00481 14.045 1.20308 13.9569L14.7031 7.95693C14.8836 7.87668 15 7.69762 15 7.50002C15 7.30243 14.8836 7.12337 14.7031 7.04312L1.20308 1.04312ZM4.84553 7.10002L2.21234 2.586L13.2689 7.50002L2.21234 12.414L4.84552 7.90002H9C9.22092 7.90002 9.4 7.72094 9.4 7.50002C9.4 7.27911 9.22092 7.10002 9 7.10002H4.84553Z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      ></path>
    </svg>
  )
}

function IconOpenAI({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 24 24"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('size-4', className)}
      {...props}
    >
      <title>OpenAI icon</title>
      <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
    </svg>
  )
}

function IconVercel({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      aria-label="Vercel logomark"
      role="img"
      viewBox="0 0 74 64"
      className={cn('size-4', className)}
      {...props}
    >
      <path
        d="M37.5896 0.25L74.5396 64.25H0.639648L37.5896 0.25Z"
        fill="currentColor"
      ></path>
    </svg>
  )
}

function IconGitHub({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className={cn('size-4', className)}
      {...props}
    >
      <title>GitHub</title>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  )
}

function IconSeparator({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      fill="none"
      shapeRendering="geometricPrecision"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1"
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={cn('size-4', className)}
      {...props}
    >
      <path d="M16.88 3.549L7.12 20.451"></path>
    </svg>
  )
}

function IconArrowDown({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('size-4', className)}
      {...props}
    >
      <path d="m205.66 149.66-72 72a8 8 0 0 1-11.32 0l-72-72a8 8 0 0 1 11.32-11.32L120 196.69V40a8 8 0 0 1 16 0v156.69l58.34-58.35a8 8 0 0 1 11.32 11.32Z" />
    </svg>
  )
}

function IconArrowRight({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('size-4', className)}
      {...props}
    >
      <path d="m221.66 133.66-72 72a8 8 0 0 1-11.32-11.32L196.69 136H40a8 8 0 0 1 0-16h156.69l-58.35-58.34a8 8 0 0 1 11.32-11.32l72 72a8 8 0 0 1 0 11.32Z" />
    </svg>
  )
}

function IconUser({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('size-4', className)}
      {...props}
    >
      <path d="M230.92 212c-15.23-26.33-38.7-45.21-66.09-54.16a72 72 0 1 0-73.66 0c-27.39 8.94-50.86 27.82-66.09 54.16a8 8 0 1 0 13.85 8c18.84-32.56 52.14-52 89.07-52s70.23 19.44 89.07 52a8 8 0 1 0 13.85-8ZM72 96a56 56 0 1 1 56 56 56.06 56.06 0 0 1-56-56Z" />
    </svg>
  )
}

function IconPlus({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('size-4', className)}
      {...props}
    >
      <path d="M224 128a8 8 0 0 1-8 8h-80v80a8 8 0 0 1-16 0v-80H40a8 8 0 0 1 0-16h80V40a8 8 0 0 1 16 0v80h80a8 8 0 0 1 8 8Z" />
    </svg>
  )
}

function IconArrowElbow({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('size-4', className)}
      {...props}
    >
      <path d="M200 32v144a8 8 0 0 1-8 8H67.31l34.35 34.34a8 8 0 0 1-11.32 11.32l-48-48a8 8 0 0 1 0-11.32l48-48a8 8 0 0 1 11.32 11.32L67.31 168H184V32a8 8 0 0 1 16 0Z" />
    </svg>
  )
}

function IconSpinner({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('size-4 animate-spin', className)}
      {...props}
    >
      <path d="M232 128a104 104 0 0 1-208 0c0-41 23.81-78.36 60.66-95.27a8 8 0 0 1 6.68 14.54C60.15 61.59 40 93.27 40 128a88 88 0 0 0 176 0c0-34.73-20.15-66.41-51.34-80.73a8 8 0 0 1 6.68-14.54C208.19 49.64 232 87 232 128Z" />
    </svg>
  )
}

function IconMessage({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('size-4', className)}
      {...props}
    >
      <path d="M216 48H40a16 16 0 0 0-16 16v160a15.84 15.84 0 0 0 9.25 14.5A16.05 16.05 0 0 0 40 240a15.89 15.89 0 0 0 10.25-3.78.69.69 0 0 0 .13-.11L82.5 208H216a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16ZM40 224Zm176-32H82.5a16 16 0 0 0-10.3 3.75l-.12.11L40 224V64h176Z" />
    </svg>
  )
}

function IconTrash({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('size-4', className)}
      {...props}
    >
      <path d="M216 48h-40v-8a24 24 0 0 0-24-24h-48a24 24 0 0 0-24 24v8H40a8 8 0 0 0 0 16h8v144a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16V64h8a8 8 0 0 0 0-16ZM96 40a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8v8H96Zm96 168H64V64h128Zm-80-104v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0Zm48 0v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0Z" />
    </svg>
  )
}

function IconRefresh({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('size-4', className)}
      {...props}
    >
      <path d="M197.67 186.37a8 8 0 0 1 0 11.29C196.58 198.73 170.82 224 128 224c-37.39 0-64.53-22.4-80-39.85V208a8 8 0 0 1-16 0v-48a8 8 0 0 1 8-8h48a8 8 0 0 1 0 16H55.44C67.76 183.35 93 208 128 208c36 0 58.14-21.46 58.36-21.68a8 8 0 0 1 11.31.05ZM216 40a8 8 0 0 0-8 8v23.85C192.53 54.4 165.39 32 128 32c-42.82 0-68.58 25.27-69.66 26.34a8 8 0 0 0 11.3 11.34C69.86 69.46 92 48 128 48c35 0 60.24 24.65 72.56 40H168a8 8 0 0 0 0 16h48a8 8 0 0 0 8-8V48a8 8 0 0 0-8-8Z" />
    </svg>
  )
}

function IconStop({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('size-4', className)}
      {...props}
    >
      <path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm0 192a88 88 0 1 1 88-88 88.1 88.1 0 0 1-88 88Zm24-120h-48a8 8 0 0 0-8 8v48a8 8 0 0 0 8 8h48a8 8 0 0 0 8-8v-48a8 8 0 0 0-8-8Zm-8 48h-32v-32h32Z" />
    </svg>
  )
}

function IconSidebar({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('size-4', className)}
      {...props}
    >
      <path d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16ZM40 56h40v144H40Zm176 144H96V56h120v144Z" />
    </svg>
  )
}

function IconMoon({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('size-4', className)}
      {...props}
    >
      <path d="M233.54 142.23a8 8 0 0 0-8-2 88.08 88.08 0 0 1-109.8-109.8 8 8 0 0 0-10-10 104.84 104.84 0 0 0-52.91 37A104 104 0 0 0 136 224a103.09 103.09 0 0 0 62.52-20.88 104.84 104.84 0 0 0 37-52.91 8 8 0 0 0-1.98-7.98Zm-44.64 48.11A88 88 0 0 1 65.66 67.11a89 89 0 0 1 31.4-26A106 106 0 0 0 96 56a104.11 104.11 0 0 0 104 104 106 106 0 0 0 14.92-1.06 89 89 0 0 1-26.02 31.4Z" />
    </svg>
  )
}

function IconSun({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('size-4', className)}
      {...props}
    >
      <path d="M120 40V16a8 8 0 0 1 16 0v24a8 8 0 0 1-16 0Zm72 88a64 64 0 1 1-64-64 64.07 64.07 0 0 1 64 64Zm-16 0a48 48 0 1 0-48 48 48.05 48.05 0 0 0 48-48ZM58.34 69.66a8 8 0 0 0 11.32-11.32l-16-16a8 8 0 0 0-11.32 11.32Zm0 116.68-16 16a8 8 0 0 0 11.32 11.32l16-16a8 8 0 0 0-11.32-11.32ZM192 72a8 8 0 0 0 5.66-2.34l16-16a8 8 0 0 0-11.32-11.32l-16 16A8 8 0 0 0 192 72Zm5.66 114.34a8 8 0 0 0-11.32 11.32l16 16a8 8 0 0 0 11.32-11.32ZM48 128a8 8 0 0 0-8-8H16a8 8 0 0 0 0 16h24a8 8 0 0 0 8-8Zm80 80a8 8 0 0 0-8 8v24a8 8 0 0 0 16 0v-24a8 8 0 0 0-8-8Zm112-88h-24a8 8 0 0 0 0 16h24a8 8 0 0 0 0-16Z" />
    </svg>
  )
}

function IconCopy({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('size-4', className)}
      {...props}
    >
      <path d="M216 32H88a8 8 0 0 0-8 8v40H40a8 8 0 0 0-8 8v128a8 8 0 0 0 8 8h128a8 8 0 0 0 8-8v-40h40a8 8 0 0 0 8-8V40a8 8 0 0 0-8-8Zm-56 176H48V96h112Zm48-48h-32V88a8 8 0 0 0-8-8H96V48h112Z" />
    </svg>
  )
}

function IconCheck({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('size-4', className)}
      {...props}
    >
      <path d="m229.66 77.66-128 128a8 8 0 0 1-11.32 0l-56-56a8 8 0 0 1 11.32-11.32L96 188.69 218.34 66.34a8 8 0 0 1 11.32 11.32Z" />
    </svg>
  )
}

function IconDownload({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('size-4', className)}
      {...props}
    >
      <path d="M224 152v56a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16v-56a8 8 0 0 1 16 0v56h160v-56a8 8 0 0 1 16 0Zm-101.66 5.66a8 8 0 0 0 11.32 0l40-40a8 8 0 0 0-11.32-11.32L136 132.69V40a8 8 0 0 0-16 0v92.69l-26.34-26.35a8 8 0 0 0-11.32 11.32Z" />
    </svg>
  )
}

function IconClose({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('size-4', className)}
      {...props}
    >
      <path d="M205.66 194.34a8 8 0 0 1-11.32 11.32L128 139.31l-66.34 66.35a8 8 0 0 1-11.32-11.32L116.69 128 50.34 61.66a8 8 0 0 1 11.32-11.32L128 116.69l66.34-66.35a8 8 0 0 1 11.32 11.32L139.31 128Z" />
    </svg>
  )
}

function IconEdit({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={cn('size-4', className)}
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
      />
    </svg>
  )
}

function IconShare({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className={cn('size-4', className)}
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="m237.66 106.35-80-80A8 8 0 0 0 144 32v40.35c-25.94 2.22-54.59 14.92-78.16 34.91-28.38 24.08-46.05 55.11-49.76 87.37a12 12 0 0 0 20.68 9.58c11-11.71 50.14-48.74 107.24-52V192a8 8 0 0 0 13.66 5.65l80-80a8 8 0 0 0 0-11.3ZM160 172.69V144a8 8 0 0 0-8-8c-28.08 0-55.43 7.33-81.29 21.8a196.17 196.17 0 0 0-36.57 26.52c5.8-23.84 20.42-46.51 42.05-64.86C99.41 99.77 127.75 88 152 88a8 8 0 0 0 8-8V51.32L220.69 112Z" />
    </svg>
  )
}

function IconUsers({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className={cn('size-4', className)}
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M117.25 157.92a60 60 0 1 0-66.5 0 95.83 95.83 0 0 0-47.22 37.71 8 8 0 1 0 13.4 8.74 80 80 0 0 1 134.14 0 8 8 0 0 0 13.4-8.74 95.83 95.83 0 0 0-47.22-37.71ZM40 108a44 44 0 1 1 44 44 44.05 44.05 0 0 1-44-44Zm210.14 98.7a8 8 0 0 1-11.07-2.33A79.83 79.83 0 0 0 172 168a8 8 0 0 1 0-16 44 44 0 1 0-16.34-84.87 8 8 0 1 1-5.94-14.85 60 60 0 0 1 55.53 105.64 95.83 95.83 0 0 1 47.22 37.71 8 8 0 0 1-2.33 11.07Z" />
    </svg>
  )
}

function IconExternalLink({
  className,
  ...props
}: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className={cn('size-4', className)}
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M224 104a8 8 0 0 1-16 0V59.32l-66.33 66.34a8 8 0 0 1-11.32-11.32L196.68 48H152a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8Zm-40 24a8 8 0 0 0-8 8v72H48V80h72a8 8 0 0 0 0-16H48a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-72a8 8 0 0 0-8-8Z" />
    </svg>
  )
}

function IconChevronUpDown({
  className,
  ...props
}: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className={cn('size-4', className)}
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M181.66 170.34a8 8 0 0 1 0 11.32l-48 48a8 8 0 0 1-11.32 0l-48-48a8 8 0 0 1 11.32-11.32L128 212.69l42.34-42.35a8 8 0 0 1 11.32 0Zm-96-84.68L128 43.31l42.34 42.35a8 8 0 0 0 11.32-11.32l-48-48a8 8 0 0 0-11.32 0l-48 48a8 8 0 0 0 11.32 11.32Z" />
    </svg>
  )
}

// Added icons

function IconSettings({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      className={cn('size-4', className)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.07095 0.650238C6.67391 0.650238 6.32977 0.925096 6.24198 1.31231L6.0039 2.36247C5.6249 2.47269 5.26335 2.62363 4.92436 2.81013L4.01335 2.23585C3.67748 2.02413 3.23978 2.07312 2.95903 2.35386L2.35294 2.95996C2.0722 3.2407 2.0232 3.6784 2.23493 4.01427L2.80942 4.92561C2.62307 5.2645 2.47227 5.62594 2.36216 6.00481L1.31209 6.24287C0.924883 6.33065 0.650024 6.6748 0.650024 7.07183V7.92897C0.650024 8.32601 0.924883 8.67015 1.31209 8.75794L2.36228 8.99603C2.47246 9.375 2.62335 9.73652 2.80979 10.0755L2.2354 10.9867C2.02367 11.3225 2.07267 11.7602 2.35341 12.041L2.95951 12.6471C3.24025 12.9278 3.67795 12.9768 4.01382 12.7651L4.92506 12.1907C5.26384 12.377 5.62516 12.5278 6.0039 12.6379L6.24198 13.6881C6.32977 14.0753 6.67391 14.3502 7.07095 14.3502H7.92809C8.32512 14.3502 8.66927 14.0753 8.75705 13.6881L8.99505 12.6383C9.37411 12.5282 9.73573 12.3773 10.0748 12.1909L10.986 12.7653C11.3218 12.977 11.7595 12.928 12.0403 12.6473L12.6464 12.0412C12.9271 11.7604 12.9761 11.3227 12.7644 10.9869L12.1902 10.076C12.3768 9.73688 12.5278 9.37515 12.638 8.99596L13.6879 8.75794C14.0751 8.67015 14.35 8.32601 14.35 7.92897V7.07183C14.35 6.6748 14.0751 6.33065 13.6879 6.24287L12.6381 6.00488C12.528 5.62578 12.3771 5.26414 12.1906 4.92507L12.7648 4.01407C12.9766 3.6782 12.9276 3.2405 12.6468 2.95975L12.0407 2.35366C11.76 2.07292 11.3223 2.02392 10.9864 2.23565L10.0755 2.80989C9.73622 2.62328 9.37437 2.47229 8.99505 2.36209L8.75705 1.31231C8.66927 0.925096 8.32512 0.650238 7.92809 0.650238H7.07095ZM4.92053 3.81251C5.44724 3.44339 6.05665 3.18424 6.71543 3.06839L7.07095 1.50024H7.92809L8.28355 3.06816C8.94267 3.18387 9.5524 3.44302 10.0794 3.81224L11.4397 2.9547L12.0458 3.56079L11.1882 4.92117C11.5573 5.44798 11.8164 6.0575 11.9321 6.71638L13.5 7.07183V7.92897L11.932 8.28444C11.8162 8.94342 11.557 9.55301 11.1878 10.0798L12.0453 11.4402L11.4392 12.0462L10.0787 11.1886C9.55192 11.5576 8.94241 11.8166 8.28355 11.9323L7.92809 13.5002H7.07095L6.71543 11.932C6.0569 11.8162 5.44772 11.5572 4.92116 11.1883L3.56055 12.046L2.95445 11.4399L3.81213 10.0794C3.4431 9.55266 3.18403 8.94326 3.06825 8.2845L1.50002 7.92897V7.07183L3.06818 6.71632C3.18388 6.05765 3.44283 5.44833 3.81171 4.92165L2.95398 3.561L3.56008 2.95491L4.92053 3.81251ZM9.02496 7.50008C9.02496 8.34226 8.34223 9.02499 7.50005 9.02499C6.65786 9.02499 5.97513 8.34226 5.97513 7.50008C5.97513 6.65789 6.65786 5.97516 7.50005 5.97516C8.34223 5.97516 9.02496 6.65789 9.02496 7.50008ZM9.92496 7.50008C9.92496 8.83932 8.83929 9.92499 7.50005 9.92499C6.1608 9.92499 5.07513 8.83932 5.07513 7.50008C5.07513 6.16084 6.1608 5.07516 7.50005 5.07516C8.83929 5.07516 9.92496 6.16084 9.92496 7.50008Z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      ></path>
    </svg>
  )
}

function ArrowUpFromLine({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      // className="lucide lucide-arrow-up-from-line"
      className={cn('size-4', className)}
      {...props}
    >
      <path d="m18 9-6-6-6 6" />
      <path d="M12 3v14" />
      <path d="M5 21h14" />
    </svg>
  )
}

// LLMs Icons

function MetaLlama({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      width="98"
      height="65"
      viewBox="0 0 98 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M10.4844 42.5182C10.4844 46.2245 11.2979 49.0701 12.3612 50.7916C13.7553 53.0464 15.8346 54.0017 17.9544 54.0017C20.6886 54.0017 23.1899 53.3232 28.0101 46.6565C31.8717 41.3131 36.4219 33.8126 39.4835 29.1105L44.6683 21.1443C48.27 15.6118 52.4388 9.4616 57.2186 5.29282C61.1207 1.89031 65.3299 0 69.5662 0C76.6785 0 83.4531 4.12151 88.6379 11.8515C94.3122 20.3173 97.0667 30.9806 97.0667 41.9848C97.0667 48.5266 95.7772 53.3333 93.5831 57.1308C91.4633 60.8034 87.3316 64.4726 80.3814 64.4726V54.0017C86.3325 54.0017 87.8177 48.5333 87.8177 42.2751C87.8177 33.357 85.7384 23.4599 81.1578 16.3882C77.9072 11.3722 73.6945 8.30715 69.0599 8.30715C64.0472 8.30715 60.0135 12.0878 55.4802 18.8287C53.07 22.4101 50.5958 26.7747 47.8177 31.6996L44.7595 37.1173C38.616 48.0101 37.0599 50.4911 33.9882 54.5856C28.6042 61.7553 24.0067 64.4726 17.9544 64.4726C10.7747 64.4726 6.23458 61.3637 3.42277 56.6785C1.12741 52.8608 0 47.8515 0 42.1435L10.4844 42.5182Z"
        fill="#0081FB"
      />
      <path
        d="M8 12.5907C12.8067 5.1814 19.7435 0 27.6996 0C32.3072 0 36.8878 1.36372 41.6709 5.26922C46.903 9.53927 52.4793 16.5705 59.4363 28.1587L61.9308 32.3173C67.9527 42.3494 71.3789 47.5106 73.384 49.9443C75.9629 53.07 77.7688 54.0017 80.1148 54.0017C86.0658 54.0017 87.551 48.5333 87.551 42.2751L96.8 41.9848C96.8 48.5266 95.5105 53.3333 93.3165 57.1308C91.1966 60.8034 87.065 64.4726 80.1148 64.4726C75.7941 64.4726 71.9662 63.5342 67.7333 59.541C64.4793 56.476 60.6751 51.0312 57.7485 46.1367L49.043 31.5949C44.6751 24.297 40.6684 18.8557 38.3494 16.3915C35.8548 13.7418 32.6481 10.5418 27.5308 10.5418C23.389 10.5418 19.8717 13.4481 16.9283 17.8937L8 12.5907Z"
        fill="url(#paint0_linear_1_7)"
      />
      <path
        d="M27.7975 10.5418C23.6557 10.5418 20.1384 13.4481 17.1949 17.8937C13.0329 24.1755 10.4844 33.5325 10.4844 42.5182C10.4844 46.2245 11.2979 49.0701 12.3612 50.7916L3.42277 56.6785C1.12741 52.8608 0 47.8515 0 42.1435C0 31.7637 2.84893 20.9451 8.26666 12.5907C13.0734 5.1814 20.0101 0 27.9662 0L27.7975 10.5418Z"
        fill="url(#paint1_linear_1_7)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1_7"
          x1="13.4713"
          y1="39.4937"
          x2="86.4925"
          y2="43.5249"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0064E1" />
          <stop offset="0.4" stopColor="#0064E1" />
          <stop offset="0.83" stopColor="#0073EE" />
          <stop offset="1" stopColor="#0082FB" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1_7"
          x1="15.1899"
          y1="46.9199"
          x2="15.1899"
          y2="22.2785"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0082FB" />
          <stop offset="1" stopColor="#0064E0" />
        </linearGradient>
      </defs>
    </svg>
  )
}

function Mistral({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      width="176"
      height="162"
      viewBox="0 0 176 162"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <rect
        x="15"
        y="1"
        width="32"
        height="32"
        fill="#FFCD00"
        stroke="#636363"
        strokeOpacity="0.2"
        strokeWidth="0.5"
      />
      <rect
        x="143"
        y="1"
        width="32"
        height="32"
        fill="#FFCD00"
        stroke="#636363"
        strokeOpacity="0.2"
        strokeWidth="0.5"
      />
      <rect
        x="15"
        y="33"
        width="32"
        height="32"
        fill="#FFA400"
        stroke="#636363"
        strokeOpacity="0.2"
        strokeWidth="0.5"
      />
      <rect
        x="47"
        y="33"
        width="32"
        height="32"
        fill="#FFA400"
        stroke="#636363"
        strokeOpacity="0.2"
        strokeWidth="0.5"
      />
      <rect
        x="111"
        y="33"
        width="32"
        height="32"
        fill="#FFA400"
        stroke="#636363"
        strokeOpacity="0.2"
        strokeWidth="0.5"
      />
      <rect
        x="143"
        y="33"
        width="32"
        height="32"
        fill="#FFA400"
        stroke="#636363"
        strokeOpacity="0.2"
        strokeWidth="0.5"
      />
      <rect
        x="15"
        y="65"
        width="32"
        height="32"
        fill="#FF7100"
        stroke="#636363"
        strokeOpacity="0.2"
        strokeWidth="0.5"
      />
      <rect
        x="47"
        y="65"
        width="32"
        height="32"
        fill="#FF7100"
        stroke="#636363"
        strokeOpacity="0.2"
        strokeWidth="0.5"
      />
      <rect
        x="79"
        y="65"
        width="32"
        height="32"
        fill="#FF7100"
        stroke="#636363"
        strokeOpacity="0.2"
        strokeWidth="0.5"
      />
      <rect
        x="111"
        y="65"
        width="32"
        height="32"
        fill="#FF7100"
        stroke="#636363"
        strokeOpacity="0.2"
        strokeWidth="0.5"
      />
      <rect
        x="143"
        y="65"
        width="32"
        height="32"
        fill="#FF7100"
        stroke="#636363"
        strokeOpacity="0.2"
        strokeWidth="0.5"
      />
      <rect
        x="15"
        y="97"
        width="32"
        height="32"
        fill="#FF4902"
        stroke="#636363"
        strokeOpacity="0.2"
        strokeWidth="0.5"
      />
      <rect
        x="79"
        y="97"
        width="32"
        height="32"
        fill="#FF4902"
        stroke="#636363"
        strokeOpacity="0.2"
        strokeWidth="0.5"
      />
      <rect
        x="143"
        y="97"
        width="32"
        height="32"
        fill="#FF4902"
        stroke="#636363"
        strokeOpacity="0.2"
        strokeWidth="0.5"
      />
      <rect
        x="15"
        y="129"
        width="32"
        height="32"
        fill="#FF0006"
        stroke="#636363"
        strokeOpacity="0.2"
        strokeWidth="0.5"
      />
      <rect
        x="143"
        y="129"
        width="32"
        height="32"
        fill="#FF0006"
        stroke="#636363"
        strokeOpacity="0.2"
        strokeWidth="0.5"
      />
      <rect y="1" width="16" height="160" fill="black" />
      <rect x="63" y="97" width="16" height="32" fill="black" />
      <rect x="95" y="33" width="16" height="32" fill="black" />
      <rect x="127" y="1" width="16" height="32" fill="black" />
      <rect x="127" y="97" width="16" height="64" fill="black" />
    </svg>
  )
}

function Lava() {
  return <div className="size-fit">🌋</div>
}

function Gemma() {
  return (
    <div className="size-4">
      <Image
        src="/gemma.png"
        alt="Gemma"
        width={64}
        height={64}
        className="size-full aspect-square"
      />
    </div>
  )
}

// get model icon by name
function getModelIcon(name: string) {
  switch (name) {
    case 'Meta':
      return <MetaLlama className="size-4" />
    case 'Mistral':
      return <Mistral className="size-3.5" />
    case 'LLaVA':
      return <Lava />
    case 'Google':
      return <Gemma />
    default:
      return <MetaLlama />
  }
}

export {
  IconEdit,
  IconNextChat,
  IconOpenAI,
  IconVercel,
  IconGitHub,
  IconSeparator,
  IconArrowDown,
  IconArrowRight,
  IconUser,
  IconPlus,
  IconArrowElbow,
  IconSpinner,
  IconMessage,
  IconTrash,
  IconRefresh,
  IconStop,
  IconSidebar,
  IconMoon,
  IconSun,
  IconCopy,
  IconCheck,
  IconDownload,
  IconClose,
  IconShare,
  IconUsers,
  IconSettings,
  IconExternalLink,
  IconChevronUpDown,
  IconPaperPlane,
  ArrowUpFromLine,
  getModelIcon,
  // ollama
  IconOllama
}
