const Manager = require("../lib/Manager");

describe("Manager", () => {
  it("Can create a new manager object with name, ID, email, and officeNumber properties", () => {
    const manager = new Manager("John Doe", 123, "jdoe@email.com", 100);
    expect(manager.name).toEqual("John Doe");
    expect(manager.id).toEqual(123);
    expect(manager.email).toEqual("jdoe@email.com");
    expect(manager.officeNumber).toEqual(100);
  });

  it("Can return the manager name", () => {
    const manager = new Manager("John Doe", 123, "jdoe@email.com", 100);
    expect(manager.getName()).toEqual("John Doe");
  });

  it("Can return the manager ID", () => {
    const manager = new Manager("John Doe", 123, "jdoe@email.com", 100);
    expect(manager.getId()).toEqual(123);
  });

  it("Can return the manager email", () => {
    const manager = new Manager("John Doe", 123, "jdoe@email.com", 100);
    expect(manager.getEmail()).toEqual("jdoe@email.com");
  });

  it("Can return the manager office number", () => {
    const manager = new Manager("John Doe", 123, "jdoe@email.com", 100);
    expect(manager.getOfficeNumber()).toEqual(100);
  });

  it('Can return "Manager" as the manager role', () => {
    const manager = new Manager("John Doe", 123, "jdoe@email.com", 100);
    expect(manager.getRole()).toEqual("Manager");
  });
});
