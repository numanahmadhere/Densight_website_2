"use client"
import Image, { type ImageProps } from "next/image"
import type React from "react"

import { useState } from "react"

interface OptimizedImageProps extends Omit<ImageProps, "src"> {
  src: string
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({ src, alt, ...props }) => {
  const [imgSrc, setImgSrc] = useState(src)

  return (
    <Image
      {...props}
      src={imgSrc || "/placeholder.svg"}
      alt={alt}
      placeholder="blur"
      blurDataURL={`data:image/svg+xml;base64,${btoa(
        '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"><rect width="100%" height="100%" fill="#f0f0f0"/></svg>',
      )}`}
      onError={() => {
        setImgSrc("/placeholder.svg")
      }}
    />
  )
}

export default OptimizedImage

