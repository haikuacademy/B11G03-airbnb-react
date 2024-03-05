function Gallery(props) {
  const images = props.images
  return (
    <div className="grid grid-cols-2 gap-8">
      <div>
        <img src={images[0]} alt="photo1" className="rounded-lg h-full" />
      </div>
      <div className="grid grid-cols-3 gap-3">
        {images.map((image, index) => (
          <div>
            <img src={image} alt={'photo ' + index} className="rounded-lg" />
          </div>
        ))}
      </div>
    </div>
  )
}
export default Gallery
