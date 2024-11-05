const line = require("../schema/line");

const createLine = async (req, res) => {
  try {
    console.log(req.body);
    const createLineDb = await line.create({
      lineName: req.body.lineName,
      district: req.body.district,
      station: req.body.station,
    });
    await res
      .status(200)
      .send({ message: "line is added successfully", data: createLineDb });
  } catch (error) {
    console.log(error);
    await res.status(400).send(error.message);
  }
};

const lineDetailsStationWise = async (req, res) => {
  try {
    const matchCriteria = {};
    if (req.query.district) {
      matchCriteria.district = req.query.district;
    }
    if (req.query.station) {
      matchCriteria.station = req.query.station;
    }
    const lineDetails = await line.aggregate([{ $match: matchCriteria }]);
    await res.status(200).send(lineDetails);
  } catch (error) {
    await res.status(400).send({ message: error.message });
  }
};

module.exports = { createLine, lineDetailsStationWise };
