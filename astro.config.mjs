// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Peacock TV Account Login',

			head: [
				{
					tag: 'meta',
					attrs: {
						name: 'google-site-verification',
						content: 'tUI9BT1RIABRmftik1nEVColyPRItHU67IwjWOKTD74',
					},
				},
				{
					tag: 'meta',
					attrs: {
						name: 'msvalidate.01',
						content: 'BB584AB80496A8B39F46F116A5BAF33C',
					},
				},
			],

			sidebar: [
				{
					label: 'Peacock TV Account Login',
					items: [
						{
							label: 'Peacock TV Account Login',
							slug: 'index',
						},
					],
				},
			],
		}),
	],
});
