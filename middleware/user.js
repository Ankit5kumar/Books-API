const {User, Role, Sequelize} = require('../models')

async function checkDuplicateUsernameAndEmail(req,res,next){
	if(req.body.username){
		const user = await User.findOne({
			where : {
				username:req.body.username
			}
		})

		if(user){
			res.status(400).send({msg : 'Username already exist'})
			return;
		}
	} 

	if(req.body.email){
		const user = await User.findOne({
			where : {
				email:req.body.email
			}
		}) 

		if(user){
			res.status(400).send({msg : 'email already exist'})
			return;
		}
	}

	next()

}

module.exports = {
    checkDuplicateUsernameAndEmail
}