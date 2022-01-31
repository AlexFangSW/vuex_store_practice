<template>
  <div class="counter-container">
    <h5>Counter</h5>
    <h1 :style="{color: $store.state.colorCode,}">{{$store.state.count}}</h1>
    <div class="exponential">
      {{$store.state.count}}<sup>2</sup>={{$store.getters.squaredCount}}
    </div>
    <div class="buttons">
      <button @click="$store.dispatch('addNum')">+</button>
      <button @click="$store.dispatch('minusNum')">-</button>
    </div>
    <input type="color" name="" id="" v-model="changeColor">
  </div>
</template>

<script>
export default {
  computed: {
    changeColor: {
      get(){
        return this.$store.state.colorCode;
      },
      set(value){
        this.$store.dispatch('setColorCode', value);
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