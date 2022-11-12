import CampoTexto from "../CampoTexto/CampoTexto";

type Props<T> = {
  campos: Campo[];
  dados: T;
};

export default function Formulario<T>({ campos, dados }: Props<T>) {
  return (
    <>
      {campos.forEach((campo) => {
        switch (campo.tipo) {
          case "agrupador":
            return <Formulario campos={campo.campos} dados={dados} />;

          case "texto":
            return <CampoTexto campo={campo} dados={dados} />;

          default:
            return <></>;
        }
      })}
    </>
  );
}
