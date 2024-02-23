
import { listaOsszeallit } from "./fuggvenyek.js";
import { SZEMELYLISTA } from "./adat.js";
import { konzonlrair } from "./fuggvenyek.js";
import { kartyak } from "./fuggvenyek.js";


//import { konzonlair } from "./fuggvenyek.js";
konzonlrair(SZEMELYLISTA)
kartyak(SZEMELYLISTA)

// meg kell fogni azt a HTML elemet, amibe írni szeretnék

//const FELSELEM = document.getElementById("felsorolas") // ezzel megfogtuk ezt a divet
//console.log(FELSELEM)
const FELSELEM = document.querySelector("#felsorolas")
const KARTYAK = document.querySelector("#kartyaContainer1")
const FELSELEM3 = document.querySelector("#kartyaContainer2")
//FELSELEM.innerHTML = "<h1>Ügyesek vagyunk</h1>"
FELSELEM.innerHTML+=listaOsszeallit(SZEMELYLISTA)
KARTYAK.innerHTML+=kartyak(SZEMELYLISTA)
FELSELEM3.innerHTML+=kartyak(SZEMELYLISTA)











//-------------------------------------------------------------------1.
/*const a=2;
//a=3 - hibaüzenet


const LISTA = ["Géza", "Jenő"];

// LISTA = [12, 34, 56, 312]
console.log(LISTA[1]);

LISTA[10] = "Béla";

LISTA.push("Jakab") //A lista végére lehelyez egy elemet
LISTA.pop()//leveszi a lista utolsó elemét
// ..... a konstans deklarált változó értéke nem írható felül
//összetett adatszerkezet esetén mint például a lista és objektum consttal való deklaráláskor a lista memóriacíme nem változtatható meg, alista értékei igen megváltoztathatóak, módosíthatom az elemeit, törölhetek a listából, adhatok hozzá új elemet. 
//ez a lista.

console.log(LISTA);
console.log(LISTA[5]);

// ismerőseim nyilvántartása:



//OBJEKTUM:
//összetett adatszerkezet, amelyben az összetartozó adatokat együtt tudjuk kezelni, ezt is consttal szoktuk deklarálni
//kulcsértékpárok/tulajdonságértékpárok
//

const SZEMELY1 = {
    nev:"GÉZA",
    tel:"06-30-1234123",
    suly: 80
}

const SZEMELY2 = {
    nev:"Jenő",
    tel:"06-30-1234123",
    suly: 60
}

console.log(SZEMELY1.nev);
console.log(SZEMELY2.suly);


//JSON formátumú objektum
//ez egy adatbázisnak egy rekordja
*/


