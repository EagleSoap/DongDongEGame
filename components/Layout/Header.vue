<template>
	<div class="header">
		<div class="content">
			<div class="logo">
				<img src="/image/icon.png" alt="东东电竞" title="东东电竞" />
				<div>
					<p>东东电竞</p>
					<p>DongDong E-Game</p>
				</div>
			</div>
			<NuxtLink class="down" to="https://www.dongdongegame.com">
				<Icon name="fa6-solid:cloud-arrow-down" />
				<span> 下载客户端 </span>
			</NuxtLink>
		</div>
	</div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.header {
	width: 100%;
	color: #fff;
	position: absolute;
	left: 0;
	top: 0;
	z-index: 10;
}

.content {
	height: 64px;
}

.logo {
	display: flex;
	align-items: center;
	gap: 8px;

	img {
		width: 56px;
		height: 56px;
		object-fit: contain;
	}

	div {
		font-size: 26px;
		font-family: "YouSheBiaoTiHei";

		p {
			line-height: 1;

			&:last-of-type {
				font-size: 10px;
				font-family: "sans";
			}
		}
	}
}

.down {
	display: flex;
	align-items: center;
	gap: 8px;
	padding: 8px;
	font-size: 12px;
	color: #fff;
	border-radius: 6px;
	background: #1e90ff;
}

@media screen and (max-width: 750px) {
	.header {
		position: relative;
		background-color: #000;
	}

	.logo {
		img {
			width: 32px;
			height: 32px;
		}

		div {
			font-size: 24px;
		}

		p {
			&:last-of-type {
				font-size: 12px;
			}
		}
	}
}
</style>
