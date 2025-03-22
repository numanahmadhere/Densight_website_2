export const preloadFont = (fontUrl: string) => {
  if (typeof window !== "undefined") {
    const link = document.createElement("link")
    link.href = fontUrl
    link.rel = "preload"
    link.as = "font"
    link.type = "font/woff2"
    link.crossOrigin = "anonymous"
    document.head.appendChild(link)
  }
}

