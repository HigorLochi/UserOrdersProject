/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('users', 
    [
      {
        cpf: '000.000.000-00',
        rg: '00.000.000-0',
        name: 'John Doe',
        age: 22,
        email: 'test@medium.com',
        login: 'test',
        password: 'sha1$0204e869$1$c1f19f6c047f21696ddc8c494a9fa0dc2178c89b',
      },
      {
        cpf: '000.000.000-00',
        rg: '00.000.000-0',
        name: 'John Travolta',
        age: 22,
        email: 'test2@medium.com',
        login: 'test2',
        password: 'sha1$35efd0e7$1$b84750d83abd73c10deea74beeb9c5bd5245a0cb',
      }
    ], {}),

  down: (queryInterface) => queryInterface.bulkDelete('users', null, {}),
};
