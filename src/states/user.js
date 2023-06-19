import { reactive } from 'vue'
import storage from '../services/storage'

const user = reactive({
  username: undefined,
  email: undefined,
  token: undefined,
  id: undefined
})

if(storage.get("token")) {
  user.username = storage.get("username")
  user.email = storage.get("email")
  user.token = storage.get("token")
  user.id = storage.get("id")
}

function set_user(u) {
  user.username = u.username
  user.email = u.email
  user.token = u.token
  user.id = u.id
  return user
}

function logged() {
  return user.token != undefined
}

function logout() {
  clear_user()
  storage.clear()
}

function clear_user() {
  user.username = undefined
  user.email = undefined
  user.token = undefined
  user.id = undefined

}

function update_user(u) {
  Object.keys(u).forEach(key => {
    user[key] = u[key]
  })
}

function save_to_storage() {
  storage.set("username", user.username)
  storage.set("email", user.email)
  storage.set("token", user.token)
  storage.set("id", user.id)
}

export { user, set_user, clear_user, update_user, save_to_storage, logged, logout }

