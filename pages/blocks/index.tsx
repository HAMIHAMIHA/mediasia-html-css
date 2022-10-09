// import Konva from "konva";
// import { render } from "react-dom";
// import { Stage, Layer, Rect, Text } from "react-konva";
const Block = () => {
    return <>
        <Block1 text1={"LE BUREAU EN RÉGION PAR COGEDIM"} text2={"Premier promoteur en immobilier d'entreprise à l'échelle nationale, Cogedim développe des opérations de bureau partout en France autour de 3 pôles majeurs : la prestation de services, les immeubles clés en main utilisateur et l'investissement. Le Groupe a pour vocation d'accompagner les entreprises de toutes tailles dans leur stratégie d'implantation régionale dans un contexte où les modes de travail se transforment et les enjeux de développement durable sont prépondérants."}/>
        <Block2 />
    </>
}

interface Block1Props {
    text1: string
    text2: string
}

const Block1 = ({text1, text2}: Block1Props) => {
    return (
    <div className="block1">
        <div className="image">
            <div className="text">
                <div className="title">{text1}</div>
                <div className="content">{text2}</div>
            </div>
            <div className="white-ball"></div>
            <div className="white-box">
                <div className="color-ball"></div>
            </div>

        </div>
    </div>
    )
}

const Block2 = () => {
    return <>2</>
}

export default Block