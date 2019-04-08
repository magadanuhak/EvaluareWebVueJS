<template>
  <div class="hello">
    Output
    <table>
      <thead>
        <tr>
          <th>Suma X + Y</th>

        </tr>
      </thead>
      <tbody>
        <tr>
          <th>{{parseInt($store.getters.getX)  + parseInt($store.getters.getY)  }}</th>

        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Output',

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
td, th{
  border:solid 1px;
}
</style>
