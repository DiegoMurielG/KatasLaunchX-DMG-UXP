<template>

    <!-- Nombre, Teléfono, Correo Electrónico, Descripción general del pastel 
    y la selección de sabores y adornos -->

    <div class="wraper container">

        <div class="titleContainer container">
            <div class="title">
                <h4>Pedidos Recibidos</h4>
            </div>
            
        </div>

        <div class="pedidosContainer container">

            <div class="pedido">
                <div>   <!-- Nombre del Pastel -->
                    <p>Total</p>
                </div>

                <!-- -->
                <div>   
                    <p>${{ $store.getters.getterTotalPagar }}</p>
                </div>  

            </div>

            <div class="pedido">
                <div>   <!-- Nombre del Pastel -->
                    <p>Nombre</p>
                </div>

                <!-- -->
                <div>   
                    <p>{{ $store.getters.getterPedido.nombre }}</p>
                </div>  

            </div>

            <div class="pedido">
                <div>   <!-- Nombre del Pastel -->
                    <p>Teléfono</p>
                </div>

                <!-- -->
                <div>   
                    <p>{{ $store.getters.getterPedido.telefono }}</p>
                </div>  

            </div>

            <div class="pedido">
                <div>   <!-- Nombre del Pastel -->
                    <p>Correo Electrónico</p>
                </div>

                <!-- -->
                <div>   
                    <p>{{ $store.getters.getterPedido.email }}</p>
                </div>  

            </div>

            <div class="pedido">
                <div>   <!-- Nombre del Pastel -->
                    <p>Descripción general del pastel y selección de sabores y adornos</p>
                </div>

                <!-- -->
                <div> 
                    <p>{{ $store.getters.getterPedido.descripciOnProducto }}</p>
                </div>  

            </div>

        </div>

        

    </div>
    
</template>

<script>
export default {
    name:'PedidosRecividos',
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

    .pedidosContainer{
        width: 100%;
        justify-content: center;
    }

    .pedido{
        background-color: #fb920068;
        padding: 1%;
        border: 2px solid #343F56;
        color: #343f56;
        font-size: 20px;
    }

</style>