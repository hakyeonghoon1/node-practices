const {Sequelize, DataTypes} =require('sequelize');
const user = require('../controllers/user');

const sequelize =new Sequelize({});

const User = sequelize.define('User',{
    no:{
        field:'no',
        type:DataTypes.BIGINT(11),
        primaryKey:true,
        autoIncrement:true
    },
    name:{

    },
    email:{

    }
},{
    underscored:true,
    freezeTableName:true,
    timestamps:false,
    createdAt:false,
    updatedAt:false,
    tableName:'user'
})

User.create({

})

User.findOne({

})