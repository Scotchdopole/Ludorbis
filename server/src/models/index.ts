import sequelize from "../config/db";
import { Games } from "./Games";
sequelize.addModels([Games]);


(async () => {
    try {
        await sequelize.authenticate();
        console.log("Connected to DB")

        await sequelize.sync({ force: true })

    } catch (error) {
        console.log(error);
    }
})();
