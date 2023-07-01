const path = require('path')
const fs  = require('fs')
const login = [];

exports.getLogin = (req, res, next) => {
    fs.readFile('new.txt', 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          return;
        }
   
    res.sendFile(path.join(__dirname,'../','views' , 'submit.html'))
    // res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit" formaction="/submit.html">Add</button></form>')
    })
}

exports.getProduct = (req, res, next)=>{
    console.log(req.body)
   res.redirect('/add')
}   

exports.getAdd = (req,res,next) => {
    res.sendFile(path.join(__dirname,'../','views' , 'message.html'))

}

exports.getMsg = (req,res,next) => {
    
    fs.appendFile("new.txt",` ${req.body.user}:${req.body.msg}` ,function (err) {
        if (err) throw err;
        console.log('Saved!1');
      })
      fs.readFile('new.txt', 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log(data)
        res.send(`${data}<form id="btn" action="/msg" method="post"><input type="hidden" name="user" id="user"><input type="text" name ="msg" id ="msg"><button type="submit">click</button>  </form><script> document.getElementById('user').value=localStorage.getItem('username')</script>`) });
   
}

exports.getContact = (req,res,next)=>{
    res.sendFile(path.join(__dirname, '../','views', 'contactus.html'))
  }

  exports.getSuccess = (req,res,next)=>{
    res.sendFile(path.join(__dirname, '../','views', 'success.html'))
  }

  exports.getError = (req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname, '../','views', '404.html'))
} 

