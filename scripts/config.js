const scopes = [
  'https://www.googleapis.com/auth/spreadsheets.readonly',
  'https://www.googleapis.com/auth/gmail.compose',
  'https://www.googleapis.com/auth/gmail.readonly'
]

const oAuthCbConfig = {
  port: 3000,
  endpoint: 'oAuth2callback',
  get uri () {
    return `http://localhost:${this.port}/${this.endpoint}`
  }
}

module.exports = {
  scopes,
  oAuthCbConfig
}