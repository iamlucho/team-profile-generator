const Employee = require('../lib/Employee');

describe('Employee', () => {
  it('Can create a new employee object with name, ID, and email properties', () => {
    const employee = new Employee('John Doe', 123, 'jdoe@test.com');
    expect(employee.name).toEqual('John Doe');
    expect(employee.id).toEqual(123);
    expect(employee.email).toEqual('jdoe@test.com');
  });

  it('Can return the employee name', () => {
    const employee = new Employee('John Doe', 123, 'jdoe@test.com');
    expect(employee.getName()).toEqual('John Doe');
  });

  it('Can return the employee ID', () => {
    const employee = new Employee('John Doe', 123, 'jdoe@test.com');
    expect(employee.getId()).toEqual(123);
  });

  it('Can return the employee email', () => {
    const employee = new Employee('John Doe', 123, 'jdoe@test.com');
    expect(employee.getEmail()).toEqual('jdoe@test.com');
  });

  it('Can return "Employee" as the employee role', () => {
    const employee = new Employee('John Doe', 123, 'jdoe@test.com');
    expect(employee.getRole()).toEqual('Employee');
  });
});