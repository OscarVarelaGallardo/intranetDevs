import { Carousel } from "antd";
import Comunicado from "./Comunicado";
import ComunicadoDTO from "./Models/ComunicadoDTO";

export default function Comunicados(props:comunicadosProps) {
console.log(props);

  return (
    <Carousel autoplay>
      {props.comunicados.map((c) => (
        <Comunicado comunicado={c} />
      ))}
    </Carousel>
  );
}

interface comunicadosProps{
  comunicados: ComunicadoDTO[]
}