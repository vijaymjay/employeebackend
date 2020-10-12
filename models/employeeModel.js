require('dotenv').config()
const db = require('../models/db');


module.exports = () =>{
	
	const getList = (req,result)=>{
			
		  db.Employee.find({}).exec((err,data)=>{
			if(err){
				console.log(err);
				result({});
			}
			
			result(data)
		})
	}
	
	const create = (req,res,next)=>{
		
		if (Object.keys(req.body).length > 0) {
		
			db.conn.collection('employee').insertOne(req.body,function(err,result){
				if(err){
					res.status(400).send({status:'error',message:'Not inserted'})
				}
				res.status(200).send({status:'success',message:'Created Successfully'})	
			})
		}
		else {
			res.status(400).send({status:'error',message:'Invalid Request'})
		}
	}
	
	const getById = (req,result)=>{
		
		db.Employee.findOne({'_id':req.params.id}).exec((err,data)=>{
			if(err){
				result({});
			}
			result(data)
		})
	}
	
	const updateById = (req,result)=>{
		
		var query = {'_id':req.params.id};
		
		db.Employee.findOneAndUpdate(query,req.body,function(err,data){
			if(err){
				result({});
			}
			result(data)	
		})
	}
	
	const removeById = (req,res,next) =>{
		db.Employee.findOneAndRemove({'_id':req.params.id},function(err){
			if(err){
				res.status(400).send({status:'error',message:'Error Occured'})
			}
			
			res.status(200).send({status:'success',message:'Deleted Successfully'})	
		})
	}
	
	
	return {
		getList : getList,
		create : create,
		getById:getById,
		updateById:updateById,
		removeById:removeById
	}
}

