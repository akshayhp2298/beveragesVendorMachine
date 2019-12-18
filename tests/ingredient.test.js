const request = require('supertest')
const app = require('../server')
describe('Post Endpoints', () => {
  it('should create a new ingredient', async () => {
    const res = await request(app)
      .post('/api/ingredients/create')
      .send({})
    expect(res.statusCode).toEqual(404)
    expect(res.body.done).toEqual(false)
    expect(res.body.message).toEqual("ingredient or quantity not found")
  })
  it('should create a new ingredient', async () => {
    const res = await request(app)
      .post('/api/ingredients/create')
      .send({
        ingredient:"coffee",
        quantity:10,
      })
    expect(res.statusCode).toEqual(200)
    expect(res.body.done).toEqual(true)
  })
  it('should return ingredient not found for add quantity of ingredient', async () => {
    const res = await request(app)
      .put('/api/ingredients/add/quantity/coffeee/10')
    expect(res.statusCode).toEqual(404)
  })
  it('should add quantity of ingredient', async () => {
    const res = await request(app)
      .put('/api/ingredients/add/quantity/coffee/10')
    expect(res.statusCode).toEqual(200)
  })
})