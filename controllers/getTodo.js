
const Todo = require("../models/Todo");

exports.getTodo = async(req, res)=>{
    try{
        const todos = await Todo.find({});

        //response
        res.status(200).json({
            success:true,
            data:todos,
            message:"Entire Todo Data is Fetched",
        })

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