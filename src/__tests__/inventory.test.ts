import { Book } from "../book";
import { Inventory } from "../inventory";

// Helpers
const generateRandomInventory = (length: number) => {
  // Generate 10 books with random titles and prices, starting with 'a
  const books = Array.from(
    { length },
    (_, i) => new Book(String.fromCharCode(97 + i), Math.random() * 100)
  );

  // Create new inventory with books in random order.
  return new Inventory(books.sort(() => Math.random() - 0.5));
};

describe("Inventory", () => {
  it("should have a list of books", () => {
    const inventory = generateRandomInventory(10);

    expect(inventory.getBooks().length).toBe(10);
  });

  it("should be able to sort books by title descending", () => {
    const inventory = generateRandomInventory(10);

    const clonedBooks = [...inventory.getBooks()];
    const expected = clonedBooks.sort((a, b) =>
      b.getTitle().localeCompare(a.getTitle())
    );

    expect(inventory.getByDescendingTitle()).toEqual(expected);
  });

  it("should be able to sort books by title ascending", () => {
    const inventory = generateRandomInventory(10);

    const clonedBooks = [...inventory.getBooks()];
    const expected = clonedBooks.sort((a, b) =>
      a.getTitle().localeCompare(b.getTitle())
    );

    expect(inventory.getByAscendingTitle()).toEqual(expected);
  });

  it("should be able to sort books by price descending", () => {
    const inventory = generateRandomInventory(10);

    const clonedBooks = [...inventory.getBooks()];
    const expected = clonedBooks.sort((a, b) => b.getPrice() - a.getPrice());

    expect(inventory.getByDescendingPrice()).toEqual(expected);
  });
});
