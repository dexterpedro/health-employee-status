import MedicalConsult from "./src/MedicalConsult.js";

let type = "medico";
let document = "157360";

let result = false;

switch(type){
    case 'medico':
        result = await MedicalConsult.go(document);
        break;
}

console.log(result);