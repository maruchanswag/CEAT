<script setup lang="ts">
	import { Message } from '~/types'
	import MessageItem from './message-item.vue'

	type Props = {
		messages: Message[]
	}

	const props = defineProps<Props>()

</script>

<template>
	<section
		v-auto-animate
		class="flex flex-col w-full h-full p-2 gap-5 mt-3 rounded-md dark:bg-dark-700 dark:border-dark-700 bg-light-50 border-gray-100 border-2 overflow-y-auto scrollbar-rounded scrollbar scrollbar-w-3 scrollbar-thumb-color-sky-300"
	>

		<MessageItem v-for="message in props.messages" :message="message" />
	</section>
</template>
