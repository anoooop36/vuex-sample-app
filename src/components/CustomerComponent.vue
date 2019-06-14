<template>
  <div class="customer">
    <h1>I'm a customer</h1>
    <p>I see {{ totalTvCount }} TVs!</p>
    <p v-show="!totalTvCount">I can't buy any..</p>
    <button 
      :disabled="!totalTvCount"
      @click="buyTv">
      Buy TV
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class CustomerComponent extends Vue {
  @Prop() private msg!: string;
  get totalTvCount(): number {
    return this.$store.state.totalTvCount;
  }
  public buyTv(): void {
    this.$store.dispatch('removeTvAction', 1);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
