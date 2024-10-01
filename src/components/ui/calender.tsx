"use client";
import { useEffect, useState } from 'react';
import axios from 'axios';

const CalendarPage: React.FC = () => {
  const [events, setEvents] = useState<any[]>([]);
  const [authUrl, setAuthUrl] = useState<string>('');
  const [newEvent, setNewEvent] = useState({
    summary: '',
    start: '',
    end: '',
  });
  const calendarEmbedUrl = 'https://calendar.google.com/calendar/embed?src=primary'; // Embed URL

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('/api/google-calendar');
        if (response.data.url) {
          setAuthUrl(response.data.url); // Set auth URL if user is not authenticated
        } else {
          setEvents(response.data.events); // Fetch and set events
        }
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  // Function to handle adding a new event
  const handleAddEvent = async () => {
    try {
      await axios.post('/api/google-calendar', {
        summary: newEvent.summary,
        start: new Date(newEvent.start).toISOString(),
        end: new Date(newEvent.end).toISOString(),
      });
      alert('Event added to Google Calendar!');
      
      // Re-fetch events to show the updated calendar
      await fetchEvents();  // Call the function to get updated events
    } catch (error) {
      console.error('Error adding event:', error);
    }
  };
  

  return (
    <div>
      <h1>My Google Calendar</h1>
      {!authUrl ? (
        <div>
          <ul>
            {events.length > 0 ? (
              events.map((event) => (
                <li key={event.id}>
                  {event.summary} - {new Date(event.start.dateTime || event.start.date).toLocaleString()}
                </li>
              ))
            ) : (
              <p>No events found</p>
            )}
          </ul>
          
          {/* Embed Google Calendar */}
          <iframe
            src={calendarEmbedUrl}
            style={{ border: 0 }}
            width="1200"
            height="1000"
            frameBorder="0"
            scrolling="no"
          ></iframe>
          
          {/* Form to add new event */}
          <div style={{ marginTop: '20px' }}>
            <h2>Add New Event</h2>
            <form onSubmit={(e) => { e.preventDefault(); handleAddEvent(); }}>
              <input
                type="text"
                placeholder="Event Title"
                value={newEvent.summary}
                onChange={(e) => setNewEvent({ ...newEvent, summary: e.target.value })}
              />
              <input
                type="datetime-local"
                placeholder="Start Time"
                value={newEvent.start}
                onChange={(e) => setNewEvent({ ...newEvent, start: e.target.value })}
              />
              <input
                type="datetime-local"
                placeholder="End Time"
                value={newEvent.end}
                onChange={(e) => setNewEvent({ ...newEvent, end: e.target.value })}
              />
              <button type="submit">Add Event</button>
            </form>
          </div>
        </div>
      ) : (
        <div>
          <p>Please authorize access to your Google Calendar:</p>
          <a href={authUrl}>Authorize</a>
        </div>
      )}
    </div>
  );
};

export default CalendarPage;
