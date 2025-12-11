<template>
	<view class="captcha-container">
		<canvas
			canvas-id="captchaCanvas"
			class="captcha-canvas"
			@click="refresh"
		></canvas>
	</view>
</template>

<script>
export default {
	name: "Captcha",
	props: {
		length: {
			type: Number,
			default: 4
		}
	},
	data() {
		return {
			code: ""
		}
	},
	mounted() {
		this.draw()
	},
	methods: {
		// 生成随机验证码
		genCode() {
			const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"
			let res = ""
			for (let i = 0; i < this.length; i++) {
				res += chars[Math.floor(Math.random() * chars.length)]
			}
			this.code = res
			this.$emit("change", res) // 把验证码传给父组件
		},

		// 绘制验证码
		draw() {
			this.genCode()

			const ctx = uni.createCanvasContext("captchaCanvas", this)

			// 背景
			ctx.setFillStyle("#f2f2f2")
			ctx.fillRect(0, 0, 75, 30)

			// 字体
			ctx.setFontSize(20)

			// 绘制验证码字符
			for (let i = 0; i < this.code.length; i++) {
				const x = 10 + i * 15
				const y = 20 + Math.random() * 5
				const angle = (Math.random() * 10 * Math.PI) / 180

				ctx.save()
				ctx.translate(x, y)
				ctx.rotate(angle)
				ctx.setFillStyle(this.randomColor())
				ctx.fillText(this.code[i], 0, 0)
				ctx.restore()
			}

			// 干扰线
			for (let i = 0; i < 3; i++) {
				ctx.beginPath()
				ctx.moveTo(Math.random() * 75, Math.random() * 30)
				ctx.lineTo(Math.random() * 75, Math.random() * 30)
				ctx.setStrokeStyle(this.randomColor())
				ctx.stroke()
			}

			// 干扰点
			for (let i = 0; i < 20; i++) {
				ctx.setFillStyle(this.randomColor())
				ctx.fillRect(Math.random() * 75, Math.random() * 30, 2, 2)
			}

			ctx.draw()
		},

		randomColor() {
			const r = Math.floor(Math.random() * 255)
			const g = Math.floor(Math.random() * 255)
			const b = Math.floor(Math.random() * 255)
			return `rgb(${r},${g},${b})`
		},

		refresh() {
			this.draw()
		}
	}
}
</script>

<style scoped>
.captcha-canvas {
	width: 75px;
	height: 30px;
	border: 1px solid #ccc;
}
</style>
