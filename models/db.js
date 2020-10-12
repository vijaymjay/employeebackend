require('dotenv').config()
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_DB_URL, { useNewUrlParser: true }, (err) => {
    if (!err) { console.log('MongoDB Connection Succeeded.') }
    else { console.log('Error in DB connection : ' + err) }
});
var conn = mongoose.connection;


var employeeSchema = new mongoose.Schema({
    
	employeeName: String,
    employeeid: Number,
	street:String,
	city:String,
	state:String,
	zip:String,
	role:String,
	department:String,
	skillset:String,
	dateofbirth:Date,
	dateofjoining:Date,
	status:Number
}
, { collection: 'employee' });

var Employee = mongoose.model('employee', employeeSchema);



module.exports = {
	conn : conn,
	Employee : Employee
};

