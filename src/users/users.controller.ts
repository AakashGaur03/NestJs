import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('users') //   /users
export class UsersController {
  // GET     /users
  // GET     /users/:id
  // POST    /users
  // PATCH   /users/:id
  // DELETE  /users/:id

  //   @Get() // GET /users
  //   findAll() {
  //     return [];
  //   }
  @Get() // GET /users or /users?role=value
  findAll(@Query('role') role?: 'INTERN' | 'ADMIN') {
    return [];
  }

  @Get(':id') //Get /users/:id
  findOne(@Param('id') id: string) {
    return {
      id,
    };
  }

  @Post() // Post // users
  create(@Body() user: {}) {
    return user;
  }

  @Patch(':id') // PATCH   /users/:id
  update(@Param('id') id: string, @Body() userUpdate: {}) {
    return {
      id,
      ...userUpdate,
    };
  }
  @Delete(':id') // DELETE  /users/:id
  delete(@Param('id') id: string) {
    return { id };
  }
}
