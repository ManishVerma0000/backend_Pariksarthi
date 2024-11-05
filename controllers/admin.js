const userlogin = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username && !password) {
      await res.status(400).send("please enter all the details");
    } else {
      const data = { isLineMen: false };
      await res.status(200).send({ message: "logged in", data: data });
    }
  } catch (error) {
    await res.status(400).send(error.message);
  }
};

module.exports = { userlogin };
