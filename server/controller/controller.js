const bcrypt=require('bcryptjs');
const db=require('../configuration/database')


async function userregistration(req,res){
    const enteredData=[
        req.body.name,
        req.body.mobile,
        req.body.address,
        req.body.location,
        req.body.service,
        req.body.servicetype,
        req.body.comment,
        'requested'
    ]
    
    const sql=`INSERT into registration(name,mobile,address,location,service,servicetype,comment,status) values (?)`;
        await db.query(sql,[enteredData]);
        res.send({ message: "User was registered successfully!" });           
    
} 

async function login(req,res){
    
    const sql=`select * from login where email=? and role='admin'`;
    const [user]=await db.query(sql,[req.body.email]);
    if(user.length==0){
        return res.status(403).send({message:'Invalid email'});
    }
    
    if(req.body.password!=user[0].password){
        return res.status(403).send({message:'Invalid Password'});
    }
       
    res.send({ message: "LoggedIn successfully!" });
} 

async function getAllRequest(req,res){
    
    const sql=`select * from registration` ;
    const [requests]=await db.query(sql);
           
    res.send(requests);
} 

async function getNewRequest(req,res){
    
    const sql=`select * from registration where status='requested'` ;
    const [requests]=await db.query(sql);
           
    res.send(requests);
} 

async function getCompletedRequest(req,res){
    
    const sql=`select * from registration where status='completed'` ;
    const [requests]=await db.query(sql);
           
    res.send(requests);
}
async function getPendingRequest(req,res){
    
    const sql=`select * from registration where status='pending'` ;
    const [requests]=await db.query(sql);
           
    res.send(requests);
}
async function getViewRequest(req,res){
    const sql=`select * from registration where id=?` ;
    const [requests]=await db.query(sql,[req.params.id]);     
    res.send(requests[0]);
}
async function adminupdate(req,res){
    const sql=`UPDATE registration SET status='pending'WHERE id=?`;
    const [requests]=await db.query(sql,[req.params.id]);     
    res.send({ message: "Send successfully!" });
}
async function servicelogin(req,res){
    
    const sql=`select * from login where email=? and role='serviceman'`;
    const [user]=await db.query(sql,[req.body.email]);
    if(user.length==0){
        return res.status(403).send({message:'Invalid email'});
    }
    
    if(req.body.password!=user[0].password){
        return res.status(403).send({message:'Invalid Password'});
    }
       
    res.send({ message: "LoggedIn successfully!" });
} 
async function getservicerequest(req,res){
    
    const sql=`select * from registration where status='pending'` ;
    const [requests]=await db.query(sql);
           
    res.send(requests);
}
async function serviceupdaterequest(req,res){
    const sql=`UPDATE registration SET status='completed'WHERE id=?`;
    const [requests]=await db.query(sql,[req.params.id]);     
    res.send({ message: "Send successfully!" });
}
async function changeadminpassword(req,res){
    const sql=`select * from login where email=? and role='admin'`;
    const [user]=await db.query(sql,[req.body.email]);
    if(user.length==0){
        return res.status(403).send({message:'Invalid email'});
    }
    
    const sql1=`UPDATE login SET password=? WHERE email=? and role='admin' `;
    const [requests]=await db.query(sql1,[req.body.password,req.body.email]);     
    res.send({ message: "Updated successfully!" });
}
async function changeservicepassword(req,res){
    const sql=`select * from login where email=? and role='serviceman'`;
    const [user]=await db.query(sql,[req.body.email]);
    if(user.length==0){
        return res.status(403).send({message:'Invalid email'});
    }
    
    const sql1=`UPDATE login SET password=? WHERE email=? and role='serviceman' `;
    const [requests]=await db.query(sql1,[req.body.password,req.body.email]);     
    res.send({ message: "Updated successfully!" });
}
module.exports={
    userregistration,
    login,
    getAllRequest,
    getNewRequest,
    getCompletedRequest,
    getPendingRequest,
    getViewRequest,
    adminupdate,
    servicelogin,
    getservicerequest,
    serviceupdaterequest,
    changeadminpassword,
    changeservicepassword
}