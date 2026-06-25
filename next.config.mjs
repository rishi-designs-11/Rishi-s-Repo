/** @type {import('next').NextConfig} */
const isStaticExport = process.env.NEXT_OUTPUT_EXPORT === "1";

const nextConfig = {
  reactStrictMode: true,
  ...(isStaticExport ? { output: "export" } : {}),
  images: {
    formats: ["image/avif", "image/webp"],
    ...(isStaticExport ? { unoptimized: true } : {})
  }
};

export default nextConfig;
