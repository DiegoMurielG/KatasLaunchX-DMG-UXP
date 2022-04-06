<template>
    <div class="saboresContainer container">
        <div class="sabores">
            <div class="rightContainer container">
                <div class="right">
                    <p>Chocolate</p>
                    <p>Precio: +{{ $store.getters.getterSabores.chocolate }}$</p>
                </div>
                <div class="right">
                    <p>Plátano</p>
                    <p>Precio: +{{ $store.getters.getterSabores.banana }}$</p>
                </div>
                <div class="right">
                    <p>Zanahoria</p>
                    <p>Precio: +{{ $store.getters.getterSabores.zanahoria }}$</p>
                </div>
                <div class="right">
                    <p>Limón y Zarzamora</p>
                    <p>Precio: +{{ $store.getters.getterSabores.limOnYZarza }}$</p>
                </div>
            </div>
            
            <div class="leftContaier container">
                <div class="left">
                    <p>Calabaza </p>
                    <p>Precio: +{{ $store.getters.getterSabores.calabaza }}$</p>
                </div>
                <div class="left">
                    <p>Red Velvet </p>
                    <p>Precio: +{{ $store.getters.getterSabores.redVelvet }}$</p>
                </div>
                <div class="left">
                    <p>Pye de Limón</p>
                    <p>Precio: +{{ $store.getters.getterSabores.limonPye }}$</p>
                </div>
                <div class="left">
                    <p>Flan Napolitano</p>
                    <p>Precio: +{{ $store.getters.getterSabores.flan }}$</p>
                </div>
            </div>

        </div>

        <div class="saboresTitle container">
            <div>
                <h4>Sabores Extra</h4>
            </div>
            
        </div>

    </div>
</template>

<script>
    export default {
        name: 'adornosOpcionales',
    }
</script>

<style scoped>

    .saboresContainer{
        width: 100%;
        margin-bottom: 2%;
    }

    .saboresTitle{
        width: 40%;
    }

    .sabores{
        width: 55%;
        margin: 0 0 0 5%;
    }

    .saboresTitle{
        justify-content: center;   
    }

    .saboresTitle div{
        background-color: #343F56;
        color: #FB9300;
        padding: 0.5% 0;
        width: 80%;
        border-radius: 15px;
    }

    .rightContainer{
        width: 100%;
        /*justify-content: flex-end;*/
    }

    .leftContainer{
        width: 100%;
        /*justify-content: flex-end;*/
    }

    .right{
        width: 25%;
        text-align: center;
        background-color: #f547472f;
        /*padding: 1% 5% 1% 0;*/
        border-radius: 15px;
    }

    .left{
        width: 25%;
        text-align: center;
        /*padding: 1% 0;*/
        border-radius: 15px;
    }

</style>