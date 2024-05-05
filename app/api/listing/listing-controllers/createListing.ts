import { prisma } from "@/app/db/db";
import supabase from "@/app/db/supabaseInstace";
import { NextRequest } from "next/server";

export default async function createListing(req: NextRequest) {
    const data = await req.formData();
    console.log("data:", data)
    // Define the expected structure
    interface FormDataObject {
        address: string;
        price: string;
        beds: string;
        footage: string;
        baths: string;
        img?: string;
    }

    // Populate the listing object with form data values
    const listing: FormDataObject = {
        price: data.get("price") as string,
        beds: data.get("beds") as string,
        baths: data.get("baths") as string,
        footage: data.get("footage") as string,
        address: data.get("address") as string,
    };

    // Retrieve and verify the image file
    const img = data.get("img");
    if (!(img instanceof File)) {
        console.error("Invalid image file type:", img);
        return new Response("Invalid image file type", {
            status: 400,
        });
    }

    try {
        // Convert the image to a buffer
        const bytes = await img.arrayBuffer();
        const buffer = Buffer.from(bytes);
        const mimeType = img.type;
        const fileName = img.name;

        // Upload to Supabase
        const { error } = await supabase.storage
            .from("listingPhotos")
            .upload(`uploads/${fileName}`, buffer, {
                contentType: mimeType,
                upsert: true,
            });

        // Handle upload error
        if (error) {
            console.error("Upload error:", error);
            return new Response("Failed to upload file", {
                status: 500,
            });
        }

        // Generate the public file URL
        const bucketName = "listingPhotos";
        const filePath = `uploads/${fileName}`;
        const supabaseUrl = process.env.SUPABASE_URL;
        const projectID = supabaseUrl?.split(".")[0].split("//")[1];
        const fileUrl = `https://${projectID}.supabase.co/storage/v1/object/public/${bucketName}/${filePath}`;

        // Create the listing in the database
        const newListing = await prisma.listing.create({
            data: {
                ...listing,
                src: fileUrl,
            },
        });
        return new Response(JSON.stringify(newListing), {
            status: 200,
        });
    } catch (err) {
        console.error("Database error:", err);
        return new Response(JSON.stringify({ error: err }), {
            status: 500,
        });
    }
}