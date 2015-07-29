/*
 *
Class exercise. Have students create a new directory named modules where they will create an HTML and a JS file. The JS file should create an IIFE module named SolarSystem. Have the student create properties and methods for the following:

Getter for an array of planets that cannot be modified.
Getter/setter for number of planets that humans have landed people or robots on.
Public property for holding a last modified date.
Getter/setter for spacecraft currently exploring solar system. These should be stored in a private array.
Any other fun/related data that the student wants to add.


 */

var Solarsystem = (function () {

    var planets = [];  
    var planetsLanded = 0;
    var explorerCraft = [];

     planets.push('Mercury','Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Pluto');
        

   return {
                  getplanets: function() { return planets; },           

                  getHumans: function() {  return planetsLanded;  },

                  getExplorer: function () { return explorerCraft; },

                  setExplorer: function(spacecraft) {  return explorerCraft.push(spacecraft); },
        
                  date: function() { return  new Date(); }
   }
     
})();
console.log("List of Planets" + Solarsystem.getplanets());
console.log("Human touched Planets: " + Solarsystem.getHumans());
console.log(Solarsystem.setExplorer(5));
console.log("Get Explorer: " + Solarsystem.getExplorer());
console.log("Date Modified: " + Solarsystem.date());
