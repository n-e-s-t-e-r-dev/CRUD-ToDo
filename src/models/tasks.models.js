const db = require("../utils/databaseToDo");
const { DataTypes } = require("sequelize");

const Tasks = db.define("tasks", {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

module.exports = Tasks;