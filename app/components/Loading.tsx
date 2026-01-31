'use client'

import { useEffect, useState } from 'react'

export default function Loading() {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const visited = sessionStorage.getItem('visited')
    if (visited) {
      setShow(false)
    } else {
      setTimeout(() => {
        setShow(false)
        sessionStorage.setItem('visited', 'true')
      }, 3000)
    }
  }, [])

  if (!show) return null

  return (
    <div id="loading">
      <div id="loading_animation">
        <div className="loading_txt">Loading...</div>
      </div>
    </div>
  )
}
