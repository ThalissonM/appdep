import * as Application from './application';

declare var require: (modules: string[], ready: Function, errback: Function) => void;

// Tente carregar o código específico da plataforma na pasta /merges.
// Mais informações em http://taco.visualstudio.com/pt-br/docs/configure-app/#Content.
require(["./platformOverrides"],
    () => Application.initialize(),
    () => Application.initialize());