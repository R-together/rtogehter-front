import type { NextConfig } from "next";

const isPreview = process.env.IS_PREVIEW === "true";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  output: "export",
  // Configure basePath and assetPrefix to support preview deployments
  basePath: isPreview ? `/pr-preview-${process.env.PR_NUMBER}` : "",
  assetPrefix: isPreview ? `/pr-preview-${process.env.PR_NUMBER}/` : "",
};

export default nextConfig;
