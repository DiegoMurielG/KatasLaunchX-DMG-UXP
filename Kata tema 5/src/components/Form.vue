<template>

    <div class="formContainer container">  

        <!-- Componente de formulario debe de contener los datos de contacto 
        del cliente que son Nombre, Teléfono, Correo Electrónico, 
        Descripción general del pastel y la selección de sabores y adornos -->

        <!-- <form action="@\..\src\store\index.js" target="_self" method="post"> -->
        <div class="form">

        
            <h4>Tu Orden</h4>
            <div class="campo">
                <div>
                    <label for="nombre">Nombre:</label>
                </div>
                
                <div>
                    <input type="text" id="nombre" name="nombre" placeholder="Ingrese su Nombre Completo." />
                </div>
                
            </div>

            <div class="campo">
                <div>
                    <label for="telefono">Teléfono:</label>
                </div>
                
                <div>
                    <input type="number" name="telefono" id="telefono" placeholder="Ingrese su Teléfono">
                </div>
                
            </div>

            <div class="campo">
                <div>
                    <label for="email">Email:</label>
                </div>
                
                <div>
                    <input type="text" id="email" name="email" placeholder="Ingrese su Correo Electrónico." />
                </div>
                
            </div>

            <div class="campo">
                <div>
                    <label for="descPastel">Descripción general del pastel:</label>
                </div>
                
                <div>
                    <textarea name="descPastel" id="descPastel" cols="80" rows="8" placeholder="Ingrese una descripción general del pastel y la selección de sabores y adornos"></textarea>
                </div>
                
            </div>
            <!-- <button @click="$store.dispatch( 'addThings' )">Generar Pedido</button> -->
            <div class="boton">
                <button @click="$store.dispatch( 'addThings' )">Generar Pedido</button>
            </div>

        </div>

        <div class="gracias container" id="graciasCompra">
            <div>
                <h4>Gracias, pedido realizado</h4>
                <h4>Total a Pagar: ${{ $store.getters.getterTotalPagar }}</h4>
            </div>
            
        </div>
             <!-- -->


        
        <!-- </form> -->

    </div>
    
</template>

<script>
export default {
    name: 'Form',
}
</script>

<style scoped>

    label{
        font-size: 28px;
    }

    input{
        font-size: 18px;
        width: 56%;
        margin-left: 5%;
    }

    .formContainer{
        width: 100%;
        padding: 5% 0;
        text-align: left;
    }

    .campo{
        width: 100%;
        margin: 2% 0;
    }

    .boton{
        width: 100%;
        margin: 0 0 5% 0;
    }

    .boton button{
        width: 30%;
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

    .form{
        width: 40%;
        padding: 0 0 0 5%;
    }

    .gracias{
        display: none;
        width: 50%;
        padding: 10% 0;
    }

    .gracias div{
        background-color: #343f56;
        border-radius: 15px;
        color: #FB9300;
        padding: 1% 0;
    }

</style>