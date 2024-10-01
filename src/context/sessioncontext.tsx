"use client";
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { collection, addDoc, onSnapshot, query, DocumentData } from "firebase/firestore";
import { db } from '@/firebase';

interface Session {
  id: string;
  name: string;
  start: Date;
  end: Date;
  cancelled: boolean;
}

interface SessionContextType {
  sessions: Session[];
  addSession: (session: Omit<Session, 'id'>) => Promise<void>;
}

const SessionContext = createContext<SessionContextType | undefined>(undefined);

export const useSessions = (): SessionContextType => {
  const context = useContext(SessionContext);
  if (!context) {
    throw new Error("useSessions must be used within a SessionProvider");
  }
  return context;
};

export const SessionProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [sessions, setSessions] = useState<Session[]>([]);

  useEffect(() => {
    const q = query(collection(db, "sessions"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const sessionsData: Session[] = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data() as DocumentData;
        sessionsData.push({
          id: doc.id,
          name: data.name,
          start: data.start.toDate(),
          end: data.end.toDate(),
          cancelled: data.cancelled,
        });
      });
      setSessions(sessionsData);
    });

    return () => unsubscribe();
  }, []);

  const addSession = async (newSession: Omit<Session, 'id'>) => {
    await addDoc(collection(db, "sessions"), newSession);
  };

  return (
    <SessionContext.Provider value={{ sessions, addSession }}>
      {children}
    </SessionContext.Provider>
  );
};
