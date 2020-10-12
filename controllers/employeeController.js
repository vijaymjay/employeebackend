const employeeModel = require('../models/employeeModel')();

module.exports = () =>{
	
	const getAllList = (req,res,next) => {
		
		employeeModel.getList(req,function(obj){
			
			if (Object.keys(obj).length > 0) {
				res.status(200).send({status:'success',data:obj})	
			}
			else {
				res.status(400).send({status:'failed'})	
			}
		})
	}
	

	const getById = (req,res,next) => {
		
		if(req.params.id != ''){
		employeeModel.getById(req,function(obj){
			
			if (Object.keys(obj).length > 0) {
				res.status(200).send({status:'success',data:obj})	
			}
			else {
				res.status(400).send({status:'failed'})	
			}
		})
			
		}
		else{
			res.status(400).send({status:'failed',message:'Invalid Request'})	
		}
	}
	
	const updateById = (req,res,next) =>{
		if(req.params.id != ''){
			employeeModel.updateById(req,function(obj){
				if (Object.keys(obj).length > 0) {
					res.status(200).send({status:'success',message:'Updated Successfully'})	
				}
				else {
					res.status(400).send({status:'failed'})	
				}	
			})
		}
		else{
			res.status(400).send({status:'failed',message:'Invalid Request'})	
		}	
	}
	
	
	return {
		getAllList:getAllList,
		getById:getById,
		updateById:updateById
	}
}