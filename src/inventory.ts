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

    const sorted = inventory.sort((a, b) =>
      b.getTitle().localeCompare(a.getTitle())
    );

    return sorted;
  }

  public getByAscendingTitle(): Array<Book> {
    const inventory = this.books;

    const sorted = inventory.sort((a, b) =>
      a.getTitle().localeCompare(b.getTitle())
    );

    return sorted;
  }

  public getByDescendingPrice(): Array<Book> {
    const inventory = this.books;

    const sorted = inventory.sort((a, b) => b.getPrice() - a.getPrice());

    return sorted;
  }

  getByAscendingPrice(): any {
    const inventory = this.books;

    const sorted = inventory.sort((a, b) => a.getPrice() - b.getPrice());

    return sorted;
  }
}
