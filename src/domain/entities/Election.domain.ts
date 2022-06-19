import { randomUUID } from 'crypto'
import { ElectionStatusEnum } from './ElectionStatusEnum.domain';
import { addDaystoDate } from './utils/date-plus-five-days';

type ElectionData = {
  electionStatus?: ElectionStatusEnum
  electionTitleParam: string
  startDateElectionParam?: Date
  endDateElectionParam?: Date
}

export default class Election {
  id: string;
  status: ElectionStatusEnum;
  title: string
  start: Date;
  end: Date;
  createdAt: Date;

  constructor( electionDataParams: ElectionData ) {
    this.id = randomUUID();
    this.status = electionDataParams.electionStatus ?? ElectionStatusEnum.CREATED;
    this.title = electionDataParams.electionTitleParam;
    this.start = electionDataParams.startDateElectionParam ?? new Date(Date.now());
    this.end = electionDataParams.endDateElectionParam ?? addDaystoDate(5, new Date());
    this.createdAt = new Date(Date.now());
  }
}