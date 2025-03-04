<template>
	<div class="layout-default">
		<LayoutHeader />
		<slot></slot>
		<LayoutFooter />
	</div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.layout-default {
	position: relative;
}
</style>
