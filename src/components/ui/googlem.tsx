// components/GoogleMeetIntegration.tsx
import React, { useEffect } from 'react';
import { gapi } from 'gapi-script';

const CLIENT_ID = 'YOUR_GOOGLE_CLIENT_ID'; // Replace with your actual Client ID
const API_KEY = 'YOUR_GOOGLE_API_KEY'; // Replace with your actual API Key
const SCOPES = 'https://www.googleapis.com/auth/calendar.events';

const GoogleMeetIntegration: React.FC = () => {
    useEffect(() => {
        const initClient = () => {
            gapi.client.init({
                apiKey: API_KEY,
                clientId: CLIENT_ID,
                discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"],
                scope: SCOPES,
            }).then(() => {
                gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
                updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
            }).catch((error) => {
                console.error('Error initializing Google API client:', error);
            });
        };

        gapi.load('client:auth2', initClient);
    }, []);

    const updateSigninStatus = (isSignedIn: boolean) => {
        if (isSignedIn) {
            createMeet();
        } else {
            handleAuthClick();
        }
    };

    const handleAuthClick = () => {
        gapi.auth2.getAuthInstance().signIn();
    };

    const createMeet = () => {
        const event = {
            summary: 'Google Meet Meeting',
            description: 'A Google Meet meeting created from the app',
            start: {
                dateTime: '2024-08-04T09:00:00-07:00',
                timeZone: 'America/Los_Angeles',
            },
            end: {
                dateTime: '2024-08-04T10:00:00-07:00',
                timeZone: 'America/Los_Angeles',
            },
            conferenceData: {
                createRequest: {
                    requestId: 'some-random-string',
                    conferenceSolutionKey: {
                        type: 'hangoutsMeet'
                    },
                },
            },
            attendees: [{ email: 'attendee@example.com' }],
            reminders: {
                useDefault: false,
                overrides: [
                    { method: 'email', minutes: 24 * 60 },
                    { method: 'popup', minutes: 10 },
                ],
            },
        };

        const request = gapi.client.calendar.events.insert({
            calendarId: 'primary',
            resource: event,
            conferenceDataVersion: 1,
        });

        request.execute((event) => {
            console.log('Event created: ', event.htmlLink);
            if (event.conferenceData && event.conferenceData.entryPoints) {
                const meetLink = event.conferenceData.entryPoints[0].uri;
                window.open(meetLink, '_blank');
            }
        });
    };

    return (
        <div>
            <h1>Google Meet Integration</h1>
            <button onClick={handleAuthClick}>Authorize & Create Meet</button>
        </div>
    );
};

export default GoogleMeetIntegration;
