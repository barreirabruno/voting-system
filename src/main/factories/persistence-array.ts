import { DatabaseElectionRepository } from "@/infra/database/repos/database-election-repo"

export const MakePersistenceArray = () => {
  return new DatabaseElectionRepository()
}