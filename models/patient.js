const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Patients = sequelize.define('Patients', {
    medical_id: {
        type: DataTypes.STRING(12),
        primaryKey: true,
        allowNull: false,
        unique: true,
        validate: {
            is: /^\d{12}$/
        }
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    aadhaar_number: {
        type: DataTypes.STRING(12),
        allowNull: false,
        unique: true,
        validate: {
            is: /^\d{12}$/
        }
    },
    mobile_number: {
        type: DataTypes.STRING(10),
        allowNull: false,
        validate: {
            is: /^\d{10}$/
        }
    },
    date_of_birth: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    gender: {
        type: DataTypes.ENUM('Male', 'Female', 'Other'),
        allowNull: false
    },
    blood_group: {
        type: DataTypes.ENUM('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'),
        allowNull: false
    },
    address: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    report_link_text: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [8, 100] // Password must be between 8 and 100 characters
        }
    }
}, {
    timestamps: true
});

module.exports = Patients;