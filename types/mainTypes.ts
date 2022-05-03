type EventScheduleTypes = {
  beginDate: string;
  endDate: string;
  pageBeginDate: string;
  pageEndDate: string;
  boostBeginDate: string;
  boostEndDate: string;
};

export type getMLTDEventTypes = {
  id: number;
  name: string;
  type: string;
  schedule: EventScheduleTypes;
};

export type RankingProps = {
  eventId: number;
};

export type BorderPointTypes = {
  eventPoint: pointTypes;
  highScore: pointTypes;
  loungePoint: pointTypes;
};

type pointTypes = {
  scores: scoresType[];
  summaryTime: string;
  count: number;
};

type scoresType = {
  rank: number;
  score: number;
};
