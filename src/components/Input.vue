<template>
  <div class="hello">
    <hr>
    <formgroup>
      X:<input type="number" @input="changedX" v-model="x"> Y:
      <input type="number" @input="changedY" v-model="y">
    </formgroup>
  </div>
</template>

<script>
export default {
  name: 'Input',
  data: function () {
      return {
          x: 0,
          y: 0
      }
  },
    methods: {
        changedX: function(event) {
            this.$store.commit('changeX', event.target.value);
        },
        changedY: function(event) {
            this.$store.commit('changeY', event.target.value);
        }
    }

}
</script>


<style scoped>

</style>
