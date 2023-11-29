import './index.css'

const TabsItem = props => {
  const {tabDetails, onSelectCategory, category} = props
  const {displayText, tabId} = tabDetails

  const addClassName = category === tabId ? 'highlight-text' : ''

  const onShowCategory = () => {
    onSelectCategory(tabId)
  }

  return (
    <li className="tab-item-container">
      <button
        className={`category-button ${addClassName}`}
        type="button"
        onClick={onShowCategory}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabsItem
