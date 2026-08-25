// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'CCleaner Login Account | CCleaner Login My Account',

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
					label: 'CCleaner Login Account',
					items: [
						{
							label: 'CCleaner Login Account',
							slug: 'index',
						},
					],
				},
			],
		}),
	],
});
