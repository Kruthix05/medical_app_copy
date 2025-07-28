const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Pharmacist = require('./pharmacist'); // Import the Pharmacist model

const Pharmacy = sequelize.define('Pharmacy', {
    pharmacy_id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    pharmacy_name: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    location: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    pharmacist_id: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
        references: {
            model: Pharmacist, // Foreign key reference
            key: 'pharmacist_id'
        }
    },
    password: {
        type: DataTypes.STRING(100),
        allowNull: false
    }
}, {
    timestamps: true
});

module.exports = Pharmacy;