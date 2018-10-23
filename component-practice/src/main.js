import Vue from 'vue'
import App from './App.vue'

export const serverStatus = new Vue({
	methods: {
		showStatus(status){
			this.$emit('showStatus', status);
		}
	}
});

new Vue({
  el: '#app',
  render: h => h(App)
})
