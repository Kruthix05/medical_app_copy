const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Pharmacist = sequelize.define('Pharmacist', {
    pharmacist_id: {
        type: DataTypes.STRING(50),
        primaryKey: true,
        allowNull: false
    },
    pharmacist_name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    mobile_number: {
        type: DataTypes.STRING(15),
        allowNull: false,
        unique: true
    },
    license_number: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
    },
    aadhaar_number: {
        type: DataTypes.STRING(12),
        allowNull: false,
        unique: true
    },
    email_id: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING(100),
        allowNull: false
    }
}, {
    timestamps: true // Enables createdAt & updatedAt automatically
});

module.exports = Pharmacist;