const api = {
  endpoint: "http://localhost:8080",
  base_uri: "/api/v1"
}

export async function query(method, uri, data) {
  console.log("Querying " + api.endpoint + api.base_uri + uri)
  const response = await fetch(api.endpoint + api.base_uri + uri, {
    method: method,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  return await response.json()
}

export async function login(username, password) {
  return await query("POST", "/auth/login", {username, password})
}

export async function register(username, password, email) {
  return await query("POST", "/auth/register", {username, password, email})
}

