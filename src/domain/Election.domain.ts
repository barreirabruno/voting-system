import { randomUUID } from 'crypto'
import { ElectionStatusEnum } from './ElectionStatusEnum.domain';

export default class Election {
  id: string;
  status: string;
  title: string
  start: Date;
  end: Date;
  createdAt: Date;

  constructor( electionStatus: ElectionStatusEnum, electionTitleParam: string, startDateElectionParam: Date, endDateElectionParam: Date) {
    this.id = randomUUID();
    this.status = ElectionStatusEnum.CREATED ?? electionStatus;
    this.title = electionTitleParam;
    this.start = startDateElectionParam;
    this.end = endDateElectionParam;
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