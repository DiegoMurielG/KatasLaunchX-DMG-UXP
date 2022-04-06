<template>

    <div class="wraper container">

        <div class="titleContainer container">
            <div class="title">
                <h4>Cantidad de Sabores</h4>
            </div>
            
        </div>

        <div class="cantidadToppingsContainer container">
            <div class="topping">
                <div>   <!-- Nombre del Pastel -->
                    <p>Chocolate</p>
                </div>

                <div>   <!-- Cantidad de Pasteles en Inventario de ese Sabor -->
                    <p>{{ $store.getters.getterCantidadInventario.toppings.chocolate }}</p>
                </div>

            </div>

            <div class="topping">
                <div>   <!-- Nombre del Pastel -->
                    <p>Frutas</p>
                </div>

                <div>   <!-- Cantidad de Pasteles en Inventario de ese Sabor -->
                    <p>{{ $store.getters.getterCantidadInventario.toppings.frutas }}</p>
                </div>

            </div>

            <div class="topping">
                <div>   <!-- Nombre del Pastel -->
                    <p>Azúcar</p>
                </div>

                <div>   <!-- Cantidad de Pasteles en Inventario de ese Sabor -->
                    <p>{{ $store.getters.getterCantidadInventario.toppings.azucar }}</p>
                </div>

            </div>

        </div>

        

    </div>
    
</template>

<script>
export default {
    name:'CantidadToppings',
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

    .cantidadToppingsContainer{
        width: 100%;
        justify-content: center;
    }

    .topping{
        background-color: #f547473d;
        padding: 1%;
        border: 2px solid #F54748;
        color: #343f56;
        font-size: 20px;
    }

</style>

