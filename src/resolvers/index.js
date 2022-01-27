const axios = require("axios");

const team = async (parent, { id }, context, info) => {
  const url = `http://api.football-data.org/v2/teams/${id}`;

  const { data } = await axios.get(url);

  return;
};
