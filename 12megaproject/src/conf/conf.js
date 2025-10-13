const conf = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwritePROJECT_ID: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDATABASE_ID: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteCOLLECTION_ID: String(import.meta.env.VITE_COLLECTION_ID),
    appwriteBUCKETT_ID: String(import.meta.env.VITE_APPWRITE_BUCKETT_ID),
}
export default conf