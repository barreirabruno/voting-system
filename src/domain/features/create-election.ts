import { ElectionStatusEnum } from "../entities"

export interface CreateElectionInterface {
  perform: (params: CreateElection.Input) => Promise<CreateElection.Output>
}

export namespace CreateElection {
  export type Input = {
    electionStatus: ElectionStatusEnum
    electionTitleParam: string
    startDateElectionParam: Date
    endDateElectionParam: Date
  }
  export type Output = {
    id: string,
    status: ElectionStatusEnum,
    title: string,
    start: Date,
    end: Date,
    createdAt: Date
  }
}