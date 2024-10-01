// pages/index.tsx
import Head from 'next/head';
import ScheduleGantt from '@/components/ui/ganttt';
import { SessionProvider } from '@/context/sessioncontext';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Schedule Gantt Chart</title>
        <meta name="description" content="Gantt chart for scheduling sessions" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <SessionProvider>
        <ScheduleGantt />
        </SessionProvider>
      </main>
    </div>
  );
};

export default Home;
