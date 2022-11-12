import TextBox from "devextreme-react/ui/text-box";

type Props<T> = {
  campo: ICampoTexto;
  dados: T;
};

export default function CampoTexto<T = any>({ campo, dados }: Props<T>) {
  return (
    <TextBox
      maxLength={campo.comprimentoMax}
      label={campo.etiqueta}
      showClearButton={true}
    />
  );
}
