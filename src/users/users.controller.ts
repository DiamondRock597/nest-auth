import { Controller, Post, Body, Get } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";

import { CreateUserDto } from "./dto/create-user.dto";
import { UsersService } from "./users.service";
import { UserModel } from "./users.model";

@ApiTags("Users")
@Controller("users")
export class UsersController {
  constructor(private userService: UsersService) {}

  @ApiOperation({ summary: "Create user" })
  @ApiResponse({ status: 200, type: UserModel })
  @Post("")
  create(@Body() userDto: CreateUserDto) {
    return this.userService.createUser(userDto);
  }
  @ApiOperation({ summary: "Get all users" })
  @ApiResponse({ status: 200, type: Array<UserModel> })
  @Get("")
  getAllUsers() {
    return this.userService.getAllUsers();
  }
}
