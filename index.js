function LokiReactNativeAdapter() {
  this.fs = require('react-native-fs');
}

LokiReactNativeAdapter.prototype.loadDatabase = function loadDatabase(dbname, callback) {
  var self = this;

  var dbpath = this.fs.DocumentDirectoryPath + '/' + dbname;
  self.fs.stat(dbpath).then(stats=>{
    if (stats.isFile()){
      self.fs.readFile(dbpath, {
        encoding: 'utf8'
      }).then(data=>{
        callback(data)
      }).catch(err=>{
        callback(new Error(err));
      })
    }
  }).catch(err=>{
    callback(err)
  })
};

/**
 * saveDatabase() - save data to file, will throw an error if the file can't be saved
 * might want to expand this to avoid dataloss on partial save
 * @param {string} dbname - the filename of the database to load
 * @param {function} callback - the callback to handle the result
 * @memberof LokiFsAdapter
 */


LokiReactNativeAdapter.prototype.saveDatabase = function saveDatabase(dbname, dbstring, callback) {
  var self = this;
  var dbpath = this.fs.DocumentDirectoryPath + '/' + dbname;
  this.fs.writeFile(dbpath,dbstring)
  .catch(err=>{
    callback(err)
  })
};

/**
 * deleteDatabase() - delete the database file, will throw an error if the
 * file can't be deleted
 * @param {string} dbname - the filename of the database to delete
 * @param {function} callback - the callback to handle the result
 * @memberof LokiFsAdapter
 */

LokiReactNativeAdapter.prototype.deleteDatabase = function deleteDatabase(dbname, callback) {
  var dbpath = this.fs.DocumentDirectoryPath + '/' + dbname;
  this.fs.unlink(dbpath).then(()=>{
    callback()
  }).catch(err=>{
    callback(err)
  })
};

module.exports = LokiReactNativeAdapter
