import axios from "axios";
import open from "open";
import dotenv from "dotenv";

dotenv.config();

export const getRefreshToken = async (code) => {
  const params = new URLSearchParams({
    grant_type: "authorization_code",
    code,
    redirect_uri: process.env.SPOTIFY_REDIRECT_URI,
    client_id: process.env.SPOTIFY_CLIENT_ID,
    client_secret: process.env.SPOTIFY_CLIENT_SECRET,
  });

  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
  };

  const response = await axios.post("https://accounts.spotify.com/api/token", params, {
    headers,
  });

  return response.data.refresh_token;
};

export const getAuthorizationCode = async () => {
  const params = new URLSearchParams({
    client_id: process.env.SPOTIFY_CLIENT_ID,
    response_type: "code",
    redirect_uri: process.env.SPOTIFY_REDIRECT_URI,
    scope: "user-read-private user-read-email",
  });

  await open(`https://accounts.spotify.com/authorize?${params.toString()}`);
};
