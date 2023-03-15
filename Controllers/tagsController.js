const Tag = require('../Models/tagModel');
class tagsController {
  async getAll(req, res) {
    const tags = await Tag.find();
    return res.status(200).send({ data: tags });
  }

  async search(req, res) {
    // console.log(req.query.name)
    const { name } = req.query;
    // console.log(name);
    const tags = await Tag.find({ name: { $regex: new RegExp(name, 'i') } });
    // console.log(tags);
    res.status(200).send({ data: tags });
  }

  //   async add(req, res) {
  //     console.log(req.body);
  //     if (!req.body.name) return res.status(500);

  //     const newTag = new Tag({ name: req.body.name });

  //     newTag.save();

  //     return res.status(200).send({ tag: newTag });
  //   }
}

module.exports = new tagsController();
