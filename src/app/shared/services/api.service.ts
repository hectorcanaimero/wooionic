import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url: string = environment.url;
  woo: any = environment.woo;
  constructor(private http: HttpClient) { }

  /** Woocommerce */
  getProducts(products: number = 5) {
    return this.http.get(`${ this.url }/wp-json/wc/v3/products`, {
      params:{
        consumer_key: `${ this.woo.key }`,
        consumer_secret: `${ this.woo.secret }`,
        per_page: `${products}`
      }
    })
  }

  getProductsId(product: number = 1) {
    return this.http.get(`${ this.url }/wp-json/wc/v3/products/${product}`, {
      params:{
        consumer_key: `${ this.woo.key }`,
        consumer_secret: `${ this.woo.secret }`
      }
    })
  }

  /** Orders */
  /** Create Orders */
  addOrder(data: any) {
    return this.http.post(`${ this.url }/wp-json/wc/v3/orders`, data, {
      params:{
        consumer_key: `${ this.woo.key }`,
        consumer_secret: `${ this.woo.secret }`
      }
    })
  }

  /** Get Order */
  getOrderId(order: number = 1) {
    return this.http.get(`${ this.url }/wp-json/wc/v3/orders/${ order }`, {
      params:{
        consumer_key: `${ this.woo.key }`,
        consumer_secret: `${ this.woo.secret }`
      }
    })
  }

  editOrder(order: number = 1, data: any) {
    return this.http.put(`${ this.url }/wp-json/wc/v3/orders/${ order }`, data, {
      params:{
        consumer_key: `${ this.woo.key }`,
        consumer_secret: `${ this.woo.secret }`
      }
    })
  }


  /** Traer Post de Wordpress */
  getPosts(post: number = 5) {
    return this.http.get(`${ this.url }/wp-json/wp/v2/posts`, {
      params: { per_page: `${ post }`}
    })
  }

  /** Post por ID */
  getPostID(post: number = 1) {
    return this.http.get(`${ this.url }/wp-json/wp/v2/posts/${ post }`);
  }

  /** Traer Post de Wordpress */
  getPage(page: number = 1) {
    return this.http.get(`${ this.url }/wp-json/wp/v2/page/${ page }`)
  }

  /** Get Image */
  getImage(featured_media: number = 1) {
    return this.http.get(`${ this.url }/wp-json/wp/v2/media/${ featured_media }`)
  }
}
