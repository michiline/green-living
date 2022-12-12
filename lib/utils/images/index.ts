const getSrc = id => `${process.env.NEXT_PUBLIC_S3_URL}/images/app/${id}`

export const homeImg = getSrc('home.jpg')
export const homeMobileImg = getSrc('home-mobile.jpg')
export const logo = getSrc('logo.png')
