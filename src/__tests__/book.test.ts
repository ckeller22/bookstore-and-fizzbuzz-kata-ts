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

  it("should have a used price", () => {
    const price = 15.0;
    const book = new Book(
      generateRandomTitle(),
      price,
      generateRandomDepartment()
    );

    const expectedPrice = price * Book.USED_PRICE_MULTIPLIER;
    expect(book.getUsedPrice()).toEqual(expectedPrice);
  });

  describe("if book has assigned department,", () => {
    const department = Department.COMPUTER_SCIENCE;

    const book = new Book(
      generateRandomTitle(),
      generateRandomPrice(),
      department
    );

    it("should have a discounted price.", () => {
      const expectedPrice =
        book.getPrice() - book.getPrice() * department.discount;

      expect(book.getDepartmentPrice()).toEqual(expectedPrice);
    });

    it("should have a discounted used price.", () => {
      const expectedPrice =
        book.getUsedPrice() - book.getUsedPrice() * department.discount;

      expect(book.getUsedDepartmentPrice()).toEqual(expectedPrice);
    });
  });

  describe("if book has no assigned department,", () => {
    const book = new Book(
      generateRandomTitle(),
      generateRandomPrice(),
      Department.NONE
    );

    it("should have no discounted price.", () => {
      expect(book.getDepartmentPrice()).toEqual(book.getPrice());
    });

    it("should have no discounted used price.", () => {
      expect(book.getUsedDepartmentPrice()).toEqual(book.getUsedPrice());
    });
  });
});
