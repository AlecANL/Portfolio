export interface ICardProjectProps {
  project: ICardProject
  isShowCount?: boolean
}

export interface ITagStack {
  id: string
  name: string
  icon: string
  width?: number
  height?: number
}

export interface IProjectCover {
  url: string
  width?: number
  height?: number
}

export interface ICardProject {
  id: string
  title: string
  description: string | null
  cover: IProjectCover
  tagStack: ITagStack[]
  repository: string
  demo: string
  pattern: boolean
  copy?: string
}
