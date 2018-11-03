<script>
	export default {
		name: 'tabs',
		props: {
			type: String,
			activeName: String,
			closable: Boolean,
			addable: Boolean,
			value: {},
			editable: Boolean,
			tabPosition: {
				type: String,
				default: 'top'
			},
			beforeLeave: Function,
			stretch: Boolean
		},
		data() {
			return {
				currentName: this.value || this.activeName ,
				panes: [],
			};
		},
        render(){

	        const header =this.panes.map((pane,index)=>{
		        return <li class={{focus:index === this.pane || pane.name === this.currentName ||  index === this.currentName}} on-click={(ev) => { this.handleTabClick(pane, index, ev); }}><span>{pane.label}</span></li>
	        });

	        if(this.currentName === undefined && this.panes.length){
		        this.currentName=this.panes[0].name;
            }

			return (
				<div class="tabs-comp">
                    <div class="toggle-tabs-title"><ul>{header}</ul></div>
                    <div class="toggle-tabs-content"> {this.$slots.default}</div>
                </div>
            )
        },

		methods: {
			handleTabClick(tab, index, event) {
				if (tab.disabled) return;
				this.setCurrentName(tab.name||index);
				this.$emit('tab-click', tab, event);
			},
			handleTabRemove(pane, ev) {
				if (pane.disabled) return;
				ev.stopPropagation();
				this.$emit('edit', pane.name, 'remove');
				this.$emit('tab-remove', pane.name);
			},
			handleTabAdd() {
				this.$emit('edit', null, 'add');
				this.$emit('tab-add');
			},
			setCurrentName(value) {
				const changeCurrentName = () => {
					this.currentName = value;
					this.$emit('input', value);
				};

				if (this.currentName !== value && this.beforeLeave) {
					const before = this.beforeLeave(value, this.currentName);
					if (before && before.then) {
						before.then(() => {
							changeCurrentName();
							this.$refs.nav && this.$refs.nav.removeFocus();
						});
					} else if (before !== false) {
						changeCurrentName();
					}
				} else {
					changeCurrentName();
				}
			},
			addPanes(item) {
				const index = this.$slots.default.indexOf(item.$vnode);
				this.panes.splice(index, 0, item);
			},
			removePanes(item) {
				const panes = this.panes;
				const index = panes.indexOf(item);
				if (index > -1) {
					panes.splice(index, 1);
				}
			}
		},
        watch:{
			value(){
				this.currentName= this.value ;
            }
        }
	}
</script>

<style lang="scss" scoped>
    .tabs-comp{
        user-select:none;
    }

    .toggle-tabs-title {
        border-bottom: solid 1px #e0e0e0;
        ul {
            display: flex;
            flex-wrap: wrap;
        }
        li {
            width: (100% / 3);
            cursor: pointer;
            padding-bottom: 5px;
            &.focus {
                span {
                    color: #409EFF;
                    border-bottom-color: #409EFF;
                }
            }
        }
        span {
            height: 100%;
            font-size: 14px;
            padding-left: 3px;
            padding-right: 3px;
            padding-bottom: 5px;
            display: inline-block;
            border-bottom: solid 1.5px transparent;
        }
    }

    .toggle-tabs-content{
        padding: 5px;
    }
</style>