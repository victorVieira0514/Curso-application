export class Aluno {
  codigo?: number;
  nome?: string;
  endereco?: string;
  cpf?: string;
  rg?: string;
  telefone?: string;
}

export class Professor {
  codigo?: number;
  nome?: string;
  endereco?: string;
  cpf?: string;
  rg?: string;
  telefone?: string;
}

export class Categoria {
  codigo?: number;
  nome?: string;
}

export class Curso {
  codigo?: number;
  nomeCurso?: string;
  professorCurso = new Professor();
  categoria = new Categoria();
}
