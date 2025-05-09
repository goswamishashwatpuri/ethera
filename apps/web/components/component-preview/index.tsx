'use client'
import React, { useState, useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { Maximize2, X, Monitor, Tablet, Smartphone, TabletSmartphone } from 'lucide-react'
import { Button } from '../ui/button'

interface Props {
  src: string
}

function ComponentPreview({ src }: Props) {
  const [width, setWidth] = useState(99)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMaximized, setIsMaximized] = useState(false)

  // Viewport presets in percentages
  const viewports = {
    desktop: 99, // Full width
    tablet: 75,   // 75% of container
    mobile: 35    // 35% of container
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
        <div className='fixed inset-0 z-[9999] flex items-center justify-center bg-black/60'>
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

  return (
    <>
      {isMaximized && <MaximizedPreview />}
      <div className="flex items-stretch w-full">
        <div
          ref={containerRef}
          className="mx-auto items-center bg-background select-none relative min-w-[320px] overflow-hidden rounded-xl border-2 border-secondary"
          style={{
            width: `${width}%`,
            maxWidth: '99%'
          }}
        >
          {/* Viewport buttons div */}
          <div className='w-full bg-secondary/30 flex justify-center gap-1 items-center'>
            <Button
              size="sm"
              variant="ghost"
              onClick={() => setWidth(viewports.mobile)}
              className="flex items-center text-xs hover:bg-muted/60"
              title="Mobile View (35%)"
            >
              <Smartphone size={16} />
            </Button>
            <Button
              size="sm"
              variant="ghost"
              onClick={() => setWidth(viewports.tablet)}
              className="flex items-center text-xs hover:bg-muted/60"
              title="Tablet View (75%)"
            >
              <TabletSmartphone size={16} />
            </Button>
            <Button
              size="sm"
              variant="ghost"
              onClick={() => setWidth(viewports.desktop)}
              className="flex items-center text-xs hover:bg-muted/60"
              title="Desktop View (95%)"
            >
              <Monitor size={16} />
            </Button>
            <Button
              size="sm"
              variant="ghost"
              onClick={() => setIsMaximized(true)}
              className="text-primary flex items-center text-xs hover:bg-primary/30!"
              title="Fullscreen"
            >
              <Maximize2 size={16} />
            </Button>
          </div>
          <iframe
            id='preview-iframe'
            src={src}
            className='aspect-9/16 max-h-[80vh] w-full overflow-y-scroll rounded-b-lg' />
        </div>
      </div>
    </>
  )
}

export default ComponentPreview 