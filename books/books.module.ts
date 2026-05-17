import { Module } from '@nestjs/common';
import { UsersService} from './books.service';
import { UsersController } from './books.controller';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
})
export class BooksModule {}
