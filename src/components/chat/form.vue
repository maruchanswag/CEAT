<script setup lang="ts">
	import Spinner from '../icon/spinner.vue'

	const route = useRoute()
	const messageRef = ref('')
	const isSending = ref(false)
	const sendMessage = async () => {
		isSending.value = true
		const res = await fetch(import.meta.env.VITE_API_URL!, {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify({
				message: { username: route.query.username, content: messageRef.value },
			}),
		})

		if (res.ok) {
			messageRef.value = ''
			isSending.value = false
		}
		isSending.value = false
	}
</script>

<template>
	<form
		@submit.prevent="sendMessage"
		class="flex flex-row justify-center items-center xl:p-0 p-1 max-w-4xl"
	>
		<input
			type="text"
			name="content"
			:disabled="isSending"
			@submit="sendMessage"
			class="rounded-2xl w-full p-4 outline-none bg-light-200 dark:bg-dark-800 border-2 border-gray-200 dark:border-dark-400"
			v-model="messageRef"
		/>
		<button
			type="submit"
			:disabled="isSending"
			class="p-4 rounded-2xl flex flex-row items-center justify-center bg-sky-400 hover:bg-sky-500 dark:bg-dark-300 dark:hover:bg-dark-400 duration-100 ease-in-out c-white w-24 font-bold"
		>
			<template v-if="isSending">
				<Spinner />
			</template>
			<template v-else> Enviar </template>
		</button>
	</form>
</template>
