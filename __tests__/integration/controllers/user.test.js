import request from 'supertest';
import bcrypt from 'bcryptjs';
import app from '../../../src/app';
import truncate from '../../util/truncate';
import factory from '../../factories';

describe('User', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('shound be able to register client user', async () => {
    const route = '/barber/api/v1/users';
    const userTest = await factory.attrs('User');

    const response = await request(app).post(route).send(userTest);

    expect(response.body).toHaveProperty('id');
  });

  it('shound be able to register provider user', async () => {
    const route = '/barber/api/v1/users';
    const user = await factory.attrs('User');
    const userTest = {
      ...user,
      provider: true,
    };

    const response = await request(app).post(route).send(userTest);

    expect(response.body).toHaveProperty('provider', true);
  });

  it('should not be able to register with duplicated email', async () => {
    const route = '/barber/api/v1/users';
    const userTest = await factory.attrs('User');

    await request(app).post(route).send(userTest);

    const response = await request(app).post(route).send(userTest);

    expect(response.status).toBe(400);
  });

  it('should encrypt user password when new user created', async () => {
    const userTest = {
      password: '123456',
    };

    const user = await factory.create('User', userTest);

    const compareHash = await bcrypt.compare(
      userTest.password,
      user.password_hash
    );

    expect(compareHash).toBe(true);
  });
});
