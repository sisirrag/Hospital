const express=require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app= express();
const port=8008;
const Branch=require('./db/models/branch');
const Dept=require('./db/models/dept');
const Hospital=require('./db/models/hospital');
const dbsetup=require('./db/dbsetup');

dbsetup();
app.use(cors());
app.use(bodyParser.json());


app.get('/hospital',async (req,res)=>{ 
    const hospitals=await Hospital.query().select('id','hospital_name');   
    res.json(hospitals);
});
app.get('/branch',async (req,res)=>{ 
    const branches=await Branch.query().select('id','hospital_id','branch_name','branch_address');   
    res.json(branches);
});
app.get('/dept',async (req,res)=>{   
    const depts=await Dept.query().select('id','branch_id','dept_name'); 
    res.json(depts);
});

app.get('/hospital/:hospital_id',async (req,res)=>{  
    const{hospital_id} = req.params;     
    const branches=await Branch.query().select('branch_name').where('hospital_id',hospital_id);
    res.json(branches);
});

app.get('/branch/:branch_id',async (req,res)=>{  
    const{branch_id} = req.params;    
    //const branch=await Branch.query().where('id',branch_id).first();                        
    //branch.depts=await branch.$relatedQuery('depts');  
    const branch=await Branch.query().where('id',branch_id).withGraphFetched('depts');                          
    res.json(branch);    
});

app.post('/hospital',async (req,res)=>{
    try {
        
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
        
    }   
    const {hospital_name} =req.body;
    const id =await Hospital.query().insert({
            hospital_name,                        
        });
    res.send('Hospital added successfully');
});

app.post('/branch',async (req,res)=>{
    try {
        
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
        
    }   
    const {hospital_id,branch_name,branch_address} =req.body;
    const id =await Branch.query().insert({
            hospital_id,
            branch_name,
            branch_address,            
        });
    res.send('Branch added successfully');
});

app.post('/dept',async (req,res)=>{ 
    const {branch_id,dept_name} =req.body;
    const id =await Dept.query().insert({
            branch_id,
            dept_name,                       
        });       
    res.send('Department added successfully');
});

// app.post('/depts',async (req,res)=>{ 
//     const depts=["Oncology","Dermatology","Opthalmology","Gynaecology","Cardiology"]
//     for (let i = 0; i <5; i++) {
//         const dept_name = depts[i];
//         const branch_id = 3;
//         const id =await Dept.query().insert({
//             branch_id,
//             dept_name,                       
//         });   
        
//     }    
// });





app.listen(port,console.log('Server Running..'));

