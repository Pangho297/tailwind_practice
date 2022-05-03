import axios from 'axios';
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';

interface EventScheduleTypes {
  beginDate: string;
  endDate: string;
  pageBeginDate: string;
  pageEndDate: string;
  boostBeginDate: string;
  boostEndDate: string;
}

interface getMLTDEventTypes {
  id: number;
  name: string;
  type: string;
  schedule: EventScheduleTypes;
}

const Start: NextPage = () => {
  const API_ENDPOINT = 'https://api.matsurihi.me/mltd/v1';
  const [latestEvent, setLatestEvent] = useState<getMLTDEventTypes>();

  const getMLTDEvent = async () => {
    try {
      const res = await axios.get(`${API_ENDPOINT}/events`);

      setLatestEvent(res.data[res.data.length - 1]);
    } catch (error) {
      console.error();
    }
  };

  useEffect(() => {
    getMLTDEvent();
  }, []);

  console.log(latestEvent);

  return <div className="bg-red-600 w-full text-orange-400">Hello World!</div>;
};

export default Start;
