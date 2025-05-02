import ThemeSwitcher from '@/components/top-navbar/theme-switcher'
import { GithubIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function Page() {
  return (
    <div>
      <nav className='relative mt-5 max-w-3xl container mx-auto p-3 px-5 flex justify-between items-center rounded-2xl
      animate-in fade-in-0 duration-300 bg-secondary/50
    
      after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-[100%] after:h-[0.5px] after:bg-primary after:bg-gradient-to-r after:from-background after:from-10% after:via-primary after:via-50% after:to-background after:to-90%  after:rounded-full
    
    '>

        <button className='flex gap-1 font-semibold text-xl'>ethera<p className='text-sm text-muted-foreground'>ui</p></button>
        <ul className='flex gap-5 justify-center'>
          <li>
            <Link href="/" className='hover:underline underline-offset-5 decoration-primary/50'>Components</Link>
          </li>
          <li>
            <Link href="/about" className='hover:underline underline-offset-5 decoration-primary/50 transition-all duration-300'>Blocks</Link>
          </li>
          <li>
            <Link href="/about" className='hover:underline underline-offset-5 decoration-primary/50 transition-all duration-300'>Inspiration✨</Link>
          </li>
        </ul>
        <div className='flex gap-4 items-center'>
          <Link
            href="https://github.com/shashwatpuri/ethera"
            target='_blank'
            className='hover:cursor-pointer'>
            <GithubIcon size={20} /></Link>
          <ThemeSwitcher />
        </div>
      </nav>

    </div>

  )
}

export default Page