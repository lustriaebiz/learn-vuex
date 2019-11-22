<template>
  <div id="products-list-one">
    <h2>Product List Two</h2>

    <li v-for="product in saleProducts">
      <span class="name">{{ product.name }}</span>
      <span class="price">$ {{ product.price }}</span>
    </li>

    <button v-on:click = "reducePrice(4)">Reduce Price</button>
  </div>
</template>

<script>

import {mapGetters} from 'vuex';
import {mapActions} from 'vuex';

export default {
  computed: {
    products(){
      return this.$store.state.products;
    },
    // saleProducts(){
    //   return this.$store.getters.saleProducts;
    // }
    ...mapGetters([
      'saleProducts'
    ])
  },
  methods: {
    // reducePrice(amount) {
    //   // this.$store.state.products.forEach( product => {
    //   //   product.price -= 600;
    //   // })
    //
    //   this.$store.dispatch('reducePrice', amount);
    // }
    ...mapActions([
      'reducePrice'
    ])
  }
}
</script>

<style lang="scss">

</style>
