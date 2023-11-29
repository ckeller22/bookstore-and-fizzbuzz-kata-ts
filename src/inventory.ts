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

    const sorted = inventory.sort(function (a, b) {
      if (a.getTitle() > b.getTitle()) {
        return -1;
      }
      if (b.getTitle() < a.getTitle()) {
        return 1;
      }
      return 0;
    });

    return sorted;
  }

  public getByAscendingTitle(): Array<Book> {
    const inventory = this.books;

    const sorted = inventory.sort(function (a, b) {
      if (a.getTitle() < b.getTitle()) {
        return -1;
      }
      if (b.getTitle() > a.getTitle()) {
        return 1;
      }
      return 0;
    });

    return sorted;
  }
}
