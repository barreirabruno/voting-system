import { randomUUID } from 'crypto'
import { ElectionStatusEnum } from './ElectionStatusEnum.domain';

type ElectionData = {
  electionStatus?: ElectionStatusEnum
  electionTitleParam: string
  startDateElectionParam: Date
  endDateElectionParam: Date
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
    this.status = ElectionStatusEnum.CREATED ?? electionDataParams.electionStatus;
    this.title = electionDataParams.electionTitleParam;
    this.start = electionDataParams.startDateElectionParam;
    this.end = electionDataParams.endDateElectionParam;
    this.createdAt = new Date(Date.now());
  } 

  getId(): string {
    return this.id
  }

  getStatus(): string {
    return this.status
  }

  setStatus(status: ElectionStatusEnum): void {
    this.status = status
  }

  getTitle(): string {
    return this.title
  }

  setTitle(title: string): void {
    this.title = title
  }

  getStart(): Date {
    return this.start
  }

  setStart(startDate: Date): void {
    this.start = startDate
  }

  getEnd(): Date {
    return this.end
  }

  setEnd(endDate: Date): void {
    this.end = endDate
  }
}