import { DataTypes, Model } from "sequelize";

export default (sequelize) => {
    class Game extends Model {
        static associate(models) {
            Game.belongsTo(models.Theme, { foreignKey: 'theme_id' });
            Game.hasMany(models.GameCard, { foreignKey: 'game_id', sourceKey: 'id' });
        }
    }
    Game.init({
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        theme_id: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: 'themes',
                key: 'id'
            }
        },
        score: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        start_time: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        end_time: {
            type: DataTypes.DATE,
            allowNull: true
        },
    }, {
        sequelize,
        modelName: 'Game',
        tableName: 'games',
        timestamps: false
    });

    return Game;
}