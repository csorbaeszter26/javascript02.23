import { SZEMELYLISTA } from "./adat.js";


export function konzonlrair(lista){
    for(let index = 0; index < lista.length; index++){
        console.log(`név: ${lista[index].nev}, tel:{lista[index].tel}`);
    }
}


export function listaOsszeallit(lista){
    let txt="<ul>"
    for (let index = 0; index < lista.length; index++){
        txt += `<li>név: ${lista[index].nev}, tel:${lista[index].tel}</li>`
    }
    txt += "</ul>"
    console.log(txt)
    return txt
}

export function kartyak(lista){
    let txt = ""
    for (let index = 0; index < lista.length; index++){
        txt += "<div class=`kartya`
        }




    let txt1 = "<h3>"
    for (let index = 0; index < lista.length; index++){
        txt1 += `név: ${lista[index].nev}`
    }
    txt1 += "</h3>"
    let txt2 = "<p>"
    for (let index = 0; index < lista.length; index++){
        txt2 += `súly: ${lista[index].suly}`
    }
    txt2 += "</p>"
    let txt3 = "<p>"
    for (let index = 0; index < lista.length; index++){
        txt3 += `tel: ${lista[index].tel}`
    }
    txt3 += "</p>"
    console.log(txt1)
    console.log(txt2)
    console.log(txt3)
    
}
