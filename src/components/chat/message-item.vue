<script setup lang="ts">
	import { Message } from '~/types'

	type Props = {
		message: Message
	}

	const route = useRoute()
	const props = defineProps<Props>()
	const actualDate = new Date().toLocaleTimeString()
	const isActualUser = route.query.username === props.message.username

	const MessageCardStyles = `   flex flex-col space-y-3 min-w-32 max-w-64 shadow-md rounded-lg    pl-5 pt-4   ${
		isActualUser ? 'self-end bg-sky-100 dark:bg-sky-800' : "bg-gray-100 dark:bg-dark-500"
	}`
</script>

<template>
	<article :class="MessageCardStyles">
		<h2 class="font-bold">{{ props.message.username }}</h2>
		<p class="mt-3 min-h-4 max-h-full">{{ message.content }}</p>
		<p class="self-end pr-3 dark:c-gray-50 c-gray-400 text-sm">{{ actualDate }}</p>
	</article>
</template>
