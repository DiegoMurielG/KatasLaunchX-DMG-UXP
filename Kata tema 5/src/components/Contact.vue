<template>
    <div id="contacto" class="contact">
        <h4>PAX: Porciones Aproximadas</h4>
        <div>
            <h4>Horarios de atencion</h4>
            <div class="table container">
                <div class="container">
                    <div class="topL">
                    <p>Lunes - Viernes</p>
                    </div>
                    <div class="topR">
                        <p>Sábados y Domingos</p>
                    </div>
                    <div class="downL">
                        <p>8 - 20 hrs.</p>
                    </div>
                    <div class="downR">
                        <p>9 - 20hrs.</p>
                    </div>
                </div>    
            </div>
        </div>
                
        <div>
            <h4>Datos de contacto</h4>
            <p>Teléfono: 5522664488</p>
            <p>Dirección:</p>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1881.9123348372873!2d-99.1799766994161!3d19.376743003358538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff84b6540259%3A0xf0b0da9451e7d2c0!2sMillet%2028-56%2C%20Extremadura%20Insurgentes%2C%20Benito%20Ju%C3%A1rez%2C%2003740%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses-419!2smx!4v1646585015377!5m2!1ses-419!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
    </div>
</template>

<script>
export default {
    name: 'Contact',
}
</script>

<style scoped>

    .table{
        justify-content: center;
        /*background-color: aqua;*/
    }

    .topL, .topR, .downL, .downR{
        width: 50%;
        font-size: 32px;
    }

    .topL, .downL{
        background-color: #f54747cb;
    }

    .topR, .downR{
        background-color: #fb9200a7;
    }

    .topL{
        border-radius: 15px 0 0 0;
    }

    .topR{
        border-radius: 0 15px 0 0;
    }

    .downL{
        border-radius: 0 0 0 15px;
    }

    .downR{
        border-radius: 0 0 15px 0;
    }

</style>