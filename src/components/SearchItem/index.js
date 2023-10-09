import './index.css'

const SearchItem = props => {
  const {item, deleteLogo} = props

  const {id, timeAccessed, logoUrl, title, domainUrl} = item
  const onChange2 = () => {
    deleteLogo(id)
  }

  return (
    <li className="li1">
      <div className="one1">
        <p className="para">{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" className="img3" />
        <p className="heading">{title}</p>
        <p className="para">{domainUrl}</p>
      </div>
      <div className="two1">
        <button data-testid="delete" type="button" onClick={onChange2}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            className="img4"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}
export default SearchItem
