const emptyString = '';
export const UNMASK_NUMBER = /\D/g;
export const TELEFONE = (rawValue = emptyString) => {
  const REGEX_OITO_DIGITOS = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  const REGEX_NOVE_DIGITOS = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  const rawValueLength = rawValue.replace(/[^\d]/g, '').length;
  return rawValueLength < 11 ? REGEX_OITO_DIGITOS : REGEX_NOVE_DIGITOS;
};
export const RG = [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/];
export const CPF = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];
export const CNPJ = [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/];
export const CEP = [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];
export const DIGITO = [/\d/];
export const ANO = [/\d/, /\d/, /\d/, /\d/];
