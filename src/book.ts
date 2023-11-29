export class Book {
  private title: string;
  private price: number;

  public constructor(title: string, price: number) {
    this.title = title;
    this.price = price;
  }

  public getTitle(): string {
    return this.title;
  }

  public getPrice(): number {
    return this.price;
  }
}
