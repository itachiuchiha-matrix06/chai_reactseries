import { Client } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1") // or http://localhost/v1 if self-hosted
  .setProject("68eb69a0003a773a9304");

console.log("✅ Appwrite SDK initialized successfully!");
