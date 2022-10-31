/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ['github.com', 'res.cloudinary.com', 'user-images.githubusercontent.com', 'lh3.googleusercontent.com', 'd1moe8jtgovopm.cloudfront.net', 'cf.bstatic.com'],
	},
	compiler: {
		// Enables the styled-components SWC transform
		styledComponents: true,
	},
}

module.exports = nextConfig
