const userFeedBack = require("../schema/userFeedBack");
const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      await res.status(400).send({ message: "please enter all the details" });
    } else {
      await res.status(200).send({
        name: "testinguser",
        password: "testinguser",
        role: "linemen",
      });
    }
  } catch (error) {
    await res.status(400).send(error.message);
  }
};

const userFeedBackFn = async (req, res) => {
  try {
    const saveResponse = await userFeedBack.create(req.body);
    await res.status(200).send({ message: "feedback is saved" });
  } catch (error) {
    await res.status(400).send({ message: error.message });
  }
};

module.exports = { login, userFeedBackFn };
