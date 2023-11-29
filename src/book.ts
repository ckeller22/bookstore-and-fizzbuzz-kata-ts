import { Department } from "./department";

export class Book {
  protected static USED_PRICE_MULTIPLIER = 0.6;

  private title: string;
  private price: number;
  private department: Department;
  private usedPrice: number;

  public constructor(title: string, price: number, department: Department) {
    this.title = title;
    this.price = price;
    this.usedPrice = price * Book.USED_PRICE_MULTIPLIER;
    this.department = department;
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

  public getDepartmentPrice(): number {
    if (this.department === Department.NONE) {
      return this.price;
    }

    return this.price * (this.department.discount / 100);
  }

  public getDepartment(): Department {
    return this.department;
  }
}
