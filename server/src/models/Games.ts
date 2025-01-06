import { DataTypes } from "sequelize";
import { Model, Table, Column, DataType, PrimaryKey, Default, } from "sequelize-typescript";
import { v4 } from "uuid";

@Table({
    tableName: "games",
    timestamps: false,
})
export class Games extends Model {

    @PrimaryKey
    @Default(v4)
    @Column({
        type: DataType.UUID
    })
    id!: string;


    @Column({
        type: DataType.STRING(255),
        allowNull: true,
        unique: true

    })
    name!: string;

    @Column({
        type: DataType.TEXT,
        allowNull: true,

    })
    desc!: string;

    @Column({
        type: DataTypes.ENUM({
            values: [
                'PlayStation',
                'Xbox',
                'Windows',
                'Nintendo Switch',
                'Nintendo 3DS',
                'Nintendo Wii',
                'Nintendo Wii U',
                'Steam Deck',
                'Android',
                'iOS',
                'VR',
                'Stadia',
                'Amazon Luna',
                'Mac',
                'Linux',
                'Atari',
                'Sega',
                'Game Boy',
                'PSP',
                'PS Vita'
            ]
        }),
        allowNull: true
    })
    platforms!: string;

    @Column({
        type: DataType.STRING(64),
        allowNull: true
    })
    developer!: string;

    @Column({
        type: DataType.STRING(64),
        allowNull: true
    })
    publisher!: string;

    @Column({
        type: DataTypes.ENUM({
            values: [
                'Action',
                'Adventure',
                'RPG',
                'Shooter',
                'Platformer',
                'Simulation',
                'Strategy',
                'Puzzle',
                'Racing',
                'Sports',
                'Fighting',
                'Horror',
                'Survival',
                'MMO',
                'MOBA',
                'Idle',
                'Card',
                'Party',
                'Music',
                'Stealth',
                'Visual Novel',
                'Sandbox',
                'Open World',
                'Bullet Hell',
                'Rogue-like',
                'Tower Defense',
                'Educational',
                'Trivia',
            ]
        }),
        allowNull: true
    })
    genres!: string;

    @Column({
        type: DataTypes.ENUM({
            values: [
                'Singleplayer',
                'Multiplayer',
                'Co-op',
                'PvP',
                'PvE',
                'Battle Royale',
                'MMORPG',
                'Split-Screen',
                'LAN',
            ]
        }),
        allowNull: true
    })
    gameModes!: string;

    @Column({
        type: DataType.STRING(64),
        allowNull: true
    })
    engine!: string;

    @Column({
        type: DataType.TEXT,
        allowNull: true
    })
    coverImgPath!: string;

    @Column({
        type: DataType.TEXT,
        allowNull: true
    })
    ytbTrailerLink!: string;


}
