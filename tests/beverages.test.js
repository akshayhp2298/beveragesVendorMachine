const request = require("supertest")
const app = require("../server")
describe("Post Endpoints", () => {
  it("should return 404 for create a new beverages", async () => {
    const res = await request(app)
      .post("/api/beverages/create")
      .send({})
    expect(res.statusCode).toEqual(404)
    expect(res.body.done).toEqual(false)
    expect(res.body.message).toEqual("name or ingredient not found")
  })
  it("should return ingredient not available for create a new beverages", async () => {
    const res = await request(app)
      .post("/api/beverages/create")
      .send({name:"test",ingredient:{nothing:1}})
    expect(res.statusCode).toEqual(404)
    expect(res.body.done).toEqual(false)
    expect(res.body.message).toEqual("ingredient not available")
  })
  it("should create a new beverages", async () => {
    const res = await request(app)
      .post("/api/beverages/create")
      .send({
        name: "half black coffee",
        ingredient: { water: 1, coffee: 1, sugar: 1 }
      })
    expect(res.statusCode).toEqual(200)
    expect(res.body.done).toEqual(true)
  })
  it("should get all beverages", async () => {
    const res = await request(app)
      .get("/api/beverages/get/all")
    expect(res.statusCode).toEqual(200)
    expect(res.body.done).toEqual(true)
  })
  it("should return 404 for order beverages", async () => {
    const res = await request(app)
      .post("/api/beverages/order")
      .send({
        type:"blackcoffee"
      })
    expect(res.statusCode).toEqual(404)
    expect(res.body.done).toEqual(false)
  })
  it("should order beverages", async () => {
    const res = await request(app)
      .post("/api/beverages/order")
      .send({
        type:"black coffee"
      })
    expect(res.statusCode).toEqual(200)
    expect(res.body.done).toEqual(true)
  })
  it("should order beverages", async () => {
    const res = await request(app)
      .post("/api/beverages/order")
      .send({
        type:"black coffee"
      })
    expect(res.statusCode).toEqual(200)
    expect(res.body.done).toEqual(true)
  })
  it("should order beverages", async () => {
    const res = await request(app)
      .post("/api/beverages/order")
      .send({
        type:"black coffee"
      })
    expect(res.statusCode).toEqual(200)
    expect(res.body.done).toEqual(true)
  })
  it("should return quantity not available for order beverages", async () => {
    const res = await request(app)
      .post("/api/beverages/order")
      .send({
        type:"black coffee"
      })
    expect(res.statusCode).toEqual(404)
    expect(res.body.done).toEqual(false)
  })

})
