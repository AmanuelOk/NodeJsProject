var db = require('./db');

exports.getAllAuthors = function(cb){
    db.query('select * from lms.author', function(err, result) {
        cb(err, result);
      });
};
exports.addAuthor= function(author, cb){
  db.beginTransaction(function(err){
      if(err) cb(err, null);
  
      db.query('insert into lms.author(first_name, last_name) values(?,?)', [author.first_name, author.last_name], function(err, res){
        if(err){
          db.rollback(function(err, res){
            cb(err, res);
          });
        } 
        db.commit(function(err, res){
          cb(err, res);
        });
      });
    });
};
exports.removeAuthor= function(author_Id, cb){
  db.beginTransaction(function(err){
      if(err) cb(err, null);
  
      db.query('delete from lms.author where author_id= ?', [author_id], function(err, res){
        if(err){
          db.rollback(function(err, res){
            cb(err, res);
          });
        } 
        db.commit(function(err, res){
          cb(err, res);
        });
      });
    });
}
exports.updateAuthor= function(author, cb){
  db.beginTransaction(function(err){
      if(err) cb(err, null);
  
      db.query('update lms.author set first_name= ?,last_name=? where author_id= ?', [author.first_name, author.last_name, author.author_id], function(err, res){
        if(err){
          db.rollback(function(err, res){
            cb(err, res);
          });
        } 
        db.commit(function(err, res){
          cb(err, res);
        });
      });
    });
}