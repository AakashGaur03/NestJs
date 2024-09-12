import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { NotFoundException } from '@nestjs/common';
@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      email: 'alice@example.com',
      name: 'Alice Johnson',
      role: 'ADMIN',
    },
    {
      id: 2,
      email: 'bob@example.com',
      name: 'Bob Smith',
      role: 'ENGINEER',
    },
    {
      id: 3,
      email: 'charlie@example.com',
      name: 'Charlie Brown',
      role: 'INTERN',
    },
    {
      id: 4,
      email: 'david@example.com',
      name: 'David Williams',
      role: 'ENGINEER',
    },
    {
      id: 5,
      email: 'eve@example.com',
      name: 'Eve Davis',
      role: 'ADMIN',
    },
    {
      id: 6,
      email: 'frank@example.com',
      name: 'Frank Miller',
      role: 'INTERN',
    },
    {
      id: 7,
      email: 'grace@example.com',
      name: 'Grace Lee',
      role: 'ENGINEER',
    },
    {
      id: 8,
      email: 'harry@example.com',
      name: 'Harry Evans',
      role: 'ADMIN',
    },
    {
      id: 9,
      email: 'isabelle@example.com',
      name: 'Isabelle Taylor',
      role: 'INTERN',
    },
    {
      id: 10,
      email: 'jack@example.com',
      name: 'Jack White',
      role: 'ENGINEER',
    },
  ];

  findAll(role?: 'INTERN' | 'ADMIN' | 'ENGINEER') {
    if (role) {
      const rolesArray = this.users.filter((user) => user.role === role);

      if (rolesArray.length === 0)
        throw new NotFoundException('User Role Not Found');

      return rolesArray;
    }
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((user) => user.id === id);

    if (!user) throw new NotFoundException('User Not Found');

    return user;
  }

  create(createUserDto: CreateUserDto) {
    const usersByHighestId = [...this.users].sort((a, b) => b.id - a.id);
    const newUser = {
      id: usersByHighestId[0].id + 1,
      ...createUserDto,
    };

    this.users.push(newUser);
    return newUser;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return { ...user, ...updateUserDto };
      }
      return user;
    });

    return this.findOne(id);
  }

  delete(id: number) {
    const removedUser = this.findOne(id);
    this.users = this.users.filter((user) => user.id !== id);

    return removedUser;
  }
}
