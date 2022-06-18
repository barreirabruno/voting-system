import { ElectionStatusEnum } from "@/domain/entities"
import { HttpResponse } from "@/application/helpers/http"
import { Controller } from "@/application/controllers/controller"

class ControllerStub extends Controller {
  result: HttpResponse = {
    statusCode: 200,
    data: 'any_data'
  }

  async perform(httpRequest: any): Promise<HttpResponse> {
    return this.result
  }
}

describe('Controller', () => {
  let sut: ControllerStub

  beforeEach(() => {
    sut = new ControllerStub()
  })

  it('should return same result as perform', async () => {
    const httpResponse = await sut.handle({
      electionStatus: ElectionStatusEnum.OPEN,
      electionTitleParam: "any_election_title",
      startDateElectionParam: new Date("2022-06-17"),
      endDateElectionParam: new Date("2022-06-22") 
    })

    expect(httpResponse).toEqual(sut.result);
  })
})