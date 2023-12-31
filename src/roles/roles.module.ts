import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";

import { RolesController } from "./roles.controller";
import { RolesService } from "./roles.service";
import { RolesModel } from "./roles.model";

@Module({
  controllers: [RolesController],
  providers: [RolesService],
  imports: [SequelizeModule.forFeature([RolesModel])],
})
export class RolesModule {}
