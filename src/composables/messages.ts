import { pusher } from '~/lib/pusher'
import { Message } from '~/types'

type MessageResponse = {
	message: Message
}
export const useMessages = () => {
	const channel = pusher.subscribe('noxy-sysl')

	const savedMessages = useLocalStorage('saved-messages', [] as Message[])

	const messages = ref<Message[]>(savedMessages.value)
	onMounted(() => {
		const bindChannel = () =>
			channel.bind('message', (data: MessageResponse) => {
				messages.value?.push(data.message)
			})
		bindChannel()
	})

	onUnmounted(() => channel.disconnect())
	window.onbeforeunload = () => {
		localStorage.setItem('saved-messages', JSON.stringify(messages.value))
	}
	return { messages }
}
