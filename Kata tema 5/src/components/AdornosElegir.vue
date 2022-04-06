<template>
    <div class="titleModule">
        <p>Añada sus Toppings</p>
    </div>

    <div class="saboresContainer container">
        <div>
            <label for="chcolateTopping"><input type="checkbox" name="toppingCBX" id="chcolateTopping" value="45">Chocolate</label>
        </div>

        <div>
            <label for="frutas"><input type="checkbox" name="toppingCBX" id="frutas" value="65">Frutas</label>
        </div>
        
        <div>
            <label for="azucar"><input type="checkbox" name="toppingCBX" id="azucar" value="15">Azúcar</label>
        </div>
        
    </div>
    <!-- <div class="boton">
        <button @click="$store.dispatch( 'addToppings' )" id="btnAddTopping">Añadir Toppings</button>
    </div> -->
    
    
</template>

<script>
export default {
    name: 'AdornosElegir',
} 
</script>

<style scoped>

    .titleModule{
        width: 100%;
        padding: 1% 25%;
        background-color: #fb92009a;
        border-radius: 15px 15px 0 0 ;
        font-size: 42px;
        font-weight: bold;
    }

    .saboresContainer{
        width: 100%;
        padding: 1% 25%;
        background-color: #f5474779;
        border-radius: 0 0 15px 15px;
    }

    .saboresContainer div{
        width: 20%;
        padding: 1% 2%;
    }

    .boton{
        width: 100%;
        background-color: #fb92007a;
        padding: 1% 0;
        border-radius: 0 0 15px 15px;
        margin: 0 0 5% 0;
    }

    .boton button{
        font-size: 24px;
    }

    .boton button{
        width: 25%;
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

</style>