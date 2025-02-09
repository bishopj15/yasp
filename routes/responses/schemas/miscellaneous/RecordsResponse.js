const commonProperties = require("../../properties/commonProperties");

module.exports = {
  RecordsResponse: {
    title: "RecordsResponse",
    type: "object",
    properties: {
      match_id: commonProperties.match_id,
      start_time: commonProperties.start_time,
      hero_id: commonProperties.hero_id,
      score: {
        description: "Record score",
        type: "integer",
      },
    },
  },
};
