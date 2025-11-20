import { registerAs } from '@nestjs/config';

export default registerAs('jwt', () => ({
  secret: process.env.JWT_ACCESS_TOKEN_SECRET,
  access_token_expires: process.env.JWT_ACCESS_TOKEN_EXPIRES,

  refresh_token_secret: process.env.JWT_REFRESH_TOKEN_SECRET,
  refresh_token_expires: process.env.JWT_REFRESH_TOKEN_EXPIRES,
}));
