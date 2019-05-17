'use strict';

var database = require('./database');
/**
 * Create Incident
 * Reports an incident of bad parking
 *
 * body IncidentReport 
 * no response value expected for this operation
 **/
exports.incidentsPOST = function(body) {
  return new Promise(function(resolve, reject) {
    body.date=Math.floor(new Date().getTime()/1000.0);
    database.postIncidents(body)
    .then(resolve)
    .catch(function(e)
    {switch(e.statusCode){
      case database.errors.DATABASE_ERROR:
      // remove database specific error - will leak information.
      reject (errApi.create500Error("something terrible happened with the database. Sorry..."));
      break;
      case database.errors.INTERNAL_ERROR:
      reject(errApi.create500Error(e.message));
      break;
      case database.errors.PARAMETER_ERROR:
      reject(errApi.create400Error(e.message));
      break;}
    })
  });
}


/**
 * Search Incident
 * Checks if an incident exist/ has been reported and a sticker has been used
 *
 * sticker_uuid String 
 * no response value expected for this operation
 **/
exports.incidentsSticker_uuidGET = function(sticker_uuid) { 
  console.log(sticker_uuid);
  return new Promise(function(resolve, reject) {
    database.getIncidents(sticker_uuid)
    .then(resolve)
         .catch(function(e){
            switch(e.statusCode){
              case database.errors.DATABASE_ERROR:
              // remove database specific error - will leak information.
              reject (errApi.create500Error("something terrible happened with the database. Sorry..."));
              break;
              case database.errors.INTERNAL_ERROR:
              reject(errApi.create500Error(e.message));
              break;
              case database.errors.PARAMETER_ERROR:
              reject(errApi.create400Error(e.message));
              break;
            }
          })
  });
}


/**
 * Create Response
 * Creates a response
 *
 * body IncidentResponse 
 * no response value expected for this operation
 **/
exports.responsesPOST = function(body) {
  return new Promise(function(resolve, reject) {
    database.postResponse(body)
    .then(resolve)
    .catch(function(e)
    {switch(e.statusCode){
      case database.errors.DATABASE_ERROR:
        // remove database specific error - will leak information.
        reject (errApi.create500Error("something terrible happened with the database. Sorry..."));
        break;
      case database.errors.INTERNAL_ERROR:
        console.log("nah, 1",body,e);
        reject(errApi.create500Error(e.message));
        break;
      case database.errors.PARAMETER_ERROR:
        console.log("nah 2", body,e);
        reject(errApi.create400Error(e.message));
        break;}
    })
  });
}


/**
 * Get Response
 * Checks if a response has been submited
 *
 * sticker_uuid String 
 * no response value expected for this operation
 **/
exports.responsesSticker_uuidGET = function(sticker_uuid) {
  return new Promise(function(resolve, reject) {
    database.getResponses(sticker_uuid)
    .then(resolve)
         .catch(function(e){
            switch(e.statusCode){
              case database.errors.DATABASE_ERROR:
              // remove database specific error - will leak information.
              reject (errApi.create500Error("something terrible happened with the database. Sorry..."));
              break;
              case database.errors.INTERNAL_ERROR:
              reject(errApi.create500Error(e.message));
              break;
              case database.errors.PARAMETER_ERROR:
              reject(errApi.create400Error(e.message));
              break;
            }
         })
  });
}


/**
 * Create Stickers
 * Creates a number of stickers
 *
 * body StickerRequest 
 * returns StickerResponse
 **/
exports.stickersPOST = function(body) {

  return new Promise(function(resolve, reject) {

    console.log(database.postStickers);
  
    database.postStickers(body)
    .then(function(result){ 
      resolve(result);
    })
    .catch(function(e)
    {switch(e.statusCode){
      case database.errors.DATABASE_ERROR:
      // remove database specific error - will leak information.
      reject (errApi.create500Error("something terrible happened with the database. Sorry..."));
      break;
      case database.errors.INTERNAL_ERROR:
      reject(errApi.create500Error(e.message));
      break;
      case database.errors.PARAMETER_ERROR:
      reject(errApi.create400Error(e.message));
      break;}
    })
    

    
  });
}

