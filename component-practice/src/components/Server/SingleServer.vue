<template>
	<div>
		<li
		    class="list-group-item"
		    :id ="server.id"
		    v-for="server in servers"
		    @click="changeStatus">
		    Server #{{ server.id }}
		</li>
	</div>
</template>

<script>
	import { serverStatus } from '../../main';
	export default {
		props: {
			servers: {
				type: Array
			}
		},
		methods: {
			changeStatus(event) {
				var index = event.target.id - 1;
				serverStatus.showStatus(this.servers[index]);
			}
		}
	}
</script>