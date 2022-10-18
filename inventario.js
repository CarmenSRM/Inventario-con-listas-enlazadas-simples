class Inventario{
  constructor(){
    this.primero = null;
  }

  agregar(producto){
    let nuevo = producto;
    if(this.primero === null){
      this.primero = nuevo;
    }else{
      let ultimo = this.primero;
      while(ultimo.siguiente !== null){
        ultimo = ultimo.siguiente;
      }
      ultimo.siguiente = nuevo;
    }
  }

  buscar(codigo){
    let buscado = null; 
    if(this.primero === null){
      return null;
    }else{
      let ultimo = this.primero;
      while(ultimo !== null){
        if(ultimo.codigo === codigo){
          buscado = ultimo;
        }
        ultimo = ultimo.siguiente;
      }
    }
    return buscado;
  }
    
  eliminar(codigo){
    let eliminado = null;

    if(this.primero !== null){
      let ultimo = this.primero;
      if(ultimo.siguiente === null){
        if(ultimo.codigo === codigo){
          eliminado = ultimo;
          this.primero = null;
        }
      }else{
        if(ultimo.codigo === codigo){
          this.primero = ultimo.siguiente;
        }else{
          while(ultimo !== null){
            if(ultimo.siguiente.codigo === codigo){
              if(ultimo.siguiente === null){
                eliminado = ultimo.siguiente;
                ultimo.siguiente = null;
              }else{
                eliminado = ultimo.siguiente;
                ultimo.siguiente = ultimo.siguiente.siguiente; 
              }
            }
            ultimo = ultimo.siguiente;
          }
        }
      }
    }
    return eliminado;
  }

  insertar(posicion, producto){
    let nuevo = producto;

  }
    
  listado(){
    if(this.primero === null){
      return "No hay registos";
    }else{
      let ultimo = this.primero;
      let lista =`${ultimo.getInfo()}`;
        
      while(ultimo.siguiente !== null){
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
        
      while(ultimo.siguiente !== null){
        ultimo = ultimo.siguiente;
        lista= `${ultimo.getInfo()} <br> ${lista},`;      
      }
    return lista;
    }
  }
}