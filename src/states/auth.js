import { reactive } from 'vue'

export const user = reactive({
  username: undefined,
  email: undefined,
  token: undefined,
  id: undefined
})

export function set_user(user) {
  user.username = user.username
  user.email = user.email
  user.token = user.token
  user.id = user.id
}

export function clear_user() {
  user.username = undefined
  user.email = undefined
  user.token = undefined
  user.id = undefined
}

