<template>
    <div class="container">
        <app-header :quoteCount="quotes.length" :maxQuotes="maxQuotes"></app-header>
        <app-new-quote @quoteAdded="newQuote"></app-new-quote>
    	<app-grid :quotes="quotes" @quoteDeleted="deleteQuote"></app-grid>
        <div class="row">
            <div class="col-sm-12 text-center">
                <div class="alert alert-info">Click on a quote to delete it</div>
            </div>
        </div>
    </div>
</template>

<script>
	import Grid from './components/QuoteGrid.vue';
    import NewQuote from './components/NewQuote.vue';
    import Header from './components/Header.vue';

    export default {
        data: function(){
        	return {
        		quotes: [
        			'Placeholder Quote'
        		],
        		maxQuotes: 10
        	}
        },
        methods: {
            newQuote(quote){
                if(this.quotes.length >= this.maxQuotes){
                    return alert('Please delete quotes first')
                }
                this.quotes.push(quote);
            },
            deleteQuote(i){
                this.quotes.splice(i, 1);
            }
        },
        components: {
        	'app-grid': Grid,
            'app-new-quote': NewQuote,
            'app-header': Header
        }
    }
</script>

<style>
</style>
