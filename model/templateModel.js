const { Sequelize } = require('sequelize');

const sequelize = require("../config/dbConfig");

const FabricOrder = sequelize.define('FabricOrder', {
    PONumber: {
        type: Sequelize.STRING,
        allowNull: true
    },
    updatedAt: {
        type: Sequelize.DATE,
        allowNull: true
    },
    deliveryDate: {
        type: Sequelize.DATE,
        allowNull: true
    },
    orderRef: {
        type: Sequelize.STRING,
        allowNull: true
    },
    styleNo: {
        type: Sequelize.STRING,
        allowNull: true
    },
    season: {
        type: Sequelize.STRING,
        allowNull: true
    },
    milliPerformanceNo: {
        type: Sequelize.STRING,
        allowNull: true
    },
    fabricName: {
        type: Sequelize.STRING,
        allowNull: true
    },
    fabricCode: {
        type: Sequelize.STRING,
        allowNull: true
    },
    fabricColor: {
        type: Sequelize.STRING,
        allowNull: true
    },
    count: {
        type: Sequelize.STRING,
        allowNull: true
    },
    fdsWidth: {
        type: Sequelize.STRING,
        allowNull: true
    },
    fabricDescription: {
        type: Sequelize.STRING,
        allowNull: true
    },
    fabricQuantity: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    fabricUnitPrice: {
        type: Sequelize.FLOAT,
        allowNull: true
    },
    fabricTotal: {
        type: Sequelize.FLOAT,
        allowNull: true
    },
    totalQuantity: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    totalQuantityInYards: {
        type: Sequelize.FLOAT,
        allowNull: true
    },
    subtotal: {
        type: Sequelize.FLOAT,
        allowNull: true
    },
    moqCharges: {
        type: Sequelize.FLOAT,
        allowNull: true
    },
    freightCharges: {
        type: Sequelize.FLOAT,
        allowNull: true
    },
    igstAmount: {
        type: Sequelize.FLOAT,
        allowNull: true
    },
    igstPercent: {
        type: Sequelize.FLOAT,
        allowNull: true
    },
    currency: {
        type: Sequelize.STRING,
        allowNull: true
    },
    price: {
        type: Sequelize.FLOAT,
        allowNull: true
    },
    totalAmountInWords: {
        type: Sequelize.STRING,
        allowNull: true
    },
    remarksData: {
        type: Sequelize.STRING,
        allowNull: true
    }
});

module.exports = FabricOrder