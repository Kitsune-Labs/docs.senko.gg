import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
	logo: <span>Senko Documentation</span>,
	chat: {
		link: 'https://discord.gg/senko',
	},
	project: {
		link: "https://github.com/Kitsune-Labs/Senko"
	},
	footer: {
		text: ' ',
	},
	primaryHue: 31,
	darkMode: true,
	docsRepositoryBase: "https://github.com/Kitsune-Labs/docs.senko.gg"
}

export default config