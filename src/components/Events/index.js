import {Component} from 'react'
import EventItem from '../EventItem'
import './index.css'

const eventsList = [
  {
    id: 'f9bb2373-b80e-46b8-8219-f07217b9f3ce',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/event-canada-dance-festival-img.png',
    name: 'Canada Dance Festival',
    location: 'Canada, America',
    registrationStatus: 'YET_TO_REGISTER',
  },
  {
    id: 'c0040497-e9cb-4873-baa9-ef5b994abfff',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/events-kathakali-img.png',
    name: 'Puthanalkkal Kalavela',
    location: 'Karnataka, India',
    registrationStatus: 'REGISTERED',
  },
  {
    id: '0037d5e4-4005-4030-987b-ce41b691b92a',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/events-kuchipudi-img.png',
    name: 'Nithyopahara',
    location: 'Kerala, India',
    registrationStatus: 'REGISTRATIONS_CLOSED',
  },
  {
    id: 'c9ff08cb-610c-4382-9939-78e5e50a72b2',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/events-bharatanatyam-img.png',
    name: 'Shivam',
    location: 'Andhra Pradesh, India',
    registrationStatus: 'YET_TO_REGISTER',
  },
  {
    id: 'd1153723-5b6e-4628-9a1a-ccd8f84f1273',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/events-kolatam-img.png',
    name: 'Janapada Kolatam',
    location: 'Tamil Nadu, India',
    registrationStatus: 'REGISTERED',
  },
  {
    id: '7d6ec013-d0ae-4d84-b776-14b733a9174f',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/event-colonial-fest-img.png',
    name: 'Colonial Fest',
    location: 'Washington, America',
    registrationStatus: 'REGISTRATIONS_CLOSED',
  },
]

const eventsConstants = {
  initial: 'INITIAL',
  register: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  closed: 'REGISTRATIONS_CLOSED',
}

class Events extends Component {
  state = {
    initialEventsList: eventsList,
    registrationStatus: eventsConstants.initial,
  }

  onClickEvent = (id, registrationStatus) => {
    const registrationStatus1 = eventsList.filter(
      event => registrationStatus === event.registrationStatus,
    )
    this.setState({
      registrationStatus: registrationStatus1[0].registrationStatus,
    })
  }

  renderRegisterEvent = () => (
    <div className="result-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="result-image"
      />
      <p className="event-description">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall today in love with this
        beautiful art form.
      </p>
      <button type="button" className="register-btn">
        Register Here
      </button>
    </div>
  )

  renderRegisteredEvent = () => (
    <div className="result-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="result-image"
      />
      <h1 className="registration-heading">
        You have Already Registered for the event
      </h1>
    </div>
  )

  renderClosedEvent = () => (
    <div className="result-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="result-image"
      />
      <h1 className="registration-heading">Registrations are Closed Now!</h1>
      <p className="event-description">
        Stay tuned. We will reopen the registrations soon!
      </p>
    </div>
  )

  render() {
    const {initialEventsList, registrationStatus} = this.state

    let result = null

    switch (registrationStatus) {
      case eventsConstants.register:
        result = this.renderRegisterEvent()
        break
      case eventsConstants.registered:
        result = this.renderRegisteredEvent()
        break
      case eventsConstants.closed:
        result = this.renderClosedEvent()
        break
      default:
        result = (
          <div className="empty-registration-container">
            <p className="empty-registration">
              Click on an event, to view its registration details
            </p>
          </div>
        )
    }

    return (
      <div className="events-container">
        <div className="events-list-container">
          <h1 className="event-heading">Events</h1>
          <ul className="events-list">
            {initialEventsList.map(eventItem => (
              <EventItem
                eventItem={eventItem}
                key={eventItem.id}
                onClickEvent={this.onClickEvent}
              />
            ))}
          </ul>
        </div>
        {result}
      </div>
    )
  }
}

export default Events
