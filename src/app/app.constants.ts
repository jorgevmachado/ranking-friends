import {environment} from '../environments/environment';

export const API_BASE         = environment.api;
export const CLIENT_NAME      = environment.client_name;
export const SYSTEM_NAME      = environment.system_name;
export const ENVIRONMENT      = environment.environment;
export const ENVIRONMENT_NAME = environment.environment_name;

export const PATH = {
  HOME: 'home',
  PONTUACAO: 'pontuacao',
  CATEGORIA: 'categoria',
  CADASTRO: 'cadastro',
  ACAO: {
    ADD: 'cadastrar',
    EDIT: 'editar/:id',
    DETAIL: 'detail/:id'
  }
};

