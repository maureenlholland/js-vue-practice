<template>
    <div class="col-xs-12 col-sm-6">
    	<p v-if="detail">Server #{{ id }} Status: {{ detail }}</p>
        <p v-else>Click a server to see its status</p>
    </div>

</template>

<script>
	import { serverStatus } from '../../main';
	export default {
		data: function(){
			return {
				detail: '',
				id: null
			}
		},
		created() {
			serverStatus.$on('showStatus', (data) => {
				this.detail = data.status;
				this.id = data.id;
			})
		}
	}
</script>

<style>

</style>
