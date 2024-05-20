//import Todo model
const Todo = require("../models/Todo");

//define route handler
exports.createTodo = async(req, res)=>{
    try{
        const {title, description} = req.body;
        const response = await Todo.create({title, description});
        // res.send("Heee hi hee")
        res.status(200).json(
            {
                success:true,
                data:response,
                message:'Entry Created Successfully'
            }
        );
    }
    catch(err){
        console.error(err);
        console.log(err.message);
        res.status(500).json(
            {
                success:false,
                data:"Internal server error",
                message:'Entry Failed'
            }
        );
    }
}