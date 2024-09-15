const fs = require("fs");
const listOfState = async (req, res) => {
  try {
    const stateList = await fs.readFileSync("./state.json");
    await res.status(200).send(stateList);
  } catch (error) {}
};

module.exports = { listOfState };
