import ComunicadoDTO from "./Models/ComunicadoDTO";


export default function Comunicado(props: comunicadoProps){

    console.log(props.comunicado);

    return(
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
            <h3>{props.comunicado.textoComunicado}</h3>
            <img src={props.comunicado.imagenComunicado} style={{height: "300px", width: "50%"}}/>
        </div>
    )
}

interface comunicadoProps{
    comunicado: ComunicadoDTO
}