<template>
    <div class="home-body">
        <div class="home-left">
            <slot name="left"></slot>
        </div>
        <div class="home-main">
            <div class="main-header-container">
                <slot name="header"></slot>
            </div>
            <div class="home-view-content">
                <div>
                    <slot name="main"></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
	export default {
		name: 'layout-main'
	}
</script>

<style lang="scss" scoped>
    $main-active-height: 50px;
    .home-left {
        height: 100%;
        width: 300px;
        background-color: white;
        border-right: solid 1px #e6e6e6;
    }

    .home-main {
        height: 100%;
        flex-grow: 1;
        position: relative;
        background-color: #F0F3F4;
    }

    .main-header-container {
        top: 0;
        left: 0;
        width: 100%;
        height: $main-active-height;
        display: flex;
        align-items: center;
        position: absolute;
        background-color: white;
        box-shadow: 1px 1px 3px #dfdfdf;
    }

    .home-view-content {
        height: 100%;
        width: 100%;
        padding-top: $main-active-height;
        >div{
            height: 100%;
            width: 100%;
        }
    }
</style>