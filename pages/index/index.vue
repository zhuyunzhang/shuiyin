<template>
	<view class="content">
		<view class="text-area">
			<text class="title">免费工具，不收取任何费用</text>
		</view>
		<view>
			<grid title="功能" >
				<grid-item order="1" iconImg="/static/dy.png" url="../info/index" text="抖音去水印"></grid-item>
				<grid-item order="2" iconImg="/static/tt.png" url="../info/index" text="TikTok去水印"></grid-item>
				<grid-item order="3" iconImg="/static/ks.png" url="../info/index" text="快手去水印"></grid-item>
				<grid-item order="4" iconImg="/static/hs.png" url="../info/index" text="火山去水印"></grid-item>
				<grid-item order="5" iconImg="/static/ppx.png" url="../info/index" text="皮皮虾去水印"></grid-item>
				<grid-item order="6" iconImg="/static/sy.png" url="../info/index" text="自动适配"></grid-item>
			</grid>
		</view> 
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {
			
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
