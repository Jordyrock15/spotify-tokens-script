import { getAuthorizationCode } from "../modules/spotify/spotifyService.js";

const openAuthWebPage = async () => {
  await getAuthorizationCode();
};

openAuthWebPage();
