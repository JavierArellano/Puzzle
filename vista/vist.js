class Vista{
    constructor(tamaño){
        this.createTabla(tamaño);
    }
    createTabla(tamaño) {
        //crea el elemento tabla y asigna un id a cada casilla.
		let tabla = document.createElement('table');
        this.listaDesor = this.desorden(tamaño);
        let posi = 0;
        tabla.id = 'tabla';
		for (let i=0; i<tamaño; i++) {
			let tr = tabla.insertRow();
            let posx = 0;
			for (let j=0;j<tamaño; j++){
				let td = tr.insertCell();
                let ID = (String(i) + String(j));
                td.id = ID;
                td.appendChild(document.createTextNode(this.listaDesor[posi][posx]));
                td.setAttribute("onclick", "control.mover(this)");
                posx += 1;
			}
            posi += 1;
		}
		document.body.appendChild(tabla);
	}
    crearLista(tamaño, li){
        //crea la lista multidimensional y le añade los elementos desordenados
        this.listaOrd = [];
        let i = 0;
        for (let x=0; x<tamaño; x++){
            let lis = [];
            for (let j=0;j<tamaño; j++){
                lis.push(li[i]);
                i += 1;
            }
            this.listaOrd.push(lis);
        }
        return this.listaOrd.slice();
    }
    desorden(tamaño){
        //desordena la lista que se va a usar para añadir los valores en la lista multidimensional.
        let li = []
        for(let i=0; i<tamaño*tamaño; i++){
            li.push(i);
        }
        li.sort(function(){
            return li[Math.floor(Math.random() * li.length)]-li[Math.floor(Math.random() * li.length)]});
        return this.crearLista(tamaño, li);
        
    }
    cambioLiDes(id,oc){
        //cambio en la lista desordenada
        let num = this.listaDesor[id[0]][id[1]];
        let cer = this.listaDesor[oc[0]][oc[1]];
        this.listaDesor[id[0]][id[1]] = cer;
        this.listaDesor[oc[0]][oc[1]] = num;
    }
    cambiar(id,oc){
        //cambio en el html
        this.cambioLiDes(id,oc);
        let uno = document.getElementById(id).innerHTML;
        let dos = document.getElementById(oc).innerHTML;
        document.getElementById(id).innerHTML = dos;
        document.getElementById(oc).innerHTML = uno;
        
    }
    
}
