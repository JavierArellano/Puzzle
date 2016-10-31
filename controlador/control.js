class Control{
    constructor(){
    }
    mover(e){
        let idCasilla = e.id;
        let Ocoord = this.getOcoord();
        if(this.comprobarMov(idCasilla,Ocoord)){
            
        }
        if(this.ganar()){
            alert('Has ganado.');
        }
    }
    getOcoord(){
        for (let i=0;i<(vista.listaDesor.length-1);i++){
            for (let j=0;j<(vista.listaDesor.length-1);j++){
                if (vista.listaDesor[i][j]==0){
                    return String(i) + String(j);
                }
            }
        }
    }
    comprobarMov(id,oc){
        if (parseInt(id[0])==parseInt(oc[0]) && parseInt(id[1])==(parseInt(oc[1])+1)){
            return true;
        }else if (parseInt(id[0])==parseInt(oc[0]) && parseInt(id[1])==(parseInt(oc[1])-1)){
            return true;
        }else if (parseInt(id[0])==(parseInt(oc[0])+1) && parseInt(id[1])==parseInt(oc[1])){
            return true;
        }else if (parseInt(id[0])==(parseInt(oc[0])-1) && parseInt(id[1])==parseInt(oc[1])){
            return true;
        }else {return false;}
    }
    ganar(){
        let x = 0;
        for (let i=0;i<(vista.listaDesor.length-1);i++){
            for (let j=0;j<(vista.listaDesor.length-1);j++){
                if (vista.listaDesor[i][j] != x){
                    return false;
                }
                x+=1;
            }
        }
        return true;
    }
}

var control;
var vista;

window.onload = function(){
    vista = new Vista(4);
    control = new Control();
}