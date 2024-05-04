const Controller = require('../base/controller')
const UserRepository = require('../repository/user-repository')

class UserController extends Controller{
  constructor(){
    super();
    this.repository = new UserRepository();
  }
}

module.exports = UserController