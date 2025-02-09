const commonProperties = require("../../properties/commonProperties");

module.exports = {
  PlayersByRankResponse: {
    title: "PlayersByRankResponse",
    type: "array",
    items: {
      type: "object",
      properties: {
        account_id: commonProperties.account_id,
        rank_tier: {
          description: "Integer indicating the rank/medal of the player",
          type: "number",
        },
        fh_unavailable: {
          description:
            "Indicates if we were unable to fetch full history for this player due to privacy settings",
          type: "boolean",
          nullable: true,
        },
      },
    },
  },
};
