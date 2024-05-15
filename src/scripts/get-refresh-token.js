import { getRefreshToken } from "../modules/spotify/spotifyService.js";
import dotenv from "dotenv";

dotenv.config();
const args = process.argv;
const providedCode = args.length === 3 && !!args[2] === true;

if (!providedCode) {
  console.log("Provide the Spotify authorization code.");
  console.log("Usage example:");
  console.log("");
  console.log("npm run get-refresh-token <code>");
  console.log("");
  process.exit(1);
}

const code = args[2];

async function printRefreshToken() {
  try {
    const refreshToken = await getRefreshToken(code);
    console.log("Here is your refresh token: ");
    console.log("");
    console.log(`===> ${refreshToken}`);
    console.log("");
    process.exit(0);
  } catch (err) {
    console.log("");
    console.log("An error occurred while trying to get the refresh token.");
    console.log("Please check the provided code and try again.");
    console.log("");
    console.log("Error details:");
    console.log("");
    console.log("Error: " + err.response.data.error);
    console.log("Error description: " + err.response.data.error_description);
    console.log("");
  }
}

printRefreshToken();
