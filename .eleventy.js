const { DateTime } = require("luxon");
const { dateYear } = require("luxon");

module.exports = function (eleventyConfig) {

    eleventyConfig.addPassthroughCopy("./src/assets");
    eleventyConfig.addPassthroughCopy("./src/style.css");
    eleventyConfig.addPassthroughCopy("./src/animation.js");
    eleventyConfig.addPassthroughCopy("./src/admin");
    eleventyConfig.addPassthroughCopy("./src/nights");
    eleventyConfig.addPassthroughCopy("./src/releases");

    eleventyConfig.addFilter("postDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
      })

      eleventyConfig.addFilter("dateYear", function(date) {
        const d = new Date(date);
        return d.getFullYear();
      });

    return {
        dir: {
            input: "src",
            output: "public"
        }
    }
}