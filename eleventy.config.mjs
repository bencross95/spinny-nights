import { DateTime } from "luxon";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

export default function (eleventyConfig) {

    eleventyConfig.addPassthroughCopy("./src/assets/fonts");
    eleventyConfig.addPassthroughCopy("./src/assets/images/favicon.png");
    eleventyConfig.addPassthroughCopy("./src/style.css");
    eleventyConfig.addPassthroughCopy("./src/animation.js");
    eleventyConfig.addPassthroughCopy("./src/admin");
    eleventyConfig.addPassthroughCopy("./src/nights");
    eleventyConfig.addPassthroughCopy("./src/releases");

    eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
        extensions: "html",
        formats: ["webp", "auto"],
        widths: [256, 512, 1024, "auto"],
        defaultAttributes: {
            loading: "lazy",
            decoding: "async",
        },
    });

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
