<script setup lang="ts">
	import Spinner from '../icon/spinner.vue'

	const route = useRoute()
	const messageRef = ref('')
	const isSending = ref(false)
	const onSubmit = async () => {
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
		@submit.prevent="onSubmit"
		class="flex flex-col justify-center space-y-4 xl:p-0 p-1 h-screen max-w-4xl"
	>
		<label for="">Mensaje a mandar</label>
		<input
			type="text"
			name="content"
			:disabled="isSending"
			class="rounded-lg w-full p-2 outline-none bg-sky-50"
			v-model="messageRef"
		/>
		<button
			type="submit"
			:disabled="isSending"
			class="p-3 rounded-lg bg-sky-600 c-white font-medium w-full"
			v-if="!isSending"
		>
			Enviar
		</button>
		<button
			type="submit"
			class="p-3 rounded-lg bg-sky-600 c-white font-medium w-full flex flex-row items-center justify-center"
			v-else
			:disabled="isSending"
		>
			<Spinner />
		</button>
	</form>
</template>
