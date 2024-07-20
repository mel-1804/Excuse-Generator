const { Generator } = require("webpack")

let who=['mis hijos', 'mis gatos', 'mis vecinos', 'los amigos de mi amiga']
let action=['rompieron', 'se robaron', 'perdieron']
let what =['mi teléfono', 'mi laptop', 'mi modem del WiFi']
let when =['ayer', 'el otro día', 'cuando sali de la casa', 'mientras dormía']

// console.log(who[0]+' '+action[0]+' '+what[0]+' '+when[0])


    
    // console.log(who[Math.floor(Math.random()*(who.length))]);
    // console.log(action[Math.floor(Math.random()*(action.length))]);
    // console.log(what[Math.floor(Math.random()*(what.length))]);
    // console.log(when[Math.floor(Math.random()*(when.length))]);

let a=who[Math.floor(Math.random()*(who.length))]
let b=action[Math.floor(Math.random()*(action.length))]
let c=what[Math.floor(Math.random()*(what.length))]
let d=when[Math.floor(Math.random()*(when.length))]
let excuseGenerator = function(a,b,c,d){
    return(a+' '+b+' '+c+' '+d);
    };

    console.log(excuseGenerator(a,b,c,d));
