<template>
	<div>
		<ul>
			<li v-for = "(item, index) in ArrayList" :key="index">
				<span>{{item.name}}</span>
				<span>{{item.age}}</span>
				<span>{{item.synopsis}}</span>
				<span>{{item.address}}</span>
			</li>
		</ul>
	</div>
</template>
<script>
import axios from '@/utils/request.js'
export default {
	name: "HelloWorld",
	data() {
		return {
			ArrayList: []
		}
	},
	mounted() {
		this.InitPage()
	},
	methods: {
		InitPage(){
			axios.get('/info').then((val)=>{
				this.ArrayList = val.data.data;
			});
		}
	},
}
</script>


