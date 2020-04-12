import { EventEmitter } from "events"
import axios from 'axios'

const api = axios.create({
  baseURL: "https://discordlist-api.herokuapp.com"
})

class DL extends EventEmitter {
  constructor(token: String) {
    super()

    //this.token = token
  }

  async getBots() {
    const bots = await api.get('/bots')

    return bots.data
  }

  async getBot(id: String) {
    const bot = await api.get(`/bot/${id}`)

    return bot.data
  }

  async getUser(id: String) {
    const user = await api.get('/user', {
      params: {
        user: id
      }
    })

    return user.data
  }
}

export = DL