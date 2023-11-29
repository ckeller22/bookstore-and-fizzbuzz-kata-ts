export class Book {
  private title: string;
  private price: number;
  private usedPrice: number;

  public constructor(title: string, price: number) {
    this.title = title;
    this.price = price;
    this.usedPrice = price * 0.6;
  }

  public getTitle(): string {
    return this.title;
  }

  public getPrice(): number {
    return this.price;
  }

  public getUsedPrice(): number {
    return this.usedPrice;
  }
}
