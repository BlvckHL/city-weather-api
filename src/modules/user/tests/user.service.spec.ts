import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from '../user.service';
import { getModelToken } from '@nestjs/mongoose';
import { User } from '../schema/user.schema';
import * as bcrypt from 'bcrypt';
import { Model, Document } from 'mongoose';

interface UserDocument extends Document {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

describe('UserService', () => {
  let service: UserService;

  const mockUser = {
    _id: '1',
    email: 'user@example.com',
    password: 'hashedpassword',
    firstName: 'John',
    lastName: 'Doe',
  };

  // Création d'un mock qui peut être utilisé comme constructeur
  const mockUserModel = function () {
    return {
      save: jest.fn().mockResolvedValue(mockUser),
    };
  } as unknown as Model<UserDocument>;

  // Ajout des méthodes statiques au mock
  mockUserModel.find = jest.fn().mockReturnValue({
    exec: jest.fn().mockResolvedValue([mockUser]),
  });

  mockUserModel.findById = jest.fn().mockReturnValue({
    exec: jest.fn().mockResolvedValue(mockUser),
  });

  mockUserModel.findByIdAndUpdate = jest.fn().mockReturnValue({
    exec: jest.fn().mockResolvedValue({
      ...mockUser,
      firstName: 'Updated',
      password: 'newhashedpassword',
    }),
  });

  mockUserModel.findByIdAndDelete = jest.fn().mockReturnValue({
    exec: jest.fn().mockResolvedValue(mockUser),
  });

  // Ajout de la propriété prototype au mock pour qu'il puisse être utilisé comme constructeur
  mockUserModel.prototype.save = jest.fn().mockResolvedValue(mockUser);

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: getModelToken(User.name),
          useValue: mockUserModel,
        },
      ],
    }).compile();

    service = module.get<UserService>(UserService);

    // Réinitialiser les mocks entre les tests
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should hash the password and create a new user', async () => {
      const createUserDto = {
        email: 'user@example.com',
        password: 'password',
        firstName: 'John',
        lastName: 'Doe',
      };

      const hashedPassword = 'hashedpassword';
      jest
        .spyOn(bcrypt, 'hash')
        .mockImplementation(() => Promise.resolve(hashedPassword));

      const result = await service.create(createUserDto);

      expect(bcrypt.hash).toHaveBeenCalledWith(createUserDto.password, 10);
      expect(result).toEqual(mockUser);
    });
  });

  describe('findAll', () => {
    it('should return all users', async () => {
      const result = await service.findAll();
      expect(mockUserModel.find).toHaveBeenCalled();
      expect(result).toEqual([mockUser]);
    });
  });

  describe('findById', () => {
    it('should return a user by ID', async () => {
      const result = await service.findById('1');
      expect(mockUserModel.findById).toHaveBeenCalledWith('1');
      expect(result).toEqual(mockUser);
    });
  });

  describe('update', () => {
    it('should hash the password and update the user', async () => {
      const updateUserDto = { firstName: 'Updated', password: 'newpassword' };
      const hashedPassword = 'newhashedpassword';

      // Mock bcrypt.hash pour retourner la valeur attendue
      jest
        .spyOn(bcrypt, 'hash')
        .mockImplementation(() => Promise.resolve(hashedPassword));

      const result = await service.update('1', updateUserDto);

      // Vérification que bcrypt.hash a été appelé avec les bons arguments
      expect(bcrypt.hash).toHaveBeenCalledWith('newpassword', 10);

      expect(mockUserModel.findByIdAndUpdate).toHaveBeenCalledWith(
        '1',
        { ...updateUserDto, password: hashedPassword },
        { new: true },
      );

      expect(result).toEqual(
        expect.objectContaining({
          firstName: 'Updated',
          password: 'newhashedpassword',
        }),
      );
    });
  });

  describe('delete', () => {
    it('should delete a user by ID', async () => {
      const result = await service.delete('1');
      expect(mockUserModel.findByIdAndDelete).toHaveBeenCalledWith('1');
      expect(result).toEqual(mockUser);
    });
  });
});
