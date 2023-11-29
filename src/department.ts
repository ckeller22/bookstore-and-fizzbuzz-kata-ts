export class Department {
  protected static DEPARTMENT_DISCOUNT = 0.15;

  static readonly COMPUTER_SCIENCE = new Department(
    "Computer Science",
    this.DEPARTMENT_DISCOUNT
  );
  static readonly BIOLOGY = new Department("Biology", this.DEPARTMENT_DISCOUNT);
  static readonly ART_HISTORY = new Department(
    "Art History",
    this.DEPARTMENT_DISCOUNT
  );
  static readonly NONE = new Department("None", null);

  static getAllDepartments(): Department[] {
    return [this.COMPUTER_SCIENCE, this.BIOLOGY, this.ART_HISTORY, this.NONE];
  }

  private constructor(
    private readonly key: string,
    public readonly discount: any
  ) {}

  toString() {
    return this.key;
  }
}
