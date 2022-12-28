module.exports = {
    up(db, callback) {
      return db.collection('users').insertOne({username: 'desafiosharenergy', password: '92305f21d8281ac002904977d84c0b2a'}, {$set: {blacklisted: true}}, callback);
    },
  
    down(db, _callback) {
      return db.dropDatabase();
    }
  };