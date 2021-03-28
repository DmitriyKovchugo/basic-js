const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false
   let team = [];

   for(let unit of members){
     if(typeof unit == 'string'){
       for(let symbol of unit){
         if(symbol !== ' '){
           team.push(symbol.toUpperCase())
           break  
         }
       }
     }
   }
   return team.sort().join('')
  throw new CustomError('Not implemented');
};
