'use strict'

async function stall(stallTime = 3000, throwable = null) {
    if(!throwable){
    	await new Promise(resolve => setTimeout(
        function(){
            console.log("dummy async function resolving in" + stallTime + " ms.");
            setTimeout(resolve,stallTime);
        }
        , 0));
    }else{
        await new Promise(resolve => setTimeout(resolve, stallTime));
        throw(throwable);
    }
}

module.exports = {
    stall: stall
};