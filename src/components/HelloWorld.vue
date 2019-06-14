<template>
  <div class="hello">
    <div class="all-customers">
      <div class="grid-item">
        <customer-component></customer-component>
      </div>
      <div class="grid-item">
        <customer-component></customer-component>
      </div>
      <div class="grid-item">
        <customer-component></customer-component>
      </div>
      <div class="grid-item">
        <customer-component></customer-component>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import CustomerComponent from '@/components/CustomerComponent.vue';

@Component({
    components: { CustomerComponent },
})
export default class HelloWorld extends Vue {
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
.all-customers{
  display: grid;
  grid-template-columns: auto auto auto;
  padding: 10px;
}
.grid-item {
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 20px;
  font-size: 30px;
  text-align: center;
}
</style>
