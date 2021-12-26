const pug = require("pug")
const pluginRss = require("@11ty/eleventy-plugin-rss")

module.exports = eleventyConfig => {


	eleventyConfig.addPlugin(pluginRss)

	eleventyConfig.htmlTemplateEngine= "pug"
	eleventyConfig.setLibrary("pug", pug)
	eleventyConfig.setTemplateFormats(['pug', "md"])

	eleventyConfig.dir= {
		input: 'src',
		output: 'public'
	}

	eleventyConfig.addPassthroughCopy("css")
	eleventyConfig.addPassthroughCopy("js")

	// for _data so it's not only json
	eleventyConfig.addDataExtension("yaml", contents => yaml.load(contents))

	return eleventyConfig
}