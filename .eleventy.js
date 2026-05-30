module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("**/*.{jpg,jpeg,png,gif,webp,tif,tiff,jfif,bmp,svg,ico}");
  return {
    dir: {
      output: "_site"
    }
  };
};
