import { FindAllElectionInterface } from "@/domain/features/findall-elections";
import { DatabaseElectionRepository } from "@/infra/database/repos/database-election-repo";
import {  LoadElectionsRepoData } from "../contracts/repos/election";

export class FindAllElectionService implements FindAllElectionInterface {
  constructor(
    private readonly electionRepo: DatabaseElectionRepository
  ) {}

  async perform (): Promise<LoadElectionsRepoData.Output> {
    return await this.electionRepo.findAll()
  }
}