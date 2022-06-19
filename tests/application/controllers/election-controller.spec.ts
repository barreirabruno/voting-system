import { ElectionService } from "@/data/services/election.service"
import { ElectionStatusEnum } from "@/domain/entities"
import { DatabaseElectionRepository } from "@/infra/database/repos/database-election-repo"
import { CreateElectionController } from "@/application/controllers/election-controller"


describe("Election controller", () => {
  let saveElectionRepository: DatabaseElectionRepository
  let electionService: ElectionService
  let sut: CreateElectionController

  beforeAll(() => {
    saveElectionRepository = new DatabaseElectionRepository()
    electionService = new ElectionService(saveElectionRepository)
    sut = new CreateElectionController(electionService)
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it("should return 200 if perform method succeeds", async () => {
    const createElectionController = await sut.handle({
      electionStatus: ElectionStatusEnum.OPEN,
      electionTitleParam: "any_election_title",
      startDateElectionParam: new Date("2022-06-19"),
      endDateElectionParam: new Date("2022-06-24") 
    })

    expect(createElectionController).toEqual({
      statusCode: 200,
      data: {
        id: expect.any(String),
        status: 'CREATED',
        title: "any_election_title",
        start: new Date("2022-06-19"),
        end: new Date("2022-06-24"),
        createdAt: expect.any(Date)
      }
    })
  })
})