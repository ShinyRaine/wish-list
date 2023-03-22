import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Wish } from './wish'

@Injectable({
  providedIn: 'root'
})
export class WishServiceService {

  constructor() { }
  getList(): Observable<Wish[]> {
    const data = JSON.parse(localStorage.getItem('wish-list-data') || '[]') as Wish[]
    return of(data)
  }
  addWish(wish: Wish) {
    const data = JSON.parse(localStorage.getItem('wish-list-data') || '[]') as Wish[]
    data.push({
      ...wish,
      id: data.length ? Math.max(...data.map(item => item.id)) + 1 : 1
    })
    localStorage.setItem('wish-list-data', JSON.stringify(data))
  }
  deleteWish(wish: Wish) {
    const data = JSON.parse(localStorage.getItem('wish-list-data') || '[]') as Wish[]
    const index = data.findIndex(item => item.id === wish.id)
    data.splice(index, 1)
    localStorage.setItem('wish-list-data', JSON.stringify(data))
  }
  updateWish(wish: Wish) {
    const data = JSON.parse(localStorage.getItem('wish-list-data') || '[]') as Wish[]
    const index = data.findIndex(item => item.id === wish.id)
    data.splice(index, 1, wish)
    localStorage.setItem('wish-list-data', JSON.stringify(data))
  }
}
