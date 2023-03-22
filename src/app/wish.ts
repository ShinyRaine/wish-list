// export class Wish {

//   constructor(
//     public id: number,
//     public name: string,
//     public steps: Step[],
//   ) {  }

// }
export interface Wish {
  id: number
  name: string
  steps: Step[]
}
export interface Step {name: string, achieved: boolean}
