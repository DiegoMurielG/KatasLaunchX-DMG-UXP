<template>
    <div class="producto container">

        <div class="imagenProducto container"><img src="@\..\src\assets\carrorBread.jpg" alt="Panqué de Zanahoria" width="440"></div><!-- '@\\..\\src\\assets\\'+ fileName -->
        
        <div class="saborContainer">
            <h3>Zanahoria</h3>
        </div>

        <div class="descrip"><p>{{ $store.getters.getterProductos.producto6.descripcion }}</p></div>
        
        <div class="precios">
            <p>Precio sin adornos:</p>
            <p>Chico ${{ $store.getters.getterProductos.producto6.precioChico.precio }} {{$store.getters.getterProductos.producto6.precioChico.porciones}}.</p>  
            <p>Grande ${{ $store.getters.getterProductos.producto6.precioGrande.precio }} {{$store.getters.getterProductos.producto6.precioGrande.porciones}}.</p>

        </div>

    </div>
</template>

<script>
    //import cantidadesProducto1 from "@/components/cantidadesProducto1.vue";

    export default {
        name: 'Product6',
        /*components:{
            cantidadesProducto1,
        }*/
    }

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