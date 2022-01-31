<template>
  <div class="container">
    <Counter />
    <CounterModule />
    <CounterMap />
  </div>
</template>

<script>
import Counter from "@/components/Counter";
import CounterModule from "@/components/CounterModule";
import CounterMap from "@/components/CounterMap";

export default {
  name: 'App',
  components: {
    Counter,
    CounterModule,
    CounterMap,
  }
}
</script>

<style>
  :root {
    font-size: 25px;
  }
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  .logo {
    position: absolute;
    left: 50%;
    transform: translate( -50%);
  }
  .container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    min-height: 100vh;
  }

</style>
