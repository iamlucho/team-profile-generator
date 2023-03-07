const Intern = require('../lib/Intern');

describe('Intern', () => {
  it('Can create a new intern object with name, ID, email, and school properties', () => {
    const intern = new Intern('John Doe', 123, 'jdoe@test.com', 'University of Miami');
    expect(intern.name).toEqual('John Doe');
    expect(intern.id).toEqual(123);
    expect(intern.email).toEqual('jdoe@test.com');
    expect(intern.school).toEqual('University of Miami');
  });

  it('Can return the intern name', () => {
    const intern = new Intern('John Doe', 123, 'jdoe@test.com', 'University of Miami');
    expect(intern.getName()).toEqual('John Doe');
  });

  it('Can return the intern ID', () => {
    const intern = new Intern('John Doe', 123, 'jdoe@test.com', 'University of Miami');
    expect(intern.getId()).toEqual(123);
  });

  it('Can return the intern email', () => {
    const intern = new Intern('John Doe', 123, 'jdoe@test.com', 'University of Miami');
    expect(intern.getEmail()).toEqual('jdoe@test.com');
  });

  it('Can return the intern school', () => {
    const intern = new Intern('John Doe', 123, 'jdoe@test.com', 'University of Miami');
    expect(intern.getSchool()).toEqual('University of Miami');
  });

  it('Can return "Intern" as the intern role', () => {
    const intern = new Intern('John Doe', 123, 'jdoe@test.com', 'University of Miami');
    expect(intern.getRole()).toEqual('Intern');
  });
});