export type ErrorType = {
  message: string;
};

export type OptionsValidade = {
  regex: RegExp;
  message: string;
};

export type TypeFieldValidate = {
  [index: string]: OptionsValidade;
};
