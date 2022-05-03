const User = require('../models/user_schema');

module.exports.add =  (req,res)=> {
    
    
    User.findOne({username:req.query.username},
         (err,user)=>{

            if(!user){
                const newUser = new User(
                    {
                        name:req.query.name,
                        username:req.query.username,
                        phone:req.query.phone
                    });
             
                    try {
                         newUser.save();
                        res.send('Successfully Added A new User');
                    } catch (error) {
                        console.log('Unsuccessful in adding the user.')
                    }

            }
            else if(user){
                res.send('User Exists');
            }
            else if(err){
                console.log(err);
            }


    })
    



}

module.exports.update = (req,res)=> {
     User.findByIdAndUpdate({_id:req.query._id},{name:req.query.name,username:req.query.username,phone:req.query.phone}
        ,(err,updatedUser) => {
            if(err){
                console.log('error while updating the user');
            }
            else{
                res.send(updatedUser);
                console.log('Successfully  Updated the User')
            }

        })

    }





module.exports.delete = (req,res)=> {
    console.log(req)
     User.findByIdAndDelete({_id:req.body._id},
        (err,deleted)=>{
            if(err){
                console.log('Error while deleting the user');
            }
            else{
                    User.find({},(err,userList)=>{
                    return res.send({users:userList});
                    })
                
            }
        })
}

module.exports.allUsers = (req,res) => {
    User.find({},
         (err,userList)=>{
            if(err){
                console.log('Error While Fetching details of all the users');
            }
            else {
                res.send({users:userList});
            }
    })
}