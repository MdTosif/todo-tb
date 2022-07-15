/* eslint-disable no-underscore-dangle */
const request = require('supertest');
const app = require('../../index');

const server = request(app);
jest.useFakeTimers();

describe('Todo Apis', () => {
  it('should not create a todo item', async () => {
    const res = await server
      .post('/todo')
      .send({ name: 'interv', isActive: true });
    expect(res).not.toBe({});
    expect(res.status).toBe(400);
    expect(res.body).toEqual(expect.objectContaining({ message: 'jwt must be provided' }));
  });

  it('CRUD todo item', async () => {
    // create
    server
      .post('/todo')
      .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyY2ZlZTY5OWJlNGFmYzkwYzBjYTg1OCIsImlhdCI6MTY1Nzc5OTE3OH0.4-5OLyXKIFO-adUjcCaIHHLv-PKsF_j3VcL1cWdwiMM')
      .send({ name: 'interv', isActive: true })
      .expect(200)
      .then((res) => {
        expect(res).not.toBe({});
        expect(res.status).toBe(200);
        expect(res.body.item).not.toBeNull();
        expect(res.body.item).not.toBeUndefined();
        expect(res.body).not.toEqual(expect.objectContaining({ message: 'jwt must be provided' }));

        const id = res.body.item._id;
        // get todo item by id
        server
          .get(`/todo/${id}`)
          .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyY2ZlZTY5OWJlNGFmYzkwYzBjYTg1OCIsImlhdCI6MTY1Nzc5OTE3OH0.4-5OLyXKIFO-adUjcCaIHHLv-PKsF_j3VcL1cWdwiMM')
          .then((resp) => {
            expect(resp).not.toBe({});
            expect(resp.status).toBe(200);
            expect(resp.body).not.toEqual(expect.objectContaining({ message: 'jwt must be provided' }));
            const { item } = resp.body;
            expect(item).not.toBeNull();
            expect(item).not.toBeUndefined();
            expect(item).toEqual(expect.any(Object));
          });

        // update todo item by id
        server
          .patch(`/todo/${id}`)
          .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyY2ZlZTY5OWJlNGFmYzkwYzBjYTg1OCIsImlhdCI6MTY1Nzc5OTE3OH0.4-5OLyXKIFO-adUjcCaIHHLv-PKsF_j3VcL1cWdwiMM')
          .send({ name: 'code', isActive: true })
          .then((resp) => {
            expect(resp).not.toBe({});
            expect(resp.status).toBe(200);
            expect(resp.body).not.toEqual(expect.objectContaining({ message: 'jwt must be provided' }));
            const { item } = resp.body;
            expect(item).not.toBeNull();
            expect(item).not.toBeUndefined();
            expect(item).toEqual(expect.any(Object));
          });

        // delete todo item by id
        server
          .delete(`/todo/${id}`)
          .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyY2ZlZTY5OWJlNGFmYzkwYzBjYTg1OCIsImlhdCI6MTY1Nzc5OTE3OH0.4-5OLyXKIFO-adUjcCaIHHLv-PKsF_j3VcL1cWdwiMM')
          .then((resp) => {
            expect(resp).not.toBe({});
            expect(resp.status).toBe(200);
            expect(resp.body).not.toEqual(expect.objectContaining({ message: 'jwt must be provided' }));
            const { item } = resp.body;
            expect(item).not.toBeNull();
            expect(item).not.toBeUndefined();
            expect(item).toEqual(expect.any(Object));
          });
      });
  });
});
