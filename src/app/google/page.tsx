// pages/index.tsx
import React from 'react';
import GoogleMeetIntegration from '@/components/ui/googlem';
import GoogleMee from '@/components/ui/googlem';
import CalendarPage from '@/components/ui/calender';

export default function Meet() {
    return (
        <div>
          <title>Google Meet Integration</title>
          <meta name="description" content="Google Meet integration example" />
          <link rel="icon" href="/favicon.ico" />

        <main>
          <CalendarPage />
        </main>
      </div>
    );
}
