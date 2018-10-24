<template>
    <div class="col-xs-12 col-sm-6">
    	<p v-if="server">Server #{{ server.id }} Status: {{ server.status }}</p>
        <p v-else>Click a server to see its status</p>
        <hr>
        <button @click="resetStatus">Change status</button>
    </div>

</template>

<script>
	import { serverStatus } from '../../main';
	export default {
		data: function(){
			return {
				server: null
			}
		},
		methods: {
			resetStatus(){
				this.server.status = 'Normal'
			}
		},
		created() {
			serverStatus.$on('showStatus', (data) => {
				this.server = data;
			})
		}
	}
</script>

<style>

</style>
