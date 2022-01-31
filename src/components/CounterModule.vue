<template>
  <div class="counter-container">
    <h5>CounterModule</h5>
    <h1 :style="{color: $store.state.counter2.colorCode,}">{{$store.state.counter2.count}}</h1>
    <div class="exponential">
      {{$store.state.counter2.count}}<sup>2</sup>={{$store.getters['counter2/squaredCount']}}
    </div>
    <div class="buttons">
      <button @click="$store.dispatch('counter2/addNum')">+</button>
      <button @click="$store.dispatch('counter2/minusNum')">-</button>
    </div>
    <input type="color" name="" id="" v-model="changeColor">
  </div>
</template>

<script>
export default {
  computed: {
    changeColor: {
      get(){
        return this.$store.state.counter2.colorCode;
      },
      set(value){
        this.$store.dispatch('counter2/setColorCode', value);
      }
    }
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