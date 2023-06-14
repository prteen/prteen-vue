import storage from '../services/storage'

const api = {
  endpoint: "http://localhost:8080",
  base_uri: "/api/v1"
}

export async function query(method, uri, data) {
  console.log("Querying " + api.endpoint + api.base_uri + uri)
  const headers = {
    'Content-Type': 'application/json'
  }
  let token = storage.get("token")
  if(token) {
    headers.Authorization = "Bearer " + token
  }
  const response = await fetch(api.endpoint + api.base_uri + uri, {
    method: method,
    headers: headers,
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

export async function me() {
  return await query("GET", "/auth/me")
}

export async function get_friendships() {
  return await query("GET", "/friendships")
}

export async function update_friendship(id, stat) {
  return await query("PUT", "/friendships/" + id, {status: stat})
}

export async function delete_friendship(id) {
  return await query("DELETE", "/friendships/" + id)
}

export async function new_friendship(username) {
  return await query("POST", "/friendships", {to: username})
}
