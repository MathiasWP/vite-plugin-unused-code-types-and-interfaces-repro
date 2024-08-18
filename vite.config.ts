import { defineConfig } from 'vite';
import unusedCode from 'vite-plugin-unused-code';

export default defineConfig(() => ({
	plugins: [
		unusedCode({
			patterns: ['src/**/*.*'],
		}),
	
	]
}));
