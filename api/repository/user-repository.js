const User = require('../models/user')
const Repository = require('../base/repository')

class UserRepository extends Repository{
  
    constructor(){
      super();
      this.model = User;
    }
}

module.exports = UserRepository;