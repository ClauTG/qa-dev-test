const request = require('supertest');
const jestJoi = require('jest-joi');
const Schemas = require('./schemas');

var Chance = require('chance');

const baseURL = 'http://localhost:8080/api/v3';

describe('Testing de APIs en Pet Store', () => {
  expect.extend(jestJoi.matchers);

  it('Comprobar nombre de mascotas vendidas', async () => {
    const idNamePets = 
      [
        [1, 'Cat 1'],
        [2, 'Cat 2'],
        [4, 'Dog 1'],
        [7, 'Lion 1'],
        [8, 'Lion 2'],
        [9, 'Lion 3'],
        [10, 'Rabbit 1'],
      ];

    const response = await request(baseURL)
      .get('/pet/findByStatus')
      .query({ status: 'available' });

    const body = response.body;
    expect(response.statusCode).toBe(200);
    expect(body).toMatchSchema(Schemas['/pet/findByStatus']);

    const getIdNames = getPets(body);
    expect(getIdNames).toMatchObject(idNamePets);
  });

  it('Comprobar creación de usuarios', async () => {
    var chance = new Chance();

    const payload = {
      id: chance.natural({ min: 20, max: 1000 }),
      username: chance.word({ syllables: 3 }),
      firstName: chance.first(),
      lastName: chance.last(),
      email: chance.email(),
      password: chance.string({ length: 8 }),
      phone: `${chance.natural({ min: 600000000, max: 999999999 })}`,
      userStatus: 1,
    };

    const response = await request(baseURL)
      .post('/user')
      .send(payload)
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json');

    const bodyCreateUser = response.body;

    expect(response.statusCode).toBe(200);
    expect(bodyCreateUser).toMatchSchema(Schemas['/user']);

    const getUserInfo = await request(baseURL)
      .get(`/user/${payload.username}`)
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json');

    const bodyGetUser = getUserInfo.body;
    expect(getUserInfo.statusCode).toBe(200);
    expect(bodyCreateUser).toMatchSchema(Schemas['/user']);
    expect(bodyGetUser).toMatchObject(payload);
  });
});

function getPets(pets) {
  let petsObj = [];
  pets.forEach((element) => {
    var id = element['id'];
    var name = element['name'];
    petsObj.push([id, name]);
  });
  return petsObj;
}
