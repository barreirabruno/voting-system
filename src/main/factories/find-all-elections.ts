import { FindAllElectionController } from "@/application/controllers/find-all-election-controller"
import { FindAllElectionService } from "@/data/services/find-all-election-service"
import { DatabaseElectionRepository } from "@/infra/database/repos/database-election-repo"

export const makeFindAllElectionController = (persistenceArray: DatabaseElectionRepository): FindAllElectionController => {
  const service = new FindAllElectionService(persistenceArray)
  return new FindAllElectionController(service)
}