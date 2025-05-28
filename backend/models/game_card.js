import { DataTypes, Model } from "sequelize";

export default (sequelize) => {
    class GameCard extends Model {
        static associate(models) {
            GameCard.belongsTo(models.Game, { foreignKey: 'game_id' });
            GameCard.belongsTo(models.Card, { foreignKey: 'card_id' });
            GameCard.hasMany(models.Move, { foreignKey: 'game_card_id', sourceKey: 'id' });
        }
    }
    GameCard.init({
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        game_id: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: 'games',
                key: 'id'
            }
        },
        card_id: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: 'cards',
                key: 'id'
            }
        },
        position_x: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        position_y: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        is_matched: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    }, {
        sequelize,
        modelName: 'GameCard',
        tableName: 'game_cards',
        timestamps: true
    });

    return GameCard;
}