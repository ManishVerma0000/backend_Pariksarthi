const lineMen = require("../schema/lineman");

const registerLineMen = async (req, res) => {
  try {
    console.log(req.body);
    const saveToDb = await lineMen.create(req.body);
    await res.status(200).send({ message: " linemen added successfully" });
  } catch (error) {
    await res.status(400).send(error.message);
  }
};

const lineMenProfile = async (req, res) => {
  try {
    return await lineMen.findById(req.params.id);
  } catch (error) {
    return await res.status(400).send(error.message);
  }
};

module.exports = { registerLineMen, lineMenProfile };
