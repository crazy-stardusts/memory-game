import { DataTypes, Model } from "sequelize";

export default (sequelize) => {
    class Moves extends Model {
        static associate(models) {
            Moves.belongsTo(models.GameCard, { foreignKey: 'game_card_id' });
        }
    }

    Moves.init({
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        game_card_id: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: 'game_cards',
                key: 'id'
            }
        },
        is_match: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    }, {
        sequelize,
        modelName: 'Moves',
        tableName: 'moves',
        timestamps: true
    });

    return Moves;
}