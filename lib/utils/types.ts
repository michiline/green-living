export interface Stylable {
  className?: string
  style?: React.CSSProperties
}

export interface ImgProps {
  id: string
  categoryId: string
  src: string
  blurData: string
  hidden?: boolean
}

export interface SlideshowItem {
  id: string
  src: string
  author: string
}
