const User = require('../Models/userModel');

class userController {
  async authUser(req, res) {
    const { wallet, userId } = req.body;

    if (!wallet || !userId) return res.status(500).send({ error: 'N' });

    const isUser = await User.findOne({ wallet: wallet });
    if (!isUser) {
      console.log(wallet, userId);
      // return res.redirect('http://127.0.0.1:5173/register');
      return res.status(200).json({ success: true, redirectUrl: '/register' });
    } else {
      return res.status(200).json({ success: true, redirectUrl: '/jobs' });
    }
  }

  async register(req, res) {
    const { wallet, userId, username, bio, skills, links } = req.body;
    if (!wallet || !userId || !username || !bio) return res.status(500).send({ error: 'N' });

    const newUser = new User({ wallet, telegramId: userId, username, bio });

    newUser.save();
    return res.status(200).send({ msg: 'success', data: newUser });
  }

  async createUser() {}

  async getUserByWallet() {}

  async login() {
    const user = await this.getUserByWallet();
  }

  async setDetails() {}
}

module.exports = new userController();
