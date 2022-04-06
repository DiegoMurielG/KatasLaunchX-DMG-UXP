<template>
    <div class="titleModule">
        <p>Añada sus Sabores Extra</p>
    </div>
    
    <div class="saboresContainer container">
        
        <div>
            <label for="chcolate"><input type="checkbox" name="flavourCBX" id="chcolate" value="85">Chocolate</label>
        </div>

        <div>
            <label for="banana"><input type="checkbox" name="flavourCBX" id="banana" value="80">Plátano</label>
        </div>
        
        <div>
            <label for="redVelvet"><input type="checkbox" name="flavourCBX" id="redVelvet" value="80">Red Velvet</label>
        </div>
        
        <div>
            <label for="calabaza"><input type="checkbox" name="flavourCBX" id="calabaza" value="60">Calabaza</label>
        </div>
        
        <div>
            <label for="limOnZarza"><input type="checkbox" name="flavourCBX" id="limOnZarza" value="75">Limón y Zarzamora</label>
        </div>
        
        <div>
            <label for="zanahoria"><input type="checkbox" name="flavourCBX" id="zanahoria" value="75">Zanahoria</label>
        </div>
        
        <div>
            <label for="payLimOn"><input type="checkbox" name="flavourCBX" id="payLimOn" value="75">Pay de Limón</label>
        </div>
        
        <div>
            <label for="flan"><input type="checkbox" name="flavourCBX" id="flan" value="55">Flan Napolitano</label>
        </div>
        
        
    </div>
    <!-- <div class="boton">
        <button @click="$store.dispatch( 'addFlavours' )" id="btnAddFalvours">Añadir Sabores</button>
    </div> -->
    
    
</template>

<script>
export default {
    name: 'SaboresElegir',
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
        margin-bottom: 5%;
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