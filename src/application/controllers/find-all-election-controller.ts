import { FindAllElectionService } from "@/data/services/find-all-election-service";
import { HttpResponse, ok } from "../helpers/http";
import { Controller } from "./controller";

type HttpRequest = {
  title: string,
  start: Date,
  end: Date
}

export class FindAllElectionController extends Controller {
  constructor(
    private readonly electionService: FindAllElectionService
  ) {
    super()
  }

  async perform(): Promise<HttpResponse<any>> {
    const result = await this.electionService.perform()
    console.log('[RESULT]: ', result)
    return ok(result);
  }
}