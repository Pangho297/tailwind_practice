import { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import axios from 'axios';
import { DateTime } from 'luxon';

import Ranking from './Ranking';

import { getMLTDEventTypes } from 'types/mainTypes';

const Main: NextPage = () => {
  const [latestEvent, setLatestEvent] = useState<getMLTDEventTypes>();
  const [latestEventId, setLatestEventId] = useState<number>(0);

  const getMLTDEvent = async () => {
    try {
      const res: { data: getMLTDEventTypes[] } = await axios.get(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/events`, {
        params: {
          at: DateTime.now().toISO(),
        },
      });

      setLatestEvent(res.data[0]);
      setLatestEventId(res.data[0].id);
    } catch (error) {
      console.error();
    }
  };

  useEffect(() => {
    getMLTDEvent();
  }, []);

  return (
    <section className="w-full flex justify-center">
      <article className="w-[720px] flex flex-col justify-center gap-5">
        <header className="w-full h-10 flex items-center justify-center rounded-md bg-[#114c73] text-white font-bold">
          {latestEvent?.name}
        </header>
        {latestEventId && <Ranking eventId={latestEventId} />}
        <div className="w-full h-16 flex items-center justify-center gap-5 rounded-md shadow-md bg-[#114c73] text-white">
          <div className="flex flex-col justify-center">
            <div>{DateTime.fromISO(latestEvent?.schedule.beginDate ?? '').toFormat('yyyy-MM-dd HH:mm')}</div>
            <div className="text-[12px] flex justify-center">
              ({DateTime.fromISO(latestEvent?.schedule.boostBeginDate ?? '').toFormat('yyyy-MM-dd HH:mm')})
            </div>
          </div>
          <div className="text-[30px] text-bold"> ~ </div>
          <div>{DateTime.fromISO(latestEvent?.schedule.endDate ?? '').toFormat('yyyy-MM-dd HH:mm')}</div>
        </div>
      </article>
    </section>
  );
};

export default Main;
