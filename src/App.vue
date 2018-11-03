<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
	export default {
		name: 'App',
		data() {

			return {}
		}
	}
</script>

<style scoped>
    #app {
        color: #2c3e50;
        text-align: center;
        height: 100%;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
    }
</style>

<style lang="scss">
    html, body {
        width: 100%;
        height: 100%;
        background-color: white;
        box-sizing: border-box;
    }
    ul{
        margin: 0;
        padding: 0;
        list-style: none;
    }

</style>
