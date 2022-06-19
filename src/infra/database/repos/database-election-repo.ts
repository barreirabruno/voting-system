import { DatabaseElectionRepositoryInterface, LoadElectionsRepoData, SaveNewElectionRepoData } from "@/data/contracts/repos/election";
import Election from "@/domain/entities/Election.domain";

export class DatabaseElectionRepository implements DatabaseElectionRepositoryInterface {

  private electionsPersistence: Election[] = []

  async save (input: SaveNewElectionRepoData.Input): Promise<SaveNewElectionRepoData.Output> {
    const electionEntity = new Election(input)
    this.electionsPersistence.push(electionEntity);
    return electionEntity
  }

  async findAll(): Promise<LoadElectionsRepoData.Output> {
    return {
      elections: this.electionsPersistence
    };
  }
}