<template>
	<div class="page page-change-password container flex my-20">
		<div class="w-1/3 mx-auto p-8 border shadow">

			<h4 class="uppercase my-4 text-center text-shop-primary font-semibold">Forgot Password</h4>
				<p class="text-sm text-grey-dark text-justify">Enter your email address in the form bellow and we will send you further instructions on how to change your password</p>
				  <div class="field my-2">
              		<label class="label text-shop-primary my-2">Email ID</label>
             		<div class="control">
                	<input class="input my-2 border border-grey p-4 w-full rounded" type="password" placeholder="Email Address"> 
                 	</div>
            	</div>
            	<div class="flex text-left">
                	<div class="flex">        
                    <button class="button is-info is-medium bg-blue px-4 py-2 my-2 text-white rounded">Submit</button>
                    </div>
                </div>

		</div>
	</div>
</template>
<script>
	export default {
		layout: 'blank',

		data() {
			return {}
		}
		
	}
</script>