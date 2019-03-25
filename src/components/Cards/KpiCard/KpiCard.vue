<template>
	<div class="KpiCard" :style="{gridColumnEnd: `span ${span}`}">
		<OutlineBaseCard :title="type">
			<h3 class="heading">{{ title }}</h3>
			<div class="info">
				<h3 v-for="(line, index) in moreInfo" :key="index">
					{{ line }}
				</h3>
			</div>
		</OutlineBaseCard>
	</div>
</template>

<script>
import OutlineBaseCard from "../components/OutlineBaseCard"

export default {
	components: {
		OutlineBaseCard
	},
	props: {
		type: String,
		title: String,
		moreInfo: Array,
		span: {
			type: Number,
			default: 4
		}
	}
}
</script>

<style scoped lang="sass" src="./KpiCard.sass">
