import crypto from 'crypto'
import config from '../config/config'

const encrypt = (password: string): string => {
    const key = crypto.createHash('sha256').update(config.KEY).digest('hex').substring(0, 32)

    const iv = crypto.randomBytes(12);
    const cipher = crypto.createCipheriv('aes-256-gcm', key , iv);
  
    const encrypted = Buffer.concat([
      cipher.update(password, 'utf8'),
      cipher.final(),
    ]);
  
    const authTag = cipher.getAuthTag();
    return Buffer.concat([iv, encrypted, authTag]).toString('base64');
}

const decrypt = (encryptedPassword: string): string => {
    const buffer = Buffer.from(encryptedPassword, 'base64');
    const iv = buffer.slice(0, 12);
    const encrypted = buffer.slice(12, - 16);
    const authTag = buffer.slice(-16);
  
    const key = crypto.createHash('sha256').update(config.KEY).digest('hex').substring(0, 32);
    const decipher = crypto.createDecipheriv('aes-256-gcm', key, iv);
    decipher.setAuthTag(authTag);
  
    const decrypted = Buffer.concat([decipher.update(encrypted), decipher.final()]);
    
    return decrypted.toString('utf8');
  }


export { encrypt, decrypt }