import ThemeSwitcher from '@/components/top-navbar/theme-switcher'
import { Button } from '@/components/ui/button'
import { ArrowDown, ArrowRight, CodeSquare, GithubIcon, Sparkles } from 'lucide-react'
import Link from 'next/link'
import React from 'react'


import {
  Card,
  CardContent,
} from "@/components/ui/card"

const cards = [
  {
    title: 'UI Blocks',
    description: 'Beautiful, responsive UI blocks for your projects',
    image: '/images/card1.png',
  },
  {
    title: 'UI Blocks',
    description: 'Beautiful, responsive UI blocks for your projects',
    image: '/images/card1.png',
  },
  {
    title: 'UI Blocks',
    description: 'Beautiful, responsive UI blocks for your projects',
    image: '/images/card1.png',
  }
]

const Page = (): React.ReactNode => {
  return (
    <div>

      <div className='relative flex flex-col min-h-screen'>
        <nav className='fixed bg-background top-5 left-1/2 -translate-x-1/2 z-50 max-w-3xl container mx-auto p-3 px-5 flex justify-between items-center rounded-xl
      animate-in fade-in-0 duration-300 
      shadow-lg shadow-primary-gradient/10 border dark:border-b-0 hover:border-primary/50
    
      after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-[90%] after:h-[1px] after:bg-gradient-to-r after:from-transparent after:from-20% after:via-primary after:via-50% after:to-transparent after:to-80%  after:rounded-full
    '>

          <button className='flex gap-1 font-semibold text-xl'>ethera<p className='text-sm text-muted-foreground'>ui</p></button>
          <ul className='flex gap-5 justify-center'>
            <li>
              <Link href="/" className='hover:underline underline-offset-5 decoration-primary/50 text-sm s text-muted-foreground cursor-not-allowed'>Components</Link>
            </li>
            <li>
              <Link href="/blocks" className='hover:underline underline-offset-5 decoration-primary/50 text-sm text-foreground'>Blocks</Link>
            </li>
            <li>
              <Link href="/about" className='hover:underline underline-offset-5 decoration-primary/50 text-sm text-muted-foreground cursor-not-allowed'>Inspiration✨</Link>
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

        {/* Hero Section */}
        <section id="home" className="relative flex-1 h-full flex flex-col items-center justify-center text-center px-4">

          {/* Glowing Orb Container */}
          <div className="absolute inset-0 overflow-y-visible overflow-x-clip">
            <div
              className="absolute w-[400px] h-[400px] animate-float"
              style={{
                background: 'radial-gradient(circle at center, rgba(60, 159, 251, 0.25) 0%, rgba(72, 189, 236, 0.29) 100%)',
                filter: 'blur(190px)',
                right: '-5%',
                top: '35%',
                animation: 'float 8s ease-in-out infinite',
              }}
            />
          </div>

          <div className="max-w-4xl mx-auto relative z-10">
            <div className="inline-block mb-6">
              <div className="flex items-center space-x-2 bg-primary/10 rounded-full py-1.5 px-4 text-sm font-medium text-gray-400">
                <CodeSquare size={16} className="" />
                <span>UI blocks for vibe coders and veterans</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl/25 lg:text-[85px] font-extrabold tracking-tight">
              No more staring at a blank screen.
            </h1>
            <p className="mt-6 text-xl text-gray-400 max-w-2xl mx-auto">
              lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. lorem ipsum.
              lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. lorem ipsum.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                className="relative group px-6 py-2 h-11 bg-transparent hover:bg-transparent border-0"
              >
                <Link href="/signin" className="relative">
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/50 via-primary/80 to-primary/50 blur-sm opacity-0 group-hover:opacity-80 transition-opacity" />
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/50 via-primary/80 to-primary/50" />
                  <div className="absolute inset-[1px] rounded-lg bg-black" />
                  <span className="relative z-10 text-white group-hover:text-primary/90 transition-colors flex items-center justify-center">
                    Get Started Free
                    <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
                  </span>
                </Link>
              </Button>

            </div>
          </div>
        </section>
      </div>

      {/* section cards */}
      <section className='pb-40 flex flex-col gap-8 container mx-auto max-w-2xl'>

        <Card className='relative bg-transparent overflow-hidden hover:border-primary/50 transition-all duration-300'>
          <div className='-z-10 absolute inset-0 rounded-[inherit] blur-3xl
                bg-gradient-to-l from-background to-primary-gradient/50' />
          <CardContent className='flex flex-col w-full'>
            <h2 className='text-2xl font-bold'>UI Blocks</h2>
            <p className='text-muted-foreground'>Beautiful, responsive UI blocks for your projects</p>
            <Link className='place-self-end ' href="/blocks">
              <Button
                variant={'outline'}
                className='mt-4 text-primary/90 cursor-pointer'
              >Browse Blocks</Button>
            </Link>
          </CardContent>
        </Card>
        <Card className='relative bg-transparent overflow-hidden hover:border-primary/50 transition-all duration-300'>
          <div className='-z-10 absolute inset-0 rounded-[inherit] blur-3xl
                bg-gradient-to-r from-background via-primary-gradient/50 to-background' />
          <CardContent className='flex flex-col w-full'>
            <h2 className='text-2xl font-bold'>UI Blocks</h2>
            <p className='text-muted-foreground'>Beautiful, responsive UI blocks for your projects</p>
            <Button
              variant={'outline'}
              disabled
              className='mt-4 place-self-end text-primary/90 cursor-pointer'>Coming Soon 🚀</Button>
          </CardContent>
        </Card>
        <Card className='relative bg-transparent overflow-hidden hover:border-primary/50 transition-all duration-300'>
          <div className='-z-10 absolute inset-0 rounded-[inherit] blur-3xl
                bg-gradient-to-r from-background to-primary-gradient/50' />
          <CardContent className='flex flex-col w-full'>
            <h2 className='text-2xl font-bold'>UI Blocks</h2>
            <p className='text-muted-foreground'>Beautiful, responsive UI blocks for your projects</p>
            <Button
              variant={'outline'}
              disabled
              className='mt-4 place-self-end text-primary/90 cursor-pointer'>Coming Soon 🚀</Button>
          </CardContent>
        </Card>
      </section>
    </div>

  )
}

export default Page;