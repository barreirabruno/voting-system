import { CreateElection, CreateElectionInterface } from "@/domain/features/create-election";
import { DatabaseElectionRepositoryInterface } from "../contracts/repos/election";

export class ElectionService implements CreateElectionInterface {
  constructor(
    private readonly electionRepo: DatabaseElectionRepositoryInterface
  ) {}

  async perform (params: CreateElection.Input): Promise<CreateElection.Output> {
    return await this.electionRepo.save(params)
  }
}