// const request = require("supertest")
// const app = require("../index")

// // let token = ""

// beforeAll(async () => {
// 	const response = await request(app).post("/api/login").send({
// 		email: "yuvraj@gmail.com",
// 		password: "yuvraj13413",
// 	})
// 	token = response.body.token
// })

// describe("Space test suite", () => {
// 	it("tests /api/user for response 200 succesfull login", async () => {
// 		const response = await request(app).get("/api/user").set("Authorization", `Bearer ${token}`)
// 		expect(response.statusCode).toBe(200)
// 		toBeTruthy(Array.isArray(response.body))
// 	})
// })
