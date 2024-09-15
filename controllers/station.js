const station = require("../schema/station");

const registerStation = async (req, res) => {
  const registerStation = await station.create({
    stationName: req.body.stationName,
    district: req.body.district,
  });
  await res.status(200).send({
    message: "station is register successfully",
    data: registerStation,
  });
  try {
  } catch (error) {}
};

const findStationNameFromDistrict = async (req, res) => {
  try {
    const query = req.query.district;
    const result = await station.find({
      district: query,
    });
    await res.status(200).send(result);
  } catch (error) {
    await res.status(400).send({ message: error.message });
  }
};

module.exports = { registerStation, findStationNameFromDistrict };
