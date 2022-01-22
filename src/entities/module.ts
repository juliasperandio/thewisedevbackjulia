import { Container } from './container'
import { Lecture } from './lecture'
import { Part } from './part'

export class Module extends Container<Lecture> implements Part {
  public readonly name: string
  constructor (name: string) {
    super()
    this.name = name
  }

  get numberOfLectures (): number {
    return super.numberOfParts
  }

  equals (module: Module): boolean {
    return this.name === module.name
  }
}
