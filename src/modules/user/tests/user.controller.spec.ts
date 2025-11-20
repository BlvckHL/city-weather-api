import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from '../user.controller';
import { UserService } from '../user.service';
import { User } from '../schema/user.schema';
import { AuthGuard } from '../../auth/guard/auth.guard';
import { JwtService } from '@nestjs/jwt';

describe('UserController', () => {
  let controller: UserController;
  let service: UserService;

  const mockUserService = {
    findAll: jest.fn(() => [
      {
        _id: '1',
        email: 'user1@example.com',
        firstName: 'John',
        lastName: 'Doe',
        password: 'hashedpassword',
      },
      {
        _id: '2',
        email: 'user2@example.com',
        firstName: 'Jane',
        lastName: 'Doe',
        password: 'hashedpassword',
      },
    ]),
    findById: jest.fn((id: string) => ({
      _id: id,
      email: 'user@example.com',
      firstName: 'John',
      lastName: 'Doe',
      password: 'hashedpassword',
    })),
    create: jest.fn((user: Partial<User>) => ({
      _id: '3',
      ...user,
    })),
    update: jest.fn((id: string, user: Partial<User>) => ({
      _id: id,
      ...user,
    })),
    delete: jest.fn((id: string) => ({
      message: `User with id ${id} deleted`,
    })),
  };

  const mockAuthGuard = {
    canActivate: jest.fn(() => true), // Simule l'autorisation
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        {
          provide: UserService,
          useValue: mockUserService,
        },
        {
          provide: JwtService,
          useValue: {}, // Mock vide pour JwtService
        },
      ],
    })
      .overrideGuard(AuthGuard)
      .useValue(mockAuthGuard) // Mock du AuthGuard
      .compile();

    controller = module.get<UserController>(UserController);
    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getAllUsers', () => {
    it('should return an array of users', async () => {
      const result = await controller.getAllUsers();
      expect(result).toEqual(mockUserService.findAll());
      expect(service.findAll).toHaveBeenCalled();
    });
  });

  describe('getUserById', () => {
    it('should return a single user by ID', async () => {
      const result = await controller.getUserById('1');
      expect(result).toEqual(mockUserService.findById('1'));
      expect(service.findById).toHaveBeenCalledWith('1');
    });
  });

  describe('createUser', () => {
    it('should create a new user', async () => {
      const newUser = {
        email: 'newuser@example.com',
        firstName: 'New',
        lastName: 'User',
        password: 'hashedpassword',
      };
      const result = await controller.create(newUser as User);
      expect(result).toEqual(mockUserService.create(newUser));
      expect(service.create).toHaveBeenCalledWith(newUser);
    });
  });

  describe('updateUser', () => {
    it('should update an existing user', async () => {
      const updatedUser = { firstName: 'Updated', lastName: 'User' };
      const result = await controller.update('1', updatedUser as User);
      expect(result).toEqual(mockUserService.update('1', updatedUser));
      expect(service.update).toHaveBeenCalledWith('1', updatedUser);
    });
  });

  describe('deleteUser', () => {
    it('should delete a user by ID', async () => {
      const result = await controller.remove('1');
      expect(result).toEqual(mockUserService.delete('1'));
      expect(service.delete).toHaveBeenCalledWith('1');
    });
  });
});
