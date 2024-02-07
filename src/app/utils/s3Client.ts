import { AWS_S3_ACCESSKEYID, AWS_S3_SECRECTACCESSKEYID } from "@/config";
import { S3Client } from "@aws-sdk/client-s3";

export const s3Client = new S3Client({
    region: "ap-south-1",
    credentials: {
        accessKeyId: AWS_S3_ACCESSKEYID,
        secretAccessKey: AWS_S3_SECRECTACCESSKEYID,
    },
});