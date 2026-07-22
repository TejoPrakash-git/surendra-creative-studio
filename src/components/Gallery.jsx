import { useState } from 'react'
import './Gallery.css'

const GALLERY_ITEMS = [
  { id: 1, label: 'YouTube Thumbnail', image: '/images/portfolio1.jpg', category: 'Thumbnails' },
  { id: 2, label: 'Movie Poster', image: '/images/portfolio2.jpg', category: 'Posters' },
  { id: 3, label: 'Movie Poster', image: '/images/portfolio3.jpg', category: 'Posters' },
  { id: 4, label: 'Short Film Poster', image: '/images/portfolio4.jpg', category: 'Posters' },
  { id: 5, label: 'Movie Poster', image: '/images/portfolio5.jpg', category: 'Posters' },
  { id: 6, label: 'YouTube Thumbnail', image: '/images/portfolio6.jpg', category: 'Thumbnails' },
  { id: 7, label: 'Short Film Poster', image: '/images/portfolio7.jpeg', category: 'Posters' },
  { id: 8, label: 'YouTube Thumbnail', image: '/images/portfolio8.jpeg', category: 'Thumbnails' },
]

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const categories = ['All', 'Posters', 'Thumbnails']

  const filteredItems = activeFilter === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeFilter)

  const openLightbox = (index) => {
    setLightboxIndex(index)
  }

  const closeLightbox = () => {
    setLightboxIndex(null)
  }

  const navigateLightbox = (direction, e) => {
    e.stopPropagation()
    if (lightboxIndex === null) return
    let newIndex = lightboxIndex + direction
    if (newIndex < 0) {
      newIndex = filteredItems.length - 1
    } else if (newIndex >= filteredItems.length) {
      newIndex = 0
    }
    setLightboxIndex(newIndex)
  }

  return (
    <section className="section gallery-page">
      <div className="container">
        <div className="gallery-page__header">
          <div>
            <p className="eyebrow">Creative Studio Showcase</p>
            <h1 className="section-title">Media Gallery</h1>
          </div>
          <a href="#" className="btn btn-ghost gallery-page__back-btn">
            &larr; Back to Home
          </a>
        </div>

        {/* Filter Controls */}
        <div className="gallery-page__filters">
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${activeFilter === cat ? 'filter-btn--active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="gallery-page__grid">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              className="gallery-page__card"
              onClick={() => openLightbox(idx)}
            >
              <div className="gallery-page__image-wrapper">
                <img src={item.image} alt={item.label} loading="lazy" />
                <div className="gallery-page__hover-overlay">
                  <span className="gallery-page__zoom-icon">&#128269;</span>
                  <p className="gallery-page__card-category">{item.category}</p>
                </div>
              </div>
              <div className="gallery-page__card-info">
                <h3>{item.label}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox__close" onClick={closeLightbox} aria-label="Close lightbox">&times;</button>
          
          <button
            className="lightbox__nav lightbox__nav--prev"
            onClick={(e) => navigateLightbox(-1, e)}
            aria-label="Previous image"
          >
            &#10094;
          </button>
          
          <div className="lightbox__content" onClick={(e) => e.stopPropagation()}>
            <img
              src={filteredItems[lightboxIndex].image}
              alt={filteredItems[lightboxIndex].label}
              className="lightbox__image"
            />
            <div className="lightbox__caption">
              <h3>{filteredItems[lightboxIndex].label}</h3>
              <p>{filteredItems[lightboxIndex].category}</p>
            </div>
          </div>

          <button
            className="lightbox__nav lightbox__nav--next"
            onClick={(e) => navigateLightbox(1, e)}
            aria-label="Next image"
          >
            &#10095;
          </button>
        </div>
      )}
    </section>
  )
}
