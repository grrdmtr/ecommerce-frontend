export const API_URL= process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337'

export const MAGIC_PUBLIC_KEY =  process.env.NEXT_PUBLIC_MAGIC_PUBLIC_KEY || 'sk_live_FE4E034B290E07C1'

export const STRIPE_PK = process.env.NEXT_PUBLIC_STRIPE_PK || 'pk_test_51Ip8zKAre1bg2FsZdrZAQlpw5QRHMPuPkPvtn8s4H7cPwDOEjvtDHVlTQdaXSfmDThF2T2fO4P5blJ9BI1MlC2Z400lKcaWshC'

/**
 * Given an image return the Url
 * Works for local and deployed strapis 
 * @param {any} image 
 */
export const fromImageToUrl = (image) => {
    if (!image) {
        return "/vercel.svg"
    }

    if (image.url.indexOf("/") === 0) {
        return `${API_URL}${image.url}`
    }

    return image.url
} 
