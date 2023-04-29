<template>
	<main
		class="container mx-auto max-w-2xl h-screen flex flex-col justify-center space-y-3"
	>
		<h2 class="text-center font-bold text-3xl mb-4">Bienvenido a Noxy-Chat!</h2>
		<form action="/feed" class="flex flex-col justify-center space-y-3 mt-12">
			<label for="username" class="font-medium">Tu nombre de usuario</label>
			<input
				type="text"
				name="username"
				placeholder="noxy"
				class="rounded-lg max-w-2xl w-full p-2 outline-none bg-sky-50"
			/>
			<button
				type="submit"
				class="p-3 rounded-lg bg-sky-600 c-white font-medium w-full max-w-2xl"
			>
				Ingresar al chat
			</button>
		</form>
	</main>
</template>
