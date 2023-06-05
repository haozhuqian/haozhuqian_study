const fs = require('fs');

fs.rename('./play', './Money',(err)=>{
  console.log(err);
})