import { EventEmitter } from "events"
import axios from 'axios'

const api = axios.create({
  baseURL: "https://discordlist-api.herokuapp.com"
})

interface Bot {
  id: String,
  username: String,
  discriminator: String,
  avatar: String,
  status: String,
  straming: Boolean,
  list: Boolean,
  owner: String,
  votes: Number,
  prefix: String,
  bibl: String,
  shortDescription: String,
  description: String,
  lang: "pt" | "en",
  tags: String[],
  invite: String,
  website: String,
  github: String,
  server: String
}

interface User {
  id: String,
  username: String,
  discriminator: String,
  avatar: String,
  status: String,
  streaming: Boolean,
  customstatus: {
    text: String,
    emoji: {
      name: String,
      id: String | undefined,
      url: String | null
    } | null,
  } | null,
  bots: Bot[],
  varificador: Boolean
}

class DL extends EventEmitter {
  token: String;

  constructor(token: String) {
    super()

    this.token = token
  }

  async getBots() : Promise<Bot[]> {
    const bots = await api.get('/bots')

    return bots.data
  }

  async getBot(id: String) : Promise<Bot> {
    const bot = await api.get(`/bot/${id}`)

    return bot.data
  }

  async getUser(id: String) : Promise<User> {
    const user = await api.get('/user', {
      params: {
        user: id
      }
    })

    return user.data
  }
}

export = DL