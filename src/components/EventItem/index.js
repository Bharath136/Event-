import './index.css'

const EventItem = props => {
  const {eventItem, onClickEvent} = props
  const {id, imageUrl, name, location, registrationStatus} = eventItem

  const onEvent = () => {
    onClickEvent(id, registrationStatus)
  }

  return (
    <li className="event-item">
      <button type="button" className="event-btn" onClick={onEvent}>
        <img src={imageUrl} className="event-img" alt="event" />
      </button>
      <p className="event-name">{name}</p>
      <p className="event-location">{location}</p>
    </li>
  )
}

export default EventItem
