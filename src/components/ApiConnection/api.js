export const appId = "64620318bdacb27f42e5c93d";
export async function makeRequest(method, url, data = {}) {
  const headers = {
    "Content-Type": "application/json",
    "app-id": appId,
  };

  const options = {
    method,
    headers,
    body: JSON.stringify(data),
  };

  try {
    const response = await fetch(url, options);
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("API request error:", error);
    throw new Error("Failed to make API request");
  }
}

export default makeRequest;
export async function fetchPosts() {
  try {
    const response = await fetch("https://dummyapi.io/data/v1/post", {
      headers: {
        "app-id": appId,
      },
    });
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Failed to fetch posts:", error);
    throw new Error("Failed to fetch posts");
  }
}
