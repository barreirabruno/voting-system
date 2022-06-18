import { addDaystoDate } from "@/domain/entities/utils/date-plus-five-days";

describe("Add days to Date", () => {
  it("should make a date with five dates from now", () => {
    const date = new Date("2022-06-17");
    const addDaysFunction = addDaystoDate(5, date);
    expect(addDaysFunction).toEqual(new Date("2022-06-22"))
  })
})