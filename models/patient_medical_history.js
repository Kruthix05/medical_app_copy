const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Patients = require('./patient');
const Doctors = require('./doctor');

const PatientMedicalHistory = sequelize.define('PatientMedicalHistory', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    medical_id: {
        type: DataTypes.STRING(12),
        allowNull: false,
        references: {
            model: Patients,
            key: 'medical_id'
        }
    },
    doctor_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Doctors,
            key: 'doctor_id'
        }
    },
    known_allergies: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    chronic_diseases: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    past_surgeries: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    previous_hospitalizations: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    family_medical_history: {
        type: DataTypes.TEXT,
        allowNull: true
    }
}, {
    tableName: 'PatientMedicalHistory',
    timestamps: true
});

// Define associations
PatientMedicalHistory.belongsTo(Patients, { foreignKey: 'medical_id' });
Patients.hasMany(PatientMedicalHistory, { foreignKey: 'medical_id' });

PatientMedicalHistory.belongsTo(Doctors, { foreignKey: 'doctor_id' });
Doctors.hasMany(PatientMedicalHistory, { foreignKey: 'doctor_id' });

module.exports = PatientMedicalHistory;
