import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MinLength } from 'class-validator';

export class LoginDto {
  @ApiProperty({
    example: 'john.doe@example.com',
    description: "L'email de l'utilisateur",
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    example: 'password123',
    description: 'Le mot de passe de lutilisateur',
    minLength: 8,
  })
  @IsString()
  @MinLength(8)
  password: string;
}
