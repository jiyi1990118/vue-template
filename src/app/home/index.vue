<template>
  <layout-main>
    <template slot="left">
    </template>

    <template slot="header">
      <md-button class="md-dense md-raised md-primary">创建页面</md-button>
    </template>

    <template slot="main">
    </template>

  </layout-main>
</template>

<script>
  import layoutMain from './layoutMain';

  export default {
    name: 'homeIndex',
    components: {
      layoutMain
    }
  }
</script>

<style lang="scss" scoped>

</style>
