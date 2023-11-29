import { Department } from "./department";

export class Book {
  public static USED_PRICE_MULTIPLIER = 0.6;

  private title: string;
  private price: number;
  private department: Department;
  private usedPrice: number;
  private departmentDiscountPrice: number;
  private usedDepartmentDiscountPrice: number;

  public constructor(title: string, price: number, department: Department) {
    this.title = title;
    this.price = price;
    this.usedPrice = price * Book.USED_PRICE_MULTIPLIER;
    this.departmentDiscountPrice =
      this.price - this.price * department.discount;
    this.usedDepartmentDiscountPrice =
      this.usedPrice - this.usedPrice * department.discount;
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

  public getUsedDepartmentPrice(): number {
    return this.usedDepartmentDiscountPrice;
  }

  public getDepartmentPrice(): number {
    return this.departmentDiscountPrice;
  }

  public getDepartment(): Department {
    return this.department;
  }
}
