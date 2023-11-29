import { Department } from "../department";
import { Book } from "../book";
import {
  generateRandomDepartment,
  generateRandomPrice,
  generateRandomTitle,
} from "./helpers/testHelpers";

describe("Book", () => {
  it("should have a title", () => {
    const title = "title";
    const book = new Book(
      title,
      generateRandomPrice(),
      generateRandomDepartment()
    );
    expect(book.getTitle()).toBe(title);
  });

  it("should have a price", () => {
    const price = 10.99;
    const book = new Book(
      generateRandomTitle(),
      price,
      generateRandomDepartment()
    );
    expect(book.getPrice()).toEqual(price);
  });

  it("should have an additional discount if a member of a valid department", () => {
    const department = Department.COMPUTER_SCIENCE;

    const book = new Book(
      generateRandomTitle(),
      generateRandomPrice(),
      department
    );

    const expectedPrice = book.getPrice() * (department.discount / 100);

    expect(book.getDepartmentPrice()).toEqual(expectedPrice);
  });

  it("should have no discount if no department assigned", () => {
    const department = Department.NONE;

    const book = new Book(
      generateRandomTitle(),
      generateRandomPrice(),
      department
    );

    const expectedPrice = book.getPrice();

    expect(book.getDepartmentPrice()).toEqual(expectedPrice);
  });
});
