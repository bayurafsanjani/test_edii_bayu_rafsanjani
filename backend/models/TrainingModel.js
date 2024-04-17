import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Users from "./UserModel.js"

const {DataTypes} = Sequelize;

const Trainings = db.define('training', {
    uuid:{
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    course:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    certified:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    year:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    userId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
},{
    freezeTableName:true
})

Users.hasMany(Trainings);
Trainings.belongsTo(Users, {foreignKey: 'userId'})

export default Trainings