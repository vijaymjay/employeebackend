const express = require('express'),
      router = express.Router(),
	 employeeController = require('../controllers/employeeController')(),  
	  employeeModel = require('../models/employeeModel')();

router.post('/ajax/save', employeeModel.create);  
router.get('/ajax/list', employeeController.getAllList); 
router.get('/edit/:id',employeeController.getById);
router.post('/update/:id',employeeController.updateById)
router.get('/delete/:id', employeeModel.removeById);  


module.exports = router;
	  
	  
