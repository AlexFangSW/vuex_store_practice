<template>
  <div class="counter-container">
    <h5>CounterMap</h5>
    <h1 :style="{color: colorCode,}">{{count}}</h1>
    <div class="exponential">
      {{count}}<sup>2</sup>={{squaredCount}}
    </div>
    <div class="buttons">
      <button @click="addNum">+</button>
      <button @click="minusNum">-</button>
    </div>
    <input type="color" name="" id="" v-model="changeColor">
  </div>
</template>

<script>
import {mapState, mapGetters, mapActions} from 'vuex';

export default {
  computed: {
    // Map
    ...mapGetters("counter2",["squaredCount"]),
    ...mapState("counter2", ["count", "colorCode"]),

    changeColor: {
      get(){
        return this.colorCode;
      },
      set(value){
        this.setColorCode(value);
      }
    }
  },
  methods: {
    ...mapActions( "counter2",["setColorCode", "addNum", "minusNum"]),
  }
  
}
</script>

<style scoped>
  .counter-container {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 1rem;
    padding: 0.25rem;
    border: 0.1rem solid black;
    width: fit-content;
    border-radius: 0.25rem;
  }
  .buttons,
  .exponential {
    display: flex;
    flex-direction: row;
  }
  .buttons {
    column-gap: 0.5rem;
  }
  .buttons button {
    font-size: 2rem;
    width: 1.5rem
  }

</style>