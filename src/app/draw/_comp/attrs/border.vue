<template>
    <el-form ref="form" :model="borderForm" label-width="70px" size="mini" class="border-form">
        <el-form-item label="边框样式:">
            <el-select v-model="borderForm.borderType" clearable placeholder="请选择边框样式">
                <el-option
                        v-for="item in borderTypeList"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                </el-option>
            </el-select>
        </el-form-item>

        <el-form-item label="边框颜色:">
            <el-color-picker
                    size="mini"
                    v-model="borderForm.borderColor"
                    show-alpha
                    :predefine="predefineColors">
            </el-color-picker>
        </el-form-item>

        <el-form-item label="边框尺寸:">
            <el-slider
                    :min="0"
                    :max="1000"
                    v-model="borderForm.borderSize"
                    show-input
                    input-size="mini">
            </el-slider>
        </el-form-item>
        <el-form-item label="边框圆角:">
            <el-slider
                    :min="0"
                    :max="50"
                    v-model="borderForm.borderRadius"
                    show-input
                    input-size="mini">
            </el-slider>
        </el-form-item>

    </el-form>
</template>

<script>
	export default {
		name: 'border',
		data() {
			return {
				// 字体表单容器
				borderForm: {
					borderType: 'solid',
					borderColor: null,
					borderSize: 0,
					borderRadius: 0,
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
    .border-form {
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
    }
</style>

<style lang="scss" scoped>
    .border-form {
        padding-top: 10px;
    }
</style>