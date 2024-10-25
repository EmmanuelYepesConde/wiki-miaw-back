export type Gender = 'M' | 'F' | 'O';
export type SizeOfHouse = 'S' | 'M' | 'L';

export interface PersonalInfoEntry {
    address?: string,
    sizeOfHouse?: sizeOfHouse,
    gender?: gender,
    cats?: Array
}

export interface SessionDataEntry {
    email: string,
    password: string
}

export interface userData {
    username: string,
    personalInfo?: PersonalInfoEntry,
    sessionData: SessionDataEntry
}

export interface errorDetail {
    errorCode: string
    errorMsg: string
} 

export interface Exceptions {
    [code: string]: string; 
    "400": string
    "401": string
    "403": string
    "404": string
    "405": string
    "408": string
    "409": string
    "410": string
    "411": string
    "412": string
    "413": string
    "414": string
    "415": string
    "422": string
    "426": string
    "428": string
    "429": string
    "431": string
    "451": string
    "500": string
    "501": string
    "502": string
    "503": string
    "504": string
    "505": string
}

export interface UpdateUserEntry extends PersonalInfoEntry {
    username?: string
}
