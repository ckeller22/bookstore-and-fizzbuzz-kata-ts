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

    console.log(
      "🚀 ~ file: inventory.ts:26 ~ Inventory ~ sorted ~ sorted:",
      sorted
    );

    return sorted;
  }
}
