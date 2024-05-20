const Todo = require("../models/Todo");

exports.updateTodo = async(req,res)=>{
    try{
        const {id} = req.params;
        const {title,description} = req.body ;
        const todo = await Todo.findByIdAndUpdate(
            {_id:id},
            {title,description,updatedAt:Date.now()},
        )
        res.status(200).json({
            success:true,
            data:todo,
            message:"Todo Data is Updated Successfully by ID",
        });
    }
    catch(err){
        console.error(err);
        console.log(err.message);
        res.status(500).json({
            success:false,
            error:err.message,
            message:"Server Error"
        });
    }
}