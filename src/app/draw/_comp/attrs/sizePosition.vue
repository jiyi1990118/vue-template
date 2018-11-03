<template>
    <el-form ref="form" :model="sizePositionForm" label-width="75px" size="mini" class="sizePosition-form">

        <el-form-item label="固定宽高:">
            <el-switch
                    v-model="sizePositionForm.fixed"
                    active-text=""
                    inactive-text="">
            </el-switch>
        </el-form-item>

        <el-form-item label="宽:" v-if="sizePositionForm.fixed">
            <el-slider
                    :min="0"
                    :max="1000"
                    v-model="sizePositionForm.width"
                    show-input
                    input-size="mini">
            </el-slider>
        </el-form-item>
        <el-form-item label="高:" v-if="sizePositionForm.fixed">
            <el-slider
                    :min="0"
                    :max="1000"
                    v-model="sizePositionForm.height"
                    show-input
                    input-size="mini">
            </el-slider>
        </el-form-item>

        <el-form-item label="定位方式:" class="flex-start">
            <el-radio-group v-model="sizePositionForm.position">
                <el-radio label="initial">流式</el-radio>
                <el-radio label="relative">相对</el-radio>
                <el-radio label="absolute">绝对</el-radio>
            </el-radio-group>
        </el-form-item>

        <el-form-item label="left:" v-if="sizePositionForm.position != 'initial'">
            <el-slider
                    :min="0"
                    :max="1000"
                    v-model="sizePositionForm.left"
                    show-input
                    input-size="mini">
            </el-slider>
        </el-form-item>
        <el-form-item label="top:" v-if="sizePositionForm.position != 'initial'">
            <el-slider
                    :min="0"
                    :max="1000"
                    v-model="sizePositionForm.top"
                    show-input
                    input-size="mini">
            </el-slider>
        </el-form-item>

        <el-form-item label="旋转角度:">
            <el-slider
                    :min="0"
                    :max="360"
                    v-model="sizePositionForm.angle"
                    show-input
                    input-size="mini">
            </el-slider>
        </el-form-item>

        <el-form-item label="透明度:">
            <el-slider
                    :min="0"
                    :max="1"
                    :step="0.01"
                    v-model="sizePositionForm.transparent"
                    show-input
                    input-size="mini">
            </el-slider>
        </el-form-item>

    </el-form>
</template>

<script>
	export default {
		name: 'sizePosition',
		data() {
			return {
				// 字体表单容器
				sizePositionForm: {
					// 固定宽高
					fixed: false,
					// 宽
					width: 100,
					height: 50,
					// 定位方式
					position: 'initial',
					top: 0,
					left: 0,
					angle: 0,
					transparent:1,
				},
				
				// 字体列表
				borderTypeList: [{
					label: '实线',
					value: 'solid'
				}],
				// 颜色选择器预选颜色
				predefineColors: [
					'#ff4500',
					'#ff8c00',
					'#ffd700',
					'#90ee90',
					'#00ced1',
					'#1e90ff',
					'#c71585',
					'rgba(255, 69, 0, 0.68)',
					'rgb(255, 120, 0)',
					'hsv(51, 100, 98)',
					'hsva(120, 40, 94, 0.5)',
					'hsl(181, 100%, 37%)',
					'hsla(209, 100%, 56%, 0.73)',
					'#c7158577'
				]
			}
		}
	}
</script>
<style lang="scss">
    .sizePosition-form {
        .el-form-item__label {
            color: #909399;
            font-size: 13px;
            text-align: right;
        }
        .el-select {
            width: 100%;
        }
        .el-form-item--mini.el-form-item, .el-form-item--small.el-form-item {
            margin: 0;
            display: flex;
            align-items: center;
            padding-bottom: 5px;
            justify-content: flex-start;
            .el-form-item__content {
                flex-grow: 1;
                margin-left: 0 !important;
                font-size: 12px;
            }
        }
        .el-color-picker--mini {
            top: 5px;
            position: relative;
        }
        .md-mini {
            margin: 0;
            width: 25px;
            height: 25px;
            min-width: 25px;
            .md-button-content {
                i {
                    color: #013878;
                    font-size: 14px;
                    &.focus {
                        color: #c71f1f;
                    }
                }
            }
        }

        .el-slider__bar, .el-slider__runway {
            height: 3px;
        }
        .el-slider__runway {

        }
        .el-slider__input {
            width: 95px;
        }
        .el-slider__button {
            width: 11px;
            height: 11px;
        }
        .el-slider__button-wrapper {
            top: -16px;
        }
        .el-slider__runway.show-input {
            margin-right: 105px;
        }
        .el-input-number--mini .el-input__inner {
            padding-left: 30px;
            padding-right: 30px;
        }

        .el-form-item.flex-start {
            align-items: flex-start;
            .el-form-item__content {
                /*padding-top: 5px;*/
                .el-radio {
                    margin-left: 0;
                    margin-right: 10px;
                }
            }
        }
    }
</style>

<style lang="scss" scoped>
    .sizePosition-form {
        padding-top: 10px;
    }
</style>