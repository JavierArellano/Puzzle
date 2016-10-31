class Vista{
    constructor(tamaño){
        this.createTabla(tamaño);
    }
    createTabla(tamaño) {
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
        let li = []
        for(let i=0; i<tamaño*tamaño; i++){
            li.push(i);
        }
        li.sort(function(){
            return li[Math.floor(Math.random() * li.length)]-li[Math.floor(Math.random() * li.length)]});
        return this.crearLista(tamaño, li);
        
    }
    
}
