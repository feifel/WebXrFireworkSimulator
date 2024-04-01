import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	define: {
		'process.env.NODE_ENV': '"production"',
	},
	css: {
		preprocessorOptions: {
		  sass: {
			additionalData: `
			  @import '$lib/sass/variables'
			  @import '$lib/sass/mixins'
			`,
		  }
		},
	}
});
