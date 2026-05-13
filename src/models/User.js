module.exports = (sequelize, columns) => {
  const User = sequelize.define('User', columns, {
    createdAt:false,
    updatedAt:false,
    tableName:"users"
  });

  User.associate = (models) => {
    User.hasMany(models.Order, {
      foreignKey: 'userid',
      as: 'orders'
    });
  };

  return User;
}