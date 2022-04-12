console.log(process.env);
export const apiRequest = async function (
  url: string,
  options: RequestInit
): Promise<Response> {
  //Start by doing initial fetch
  let response = await fetch(url, options);
  console.log(response.status)
  if (response.status !== 401) return response;
  //If unauthorized, attempt to refresh
  const refreshResponse = await fetch("http://localhost:3000/api/auth/discord/refresh_token", {
    method: "GET",
    credentials: "include",
  });
  if (!refreshResponse.ok) {
    //Redirect to login page to get new token pair
    window.location.href = process.env.DISCORD_AUTH_URL as string;
    throw new Error("Unable to authenticate");
  }
  //Successfully refreshed. Now attempt again
  response = await fetch(url, options);
  return response;
};
