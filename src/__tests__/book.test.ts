import { Department } from "../department";
import { Book } from "../book";

describe("Book", () => {
  it("should have a title", () => {
    const book = new Book("The Hobbit", 8.99, Department.NONE);
    expect(book.getTitle()).toBe("The Hobbit");
  });

  it("should have a price", () => {
    const book = new Book("The Hobbit", 8.99, Department.NONE);
    expect(book.getPrice()).toEqual(8.99);
  });

  it("should have an additional discount if a member of a valid department", () => {
    const book = new Book("The Hobbit", 8.99, Department.COMPUTER_SCIENCE);

    const expectedPrice =
      book.getPrice() * (Department.COMPUTER_SCIENCE.discount / 100);

    expect(book.getDepartmentPrice()).toEqual(expectedPrice);
  });

  it("should have no discount if no department assigned", () => {
    const book = new Book("The Hobbit", 8.99, Department.NONE);

    const expectedPrice = book.getPrice();

    expect(book.getDepartmentPrice()).toEqual(expectedPrice);
  });
});
