var db = require('./db');
var Promises = require('promise');
exports.getAllAuthors=function(){
return new Promises(function(resolve, reject){
    db.query('select * from lms.author', function(err, result) {
        return err ? reject(err):resolve(result);
      });

});
};
exports.removeAuthor=function(author_id){
    return new Promises(function(resolve,reject){
        db.beginTransaction(function(err){
            if(err) reject(err);
            db.query('delete from lms.author where author_id= ?', [author_id], function(err, res){
              if(err){
                db.rollback(function(err, res){
                  reject(err);
                });
              } 
              db.commit(function(err, res){
                resolve(res);
              });
            });
          });
    })}
    exports.addAuthor=function(author){
        return new Promises(function(resolve,reject){
            db.beginTransaction(function(err){
                if(err) reject(err);
                db.query('insert into lms.author(first_name, last_name) values(?,?)', [author.first_name, author.last_name], function(err, res){
                  if(err){
                    db.rollback(function(err, res){
                      reject(err);
                    });
                  } 
                  db.commit(function(err, res){
                    resolve(res);
                  });
                });
              });
        })}
        exports.updateAuthor=function(author){
            return new Promises(function(resolve,reject){
                db.beginTransaction(function(err){
                    if(err) reject(err);
                    db.query('update lms.author set first_name= ?,last_name=? where author_id= ?', [author.first_name, author.last_name, author.author_id], function(err, res){
                      if(err){
                        db.rollback(function(err, res){
                          reject(err);
                        });
                      } 
                      db.commit(function(err, res){
                        resolve(res);
                      });
                    });
                  });
            })}
        