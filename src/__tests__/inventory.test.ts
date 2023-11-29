import { Book } from "../book";
import { Inventory } from "../inventory";

describe("Inventory", () => {
  it("should have a list of books", () => {
    const bookOne = new Book("The Hobbit", 10.0);
    const bookTwo = new Book("Some name", 12);

    const inventory = new Inventory([bookOne, bookTwo]);

    expect(inventory.getBooks().length).toBe(2);
  });

  it("should be able to sort books by title descending", () => {
    const bookOne = new Book("a", 10.0);
    const bookTwo = new Book("b", 12);
    const bookThree = new Book("c", 12);

    const inventory = new Inventory([bookThree, bookOne, bookTwo]);

    const expected = [bookThree, bookTwo, bookOne];
    expect(inventory.getByDescendingTitle()).toEqual(expected);
  });

  it("should be able to sort books by title ascending", () => {
    const bookOne = new Book("a", 10.0);
    const bookTwo = new Book("b", 12);
    const bookThree = new Book("c", 12);

    const inventory = new Inventory([bookThree, bookOne, bookTwo]);

    const expected = [bookTwo, bookThree, bookOne];
    expect(inventory.getByAscendingTitle()).toEqual(expected);
  }
});
