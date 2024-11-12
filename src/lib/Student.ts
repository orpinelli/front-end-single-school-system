export class Student {
  private id: number;
  private name: string;
  private registration: string;

  constructor(id: number, name: string, registration: string) {
    this.id = id;
    this.name = name;
    this.registration = registration;
  }

  getId(): number {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getRegistration(): string {
    return this.registration;
  }

  setName(newName: string): void {
    this.name = newName;
  }

  setRegistration(newRegistration: string): void {
    this.registration = newRegistration;
  }
}
