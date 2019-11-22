import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  strict : true,
  state : {
    products : [
      {name : "Class Mild", price: "180"},
      {name : "LA Mild", price: "175"},
      {name : "Sampoerna Mild", price: "180"},
      {name : "Jarum Supper", price: "140"},
      {name : "Dji Sam Soe", price: "100"}
    ]
  },
  getters: {
    saleProducts: state => {
      let saleProducts = state.products.map( product => {
        return {
          name : '**'+product.name+'**',
          price : product.price / 2
        }
      });

      return saleProducts;
    }
  },
  mutations: {
    reducePrice: (state, payload) => {
      state.products.forEach( product => {
        product.price -= payload;
      })
    }
  },
  actions: {
    reducePrice: (context, payload) => {
      setTimeout(function(){
        context.commit('reducePrice', payload);
      }, 2000);
    }
  }
});
