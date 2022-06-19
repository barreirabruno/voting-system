import { ElectionService } from "@/data/services/election.service";
import { HttpResponse, ok } from "../helpers/http";
import { Controller } from "./controller";

type HttpRequest = {
  title: string,
  start: Date,
  end: Date
}

export class CreateElectionController extends Controller {
  constructor(
    private readonly electionService: ElectionService
  ) {
    super()
  }

  async perform(httpRequest: any): Promise<HttpResponse<any>> {
    const result = await this.electionService.perform({
      electionStatus: httpRequest.electionStatus,
      electionTitleParam: httpRequest.electionTitleParam,
      startDateElectionParam: httpRequest.startDateElectionParam,
      endDateElectionParam: httpRequest.endDateElectionParam
    })
    return ok(result);
  }
}