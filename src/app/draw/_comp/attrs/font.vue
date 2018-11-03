<template>
    <el-form ref="form" :model="fontForm" label-width="70px" size="mini" class="font-form">
        <el-form-item label="字体:">
            <el-select v-model="fontForm.fontFamily" clearable placeholder="请选择字体">
                <el-option
                        v-for="item in fontFamilyList"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                </el-option>
            </el-select>
        </el-form-item>

        <el-form-item label="字号:">
            <el-slider
                    v-model="fontForm.size"
                    show-input
                    input-size="mini">
            </el-slider>
        </el-form-item>

        <el-form-item label="文字颜色:">
            <el-color-picker
                    size="mini"
                    v-model="fontForm.color"
                    show-alpha
                    :predefine="predefineColors">
            </el-color-picker>
        </el-form-item>

        <el-form-item label="背景颜色:">
            <el-color-picker
                    size="mini"
                    v-model="fontForm.bgColor"
                    show-alpha
                    :predefine="predefineColors">
            </el-color-picker>
        </el-form-item>

        <el-form-item label="">
            <div class="font-align">
                <div>
                    <md-button class="md-icon-button  md-mini" @click="fontForm.weight=!fontForm.weight">
                        <i class="cms cms-icon-test" :class="{focus: fontForm.weight}"></i>
                    </md-button>
                    <md-button class="md-icon-button  md-mini" @click="fontForm.italic=!fontForm.italic">
                        <i class="cms cms-xieti" :class="{focus: fontForm.italic}"></i>
                    </md-button>
                    <md-button class="md-icon-button  md-mini" @click="fontForm.underline=!fontForm.underline">
                        <i class="cms cms-xiahuaxian" :class="{focus: fontForm.underline}"></i>
                    </md-button>
                </div>
                <div>
                    <md-button class="md-icon-button md-mini" @click="fontForm.align='left'">
                        <i class="cms cms-zuoduiqi" :class="{focus:'left' === fontForm.align}"></i>
                    </md-button>
                    <md-button class="md-icon-button md-mini" @click="fontForm.align='center'">
                        <i class="cms cms-juzhong" :class="{focus:'center' === fontForm.align}"></i>
                    </md-button>
                    <md-button class="md-icon-button md-mini" @click="fontForm.align='right'">
                        <i class="cms cms-youduiqi" :class="{focus:'right' === fontForm.align}"></i>
                    </md-button>
                </div>
            </div>
        </el-form-item>

        <el-form-item label="行高:">
            <el-slider
                    :min="0"
                    :max="1000"
                    v-model="fontForm.lineHeight"
                    show-input
                    input-size="mini">
            </el-slider>
        </el-form-item>
        <el-form-item label="行间距:">
            <el-slider
                    :min="0"
                    :max="1000"
                    v-model="fontForm.lineSpacing"
                    show-input
                    input-size="mini">
            </el-slider>
        </el-form-item>
        <el-form-item label="字符间距:">
            <el-slider
                    :min="0"
                    :max="50"
                    v-model="fontForm.letterSpacing"
                    show-input
                    input-size="mini">
            </el-slider>
        </el-form-item>

    </el-form>
</template>

<script>
	export default {
		name: 'font',
		data() {
			return {
				// 字体表单容器
				fontForm: {
					fontFamily: '',
					size: 14,
					align: 'left',
					// 加粗
					weight: false,
					// 斜体
					italic: false,
					// 下划线
					underline: false,
					// 行高
					lineHeight: 30,
					// 行间距
					lineSpacing: 0,
					// 字符间距
					letterSpacing: 1,
				},

				// 字体列表
				fontFamilyList: [{
					label: '微软雅黑',
					value: '微软雅黑'
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
    .font-form {
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
        .el-slider__button{
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
    .font-form {
        padding-top: 10px;
    }

    .font-align {
        display: flex;
        padding-left: 70px;
        > div:first-child {
            padding-right: 20px;
        }
    }
</style>