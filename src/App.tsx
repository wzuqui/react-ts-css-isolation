import DxConfig from "devextreme/core/config";
import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.css";
import { loadMessages, locale } from "devextreme/localization";
import { messages } from "./devextreme-pt";

import Formulario from "./components/Formulario/Formulario";
import { AppService } from "./services/AppService";

export default function App() {
  loadMessages(messages);
  locale("pt-BR");
  DxConfig({
    forceIsoDateParsing: false,
  });

  const service = new AppService();
  const dados = {
    Nome: "Willian",
    Sobrenome: "Zuqui",
    Idade: 32,
    Permissoes: [1],
    FuzoHorario: [Intl.DateTimeFormat().resolvedOptions().timeZone],
  };

  return <Formulario campos={campos()} dados={dados} />;

  function campos() {
    const retorno: Campo[] = [
      {
        tipo: "agrupador",
        titulo: "Dados pessoais",
        campos: [
          {
            tipo: "texto",
            etiqueta: "Nome",
            propriedade: "Nome",
            comprimentoMin: 3,
            comprimentoMax: 150,
            obrigatorio: true,
          },
          {
            tipo: "texto",
            obrigatorio: true,
            etiqueta: "Sobrenome",
            propriedade: "Sobrenome",
            comprimentoMin: 3,
            comprimentoMax: 150,
          },
          {
            tipo: "numerico",
            obrigatorio: true,
            propriedade: "Idade",
            etiqueta: "Idade",
            valorMinimo: 1,
            valorMaximo: 150,
          },
        ],
      },
      {
        tipo: "agrupador",
        titulo: "Configurações",
        campos: [
          {
            tipo: "selecao-multipla",
            obrigatorio: true,
            propriedade: "FuzoHorario",
            etiqueta: "Fuzo horário",
            descricao: "nome",
            identificador: "id",
            fonteDados: service.fuzoHorarios,
          },
          {
            tipo: "selecao-multipla",
            obrigatorio: true,
            propriedade: "Permissoes",
            etiqueta: "Permissões",
            fonteDados: service.permissoes,
            descricao: "nome",
            identificador: "id",
          } as ICampoSelecaoMultipla<{
            id: number;
            nome: string;
          }> as Campo,
        ],
      },
    ];
    return retorno;
  }
}
