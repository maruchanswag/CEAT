<script setup lang="ts">
	import { useMessages } from '~/composables/messages'
	import Messages from '~/components/chat/messages.vue'
	import Form from '~/components/chat/form.vue'
	import ThemeSwitcher from '~/components/nav/theme-switcher.vue'

	const { messages } = useMessages()
</script>

<template>
	<main class="container mx-auto max-w-4xl h-screen">
		<header class="p-5 flex flex-row justify-around items-center">
			<h2 class="text-center text-3xl font-bold self-start">Noxy - chat</h2>
			<ThemeSwitcher />
		</header>

		<Messages :messages="messages" />
		<Form />
	</main>
</template>
