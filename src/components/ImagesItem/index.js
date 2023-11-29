import './index.css'

const ImagesItem = props => {
  const {imageDetails, onClickImage} = props
  const {thumbnailUrl} = imageDetails

  const onAddImage = () => {
    onClickImage(thumbnailUrl)
  }

  return (
    <li className="image-item-container">
      <button className="image-button" type="button" onClick={onAddImage}>
        <img src={thumbnailUrl} alt="thumbnail" className="item-image" />
      </button>
    </li>
  )
}

export default ImagesItem
