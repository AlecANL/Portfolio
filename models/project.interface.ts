export interface ICardProjectProps {
  id: string
  title: string
  description: string
  cover: IProjectCover
  tagStack: ITagStack[]
  repository: string
  demo: string
}

export interface ITagStack {
  id: string
  name: string
  icon: string
}

export interface IProjectCover {
  url: string
  width?: number
  height?: number
}
