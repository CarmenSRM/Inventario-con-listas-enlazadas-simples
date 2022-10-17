class Inventario{
    constructor(){
        this.primero = null;
    }

    agregar(producto){
        let nuevo = producto;
        if(this.primero == null){
            this.primero = nuevo;
        }else{
            let ultimo = this.primero;
            while(ultimo.siguiente != null)
                ultimo = ultimo.siguiente;
                ultimo.siguiente = nuevo;
        }
    }

    buscar(codigo){}
    
    eliminar(codigo){}

    insertar(posicion, producto){}
    
    listado(){
        if(this.primero === null){
            return "No hay registos";
        }else{
            let ultimo = this.primero;
            let lista =`${ultimo.getInfo()}`;
        
            while(ultimo.siguiente != null){
              ultimo = ultimo.siguiente;
              lista= `${lista} <br> ${ultimo.getInfo()}`;
            }
            return lista;
        }
    }

    listadoInverso(){
        if(this.primero=== null){
            return "No hay registos";
        }else{
            let ultimo = this.primero;
            let lista =`${ultimo.getInfo()}`;
        
            while(ultimo.siguiente != null){
              ultimo = ultimo.siguiente;
              lista= `${ultimo.getInfo()} <br> ${lista},`;
              
            }
            return lista;
        }
    }

}