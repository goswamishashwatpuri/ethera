import React, { useState, useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { Maximize2, X } from 'lucide-react'
import { Button } from '../ui/button'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism'

interface Props {
  minWidth?: number
  maxWidth?: number
  defaultWidth?: number
  src: string
}

function ComponentPreview({
  minWidth = 300,
  maxWidth = 960,
  defaultWidth = 960,
  src
}: Props) {
  const [width, setWidth] = useState(defaultWidth)
  const [isMaximized, setIsMaximized] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)
  const startX = useRef(0)
  const startWidth = useRef(0)
  const [isResizing, setIsResizing] = useState(false)

  const cleanup = () => {
    isDragging.current = false
    setIsResizing(false)
    document.body.style.cursor = 'default'
    document.body.style.userSelect = 'auto'
    window.removeEventListener('mousemove', handleMouseMove)
    window.removeEventListener('mouseup', handleMouseUp)
    window.removeEventListener('mouseleave', cleanup)
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging.current) return
    try {
      const delta = e.clientX - startX.current
      const newWidth = Math.min(Math.max(startWidth.current + delta, minWidth), maxWidth)
      setWidth(newWidth)
    } catch (error) {
      console.error('Error during resize:', error)
      cleanup()
    }
  }

  const handleMouseUp = () => {
    cleanup()
  }

  useEffect(() => {
    return () => {
      cleanup()
    }
  }, [])

  const startResize = (e: React.MouseEvent) => {
    try {
      isDragging.current = true
      setIsResizing(true)
      startX.current = e.clientX
      startWidth.current = width
      document.body.style.cursor = 'col-resize'
      document.body.style.userSelect = 'none'

      window.addEventListener('mousemove', handleMouseMove)
      window.addEventListener('mouseup', handleMouseUp)
      window.addEventListener('mouseleave', cleanup)

      e.preventDefault()
    } catch (error) {
      console.error('Error starting resize:', error)
      cleanup()
    }
  }

  // Overlay/modal for maximized preview
  const MaximizedPreview = () => {
    useEffect(() => {
      window.addEventListener('keydown', handleEscape)
      return () => {
        window.removeEventListener('keydown', handleEscape)
      }
    }, [])
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMaximized(false)
      }
    }
    return (
      createPortal(
        <div className='fixed inset-0 z-[9999] flex items-center justify-center bg-black/60'

        >
          <div className="relative bg-background border-4 border-white rounded-xl w-[90vw] h-[90vh] flex flex-col overflow-hidden shadow-2xl">
            <button
              onClick={() => setIsMaximized(false)}
              className="absolute top-3 right-3 z-50 bg-white/80 hover:bg-white text-gray-900 rounded-full p-2 shadow transition"
              title="Exit Fullscreen"
            >
              <X size={20} />
            </button>
            <iframe src={src} className="w-full h-full rounded-b-xl" />
          </div>
        </div>,
        document.body
      )
    )
  }

  const CodeBlock = ({ codeString }: { codeString: string }) => {
    return (
      <SyntaxHighlighter language='typescript' style={solarizedlight}>
        {codeString}
      </SyntaxHighlighter>
    )
  }

  return (
    <>
      {isMaximized && <MaximizedPreview />}
      {/* Overlay for resizing */}
      {isResizing && (
        <div
          className="fixed inset-0 z-[9999] cursor-col-resize"
          style={{ background: 'transparent' }}
          onMouseMove={handleMouseMove as any}
          onMouseUp={handleMouseUp as any}
        />
      )}
      <div className="flex items-stretch justify-center">
        <div
          ref={containerRef}
          className="bg-background select-none relative"
          style={{ width: width }}
        >
          <div className='flex place-self-end gap-2'>
            <Button
              size="sm"
              onClick={() => setIsMaximized(true)}
              className="mb-2 right-1 flex place-self-end items-center text-xs bg-foreground/90 hover:bg-foreground/80"
              title="Fullscreen"
            >
              <Maximize2 size={18} />
            </Button>
          </div>

          <iframe
            id='preview-iframe'
            src={src}
            className='aspect-9/16 self-center max-h-[80vh] w-full overflow-y-scroll border-2 border-muted-foreground rounded-xl' />

        </div>

        {/* Resize Handle */}
        <div
          className="z-50 ml-2 w-1.5 cursor-col-resize flex items-center"
          onMouseDown={startResize}
        >
          <div className="h-24 w-full bg-gray-400 rounded-lg hover:bg-gray-300 transition-colors" />
        </div>

        <CodeBlock
          codeString={(`
'use client'
import ComponentPreview from '@/components/component-preview'
import ContentsSidebar from '@/components/contents-sidebar'
import { AppSidebar } from '@/components/sidebar/app-sidebar'
import React from 'react'
import Hero from '@/app/(landing)/page'

type Props = {}

function Blocks({ }: Props) {
  return (
    <div className='flex justify-between'>

      {/* Main Content */}
      <div className='w-full h-screen px-2'>
        <h1 className='text-3xl font-bold mb-2'>This is a component</h1>
        <p className='text-base text-muted-foreground'>This is the component descrtiption</p>

        {/* Code Preview Block */}
        <ComponentPreview src={\`http://localhost:3000/preview?component=Hero\`} />
      </div>

      {/* Contents Sidebar */}
      <div className='hidden xl:block w-1/6'>
        <ContentsSidebar />
      </div>

    </div>
  )
}

export default Blocks
          `)} />

      </div >
    </>
  )
}

export default ComponentPreview 