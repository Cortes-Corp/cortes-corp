/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "lh3.googleusercontent.com"
            },
            {
                protocol: "https",
                hostname: "vugicbzgqyjoziwgjvxr.supabase.co"
            },
            {
                protocol: "https", // Ensure the protocol matches (http or https)
                hostname: "www.chicagomag.com" // Add this line
            },
            {
                protocol: "https", // Ensure the protocol matches (http or https)
                hostname: "www.locationlincoln.com" // Add this line
            },
            {
                protocol: "https", // Ensure the protocol matches (http or https)
                hostname: "images.squarespace-cdn.com" // Add this line
            }
       ] 
    }
};

export default nextConfig;
