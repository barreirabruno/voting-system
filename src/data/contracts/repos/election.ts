import { ElectionStatusEnum } from "@/domain/entities"
import Election from "@/domain/entities/Election.domain"

export interface DatabaseElectionRepositoryInterface {
  save: (input: SaveNewElectionRepoData.Input) => Promise<SaveNewElectionRepoData.Output>
  findAll: () => Promise<LoadElectionsRepoData.Output>
}

export namespace SaveNewElectionRepoData {
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

export namespace LoadElectionsRepoData {
  export type Output = {
    elections: Election[]
  }
}