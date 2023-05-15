export async function makeRequest(method, url, data = {}) {
  const headers = {
    "Content-Type": "application/json",
    "app-id": "645e1fa135277554efa9d769",
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
        "app-id": "645e1fa135277554efa9d769",
      },
    });
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Failed to fetch posts:", error);
    throw new Error("Failed to fetch posts");
  }
}
