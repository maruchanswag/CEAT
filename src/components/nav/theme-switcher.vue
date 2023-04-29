<script setup lang="ts">
	import SunIcon from '../icon/sun.vue'
	import MoonIcon from '../icon/moon.vue'
	const dark = useDark()
	const toggleDarkMode = () => (dark.value = !dark.value)
</script>

<template>
	<button
		class="flex flex-row items-center justify-center h-8 w-8 dark:bg-transparent bg-white self-end"
		@click="toggleDarkMode()"
	>
		<SunIcon />
		<MoonIcon />
	</button>
</template>
