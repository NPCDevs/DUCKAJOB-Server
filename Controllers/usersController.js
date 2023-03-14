const User = require('../Models/userModel');

const getUserByWallet = async (wallet) => {
  const user = await User.findOne({ wallet });
  return !!user;
};

const getUserById = async (id) => {
  const user = await User.findById(id);
  return user;
};

class userController {
  async authUser(req, res) {
    const { wallet } = req.body;

    if (!wallet) return res.status(500).send({ error: 'N' });

    const isUser = await getUserByWallet(wallet);

    if (!isUser) {
      console.log('user need to register');
      return res.status(200).json({ success: true, redirectUrl: '/register' });
    } else {
      console.log('user is in base, just use the app');
      return res.status(200).json({ success: true, redirectUrl: '/jobs' });
    }
  }

  async register(req, res) {
    try {
      const { wallet, username, bio, skills, links } = req.body;
      if (!wallet || !username || !bio) return res.status(500).send({ error: 'N' });

      const newUser = new User({ wallet, username, bio });

      newUser.save();
      return res.status(200).send({ success: true, data: newUser });
    } catch (error) {
      return res.status(500).send({ error: 'N' });
    }
  }

  async getUser(req, res) {
    const { userId } = req.params;
    try {
      const user = await getUserById(userId);
      return res.status(200).send({ user });
    } catch (error) {
      return res.status(404).send({ user: null });
    }
  }
}

module.exports = new userController();
