// const { INTEGER, DATE, TIME } = require("sequelize");
const Sequelize = require("sequelize");
const db = require("../db/index");
const Programms = db.define(
  "programms",
  {    date: {
    type: Sequelize.DATE,
  },
    channel_id: {
      type: Sequelize.INTEGER,
    },
    start_time: {
      type:Sequelize.TIME,
    },
    end_time: {
      type: Sequelize.TIME,
    },
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    name: {
      type: Sequelize.TEXT,
    },
    description: {
      type: Sequelize.TEXT,
    },
    start_stamp: {
      type: Sequelize.BIGINT,
    },
    end_stamp: {
      type: Sequelize.BIGINT,
    },
  },
  {
    timestamps: false,
  }
);
module.exports = Programms;
