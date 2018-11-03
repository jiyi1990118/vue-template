<template>
    <el-form ref="form" :model="eventForm" label-width="70px" size="mini" class="event-form">

        <el-form-item label="开启跳转:">
            <el-switch
                    v-model="eventForm.isEvent"
                    active-text=""
                    inactive-text="">
            </el-switch>
        </el-form-item>

        <el-form-item label="跳转类型:">
            <el-select v-model="eventForm.jumpType" clearable placeholder="请选跳转类型">
                <el-option
                        v-for="item in jumpTypeList"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                </el-option>
            </el-select>
        </el-form-item>

        <el-form-item label="跳转目标:">
            <el-input
                    placeholder="请输入跳转目标"
                    v-model="eventForm.jumpTarget"
                    clearable>
            </el-input>
        </el-form-item>


    </el-form>
</template>

<script>
	export default {
		name: 'event',
		data() {
			return {
				// 事件表单容器
				eventForm: {
					isEvent: false,
					jumpType: 0
				},
				// 跳转类型集合
				jumpTypeList: [
					{
						label: '链接',
						value: 0
					}
				]
			}
		}
	}
</script>
<style lang="scss">
    .event-form {
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
    .event-form {
        padding-top: 10px;
    }

</style>