const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Patients = require('./patient');
const Doctors = require('./doctor');

const PatientConsultationHistory = sequelize.define('PatientConsultationHistory', {
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
    consultation_date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    prescription: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    report_link: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    tableName: 'PatientConsultationHistory', // Updated table name
    timestamps: true
});

// Define associations
PatientConsultationHistory.belongsTo(Patients, { foreignKey: 'medical_id' });
Patients.hasMany(PatientConsultationHistory, { foreignKey: 'medical_id' });

PatientConsultationHistory.belongsTo(Doctors, { foreignKey: 'doctor_id' });
Doctors.hasMany(PatientConsultationHistory, { foreignKey: 'doctor_id' });

module.exports = PatientConsultationHistory;