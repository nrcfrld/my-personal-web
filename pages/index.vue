<template>
	<main class="max-w-screen-sm mx-auto px-4">
		<Header />
		<ProfileCard />
		<nav
			class="mt-8 flex justify-between py-3 px-3 bg-slate-800 rounded-full text-indigo-200 text-sm relative z-10"
		>
			<div
				class="w-full text-center py-2 rounded-full"
				:class="{ 'bg-neutral-200 text-indigo-900 font-bold': menu === 'work' }"
			>
				<a href="#" @click="menu = 'work'">Work</a>
			</div>
			<div
				class="w-full text-center py-2 rounded-full"
				:class="{
					'bg-neutral-200 text-indigo-900 font-bold': menu === 'about',
				}"
			>
				<a href="#" @click="menu = 'about'">About</a>
			</div>
		</nav>

		<section class="mt-8">
			<div v-show="menu === 'work'">
				<WorkList />
			</div>
			<div v-show="menu === 'about'">
				<About />
			</div>
		</section>
		<Footer />
	</main>
</template>

<script lang="ts" setup>
import Header from "@/components/layouts/Header.vue";
import Footer from "@/components/layouts/Footer.vue";
import ProfileCard from "@/components/partials/ProfileCard.vue";
import About from "@/components/partials/About.vue";
import WorkList from "~~/components/partials/WorkList.vue";
import { Ref } from "vue";

let menu: Ref<string> = ref("work");
</script>

<style lang="scss"></style>
