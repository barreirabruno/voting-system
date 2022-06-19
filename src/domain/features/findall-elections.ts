import { ElectionStatusEnum } from "../entities"
import Election from "../entities/Election.domain"

export interface FindAllElectionInterface {
  perform: () => Promise<CreateElection.Output>
}

export namespace CreateElection {
  export type Output = {
    elections: Election[]
  }
}