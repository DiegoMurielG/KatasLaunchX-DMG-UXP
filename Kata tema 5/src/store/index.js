import { createStore } from 'vuex'

export default createStore({
  state: {
    productos:{
      producto1:{
        nombreProducto: "Pastel de Chocolate",
        /*img: "@\..\src\assets\chocolateCake.jpg",//chocolateCake.jpg
        altImg: "Pastel de Chocolate",*/
        descripcion: "¿Recuerdas que nos encanta el chocolate? ¡Ahora imagínate este pastel!",
        precioChico: {
          precio: 295,
          porciones: " cu. (10 pax)"
        },
        precioGrande: {
          precio: 440,
          porciones: " cu. (20 pax)"
        },
        cantidadChico: 0,
        cantidadGrande: 0,
      },
  
      producto2:{
        nombreProducto: "Pastel de Plátano",
        /*img: "@\..\src\assets\chocolateCake.jpg",//chocolateCake.jpg
        altImg: "Pastel de Chocolate",*/
        descripcion: "Te presentamos un suculento pastel de plátano con chocolate y nuez que, créenos, ¡tienes que probar!",
        precioChico: {
          precio: 280,
          porciones: " cu. (8 pax)"
        },
        precioGrande: {
          precio: 430,
          porciones: " cu. (15 pax)"
        },
        cantidadChico: 0,
        cantidadGrande: 0,
      },

      producto3:{
        nombreProducto: "Pastel Red Velvet",
        /*img: "@\..\src\assets\chocolateCake.jpg",//chocolateCake.jpg
        altImg: "Pastel de Chocolate",*/
        descripcion: "Un exquisito pastel de red velvet (con un toque de chocolate) y queso crema.",
        precioChico: {
          precio: 310,
          porciones: " cu. (10 pax)"
        },
        precioGrande: {
          precio: 500,
          porciones: " cu. (20 pax)"
        },
        cantidadChico: 0,
        cantidadGrande: 0,
      },

      producto4:{
        nombreProducto: "Tarta de Calabaza",
        /*img: "@\..\src\assets\chocolateCake.jpg",//chocolateCake.jpg
        altImg: "Pastel de Chocolate",*/
        descripcion: "Con una base crujiente, un relleno dulce y exquisita calabaza.",
        precioChico: {
          precio: 280,
          porciones: " cu. (4 pax)"
        },
        precioGrande: {
          precio: 430,
          porciones: " cu. (8 pax)"
        },
        cantidadChico: 0,
        cantidadGrande: 0,
      },

      producto5:{
        nombreProducto: "Panqué de Limón y Zarzamora",
        /*img: "@\..\src\assets\chocolateCake.jpg",//chocolateCake.jpg
        altImg: "Pastel de Chocolate",*/
        descripcion: "Rico panqué de limón con zarzamora en trosos, perfecto para disfrutar acompañado o solo.",
        precioChico: {
          precio: 295,
          porciones: " cu. (6 pax)"
        },
        precioGrande: {
          precio: 460,
          porciones: " cu. (12 pax)"
        },
        cantidadChico: 0,
        cantidadGrande: 0,
      },

      producto6:{
        nombreProducto: "Panqué de Zanahoria",
        /*img: "@\..\src\assets\chocolateCake.jpg",//chocolateCake.jpg
        altImg: "Pastel de Chocolate",*/
        descripcion: "Dulce panqué de zanahoria, con solo holerlo sabras lo deliciso que esta.",
        precioChico: {
          precio: 280,
          porciones: " cu. (5 pax)"
        },
        precioGrande: {
          precio: 460,
          porciones: " cu. (10 pax)"
        },
        cantidadChico: 0,
        cantidadGrande: 0,
      },

      producto7:{
        nombreProducto: "Pay de Limón",
        /*img: "@\..\src\assets\chocolateCake.jpg",//chocolateCake.jpg
        altImg: "Pastel de Chocolate",*/
        descripcion: "Frío, esponjoso y dulce, este pay de limón te llevará a otro lugar.",
        precioChico: {
          precio: 290,
          porciones: " cu. (7 pax)"
        },
        precioGrande: {
          precio: 480,
          porciones: " cu. (15 pax)"
        },
        cantidadChico: 0,
        cantidadGrande: 0,
      },

      producto8:{
        nombreProducto: "Flan napolitano",
        /*img: "@\..\src\assets\chocolateCake.jpg",//chocolateCake.jpg
        altImg: "Pastel de Chocolate",*/
        descripcion: "Con la perfecta consistencia y cantidad de caramelo, este flan napolitano te enseñará lo que vale la pena.",
        precioChico: {
          precio: 300,
          porciones: " cu. (8 pax)"
        },
        precioGrande: {
          precio: 450,
          porciones: " cu. (20 pax)"
        },
        cantidadChico: 0,
        cantidadGrande: 0,
      },
    },

    sabores:{
      chocolate: 85,
      banana: 80,//Plátano
      zanahoria: 75,
      limOnYZarza: 75,
      calabaza: 60,
      redVelvet: 80,
      limonPye: 75,//Pye de Limón
      flan: 55,
    },

    toppings:{
      chocolate: 45,
      frutas: 65,
      azucar: 15,
    },

    pedido:{
      totalPagar: 0,
      nombre: "",
      telefono: null,
      email: "",
      descripciOnProducto: "",
    },

    cantidadInventario:{
      pasteles:{
        chocolate: 0,
        banana: 0,//Plátano
        zanahoria: 0,
        limOnYZarza: 0,
        calabaza: 0,
        redVelvet: 0,
        limonPye: 0,//Pye de Limón
        flan: 0,
      },
      sabores:{
        chocolate: 0,
        banana: 0,//Plátano
        zanahoria: 0,
        limOnYZarza: 0,
        calabaza: 0,
        redVelvet: 0,
        limonPye: 0,//Pye de Limón
        flan: 0,
      },
      toppings:{
        chocolate: 0,
        frutas: 0,
        azucar: 0,
      },

    },

    
  },
  getters: {
    getterProductos( state ){
      //console.log( state.productos );
      return (state.productos);
    },
    getterSabores( state ){
      console.log( state.sabores );
      return (state.sabores);
    },
    getterToppings( state ){
      return (state.toppings);
    },
    getterPedido( state ){
      //console.log( state.pedido );
      return ( state.pedido );
    },
    getterTotalPagar( state ){
      return ( state.pedido.totalPagar );
    },
    getterCantidadInventario( state ){
      return( state.cantidadInventario );
    },

  },
  mutations: {
    /*producto1Img( ){
      let img = document.getElementById( "pasteImg" ).src = "@\..\src\assets\chocolateCake.jpg";
      img.innerHTML = ".\..\src\assets\chocolateCake.jpg";
    }*/
    bajarContadorChico( state ){
      if(state.productos.producto1.cantidadChico != 0){//Para evitar cantidades negativas
        state.productos.producto1.cantidadChico -= 1;
      }
    },
    subirContadorChico( state ){
      state.productos.producto1.cantidadChico += 1;
    },

    bajarContadorGrande( state ){
      if(state.productos.producto1.cantidadGrande != 0){//Para evitar cantidades negativas
        state.productos.producto1.cantidadGrande -= 1;
      }
    },
    subirContadorGrande( state ){
      state.productos.producto1.cantidadGrande += 1;
    },

    addThings( state ){
      //addFlavours(  );
      //addToppings(  );

      let checkboxes = document.querySelectorAll('input[name="flavourCBX"]:checked');
      checkboxes.forEach((checkbox) => {
        state.pedido.totalPagar += parseInt(checkbox.value);
      });



      checkboxes = document.querySelectorAll('input[name="toppingCBX"]:checked');
      checkboxes.forEach((checkbox) => {
        state.pedido.totalPagar += parseInt(checkbox.value);
      });
      //alert(state.pedido.totalPagar);

      let nombre = document.getElementById( "nombre" );
      state.pedido.nombre = nombre.value;

      let telefono = document.getElementById( "telefono" );
      state.pedido.telefono = telefono.value;

      let email = document.getElementById( "email" );
      state.pedido.email = email.value;

      let descPastel = document.getElementById( "descPastel" );
      state.pedido.descripciOnProducto = descPastel.value;

      document.getElementById( "graciasCompra" ).style.display = 'block';

      console.log( state.pedido );
      
    },

    consultarInventario( state, cantidad ){//La cantidad es Random
      /*console.log( cantidad );
      const cantidadArreglo = JSON.parse(cantidad);*/
      //Pasteles
      state.cantidadInventario.pasteles.chocolate = cantidad[0];//alert(JSON.value(cantidadArreglo[0]));
      state.cantidadInventario.pasteles.banana = cantidad[1];
      state.cantidadInventario.pasteles.zanahoria = cantidad[2];
      state.cantidadInventario.pasteles.limOnYZarza = cantidad[3];
      state.cantidadInventario.pasteles.calabaza = cantidad[4];
      state.cantidadInventario.pasteles.redVelvet = cantidad[5];
      state.cantidadInventario.pasteles.limonPye = cantidad[6];
      state.cantidadInventario.pasteles.flan = cantidad[7];

      //Sabores
      state.cantidadInventario.sabores.chocolate = cantidad[8];
      state.cantidadInventario.sabores.banana = cantidad[9];
      state.cantidadInventario.sabores.zanahoria = cantidad[10];
      state.cantidadInventario.sabores.limOnYZarza = cantidad[11];
      state.cantidadInventario.sabores.calabaza = cantidad[12];
      state.cantidadInventario.sabores.redVelvet = cantidad[13];
      state.cantidadInventario.sabores.limonPye = cantidad[14];
      state.cantidadInventario.sabores.flan = cantidad[15];

      //Toppings
      state.cantidadInventario.toppings.chocolate = cantidad[16];
      state.cantidadInventario.toppings.frutas = cantidad[17];
      state.cantidadInventario.toppings.azucar = cantidad[18];
    },

    /*addFlavours( state ){
      let checkboxes = document.querySelectorAll('input[name="flavourCBX"]:checked');
      //console.log( checkboxes );
      //let values = [];
      checkboxes.forEach((checkbox) => {
        //values.push(checkbox.value);
        state.pedido.totalPagar += parseInt(checkbox.value);
          //console.log( values );
      });
      //alert(values);
      alert(state.pedido.totalPagar);
    },
    addToppings( state ){
      let checkboxes = document.querySelectorAll('input[name="toppingCBX"]:checked');
      //console.log( checkboxes );
      //let values = [];
      checkboxes.forEach((checkbox) => {
        //values.push(checkbox.value);
        state.pedido.totalPagar += parseInt(checkbox.value);
          //console.log( values );
      });
      //alert(values);
      alert(state.pedido.totalPagar);
    },*/

  },
  actions: {
    /*async loadProduct1Img( {commit} ){
      commit( "producto1Img" );
    }*/
    async bajarContadorChico( {commit} ){
      commit( "bajarContadorChico" )
    },
    async subirContadorChico( {commit} ){
      commit( "subirContadorChico" )
    },

    async bajarContadorGrande( {commit} ){
      commit( "bajarContadorGrande" )
    },
    async subirContadorGrande( {commit} ){
      commit( "subirContadorGrande" )
    },

    async addThings( {commit} ){
      commit( "addThings" )
    },

    async addFlavours( {commit} ){
      commit( "addFlavours" )
    },
    async addToppings( {commit} ){
      commit( "addToppings" )
    },

    async consultarInventario( {commit} ){    
      /*const res = [];
      let i = 0;
      
      for( i=0; i<1; i++ ){   //19
        res[i] = await fetch( "https://www.random.org/integers/?num=1&min=0&max=50&col=1&base=10&format=plain&rnd=new" );
        //NUmero aleatorio entre el 0 y 50 guardado en el arreglo res
      }
      //console.log( res ); 
      //res = await fetch( "https://www.random.org/integers/?num=1&min=1&max=8&col=1&base=10&format=plain&rnd=new" );
      //const results = await res.json();
      const results = await res.json();
      console.log( results ); */

      const res = [];
      let i = 0;

      for( i=0; i<19; i++ ){
        res[ i ] = Math.floor(Math.random() * 51);
        //NUmero aleatorio entre el 0 y 50 guardado en el arreglo res
      }
      
      commit( "consultarInventario", res )
    },
  },
  modules: {
  }
})
