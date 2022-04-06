<template>
  <div class="home container">
    <div class="logo">
      <img alt="Reposteria a Domicilio logo" src="../assets/pasteleriaLogo.png">
    </div>
    
    
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div class="tituloSecciOn">
      <h4>Sabores</h4>
    </div>
    
    <div class="productContainer container">
      <Product1/> <!-- fileName="chocolateCake.jpg" -->
      <Product2/>
      <Product3/>
      <Product4/>
      <Product5/>
      <Product6/>
      <Product7/>
      <Product8/>  
    </div>

    <saboresOpcionales/>

    <SaboresElegir/><!-- -->

    <adornosOpcionales/>

    <AdornosElegir/>

    <Form/>

    <Contact/>
    <!-- <ColorPallete/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Contact from "@/components/Contact.vue";
import ColorPallete from "@/components/ColorPallete.vue";
import Product1 from "@/components/Product1.vue";
import Product2 from "@/components/Product2.vue";
import Product3 from "@/components/Product3.vue";
import Product4 from "@/components/Product4.vue";
import Product5 from "@/components/Product5.vue";
import Product6 from "@/components/Product6.vue";
import Product7 from "@/components/Product7.vue";
import Product8 from "@/components/Product8.vue";
import saboresOpcionales from "@/components/saboresOpcionales.vue";
import adornosOpcionales from "@/components/adornosOpciones.vue";
import SaboresElegir from "@/components/SaboresElegir.vue";
import AdornosElegir from "@/components/AdornosElegir.vue";
import Form from "@/components/Form.vue";

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    Contact,
    ColorPallete,
    Product1,
    Product2,
    Product3,
    Product4,
    Product5,
    Product6,
    Product7,
    Product8,
    saboresOpcionales,
    adornosOpcionales,
    SaboresElegir,
    AdornosElegir,
    Form,
  }
}
</script>

<style scoped>

  .logo{
    width: 100%;
  }

  .logo img{
    width: 500px;
    padding: 15%;
    background-color: rgba(45, 45, 45, 0.708);
  }

  .tituloSecciOn{
    width: 100%;
    text-align: center;
  }

  .productContainer{
    flex-flow: row;
    flex-wrap: wrap;
    justify-content: center;
  }

  .saborContainer{
    width: 100%;
  }

  .contact{
    width: 100%;
  }

  .colorPallete{
    width: 100%;
  }

</style>
