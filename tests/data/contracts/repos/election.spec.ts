import { CreateElection, CreateElectionInterface } from "@/domain/features/create-election"
import { SaveNewElectionRepoData, SaveNewElectionRepository } from "@/data/contracts/repos/election"
import Election from "@/domain/entities/Election.domain"
import { ElectionStatusEnum } from "@/domain/entities"

class ElectionService implements CreateElectionInterface {
  constructor(
    private readonly electionRepo: SaveNewElectionRepository
  ) {}

  async perform (params: CreateElection.Input): Promise<CreateElection.Output> {
    return await this.electionRepo.save(params)
  }
}

class DatabaseElectionRepository implements SaveNewElectionRepository {

  private electionsPersistence: Election[] = []

  async save (input: SaveNewElectionRepoData.Input): Promise<SaveNewElectionRepoData.Output> {
    const electionEntity = new Election(input)
    this.electionsPersistence.push(electionEntity);
    return electionEntity
  }
}

describe('Election repository', () => {
  let repository: DatabaseElectionRepository;
  let sut: ElectionService;

  const fakeInputData = {
    "electionStatus": ElectionStatusEnum.OPEN,
    "electionTitleParam": "any_test_election",
    "startDateElectionParam": new Date("2022-06-17"),
    "endDateElectionParam": new Date("2022-06-20"),
  }

  beforeAll(() => {
    repository = new DatabaseElectionRepository();
    sut = new ElectionService(repository)
  })

  it('should call save method from DatabaseElectionRepository with correct params', async () => {
    const spyRepo = jest.spyOn(repository, 'save');
    await sut.perform(fakeInputData)

    expect(spyRepo).toHaveBeenCalledWith(fakeInputData)
    expect(spyRepo).toHaveBeenCalledTimes(1)
  })
})