import CampoTexto from "../CampoTexto/CampoTexto";

type Props<T> = {
  campos: Campo[];
  dados: T;
};

export default function Formulario<T>({ campos, dados }: Props<T>) {
  return (
    <div>
      {campos.map((campo) => {
        switch (campo.tipo) {
          case "agrupador":
            return (
              <fieldset>
                <legend>{campo.titulo}</legend>
                <Formulario campos={campo.campos} dados={dados} />
              </fieldset>
            );

          case "texto":
            return <CampoTexto campo={campo} dados={dados} />;

          default:
            return <></>;
        }
      })}
    </div>
  );
}
