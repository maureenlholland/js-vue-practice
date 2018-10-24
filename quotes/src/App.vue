<template>
    <div class="container">
    	<app-grid :quotes="quotes"></app-grid>
    </div>
</template>

<script>
	import Grid from './components/QuoteGrid.vue';

    export default {
        data: function(){
        	return {
        		quotes: [
        			'Just a placeholder',
        			'And another',
        			'One more',
        			'How\'s the grid going?'
        		],
        		maxQuotes: 10
        	}
        },
        components: {
        	'app-grid': Grid
        }
    }
</script>

<style>
</style>
