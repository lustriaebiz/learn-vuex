<template>
  <div id="products-list-one">
    <h2>Product List One</h2>

    <li v-for="product in products">
      <span class="name">{{ product.name }}</span>
      <span class="price">$ {{ product.price }}</span>
    </li>
  </div>
</template>

<script>
export default {
  computed: {
    products(){
      return this.$store.state.products;
    }
  }
}
</script>

<style lang="scss">

</style>
