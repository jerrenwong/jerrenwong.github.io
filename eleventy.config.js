import { katex } from "@mdit/plugin-katex"

export default function (config) {
  config.addPassthroughCopy({ static: "/" })

  // Copied from the package that renders the math, so the two can't drift apart.
  config.addPassthroughCopy({
    "node_modules/katex/dist/katex.min.css": "katex/katex.min.css",
    "node_modules/katex/dist/fonts/*.woff2": "katex/fonts",
  })

  config.amendLibrary("md", (md) => md.use(katex))

  return { dir: { input: "content", includes: "../_includes" } }
}
