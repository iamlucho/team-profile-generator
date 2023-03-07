const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
  it('Can create a new engineer object with name, ID, email, and GitHub username properties', () => {
    const engineer = new Engineer('Jane Smith', 456, 'jsmith@test.com', 'janesmith');
    expect(engineer.name).toEqual('Jane Smith');
    expect(engineer.id).toEqual(456);
    expect(engineer.email).toEqual('jsmith@test.com');
    expect(engineer.github).toEqual('janesmith');
  });

  it('Can return the engineer name', () => {
    const engineer = new Engineer('Jane Smith', 456, 'jsmith@test.com', 'janesmith');
    expect(engineer.getName()).toEqual('Jane Smith');
  });

  it('Can return the engineer ID', () => {
    const engineer = new Engineer('Jane Smith', 456, 'jsmith@test.com', 'janesmith');
    expect(engineer.getId()).toEqual(456);
  });

  it('Can return the engineer email', () => {
    const engineer = new Engineer('Jane Smith', 456, 'jsmith@test.com', 'janesmith');
    expect(engineer.getEmail()).toEqual('jsmith@test.com');
  });

  it('Can return the engineer GitHub username', () => {
    const engineer = new Engineer('Jane Smith', 456, 'jsmith@test.com', 'janesmith');
    expect(engineer.getGithub()).toEqual('janesmith');
  });

  it('Can return "Engineer" as the engineer role', () => {
    const engineer = new Engineer('Jane Smith', 456, 'jsmith@test.com', 'janesmith');
    expect(engineer.getRole()).toEqual('Engineer');
  });
});