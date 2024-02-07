export const MONGO_URL: string = process.env.MONGO_URL || "";
export const AWS_S3_SECRECTACCESSKEYID: string = process.env.AWS_S3_SECRECTACCESSKEYID || "";
export const AWS_S3_ACCESSKEYID: string = process.env.AWS_S3_ACCESSKEYID || "";
export const AWS_BUCKET_NAME: string = process.env.AWS_BUCKET_NAME || "";
if (!MONGO_URL) {
    throw new Error("Please define the MONGO_URL environment variable inside .env.local")
}
if (!AWS_S3_ACCESSKEYID) {
    throw new Error("Please define the MONGO_URL environment variable inside .env.local")
}
if (!AWS_S3_SECRECTACCESSKEYID) {
    throw new Error("Please define the MONGO_URL environment variable inside .env.local")
}