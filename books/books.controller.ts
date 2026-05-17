import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UsersService } from './books.service';

@Controller('users')
export class UsersController{
   constructor(private readonly usersService: UsersService){}
 
   @Get()
  getUsers(){
    return this.usersService.getUser();
  }

  @Get(':id')
  getUserId(@Param('id') id:string){
    return this.usersService.getUserId(Number(id))
  }

 @Post()
  postUser(@Body() body: any){
    return this.usersService.postUser(body)
  }

  @Patch(':id')
  updateUser(@Param('id') id: string,@Body() body: any){
       return this.usersService.updateUser(Number(id),body)
  }

  @Delete(':id')
   deleteUser(@Param('id') id:string){
    return this.usersService.deleteUser(Number(id))
   }

}

