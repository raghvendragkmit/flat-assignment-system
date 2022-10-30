const request = require("supertest")
const app = require("../index")

describe("Space test suite", () => {
	it("tests /api/login for response 200 succesfull login", async () => {
		const response = await request(app).post("/api/login").send({
			email: "ttdtyewt@gmail.com",
			password: "yuvraj13413",
		})
		expect(response.statusCode).toBe(200)
		expect(response.body).toHaveProperty("message")
		expect(response.body).toHaveProperty("token")
	})

	it("tests /api/login for response 400 empty fields", async () => {
		const response = await request(app).post("/api/login").send({
			email: "",
			password: "",
		})
		expect(response.statusCode).toBe(400)
		expect(response.body).toEqual({
			message: "please enter email and password",
		})
	})

	

	it("tests /api/login for response 404", async () => {
		const response = await request(app).post("/api/login").send({
			email: "rtar@gmail.com",
			password: "hathfaf",
		})
		expect(response.statusCode).toBe(404)
		expect(response.body).toEqual({
			message: "email address is not registered yet",
		})
    })
    
    it("tests /api/login for response 404", async () => {
		const response = await request(app).post("/api/login").send({
			email: "ttdtyewt@gmail.com",
			password: "hathfaf",
		})
		expect(response.statusCode).toBe(404)
		expect(response.body).toEqual({
			message: "wrong credentials",
		})
	})
})
