<script setup lang="ts">
	import { pusher } from '~/lib/pusher'
	import { Message } from '~/types'
	import Messages from '~/components/chat/messages.vue'
	import Form from '~/components/chat/form.vue'
	import IconMoon from '~/components/icon/moon.vue'
	import IconSun from '~/components/icon/sun.vue'
	type MessageResponse = {
		message: Message
	}

	const channel = pusher.subscribe('noxy-sysl')
	const messages = ref<Message[]>([])
	const dark = useDark()
	const toggleDarkMode = () => (dark.value = !dark.value)
	onMounted(() => {
		const bindChannel = () =>
			channel.bind('message', (data: MessageResponse) => {
				messages.value?.push(data.message)
			})
		bindChannel()
	})

	onUnmounted(() => channel.disconnect())
</script>

<template>
	<main class="container mx-auto max-w-4xl h-screen">
		<header
			class=" p-5 flex flex-row justify-around items-center"
		>
			<h2 class="text-center text-3xl font-bold self-start">Noxy - chat</h2>
			<button
				class="flex flex-row items-center justify-center h-8 w-8 dark:bg-transparent  bg-white self-end"
				@click="toggleDarkMode()"
			>
				<IconSun />
				<IconMoon />
			</button>
		</header>

		<Messages :messages="messages" />
		<Form />
	</main>
</template>
