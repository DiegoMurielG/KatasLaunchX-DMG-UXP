<template>

    <div class="wraper container">

        <div class="titleContainer container">
            <div class="title">
                <h4>Cantidad de Sabores</h4>
            </div>
            
        </div>

        <div class="cantidadSaboresContainer container">
            <div class="sabor">
                <div>   <!-- Nombre del Pastel -->
                    <p>Chocolate</p>
                </div>

                <div>   <!-- Cantidad de Pasteles en Inventario de ese Sabor -->
                    <p>{{ $store.getters.getterCantidadInventario.sabores.chocolate }}</p>
                </div>

            </div>

            <div class="sabor">
                <div>   <!-- Nombre del Pastel -->
                    <p>Plátano</p>
                </div>

                <div>   <!-- Cantidad de Pasteles en Inventario de ese Sabor -->
                    <p>{{ $store.getters.getterCantidadInventario.sabores.banana }}</p>
                </div>

            </div>

            <div class="sabor">
                <div>   <!-- Nombre del Pastel -->
                    <p>Zanahoria</p>
                </div>

                <div>   <!-- Cantidad de Pasteles en Inventario de ese Sabor -->
                    <p>{{ $store.getters.getterCantidadInventario.sabores.zanahoria }}</p>
                </div>

            </div>

            <div class="sabor">
                <div>   <!-- Nombre del Pastel -->
                    <p>Limón y Zarzamora</p>
                </div>

                <div>   <!-- Cantidad de Pasteles en Inventario de ese Sabor -->
                    <p>{{ $store.getters.getterCantidadInventario.sabores.limOnYZarza }}</p>
                </div>

            </div>

            <div class="sabor">
                <div>   <!-- Nombre del Pastel -->
                    <p>Calabaza</p>
                </div>

                <div>   <!-- Cantidad de Pasteles en Inventario de ese Sabor -->
                    <p>{{ $store.getters.getterCantidadInventario.sabores.calabaza }}</p>
                </div>

            </div>

            <div class="sabor">
                <div>   <!-- Nombre del Pastel -->
                    <p>Red Velvet</p>
                </div>

                <div>   <!-- Cantidad de Pasteles en Inventario de ese Sabor -->
                    <p>{{ $store.getters.getterCantidadInventario.sabores.redVelvet }}</p>
                </div>

            </div>

            <div class="sabor">
                <div>   <!-- Nombre del Pastel -->
                    <p>Pay de Limón</p>
                </div>

                <div>   <!-- Cantidad de Pasteles en Inventario de ese Sabor -->
                    <p>{{ $store.getters.getterCantidadInventario.sabores.limonPye }}</p>
                </div>

            </div>

            <div class="sabor">
                <div>   <!-- Nombre del Pastel -->
                    <p>Flan</p>
                </div>

                <div>   <!-- Cantidad de Pasteles en Inventario de ese Sabor -->
                    <p>{{ $store.getters.getterCantidadInventario.sabores.flan }}</p>
                </div>

            </div>
        </div>

        

    </div>
    
</template>

<script>
export default {
    name:'CantidadSabores',
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

    .cantidadSaboresContainer{
        width: 100%;
        justify-content: center;
    }

    .sabor{
        background-color: #fb920046;
        padding: 1%;
        border: 2px solid #fb9200;
        color: #343f56;
        font-size: 20px;
    }

</style>

