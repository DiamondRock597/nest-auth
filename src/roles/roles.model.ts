import { ApiProperty } from "@nestjs/swagger";
import { Model, Table, Column, DataType } from "sequelize-typescript";

interface RoleCreationAttributes {
  value: string;
  description: string;
}

@Table({ tableName: "roles" })
export class RolesModel extends Model<RolesModel, RoleCreationAttributes> {
  @ApiProperty({ example: "1", description: "Identificator" })
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ApiProperty({ example: "ADMIN", description: "User Role" })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  value: string;

  @ApiProperty({ example: "Admin", description: "Role description" })
  @Column({ type: DataType.STRING, allowNull: false })
  description: string;
}
