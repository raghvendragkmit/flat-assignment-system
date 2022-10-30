const express = require("express")

exports.checkUserType = (req, res, next) => {
	const  userType  = req.body.userType
	console.log(userType)

	if (userType == "Admin" || userType == "Tenant" || userType == "Employee") {
		next()
	} else {
		return res.status(400).json({
			message: "Please enter a valid userType",
		})
	}
}
