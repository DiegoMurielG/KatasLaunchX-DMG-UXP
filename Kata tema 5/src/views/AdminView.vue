<template>
    <div class="admin">
        <CantidadPasteles/>

        <CantidadSabores/>

        <CantidadToppings/>

        <PedidosRecibidos/>

        <Contact/>

        <!-- <ColorPallete/> -->
    </div>
</template>

<script>
import ColorPallete from "@/components/ColorPallete.vue";
import CantidadPasteles from "@/components/CantidadPasteles.vue";
import CantidadSabores from "@/components/CantidadSabores.vue";
import CantidadToppings from "@/components/CantidadToppings.vue";
import PedidosRecibidos from "@/components/PedidosRecibidos.vue";
import Contact from "@/components/Contact.vue";

export default {
  name: 'AdminView',
  components: {
    ColorPallete,
    CantidadPasteles,
    CantidadSabores,
    CantidadToppings,
    PedidosRecibidos,
    Contact,

  }
}
</script>

<style scoped>

</style>
