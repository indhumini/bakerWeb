import { environment } from 'src/environments/environment'

export const baseUrl = environment.production ? 'mongodb://localhost:27017/cakeStore' : 'http://localhost:3030'
export const productsUrl = baseUrl + '/products'
export const cartUrl = baseUrl + '/cart'
export const wishlistUrl = baseUrl + '/wishlist'


/*https://api.shoppingcart.com*/