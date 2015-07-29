//Adding Module Secondary.js
//


/*Getter for an array of closest 5 stars to the Sun.
Gettersetter for the estimated age of the solar system in earth years.
Gettersetter for array of known dwarf planets.
*/

var Solarsystem = (function(secondary) {

    var closeStarsToSun = [];
    var age = 0;
    var dwarfPlanets = [];

    closeStarsToSun.push("Test1", "test2");

       secondary.getCloseStars = function() { return closeStarsToSun; } 

       secondary.setAge = function(ageInYears) { 
            age = ageInYears; 
           
            return age;
                     }

       secondary.getAge = function() { return age; }

       secondary.setDwarf = function(dwarfset) { dwarfPlanets.push(dwarfset); return dwarfPlanets; }

       secondary.getDwarf = function() { return dwarfPlanets; }

       return secondary;
 
})(Solarsystem);


   Solarsystem.setAge(5);
    Solarsystem.setDwarf("Pluto");

   console.log('Solar System Age: ' + Solarsystem.getAge());
   console.log('Dwarf Planets: ' + Solarsystem.getDwarf());

