const User = require('../Models/userModel');

class userController {
  async createUser(req, res) {
    return res.status(200).send({ msg: 'wrerpmogego' });
  }

  async getUserByWallet() {}

  async login() {
    const user = await this.getUserByWallet();
  }

  async setDetails() {}
}

module.exports = new userController();
