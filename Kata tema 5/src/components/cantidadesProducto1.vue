<template>
    <p>Precio sin adornos:</p>
    <div class="botonesAgreguar container">

        <p>Chico ${{ $store.getters.getterProductos.producto1.precioChico.precio }} {{$store.getters.getterProductos.producto1.precioChico.porciones}}. Cantidad {{ $store.getters.getterProductos.producto1.cantidadChico }}</p>  
        <div class="cantidad container">
            <button class="btnMenos" @click="$store.dispatch( 'bajarContadorChico' )">-</button>
            <button class="btnMas" @click="$store.dispatch( 'subirContadorChico' )">+</button>
        </div>

        <p>Grande ${{ $store.getters.getterProductos.producto1.precioGrande.precio }} {{$store.getters.getterProductos.producto1.precioGrande.porciones}}. Cantidad {{ $store.getters.getterProductos.producto1.cantidadGrande }}</p>
        <div class="cantidad container">
            <button class="btnMenos" @click="$store.dispatch( 'bajarContadorGrande' )">-</button>
            <button class="btnMas" @click="$store.dispatch( 'subirContadorGrande' )">+</button>
        </div>
      
      
    </div>
</template>

<script>

export default {
    name: 'cantidadesProducto1',
}
</script>

<style scoped>
    .botonesAgreguar{
        width: 100%;
    }

    .cantidad{
        width: 40%;
        justify-content: flex-end;
    }

    .cantidadChico p{
        width: 25%;
        font-size: 24px;
    }

    .btnMenos{
        width: 35%;
        height: 80%;
        font-size: 32px;
        background-color: #fb9200b3;
        border: 1px solid #000000;
        margin: 0% 1%;
        transition: background-color 0.2s;
        transition: font-size 0.2s;
        border-radius: 5px;
    }

    .btnMenos:hover{
        font-size: 38px;
        background-color: #343f5649;
        border: 2px solid #343F56;
    }

    .btnMas{
        width: 35%;
        height: 80%;
        font-size: 32px;
        background-color: #fb9200b3;
        border: 1px solid #000000;
        margin: 0% 1%;
        transition: background-color 0.2s;
        transition: font-size 0.2s;
        border-radius: 5px;
    }

    .btnMas:hover{
        font-size: 38px;
        background-color: #f54747a4;
        border: 2px solid #b93636;
    }

</style>