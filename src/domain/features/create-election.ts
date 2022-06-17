export interface CreateElectionInterface {
  perform: (params: CreateElection.Input) => Promise<CreateElection.Output>
}

export namespace CreateElection {
  export type Input = {
    status: boolean,
    title: string,
    start: Date,
    end: Date
  }
  export type Output = {
     electionId: string
  }
}