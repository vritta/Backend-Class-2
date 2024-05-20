const Todo = require("../models/Todo");

exports.deleteTodo = async(req,res)=>{
    try{
        const {id} = req.params;
        // const todo = 
        await Todo.findByIdAndDelete(id);
        res.json({
            success:true,
            // data: todo,
            message:"Deleted with Success"
        });
    }
    catch(err){
        console.err(err);
        console.log(err.message);
        res.status(500).json({
            success:false,
            error:err.message,
            message:"Server Error"
        });
    }
}
// module.exports = deleteTodo;