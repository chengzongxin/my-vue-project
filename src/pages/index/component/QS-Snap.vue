<template>
	<div>
		<div 
		class="roller-wrapper" 
		:class="[rollerWrapClassName]" 
		:style="wrapStyle">
			<div class="roller">
				<div 
				class="item" 
				v-for="(item, index) in nlist" 
				:key="index"
				:id="`${preItemIdName}${item.id}`"
				:style="{ 
					height: itemHeight,
					marginBottom: (index == nlist.length - 1)?(endItemMB + 'px'):0
				}">
					<span
					v-if="item.id >= 0"
					class="content"
					:style="getTextStyle(item)">{{nameField?item.data[nameField]:item.data}}</span>
				</div>
			</div>
			<div 
			class="roller-enter" 
			:class="[rollerCenterClassName]" 
			:style="rollerCenterStyle"></div>
		</div>
	</div>
</template>

<script>
	let id = 0, isUni = typeof uni == 'object';
	export default {
		name: 'QS-Snap',
		props: {
			list: { type: Array, default: ()=>[] },
			itemHeight: { type: [String, Number], default: '60rpx' },
			height: { type: String, default: '400rpx' },
			vibrateShort: { type: Boolean, default: false },
			boxStyle: {
				type: String,
				default: ``,
			},
			centerLineStyle: {
				type: String,
				default: ``,
			},
			textStyle: {
				type: String,
				default: `font-size: 30rpx;`
			},
			textActiveStyle: { type: String, default: 'font-weight: bold;transform: scale(1.2);' },
			nameField: { type: String, default: '' },
		},
		data() {
			if(id > 999) {
				id = 0
			}
			const _id = id++
			return {
				current: 0,
				pts: [],
				nlist: [],
				centerTop: 0,
				endItemMB: 0,
				rollerWrapClassName: `QS-Snap-roller-wrapper-${_id}`,
				rollerCenterClassName: `QS-Snap-roller-enter-${_id}`,
				preItemIdName: `QS-Snap-item-${_id}-`,
			}
		},
		computed: {
			wrapStyle() {
				const s = `${this.boxStyle};height: ${this.calcPX(this.height)}px;`
				return this.styleString2Obj(s)
			},
			rollerCenterStyle() {
				const s = `${this.centerLineStyle};height: ${this.calcPX(this.itemHeight)}px;top: ${this.centerTop + 'px'};`
				return this.styleString2Obj(s)
			}
		},
		watch: {
			list: {
				handler() {
					this.init()
				},
				immediate: true
			}
		},
		beforeDestroy() {
			this.disconnect()
		},
		methods: {
			getTextStyle(item) {
				return this.styleString2Obj( this.textStyle + ';' + (this.current == item.id?this.textActiveStyle:'') )
			},
			styleString2Obj(s) {
				return s.split(';').filter(i=>i).reduce((pre, cur)=>{ 
					const item = cur.split(':').map(i=>i.trim())
					const t = item[1].match(/\d+(\.\d+)?rpx/g)
					if(t?.length) {
						t.forEach(ti=>{
							item[1].replace(t, this.upx2px(ti))
						})
					}
					pre[item[0]] = item[1]
					return pre
				}, {})
			},
			setCenterTop() {
				const h = this.calcPX(this.height)
				const ith = this.calcPX(this.itemHeight)
				const r = Math.floor(h / ith / 2) * ith
				this.centerTop = r
				return r
			},
			setEndItemMB() {
				const h = this.calcPX(this.height)
				const ith = this.calcPX(this.itemHeight)
				const centerTop = this.setCenterTop()
				const r = h - (centerTop + ith)
				this.endItemMB = r
				return r
			},
			getPreList() {
				const h = this.calcPX(this.height)
				const ith = this.calcPX(this.itemHeight)
				const centerTop = this.setCenterTop()
				let s = Math.ceil((h / 2 - ith / 2) / ith)
				if(s * ith < centerTop) s += 1
				else if(s*ith >= (centerTop + ith)) s-= 1
				return Array(s).fill('').map((o, i)=>({ id: -(i+1)}) )
			},
			calcPX(d) {
				let t = typeof d
				switch (t){
					case 'string':
						if(~d.indexOf('rpx')) {
							return this.upx2px(d.replace('rpx', ''))
						}else{
							return Number(d.replace('px', ''))
						}
						break;
					case 'number':
						return d
						break;
					default:
						return Number(d)
						break;
				}
			},
			upx2px(d) {
				if(isUni){
					return uni.upx2px(d)
				}
				return d / 2
			},
			disconnect() {
				if(Array.isArray(this.obs))
					this.obs?.forEach?.(i=>i?.disconnect?.())
				else
					this.obs?.disconnect?.()
				
				this.obs = null
			},
			setCurrent(i) {
				this.current = i
				this.$emit('change', i)
				if(this.vibrateShort) {
					if(isUni) {
						// #ifndef H5
						uni?.vibrateShort?.()
						// #endif
					}
				}
			},
			async init() {
				if(!this.list?.length) return
				
				let list = this.list, 
					io, 
					ith = this.calcPX(this.itemHeight), 
					h = this.calcPX(this.height),
					centerTop = this.setCenterTop(),
					endItemMB = this.setEndItemMB(),
					preList = this.getPreList();
					
				this.nlist = []
				this.disconnect()
				this.nlist = [...preList, ...(list.map((o, i)=>({ id: i, data: o }))) ]
				await new Promise(rs=>this.$nextTick(rs))
				// H5用此方法监听到的是NaN
				// #ifndef H5
				if(isUni) {
					io = []
					for(let i = 0; i < list.length; i++) {
						const obs = uni.createIntersectionObserver(this)
						obs.relativeTo(`.${this.rollerCenterClassName}`,
							// 支付宝小程序开发者工具 bottom取反， 真机正常
							{ top: -(ith / 2 - .5), bottom: -(ith / 2 - .5) },
							// { top: -(uni.upx2px(29.5)), bottom: -(uni.upx2px(29.5)) },
						).observe(`#${this.preItemIdName}${i}`, r=>{
							if(r.intersectionRatio > 0) {
								this.oldCurrent = this.current
								this.setCurrent(i)
							}else{
								if(i == this.current) {
									this.setCurrent(this.oldCurrent)
								}
							}
						})
						io.push(obs)
					}
				}
				// #endif
				
				// #ifdef H5
				io = new IntersectionObserver(k=>{
					k.forEach(e=>{
						let i = e.target.id.split('-')
						i = i[i.length - 1]
						if(e.isIntersecting) {
							this.oldCurrent = this.current
							this.setCurrent(i)
						}else{
							if(i == this.current) {
								this.setCurrent(this.oldCurrent)
							}
						}
					})
				}, {
				  threshold: [0, 1],
				  root: document.querySelector(`.${this.rollerWrapClassName}`),
				  rootMargin: `${-(centerTop + ith * .3)}px 0px ${-(endItemMB + ith * .3)}px 0px`
				} )
				
				list.forEach((o, i)=>{
					const el = document.querySelector(`#${this.preItemIdName}${i}`)
					io.observe(el)
				})
				// #endif
				
				this.obs = io
			},
		}
	}
</script>

<style scoped>
	.roller-wrapper{
		position: relative;
	}
	.roller-enter {
		position: absolute;
		width: 100%;
		pointer-events: none;
	}
	
	.roller {
		height: 100%;
		overflow-y: auto;
		scroll-snap-type: y mandatory;
		perspective: 3000;
	}
	
	.item {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		color: #333;
		font-weight: bold;
		scroll-snap-align: start;
		scroll-snap-stop: always;
		font-size: 15px;
	}
	
	.content{
		transform: scale(1);
		font-weight: 400;
		transition: all .25s;
	}
</style>
