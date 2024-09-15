const adminLogin = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username && !password) {
      await res.status(400).send("please enter all the details");
    } else {
      await res.status(200).send("user is logged in...");
    }
  } catch (error) {
    await res.status(400).send(error.message);
  }
};

module.exports = { adminLogin };
