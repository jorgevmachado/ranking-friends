import {async} from '@angular/core/testing';
import {UNMASK_NUMBER, TELEFONE, RG, CPF, CNPJ, CEP, DIGITO, ANO} from './mask';

describe('Constants mask: Core', () => {
  it('Remover máscara do cpf', async(() => {
    const cpf = '012.345.678-23';
    const cpfUnmask = cpf.replace(UNMASK_NUMBER, '');
    expect(cpfUnmask.length).toEqual(11);
  }));

  it('Remover máscara do cep', async(() => {
    const cep = '71750-000';
    const cepUnmask = cep.replace(UNMASK_NUMBER, '');
    expect(cepUnmask.length).toEqual(8);
  }));

  it('Verifica regex telefone oito digitos', () => {
    const regexOitoDigitos = TELEFONE('6133802222');
    expect(regexOitoDigitos.length).toEqual(14);
  });

  it('Verifica regex telefone nove digitos', () => {
    const regexNoveDigitos = TELEFONE('61338022221');
    expect(regexNoveDigitos.length).toEqual(15);
  });

  it('Verifica regex telefone vazio', () => {
    const regexVazio = TELEFONE();
    expect(regexVazio.length).toEqual(14);
  });

  it('Verifica regex RG', () => {
    expect(RG.length).toEqual(10);
  });

  it('Verifica regex CPF', () => {
    expect(CPF.length).toEqual(14);
  });

  it('Verifica regex CNPJ', () => {
    expect(CNPJ.length).toEqual(18);
  });

  it('Verifica regex CEP', () => {
    expect(CEP.length).toEqual(9);
  });

  it('Verifica regex DIGITO', () => {
    expect(DIGITO.length).toEqual(1);
  });

  it('Verifica regex ANO', () => {
    expect(ANO.length).toEqual(4);
  });
});
