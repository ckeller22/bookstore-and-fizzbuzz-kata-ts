import { Book } from "./book";

export class Inventory {
  private books: Array<Book>;

  public constructor(books: Array<Book>) {
    this.books = books;
  }

  public getBooks(): Array<Book> {
    return this.books;
  }

  public getByDescendingTitle(): Array<Book> {
    const inventory = this.books;

    const sorted = inventory
      .sort((a, b) => a.getTitle().localeCompare(b.getTitle()))
      .reverse();

    return sorted;
  }

  public getByAscendingTitle(): Array<Book> {
    const inventory = this.books;

    const sorted = inventory.sort((a, b) =>
      a.getTitle().localeCompare(b.getTitle())
    );

    return sorted;
  }
}
