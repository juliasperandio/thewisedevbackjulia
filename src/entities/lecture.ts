import { Container } from './container'
import { Material } from './material'
import { Part } from './part'

export class Lecture extends Container<Material> implements Part {
  readonly description: string
  readonly videoUrl: string
  private readonly materials: Array<Material> = []

  constructor (description: string, videoUrl: string) {
    super()
    this.description = description
    this.videoUrl = videoUrl
  }

  equals (other: Lecture): boolean {
    return this.description === other.description
  }
}
