import crypto from 'crypto';

const SECRET = 'QUANG-REST_API'

// Randomizer
export const random = () => crypto.randomBytes(128).toString('base64'); 

// To securely hash passwd or generate token for API authentication
export const authentication = (salt: string, password: string) => {
  return crypto.createHmac('sha256', [salt, password].join('/')).update(SECRET).digest('hex')
};   