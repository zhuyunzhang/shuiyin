<template>
	<view class="content">
		<view class="text-area">
			<text class="title">工具永久免费,微信搜索:aaaaa</text>
		</view>
		<view v-bind:style="{  width: clientWidth + 'px' }">
			<uni-easyinput  v-model="linkValue" placeholder="请输入视频链接" ></uni-easyinput>
		</view>
		<view style="margin-top: 10px;">
			<button type="default" size="mini" @click="paste">粘贴链接</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				linkValue:'',
				content:{
					placeholderText:'请输入视频链接'
				},
				clientWidth:uni.getSystemInfoSync().windowWidth-40
			}
		},
		onLoad() {
			
		},
		methods: {
			paste(){
				let _that=this
				uni.getClipboardData({
					success:function(res){
						_that.linkValue=res.data
						uni.showToast({
							title:"粘贴成功",
							icon:"none"
						})
					}
				})
			},
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
		font-size: 28rpx;
		color: green;
	}
	.icon-wrap{
		position:relative;
		height:60upx; // 搜索框高度
		width: 100%;
		top:0;
		box-sizing: border-box;
	}
	.icon{
		width:60upx;
		height:60upx;
		box-sizing: border-box；
	}
</style>
