// Create a theme model for the database
import { DataTypes, Model } from 'sequelize';

export default (sequelize) => {
    class Theme extends Model {
        static associate(models) {
            Theme.hasMany(models.Card, {
                foreignKey: 'theme_id',
                sourceKey: 'id',
            });
            Theme.hasMany(models.Game, {
                foreignKey: 'theme_id',
                sourceKey: 'id',
            });
        }
    }

    Theme.init({
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        icon_url: {
            type: DataTypes.STRING,
            allowNull: true
        },
    }, {
        sequelize,
        modelName: 'Theme',
        tableName: 'themes',
        timestamps: true
    });

    return Theme;
}