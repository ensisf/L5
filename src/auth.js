const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'
const getToken = () => TOKEN
const auth = () => TOKEN === getToken()

export { getToken, auth }
