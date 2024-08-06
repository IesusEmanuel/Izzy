import { Sequelize } from "sequelize";

const sequelize = new Sequelize("mysql://root:root@localhost:3306/db_teste");
//const sequelize = new Sequelize("mysql://root@localhost:3306/db_teste");
sequelize.sync();

export default sequelize;