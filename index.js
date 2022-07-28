const express = require("express");
const app = express();
const port = 3000;
app.get("/", (req, res) => {
  res.send("Hello asd World!");
});

const user=[
  {
    id:1,name:'rakib vai',phone:016744
  },
  {
    id:2,name:'azad vai',phone:016744
  },
  {
    id:3,name:'rayhan vai',phone:016744
  },
  {
    id:4,name:'siam vai',phone:016744
  },
  {
    id:5,name:'sonjoy vai',phone:016744
  },
  {
    id:6,name:'rakib vai2.0',phone:016744
  },
  {
    id:7,name:'rakib vai3.0',phone:016744
  },
]
app.get("/user",(req,res)=>{
  
const search=req.query.search
if(search){
  console.log(search)
  const searchResult=user.filter(data=>data.name.toLocaleLowerCase().includes(search))
  res.send(searchResult)
}else{
  res.send(user);
}
 
})

// ************* params/dynamic api ********************
app.get("/user/:id",(req,res)=>{
 
  const id=req.params.id

  res.send(user[id]);
})

//  *************** query **************

app.get("/userQuery",(req,res)=>{
 
  const id=req.query.search[0]
  console.log(id)

  res.send(user);
})




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
