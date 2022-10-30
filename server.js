require('dotenv').config()

const PORT = process.env.PORT
const HOST = process.env.HOST



const app = require("./index")

app.listen(PORT, () => {
	console.log(`Port is listening at ${process.env.PORT}`)
})
