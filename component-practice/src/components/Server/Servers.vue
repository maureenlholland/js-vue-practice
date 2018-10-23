<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <single-server  
            :servers="servers"></single-server>
        </ul>
    </div>
</template>

<script>
	import SingleServer from './SingleServer.vue';
	export default {
		data: function(){
			return {
				servers: [
					{ id: 1, status: 'Normal'},
					{ id: 2, status: 'Critical'},
					{ id: 3, status: 'Unknown'},
					{ id: 4, status: 'Normal'},
					{ id: 5, status: 'Dead'}
				]
			}
		},
		components: {
		    'single-server': SingleServer 
		}
	}
</script>

<style>

</style>
