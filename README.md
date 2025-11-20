<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

# 🔐 NestJS Auth Starter Template

A robust, production-ready NestJS template for user management and JWT authentication. Ideal as a starting point for any authentication project.

> **How to use this template:** Click the **"Use this template"** button at the top of the GitHub repository page.

## Features

### User Management
- **Registration:** Allows users to create an account with secure passwords using bcrypt.
- **Login:** Authenticates users via email and password, issuing JWT access and refresh tokens upon successful login.
- **Token Management:**
  - Access tokens for short-term authentication.
  - Refresh tokens to obtain new access tokens without re-authentication.
- **Authorization:** Protects routes using guards to ensure only authenticated users can access specific endpoints.

### Environment Configuration
- Uses environment variables to manage sensitive configurations such as database URIs, JWT secrets, and token expiration times.
- Centralized configuration ensures flexibility and security during deployment.

## Project Setup

```bash
npm install
```

## Compile and Run the Project

```bash
# development
npm run start
# watch mode
yarn start:dev

# production mode
npm run start:prod
```

## Run Tests

```bash
# unit tests
npm run test

# e2e tests
npm run test:e2e

# test coverage
npm run test:cov
```

## Resources

Useful resources when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.

## Environment Variables

To configure your application, set the following environment variables:

```plaintext
DB_URI=mongodb://localhost:27017/login-api
JWT_SECRET=your_jwt_secret
JWT_ACCESS_TOKEN_EXPIRES=3600s
JWT_REFRESH_TOKEN_SECRET=your_refresh_token_secret
JWT_REFRESH_TOKEN_EXPIRES=7d
```

## Support

Nest is an open-source project licensed under MIT. It grows thanks to sponsors and the support of amazing contributors. If you want to join them, please [read more here](https://docs.nestjs.com/support).

## Contact

- Project Manager - [Linerol TCHECOUNNOU](mailto:sessiessenamlinerol.tchecounnou@ynov.com)
- Backend Developer - [Jenny CHOUFACK](mailto:jenny.choufack@ynov.com)
- Backend Developer - [Hanim MOUSSA YARI](mailto:hanimorounassara.moussayari@ynov.com)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
