import { Lecture } from '.'
import { Container } from './container'
import { Module } from './module'

export class Course extends Container<Module> {
  public reference: string
  public description: string

  constructor (reference: string, description: string) {
    super()
    this.reference = reference
    this.description = description
  }

  get numberOfModules (): number {
    return super.numberOfParts
  }

  moveLecture (lecture: Lecture, fromModule: Module, toModule: Module, position: number): void {
    fromModule.remove(lecture)
    toModule.add(lecture)
    const currentLecturePosition = toModule.position(lecture)
    if (currentLecturePosition !== position) toModule.move(lecture, position)
  }
}
