import { s3Client } from "@/app/utils/s3Client";
import { AWS_BUCKET_NAME } from "@/config";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { currentUser, getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";



async function getUploadUrl(filename: string, userId: string, contentType: string) {
    const command = new PutObjectCommand({
        Bucket: AWS_BUCKET_NAME,
        Key: `uploads/user/${userId}/${filename}`,
        ContentType: contentType
    })
    const url = await getSignedUrl(s3Client, command)
    return url;
}

export async function POST(req: Request) {
    const { caption } = await req.json()
    const user = await currentUser();
    // const url = await getUploadUrl(name, user?.id, contentType)
    return NextResponse.json({ msg: "Ok", url: "" })
}