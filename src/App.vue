<template>
  <div id="app">
    <products-list-one></products-list-one>
    <products-list-two></products-list-two>
  </div>
</template>

<script>

import ProductListOne from './components/ProductListOne.vue';
import ProductListTwo from './components/ProductListTwo.vue';

export default {
  components : {
    'products-list-one' : ProductListOne,
    'products-list-two' : ProductListTwo,
  },
  name: 'app',
  data () {
    return {

    }
  }
}
</script>

<style lang="scss">

</style>
