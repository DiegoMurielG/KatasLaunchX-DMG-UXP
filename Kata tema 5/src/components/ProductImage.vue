<template>
   <div v-for="pic in pics">
      <img :src="getImgUrl(pic)" v-bind:alt="pic">
   </div>
</template>

<script>
  getImgUrl(pet) {
    var images = require.context('../assets/', false, /\.png$/)
    return images('./' + pet + ".png")
  }
</script>