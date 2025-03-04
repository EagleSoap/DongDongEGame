<template>
	<div class="copyright">
		<div class="content">
			<div> 备案号：皖ICP备2023021453号-2 </div>
			<NuxtLink class="down" to="https://www.dongdongegame.com">
				<Icon name="fa6-solid:cloud-arrow-down" />
				<span> 下载客户端 </span>
			</NuxtLink>
		</div>
	</div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.copyright {
	width: 100%;
	color: #fff;
	background-color: #000;
}

.content {
	height: 64px;
}

.down {
	display: flex;
	align-items: center;
	gap: 8px;
	color: #fff;
}
</style>
