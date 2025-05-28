import { DataTypes, Model } from "sequelize";

export default (sequelize) => {
    class Card extends Model {
        static associate(models) {
            Card.belongsTo(models.Theme, {foreignKey: 'theme_id'});
            Card.hasMany(models.GameCard, { foreignKey: 'card_id' , sourceKey: 'id' });
        }
    }

    Card.init({
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
        word: {
            type: DataTypes.STRING,
            allowNull: false
        },
        icon_url: {
            type: DataTypes.STRING,
            allowNull: true
        },
    }, {
        sequelize,
        modelName: 'Card',
        tableName: 'cards',
        timestamps: true
    });

    return Card;
}