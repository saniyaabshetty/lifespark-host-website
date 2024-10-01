"use client";
// components/ScheduleGantt.tsx
import React, { useState } from 'react';
import Timeline from 'react-gantt-timeline';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

type Session = {
  id: number;
  name: string;
  start: Date;
  end: Date;
  cancelled?: boolean;
};

const ScheduleGantt = () => {
  const [sessions, setSessions] = useState<Session[]>([]);
  const [newSession, setNewSession] = useState<Partial<Session>>({});

  const addSession = () => {
    if (newSession.name && newSession.start && newSession.end) {
      setSessions([...sessions, { ...newSession, id: Date.now() } as Session]);
      setNewSession({});
    }
  };

  const cancelSession = (id: number) => {
    setSessions(sessions.map(session => session.id === id ? { ...session, cancelled: true } : session));
  };

  const convertToTimelineItems = (sessions: Session[]) => {
    return sessions.map(session => ({
      id: session.id.toString(),
      start: session.start,
      end: session.end,
      name: session.name,
      color: session.cancelled ? 'red' : 'blue'
    }));
  };

  return (
    <div>
      <h2>Schedule Gantt Chart</h2>
      <div>
        <input
          type="text"
          placeholder="Session Name"
          value={newSession.name || ''}
          onChange={e => setNewSession({ ...newSession, name: e.target.value })}
        />
        <DatePicker
          selected={newSession.start}
          onChange={date => setNewSession({ ...newSession, start: date })}
          placeholderText="Start Date"
          showTimeSelect
          dateFormat="Pp"
        />
        <DatePicker
          selected={newSession.end}
          onChange={date => setNewSession({ ...newSession, end: date })}
          placeholderText="End Date"
          showTimeSelect
          dateFormat="Pp"
        />
        <button onClick={addSession}>Add Session</button>
      </div>
      <Timeline
        data={convertToTimelineItems(sessions)}
        config={{
          header: {
            month: {
              dateFormat: 'MMMM YYYY',
              style: { backgroundColor: 'lightgrey', color: 'black' }
            },
            dayOfWeek: {
              style: { backgroundColor: 'lightgrey', color: 'black' }
            },
            time: {
              style: { backgroundColor: 'lightgrey', color: 'black' }
            }
          }
        }}
      />
      <div>
        {sessions.map(session => (
          <div key={session.id}>
            <span>{session.name} ({session.start.toDateString()} - {session.end.toDateString()})</span>
            {!session.cancelled && <button onClick={() => cancelSession(session.id)}>Cancel</button>}
            {session.cancelled && <span> (Cancelled)</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScheduleGantt;
