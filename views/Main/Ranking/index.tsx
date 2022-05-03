import { useEffect, useState } from 'react';
import { NextPage } from 'next';
import axios from 'axios';
import formatComma from 'util/formatComma';

import { BorderPointTypes, RankingProps } from 'types/mainTypes';
import { DateTime } from 'luxon';

const Ranking: NextPage<RankingProps> = ({ eventId }) => {
  const [border, setBorder] = useState<BorderPointTypes>();
  const getEventBorder = async () => {
    try {
      const res: { data: BorderPointTypes } = await axios.get(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/events/${eventId}/rankings/borderPoints`,
      );

      console.log(res.data);

      setBorder(res.data);
    } catch (error) {
      console.error();
    }
  };

  useEffect(() => {
    getEventBorder();
  }, []);

  return (
    <section className="w-full flex flex-col gap-5">
      <header className="h-[60px] text-2xl flex justify-center items-center rounded-md shadow bg-[#ffc20b]">
        갱신 시간 {DateTime.fromISO(border?.eventPoint.summaryTime ?? '').toFormat('yyyy-MM-dd HH:mm')}
      </header>
      <article className="w-full grid grid-cols-3 gap-3">
        <div className="border rounded-md p-3 shadow-sm">
          <div>이벤트 pt 랭킹</div>
          {border?.eventPoint.scores.map(item => (
            <div className="h-[30px] flex justify-between">
              <div>{formatComma(item.rank)}위</div>
              <div>{formatComma(item.score)} pt</div>
            </div>
          ))}
        </div>
        <div className="border rounded-md p-3 shadow-sm">
          <div>하이스코어 랭킹</div>
          {border?.highScore.scores.map(item => (
            <div className="h-[30px] flex justify-between">
              <div>{formatComma(item.rank)}위</div>
              <div>{formatComma(item.score)}</div>
            </div>
          ))}
        </div>
        <div className="border rounded-md p-3 shadow-sm">
          <div>라운지 랭킹</div>
          {border?.loungePoint.scores.map(item => (
            <div className="h-[30px] flex justify-between">
              <div>{formatComma(item.rank)}위</div>
              <div>{formatComma(item.score)} pt</div>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
};

export default Ranking;
