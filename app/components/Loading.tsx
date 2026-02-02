'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Loading() {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const visited = sessionStorage.getItem('visited')
    if (visited) {
      setShow(false)
    } else {
      const timer = setTimeout(() => {
        setShow(false)
        sessionStorage.setItem('visited', 'true')
      }, 2000)

      return () => clearTimeout(timer)
    }
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-cyan-900"
        >
          <div className="text-center">
            {/* Handball Rolling Animation */}
            <motion.div
              animate={{
                x: [-100, 100, -100],
                rotate: [0, 720, 1440],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="relative w-20 h-20 mx-auto mb-8"
            >
              {/* Handball with realistic texture pattern */}
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-300 via-cyan-400 to-blue-500 shadow-2xl relative overflow-hidden">
                {/* Handball seam lines */}
                <div className="absolute inset-0">
                  <svg viewBox="0 0 80 80" className="w-full h-full">
                    {/* Vertical curved line */}
                    <path
                      d="M 40 0 Q 50 40 40 80"
                      stroke="rgba(255,255,255,0.4)"
                      strokeWidth="2"
                      fill="none"
                    />
                    {/* Horizontal curved line */}
                    <path
                      d="M 0 40 Q 40 30 80 40"
                      stroke="rgba(255,255,255,0.4)"
                      strokeWidth="2"
                      fill="none"
                    />
                    {/* Diagonal curved line */}
                    <path
                      d="M 20 10 Q 40 40 60 70"
                      stroke="rgba(255,255,255,0.3)"
                      strokeWidth="1.5"
                      fill="none"
                    />
                  </svg>
                </div>
                {/* Highlight for 3D effect */}
                <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-white/30 blur-sm" />
              </div>
              {/* Shadow */}
              <motion.div
                animate={{
                  scaleX: [0.8, 1.2, 0.8],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-4 bg-black/40 rounded-full blur-md"
              />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4"
            >
              HISAME-KAI
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-cyan-100 text-sm"
            >
              氷雨会
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
