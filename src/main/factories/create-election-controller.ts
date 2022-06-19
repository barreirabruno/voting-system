import { CreateElectionController } from "@/application/controllers/election-controller"
import { ElectionService } from "@/data/services/election.service"
import { DatabaseElectionRepository } from "@/infra/database/repos/database-election-repo"

export const makeCreateElectionController = (persistenceArray: DatabaseElectionRepository): CreateElectionController => {
  const service = new ElectionService(persistenceArray)
  return new CreateElectionController(service)
}