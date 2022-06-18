import { ElectionService } from "@/data/services/election.service";
import { ElectionStatusEnum } from "@/domain/entities"
import { DatabaseElectionRepository } from "@/infra/database/repos/database-election-repo";

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