<template>
    <div class="producto container">
        <!--<div class="nombre"><p class="pastelNombre">{{ $store.productos.producto1.nombreProducto }}</p></div> -->
        <!-- <div v-for="pic in ../assets">
            <img :src="getImgUrl(pic)" v-bind:alt="pic">
        </div> -->
        <!-- <div class="imagen"><img :src='$store.getters.getterProducto1.img' alt="Pastel de Chocolate" width="440px"></div> -->
        
        <!-- <div class="imagen"><img :src="imageName" :alt=altImg width="440"></div> '@\\..\\src\\assets\\'+ fileName -->
                
        <!-- <div class="imagen" @load="$store.dispatch( 'loadProduct1Img' )" ><img id="pasteImg" src="@\..\src\assets\chocolateCake.jpg" width="440px"></div> --> 
        
        <!-- SI JALA -->
        <div class="imagenProducto container"><img src="@\..\src\assets\chocolateCake.jpg" alt="Pastel de Chocolate" width="440"></div><!-- '@\\..\\src\\assets\\'+ fileName -->
        
        <div class="saborContainer">
            <h3>Chocolate</h3>
        </div>

        <div class="descrip"><p>{{ $store.getters.getterProductos.producto1.descripcion }}</p></div>
        
        <div class="precios">
            <p>Precio sin adornos:</p>
            <p>Chico ${{ $store.getters.getterProductos.producto1.precioChico.precio }} {{$store.getters.getterProductos.producto1.precioChico.porciones}}.</p>  
            <p>Grande ${{ $store.getters.getterProductos.producto1.precioGrande.precio }} {{$store.getters.getterProductos.producto1.precioGrande.porciones}}.</p>

            <!-- <cantidadesProducto1/> -->
                    
        </div>

        
            
    </div>
</template>

<script>
    //import cantidadesProducto1 from "@/components/cantidadesProducto1.vue";

    export default {
        name: 'Product1',
        /*components:{
            cantidadesProducto1,
        }*/
    }
  /*getImgUrl(pet) {
    var images = require.context('../assets/', false, /\.png$/)
    return images('./' + pet + ".png")
  }*/
</script>

<style scoped>
    .producto{
        width: 35%;
        padding: 2% 1%;
        margin: 5% 2%;
        /*margin: 2% 4% 2% 5%;*/
        background-color: rgba(194, 194, 194, 0.162);
        border: 3px solid rgba(36, 36, 36, 0.391);
        border-radius: 15px;
        text-align: left;
        transition: border 0.5s;
        transition: background-color 0.4s;
    }

    .producto:hover{
        background-color: rgba(124, 124, 124, 0.162);
        border: 3px solid #FB9300;
        border-radius: 15px;
    }

    .imagenProducto{
        width: 100%;
    }

    .imagenProducto img{
        border-radius: 15px;
        width: 100%;
    }

    .precios{
        width: 100%;
    }
    
</style>