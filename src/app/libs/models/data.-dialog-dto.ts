import { ButtonTitleType } from './button-title.type';

export interface DataDialog<T> {
  data: T,
  tituloDialog: string,
  mensaje: string,
  titleButton: ButtonTitleType
}
