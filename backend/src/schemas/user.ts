interface BackupCode {
    code: string,
    used: boolean
}

interface LoginAttempt {
    username: string,
    password: string,
    location: string,
}

interface User {
    username: string,
    password: {
        encryptedData: string,
        iv: string
    },
    loginAttempts: Array<LoginAttempt>,
    backupCodes: Array<BackupCode>,
    socials: {
        discord: string,
        instagram: string,
        facebook: string,
        phone: string,
        email: string,
        whatsapp: string,
        snapchat: string,
        x: string,
        github: string,
    }
}