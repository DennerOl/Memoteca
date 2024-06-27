/*interface responsavel pelo formato do obj
que vai ser passado para o back-end */

export interface Pensamento {
  id?: number;
  conteudo: string;
  autoria: string;
  modelo: string;
  favorito: boolean;
}
