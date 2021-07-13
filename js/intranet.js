
let aprobado=document.getElementById("aprob");
let desaprobado=document.getElementById("desap")
function promedio_(){
    let n1 = +(document.getElementById("nota1").value);
    let n2 = +(document.getElementById("nota2").value);
    let n3 = +(document.getElementById("nota3").value);
    let n4 = +(document.getElementById("nota4").value);
    let prome = (n1+n2+n3+n4)/4;
    document.getElementById("promediototal").innerHTML=("El promedio es de " + prome);
    if(prome>=11){
            aprobado.style.background="palegreen";
        aprobado.addEventListener("click",promedio) 

        
    }
    else if(prome<=11){
        desaprobado.style.background="red";
        desaprobado.addEventListener("click",promedio) 

    }
}

