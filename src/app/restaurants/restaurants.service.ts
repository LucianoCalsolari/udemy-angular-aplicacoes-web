import {Injectable} from '@angular/core'
import {Http} from '@angular/http'
import { Observable } from 'rxjs/Rx'
import 'rxjs/add/operator/map'

import { Restaurant } from "./restaurant/restaurant.model"
import {MEAT_API} from '../app.api'
import { ErrorHandler } from 'app/app.error-handler'
import { MenuItem } from 'app/restaurant-detail/menu-item/menu-item.model'

@Injectable()
export class RestaurantsService {

    constructor(private http: Http) { }

    restaurants(): Observable<Restaurant[]> {
       return this.http.get(`${MEAT_API}/restaurants`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError)
    }

    restaurantsById(id: string): Observable<Restaurant>{
        return this.http.get(`${MEAT_API}/restaurants/${id}`)
            .map(response =>response.json())
            .catch(ErrorHandler.handleError)
    }

    reviewsOfRestaurant(id: string): Observable<any>{
        return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
            .map(response =>response.json())
            .catch(ErrorHandler.handleError)
    }

    menuOfRestaurants(id:string): Observable<MenuItem[]>{
        return this.http.get(`${MEAT_API}/restaurants/${id}/menu`)
            .map(response =>response.json())
            .catch(ErrorHandler.handleError)
    }
}