'use client'

import { useState } from 'react'

interface GalleryProps {
  images: Array<{
    url: string;
    imgix_url: string;
  }>;
}

export default function Gallery({ images }: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  if (!images || images.length === 0) {
    return null
  }

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className="relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer group"
          >
            <img
              src={`${image.imgix_url}?w=600&h=600&fit=crop&auto=format,compress`}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
              <span className="text-white text-4xl opacity-0 group-hover:opacity-100 transition-opacity">
                🔍
              </span>
            </div>
          </button>
        ))}
      </div>

      {selectedImage !== null && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-4xl hover:text-christmas-gold transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
          
          <button
            className="absolute left-4 text-white text-4xl hover:text-christmas-gold transition-colors"
            onClick={(e) => {
              e.stopPropagation()
              setSelectedImage((prev) => 
                prev === null ? null : prev === 0 ? images.length - 1 : prev - 1
              )
            }}
          >
            ←
          </button>
          
          <img
            src={`${images[selectedImage].imgix_url}?w=1600&h=1200&fit=max&auto=format,compress`}
            alt={`Gallery image ${selectedImage + 1}`}
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          
          <button
            className="absolute right-4 text-white text-4xl hover:text-christmas-gold transition-colors"
            onClick={(e) => {
              e.stopPropagation()
              setSelectedImage((prev) => 
                prev === null ? null : prev === images.length - 1 ? 0 : prev + 1
              )
            }}
          >
            →
          </button>
        </div>
      )}
    </>
  )
}