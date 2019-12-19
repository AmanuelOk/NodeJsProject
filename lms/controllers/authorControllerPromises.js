var routes= require('express').Router();
var db = require('../dao/db');
var authorDao = require('../dao/authorDaoPromises');
routes.get('/authorPromises',function(req,res){
authorDao.getAllAuthors()
.then(function(result){
  res.setHeader('Content-Type', 'application/json');
  res.send(result);
  console.log("using promise instead of callback");
})
.catch(function(err){
  throw err;
});
});
routes.delete('/authorPromises/:id', function(req,res){
authorDao.removeAuthor(req.params.id).then(function(result){
    res.setHeader('Content-Type', 'application/json');
    res.send(result);
    console.log("using promise instead of callback");
}).catch(function(err){
    throw err;
})

});
routes.post('/authorPromises', function(req,res){
  var author=req.body;
  authorDao.addAuthor(author).then(function(result){
      res.setHeader('Content-Type', 'application/json');
      res.send(result);
      console.log("using promise instead of callback");
  }).catch(function(err){
      throw err;
  })
  
  });
  routes.put('/authorPromises', function(req,res){
    var author=req.body;
    authorDao.updateAuthor(author).then(function(result){
        res.setHeader('Content-Type', 'application/json');
        res.send(result);
        console.log("using promise instead of callback");
    }).catch(function(err){
        throw err;
    })
    
    }); 

module.exports=routes;