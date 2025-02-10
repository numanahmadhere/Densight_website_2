export const getResponsiveImageSizes = (defaultSize: number) => {
  return {
    small: Math.round(defaultSize * 0.5), // Mobile
    medium: Math.round(defaultSize * 0.75), // Tablet
    large: defaultSize, // Desktop
    xl: Math.round(defaultSize * 1.25), // Large Desktop
  }
}

export const getImageSizesString = (sizes: { small: number; medium: number; large: number; xl: number }) => {
  return `(max-width: 640px) ${sizes.small}px, (max-width: 768px) ${sizes.medium}px, (max-width: 1024px) ${sizes.large}px, ${sizes.xl}px`
}

