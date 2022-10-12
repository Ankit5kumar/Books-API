const jwt = require('jsonwebtoken');
require("dotenv").config();

async function verifyToken(req,res,next){
	const token = req.headers['access-token'];

	if(token){
		try{
			const result = await jwt.verify(token, process.env.JWT_SECRET_KEY)
			if(result){
				next()
			}else{
				res.status(400).send({msg : 'auth token has expired. Please relogin'})
				return;
			}
		}catch(err){
			res.status(400).send({msg : 'auth token has expired. Please relogin'})
			return;	
		}


	}else{
		res.status(401).send({msg : 'auth token is missing'})
		return;
	}
}

module.exports = {
    verifyToken
}