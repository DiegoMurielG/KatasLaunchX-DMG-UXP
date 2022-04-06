<template>

    <div class="wraper container">

        <div class="titleContainer container">
            <div class="title">
                <h4>Cantidad de Pasteles</h4>
            </div>
            
            <div class="boton">
                <button @click="$store.dispatch( 'consultarInventario' )">Consultar inventario</button>
            </div>
            
        </div>

        <div class="cantidadPastelesContainer container">
            <div class="saborPastel">
                <div>   <!-- Nombre del Pastel -->
                    <p>{{ $store.getters.getterProductos.producto1.nombreProducto }}</p>
                </div>

                <div>   <!-- Cantidad de Pasteles en Inventario de ese Sabor -->
                    <p>{{ $store.getters.getterCantidadInventario.pasteles.chocolate }}</p>
                </div>

            </div>

            <div class="saborPastel">
                <div>   <!-- Nombre del Pastel -->
                    <p>{{ $store.getters.getterProductos.producto2.nombreProducto }}</p>
                </div>

                <div>   <!-- Cantidad de Pasteles en Inventario de ese Sabor -->
                    <p>{{ $store.getters.getterCantidadInventario.pasteles.banana }}</p>
                </div>

            </div>

            <div class="saborPastel">
                <div>   <!-- Nombre del Pastel -->
                    <p>{{ $store.getters.getterProductos.producto3.nombreProducto }}</p>
                </div>

                <div>   <!-- Cantidad de Pasteles en Inventario de ese Sabor -->
                    <p>{{ $store.getters.getterCantidadInventario.pasteles.zanahoria }}</p>
                </div>

            </div>

            <div class="saborPastel">
                <div>   <!-- Nombre del Pastel -->
                    <p>{{ $store.getters.getterProductos.producto4.nombreProducto }}</p>
                </div>

                <div>   <!-- Cantidad de Pasteles en Inventario de ese Sabor -->
                    <p>{{ $store.getters.getterCantidadInventario.pasteles.limOnYZarza }}</p>
                </div>

            </div>

            <div class="saborPastel">
                <div>   <!-- Nombre del Pastel -->
                    <p>{{ $store.getters.getterProductos.producto5.nombreProducto }}</p>
                </div>

                <div>   <!-- Cantidad de Pasteles en Inventario de ese Sabor -->
                    <p>{{ $store.getters.getterCantidadInventario.pasteles.calabaza }}</p>
                </div>

            </div>

            <div class="saborPastel">
                <div>   <!-- Nombre del Pastel -->
                    <p>{{ $store.getters.getterProductos.producto6.nombreProducto }}</p>
                </div>

                <div>   <!-- Cantidad de Pasteles en Inventario de ese Sabor -->
                    <p>{{ $store.getters.getterCantidadInventario.pasteles.redVelvet }}</p>
                </div>

            </div>

            <div class="saborPastel">
                <div>   <!-- Nombre del Pastel -->
                    <p>{{ $store.getters.getterProductos.producto7.nombreProducto }}</p>
                </div>

                <div>   <!-- Cantidad de Pasteles en Inventario de ese Sabor -->
                    <p>{{ $store.getters.getterCantidadInventario.pasteles.limonPye }}</p>
                </div>

            </div>

            <div class="saborPastel">
                <div>   <!-- Nombre del Pastel -->
                    <p>{{ $store.getters.getterProductos.producto8.nombreProducto }}</p>
                </div>

                <div>   <!-- Cantidad de Pasteles en Inventario de ese Sabor -->
                    <p>{{ $store.getters.getterCantidadInventario.pasteles.flan }}</p>
                </div>

            </div>
        </div>

        

    </div>
    
</template>

<script>
export default {
    name:'CantidadPasteles',
}
</script>

<style scoped>

    .wraper{
        margin: 0 0 5% 0;
    }

    .titleContainer{
        width: 100%;
    }

    .title{
        width: 60%;
    }

    .boton{
        width: 40%;
        margin: 5% 0 0 0;
    }

    .boton button{
        width: 90%;
        font-size: 32px;
        background-color: #fb9200b3;
        border: 1px solid #000000;
        padding: 1%;
        transition: background-color 0.2s;
        transition: font-size 0.2s;
        border-radius: 5px;
    }

    button:hover{
        font-size: 38px;
        background-color: #343f5649;
        border: 2px solid #343F56;
        cursor: pointer;
    }

    .cantidadPastelesContainer{
        width: 100%;
        justify-content: center;
    }

    .saborPastel{
        background-color: #343f56b3;
        padding: 1%;
        border: 2px solid #343f56;
        color: #F5E6CA;
        font-size: 20px;
    }

</style>

