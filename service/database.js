'use strict';

var { Pool } = require('pg');

var createError = require('../utils/error').createError;
var stall = require('../utils/stall').stall;

var thePool = null;
var theConfig = null;


const errors = {
  PARAMETER_ERROR:-1,
  DATABASE_ERROR:-2,
  INTERNAL_ERROR:-3
}

var initialise = function (url, needsSSL) {
    if (needsSSL == true) {
      url += "?sslmode=require"
    }
  
    if (thePool) {
      thePool.end();
    };
  
    theConfig = null;
  
    theConfig = {
      connectionString: url,
      ssl: needsSSL
    };
  
    thePool = new Pool(theConfig);
  };
  


  var test = async function(arg){

    await stall(500, createError(errors.PARAMETER_ERROR,"bad parameter!"));
    
  }

  var getIncidents=async function(sticker_uuid)
  {
      var result=null;
      var sticker_uuid_comp='($1::text is null or sticker_uuid=$1)';

      var query=sticker_uuid_comp+";";
      var parameters = [sticker_uuid];
      try{
          var response=await thePool.query(query,parameters);
          result=response.rows;
      }catch(e){
          throw(createError(errors.PARAMETER_ERROR,e.message));
      }
      return result;
  }

  var getResponses=async function(sticker_uuid)
  {
      var result=null;
      var sticker_uuid_comp='($1::text is null or sticker_uuid=$1)';
      var query=sticker_uuid_comp+";";
      var parameters = [sticker_uuid];
      try{
          var response=await thePool.query(query,parameters);
          result=response.rows;
      }catch(e){
          throw(createError(errors.PARAMETER_ERROR,e.message));
      }
      return result;
  }

  var postStickers=async function(body)
  {
      var result=null;
      var parameters=[body];
      var query = "INSERT INTO public.Stickers(generated) VALUES ('true') RETURNING QRid,generated;"
      try{
        var response=await thePool.query(query,parameters);
        result=response.rows;
    }catch(e){
        throw(createError(errors.PARAMETER_ERROR,e.message));
    }
    return result;

  }

  module.exports={
      errors:errors,
      initialise:initialise,
      getIncidents:getIncidents,
      getResponses:getResponses,
      postStickers:postStickers
  };