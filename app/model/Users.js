const db = require('../src/db')
class Users{
    constructor(email,name,password){
        this.email = email;
        this.name = name;
        this.password = password;
    }

    async guardar(){
        const query = `
        INSERT INTO users (
        email,
         name,
          password) 
        VALUES
         (
          '${this.email}',
          '${this.name}',
          '${this.password}');
          `;
          return await db.ejecutar(query);
    }

}

module.exports = Users;