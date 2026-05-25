module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy("**/*.{html}");
  eleventyConfig.addPassthroughCopy("**/*.{jpg,jpeg,png,gif,webp,tif,tiff,jfif,bmp,svg,ico}");
  return {
    dir: {
      output: "_site"
    }
  };
};
