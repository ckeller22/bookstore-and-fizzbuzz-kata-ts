import { Book } from "../book";

describe("Book", () => {
  it("should have a title", () => {
    const book = new Book("The Hobbit", 8.99);
    expect(book.getTitle()).toBe("The Hobbit");
  });

  it("should have a price", () => {
    const book = new Book("The Hobbit", 8.99);
    expect(book.getPrice()).toEqual(8.99);
  });
});
