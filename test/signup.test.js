// const request = require("supertest")
// const app = require("../index")

// describe("Space test suite", () => {
// 	it("tests /api/signup for response 201 succesfull signup", async () => {
// 		const response = await request(app).post("/api/signup").send({
// 			firstName: "raj",
// 			lastName: "h Chouhan",
// 			email: "ttdtyewt@gmail.com",
// 			password: "yuvraj13413",
// 			userType: "Admin",
// 			contactNo: "6755458",
// 			companyName: "Chouhan Empire",
// 		})
// 		expect(response.body).toEqual({
// 			message: "Registered successfully please login",
// 		})
// 		// expect(response.body).toHaveLength(1)
// 		expect(response.statusCode).toBe(201)
// 	})

// 	it("tests /api/signup for response code 409 ", async () => {
// 		const response = await request(app).post("/api/signup").send({
// 			firstName: "Yuvraj",
// 			lastName: "Singh Chouhan",
// 			email: "jdgwydtwiydyiweudytt@gmail.com",
// 			password: "yuvraj13413",
// 			userType: "Admin",
// 			contactNo: "6755458754555",
// 			companyName: "Chouhan Empire",
// 		})
// 		expect(response.body).toEqual({ message: "account already exist please login" })
// 		expect(response.statusCode).toBe(409)
// 	})

// 	it("tests /api/signup for response code 400 enter all details ", async () => {
// 		const response = await request(app).post("/api/signup").send({
// 			firstName: "",
// 			lastName: "",
// 			email: "jd@gmail.com",
// 			password: "yuvraj13413",
// 			userType: "Admin",
// 			contactNo: "6755458754555",
// 			companyName: "Chouhan Empire",
// 		})
// 		expect(response.body).toEqual({
// 			message: "please enter all required  details",
// 		})
// 		expect(response.statusCode).toBe(400)
// 	})

// 	it("tests /api/signup for response 400 enter a valid userType", async () => {
// 		const response = await request(app).post("/api/signup").send({
// 			firstName: "Vinay",
// 			lastName: "Agarwal",
// 			email: "hwdgyedwd@gmail.com",
// 			password: "yuvraj13413",
// 			userType: "gdyewy",
// 			contactNo: "6755458675",
// 			companyName: "Chouhan Empire",
// 		})
// 		expect(response.body).toEqual({
// 			message: "Please enter a valid userType",
// 		})
// 		expect(response.statusCode).toBe(400)
// 	})
// })
