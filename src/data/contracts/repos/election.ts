export interface SaveNewElectionRepository {
  save: (input: SaveNewElectionRepoData.Input) => Promise<SaveNewElectionRepoData.Output>
}

export namespace SaveNewElectionRepoData {
  export type Input = {
    status: boolean,
    title: string,
    start: Date,
    end: Date
  }
  export type Output = {
    id: string,
    status: boolean,
    title: string,
    start: Date,
    end: Date,
    createdAt: Date
  }
}