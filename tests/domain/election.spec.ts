import Election from "@/domain/Election.domain";
import { ElectionStatusEnum } from "@/domain/ElectionStatusEnum.domain";

const electionDataInput = {
  electionStatus: ElectionStatusEnum.CREATED,
  electionTitleParam: 'any_election_title',
  startDateElectionParam: new Date("06-08-2022"),
  endDateElectionParam: new Date("06-13-2022")
}

describe("Election domain class", () => {
  it("should create an election with input data only", () => {
    const sut = new Election(electionDataInput);

    expect(sut).toEqual({
      id: expect.any(String),
      status: 'CREATED',
      title: 'any_election_title',
      start: new Date("06-08-2022"),
      end: new Date("06-13-2022"),
      createdAt: expect.any(Date),
    })
  })
})