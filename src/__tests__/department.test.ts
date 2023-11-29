import { Department } from "../department";

describe("Department", () => {
  it("should return the correct key when toString is called", () => {
    expect(Department.COMPUTER_SCIENCE.toString()).toEqual("Computer Science");
    expect(Department.BIOLOGY.toString()).toEqual("Biology");
    expect(Department.ART_HISTORY.toString()).toEqual("Art History");
    expect(Department.NONE.toString()).toEqual("None");
  });

  it("should have the correct discount", () => {
    expect(Department.COMPUTER_SCIENCE.discount).toEqual(0.15);
    expect(Department.BIOLOGY.discount).toEqual(0.15);
    expect(Department.ART_HISTORY.discount).toEqual(0.15);
    expect(Department.NONE.discount).toBeNull();
  });
});
