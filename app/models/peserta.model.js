module.exports = (sequelize, DataTypes) => {
    const Peserta = sequelize.define("peserta", {
          id: {
            autoIncrement: true,
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true
          },  
         nama: {
            type: DataTypes.STRING(50),
            allowNull: true
          },
          alamat: {
            autoIncrement: false,
            type: DataTypes.TEXT,
            allowNull: false,
            primaryKey: false
          },
          tgllahir : {
            autoIncrement: false,
            type: DataTypes.STRING(50),
            allowNull: false,
            primaryKey: false
          },
           status_peserta: {
            autoIncrement: false,
            type: DataTypes.STRING(50),
            allowNull: true,
            primaryKey: false
          }
    }, {
      sequelize,
      tableName: 'peserta',
      timestamps: true,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [
            { name: "id" },
          ]
        },
      ]
    });

  
    return Peserta;
  }; 

// module.exports = (sequelize, DataTypes)=>{
//   const Peserta = sequelize.define("peserta",{
//     id:{

//     },
//     nama:{

//     }

    
//   },{
//     sequelize,
//     tableName : 'peserta'
//   })
//   return
// }