
const Todo = require("../models/Todo");

exports.getTodo = async(req, res)=>{
    try{
        const todos = await Todo.find({});

        //response
        res.status(200).json({
            success:true,
            data:todos,
            message:"Entire Todo Data is Fetched",
        });

    }
    catch(err){
        console.error(err);
        console.log(err.message);
        res.status(500).json({
            success:false,
            error:err.message,
            message:"Server Error"
        })
    }
}

exports.getTodoById = async(req, res)=>{
    try{
        const id = req.params.id;
        const todo = await Todo.findById({_id: id});

        if(!todo){
            return res.status(404).json({
                success:false,
                message:"Id not valid/found"
            })
        }
        res.status(200).json({
            success:true,
            data:todo,
            message:`Todo Data with id: ${id} is Fetched`,
        })

    }
    catch(err){
        console.log(err.message);
        console.error(err);
        res.status(500).json({
            success:false,
            error:err.message,
            message:"Server Error"
        })
    }
}