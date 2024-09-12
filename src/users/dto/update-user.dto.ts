import { CreateUserDto } from './create-user.dto';
import { PartialType } from '@nestjs/mapped-types';

// This is that we can use CreateUserDto for update means that name email and role will be as optional in this

export class UpdateUserDto extends PartialType(CreateUserDto) {}
