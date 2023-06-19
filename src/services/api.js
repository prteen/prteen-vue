import storage from '../services/storage'

const api = {
  endpoint: "http://127.0.0.1:8080",
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
    body: JSON.stringify(data),
    cache: 'no-cache', 
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

export async function create_party(party) {
  return await query("POST", "/parties/organizers/", party)
}

export async function get_parties() {
  return await query("GET", "/parties")
}

export async function get_party(id) {
  return await query("GET", "/parties/id/" + id)
}

export async function get_party_organizer(id) {
  return await query("GET", "/parties/organizers/" + id)
}

export async function get_parties_organizer() {
  return await query("GET", "/parties/organizers/")
}

export async function update_party(id, data) {
  return await query("PUT", `/parties/organizers/${id}`, data)
}

export async function delete_party(id) {
  return await query("DELETE", "/parties/organizers/" + id)
}

export async function join_party(id) {
  return await query("PUT", "/parties/join/" + id, {action: 'join'})
}

export async function get_friendships() {
  return await query("GET", "/friendships")
}

export async function get_user_by_id(id) {
  debugger
  return await query("GET", "/users/id/" + id)
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
