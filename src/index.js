import dotenv from "dotenv";
import app from "./app.js";
import sequelize from "./config/database.js";

dotenv.config();

const PORT = process.env.PORT;

async function main() {
  try {
    await sequelize.authenticate();

    console.log("MySQL connected");

    await sequelize.sync({ alter: true });

    console.log("Tables synchronized");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();