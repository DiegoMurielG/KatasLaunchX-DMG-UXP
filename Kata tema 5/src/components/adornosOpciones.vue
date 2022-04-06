<template>
    <div class="toppingsContainer container">
        <div class="toppingsTitle container">
            <div>
                <h4>Toppings</h4>
            </div>
            
        </div>

        <div class="toppings">
            <div class="rightContainer container">
                <div class="right">
                    <p>Topping de Chocolate</p>
                    <p>Precio: +45$</p>
                </div>
            </div>
            

            <div class="left">
                <p>Topping de Frutas</p>
                <p>Precio: +65$</p>
            </div>

            <div class="rightContainer container">
                <div class="right">
                    <p>Azúcar Glass</p>
                    <p>Precio: +15$</p>
                </div>
            </div>
            

            <div class="left">
                <p>Todos los anteriores</p>
                <p>Precio: +125$</p>
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

    .toppingsContainer{
        width: 100%;
    }

    .toppingsTitle, .toppings{
        width: 50%;
    }

    .toppingsTitle{
        justify-content: center;   
    }

    .toppingsTitle div{
        background-color: #343F56;
        color: #FB9300;
        padding: 0.5% 0;
        width: 80%;
        border-radius: 15px;
    }

    .rightContainer{
        width: 80%;
        justify-content: flex-end;
    }

    .right{
        width: 50%;
        text-align: center;
        background-color: #f547472f;
        padding: 1% 5% 1% 0;
        border-radius: 15px;
    }

    .left{
        width: 80%;
        text-align: left;
        padding: 1% 0;
        border-radius: 15px;
    }

</style>