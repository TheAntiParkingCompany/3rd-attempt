'use strict';


/**
 * Create Incident
 * Reports an incident of bad parking
 *
 * body IncidentReport 
 * no response value expected for this operation
 **/
exports.incidentsPOST = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
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
  return new Promise(function(resolve, reject) {
    resolve();
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
    resolve();
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
    resolve();
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
    var examples = {};
    examples['application/json'] = {
  "stickers" : [ {
    "id" : "id"
  }, {
    "id" : "id"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

