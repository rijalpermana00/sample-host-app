<script setup lang="ts">
import NavBar from "./components/Navbar.vue"
</script>

<template>
	<div
		class="min-h-screen bg-gradient-to-b from-green-600 to-white flex justify-center px-4"
	>
		<div class="w-full max-w-7xl">
			<!-- Import and use the Navbar component -->
			<NavBar />

			<!-- Main Content Area (example) -->
			<div class="pt-24 pb-8">
				<Carousel />
			</div>
		</div>
	</div>
</template>
