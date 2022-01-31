<template>
  <div class="counter-container">
    <h5>CounterMap</h5>
    <h1 :style="{color: ColorCode,}">{{Count}}</h1>
    <div class="exponential">
      {{Count}}<sup>2</sup>={{SquaredCount}}
    </div>
    <div class="buttons">
      <button @click="AddNum">+</button>
      <button @click="MinusNum">-</button>
    </div>
    <input type="color" name="" id="" v-model="changeColor">
  </div>
</template>

<script>
import {mapState, mapGetters, mapActions} from 'vuex';

export default {
  computed: {
    // Map
    ...mapGetters({
      SquaredCount: "counter2/squaredCount",
    }),
    ...mapState({
      Count: state => state.counter2.count,
      ColorCode: state => state.counter2.colorCode,
    }),

    changeColor: {
      get(){
        return this.ColorCode;
      },
      set(value){
        this.SetColorCode(value);
      }
    }
  },
  methods: {
    // SetColorCode(value) {
    //   this.$store.dispatch('counter2/setColorCode', value)
    // },
    ...mapActions({
      SetColorCode: 'counter2/setColorCode',
      AddNum: 'counter2/addNum',
      MinusNum: 'counter2/minusNum',
    }),
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