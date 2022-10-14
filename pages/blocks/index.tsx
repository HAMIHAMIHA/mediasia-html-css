import {useEffect, useState} from 'react';
import Map,{Marker} from 'react-map-gl';
import Script from 'next/script'
import Image from "next/image";
import Logo from '../../styles/src/Composant11_2.svg';
import Altarea from '../../styles/src/gps_altarea.svg';
import Logo_hill_side from '../../styles/src/page2/logo_hill_side.svg'
import plan_situation from "../../styles/src/page2/plan_situation@2x.png"

import transport1 from '../../styles/src/page2/icone_transport_1.svg'
import transport2 from '../../styles/src/page2/icone_transport_2.svg'
import transport3 from '../../styles/src/page2/icone_transport_3.svg'
import transport4 from '../../styles/src/page2/icone_transport_4.svg'


const Block = () => {
    return <>

        <Block0_1 
        text0={["Le Groupe Altarea","Nos programmes","Nos références","Nous contacter"]}
        text1={"LE BUREAU EN RÉGION PAR COGEDIM"} 
        text2={["Premier promoteur en immobilier d'entreprise à l'échelle nationale, ","Cogedim","développe des opérations de bureau partout en France autour de 3 pôles majeurs : ","la prestation de services, les immeubles clés en main utilisateur et l'investissement.","Le Groupe a pour vocation d'","accompagner les entreprises de toutes tailles","dans leur stratégie d'implantation régionale dans un contexte où les modes de travail se transforment et les enjeux de développement durable sont prépondérants."]}
        text3={[
        "       ",
        "Imaginer le futur de l'immobilier d'entreprise"]}
        text4={"Découvrez nos projets immobiliers par région"}
        text5={["Auvergne Rhône-Alpes", "Bourgogne Franche-Comté","Bretagne", "Centre Val de Loire","Grand Est","Hauts-de-France","Normandie","Nouvelle Aquitaine","Occitanie","Pays de la Loire","Provence Alpes Côte d'Azur"]}
        />
        <Block0_2 
        number1={57}
        text1={"programmes en cours"}
        text2={[
        "Hill Side - Toulouse",
        "Boréal - Lyon 7","EMH - Villeurbanne",
        "Commercialisation en cours"]}
        text3={[
        "Surface","31 000 m2 SDP",
        "Livraison","3e trimestre 2020"]}
        />

        <Block0_3 
        text1={[
        "Une culture entrepreneuriale",
        "Animé par une véritable culture entrepreneuriale",
        ", Cogedim a développé un fort ancrage territorial, gage d'une croissance durable. Acteur clé de la ville, au contact des métropoles et de leurs territoires, nous offrons à nos clients des solutions urbaines et immobilières à taille humaine. ",
        "Nous contacter",
        "L'immobilier d'entreprise au servive du développement des territoires.",
        ]}
        />

        <Block0_4
        text1={"Ils nous ont fait confiance"}
        />
        <Block0_5
        text1={["UNE MARQUE ALTAREA","Vous avez besoin de plus d'informations ?","Nous contacter"]}
        text2={["Le Groupe Altarea","Nos programmes","Nos références","Nous contacter"]}
        text3={["Visitez le site"," Altarea"," et le site"," Cogedim pour les Particuliers","Copyright Altarea 2022 - Mentions Légales"]}
        />

        <Block1_1
        text0={["Le Groupe Altarea","Nos programmes","Nos références","Nous contacter"]}
        text1={"OCCITANIE"} 
        text2={["Filiale toulousaine du Groupe Altarea, notre Direction régionale est implantée au cœur de la ville de Toulouse.","Notre équipe de 52 collaborateurs est impliquée quotidiennement dans le développement de notre territoire. Nous développons localement des projets immobiliers qualitatifs empreints de l'identité architecturale et des spécificités de la métropole Toulousaine et des villes de la région Occitanie."]}
        text3={[
        "       ",
        "Découvrez nos offres de bureau en région"]}
        text4={"Découvrez nos projets immobiliers par région"}
        text5={["Auvergne Rhône-Alpes", "Bourgogne Franche-Comté","Bretagne", "Centre Val de Loire","Grand Est","Hauts-de-France","Normandie","Nouvelle Aquitaine","Occitanie","Pays de la Loire","Provence Alpes Côte d'Azur"]}
        />
        <Block1_2
        number1={57}
        text1={"programmes en cours"}
        text2={[
        "Hill Side - Toulouse",
        "Boréal - Lyon 7","EMH - Villeurbanne",
        "Commercialisation en cours"]}
        text3={[
        "Surface","31 000 m2 SDP",
        "Livraison","3e trimestre 2020"]}
        />
        <Block0_5
        text1={["UNE MARQUE ALTAREA","Vous avez besoin de plus d'informations ?","Nous contacter"]}
        text2={["Le Groupe Altarea","Nos programmes","Nos références","Nous contacter"]}
        text3={["Visitez le site"," Altarea"," et le site"," Cogedim pour les Particuliers","Copyright Altarea 2022 - Mentions Légales"]}
        />


        <Block2_1
        text0={["Le Groupe Altarea","Nos programmes","Nos références","Nous contacter"]}
        text1={"Idéalement situé face au Quartier Guillemet, Hill Side est à la croisée de l'hypercentre et des faubourgs de la ville."}
        text2={["Surface","Livraison","Stade","SDP","trimestre"]} 
        number1={[4330,3,2023]}
        text3={["Travaux"]}
        text4={"Découvrez nos projets immobiliers par région"}
        text5={["Auvergne Rhône-Alpes", "Bourgogne Franche-Comté","Bretagne", "Centre Val de Loire","Grand Est","Hauts-de-France","Normandie","Nouvelle Aquitaine","Occitanie","Pays de la Loire","Provence Alpes Côte d'Azur"]}
        />
        <Block2_2
        text1={"Plan de situation"}
        text2={["Arrêt Jolimont, métro A 1 minute à pied","Aéroport Toulouse-Blagnac 15 minutes en voiture","Gare Toulouse Matabiau 5 minutes en métro","A61 5 minutes en voiture"]}
        />
        <Block0_5
        text1={["UNE MARQUE ALTAREA","Vous avez besoin de plus d'informations ?","Nous contacter"]}
        text2={["Le Groupe Altarea","Nos programmes","Nos références","Nous contacter"]}
        text3={["Visitez le site"," Altarea"," et le site"," Cogedim pour les Particuliers","Copyright Altarea 2022 - Mentions Légales"]}
        />


        <EmptyBlock />
    </>
}


interface Block0_1Props {
    text0: string[]
    text1: string
    text2: string[]
    text3: string[]
    text4: string
    text5: string[]
}
interface Block0_2Props {
    number1: number
    text1: string
    text2: string[]
    text3: string[]
}
interface Block0_3Props {
    text1: string[]
}
interface Block0_4Props {
    text1: string
}
interface Block0_5Props {
    text1: string[]
    text2: string[]
    text3: string[]
}
interface Block1_1Props{
    text0: string[]
    text1: string
    text2: string[]
    text3: string[]
    text4: string
    text5: string[]
}
interface Block1_2Props{
    number1: number
    text1: string
    text2: string[]
    text3: string[]
}

interface Block2_1Props{
    text0: string[]
    text1: string
    text2: string[]
    text3: string[]
    text4: string
    text5: string[]
    number1:number[]
}
interface Block2_2Props{
    text1: string
    text2: string[]
}


const Block0_1 = ({text0, text1, text2, text3, text4, text5}: Block0_1Props) => {
    const move_down=()=>{
        scrollTo({
            top:800,left:0,behavior:"smooth"
        })
    }
    const [show, setShow] = useState(false)
    const show_box=()=>{
        setShow(!show)
    }
    return (
    <div className="block1">
        <div className="image">
            <div className="top-box">
                <div className="square"></div>
                <div className="title-text">{text0[0]}</div>
                <div className="title-text" onClick={show_box}>{text0[1]}</div>
                <div className="title-text">{text0[2]}</div>
                <div className="button">
                    <div className="message-icon"></div>
                    <div className="title-color-text">{text0[3]}</div>
                </div>
                <div className={(show ? 'chooseBox' : 'hidden')}>
                    <div className="leftPart">{text4}</div>
                    <div className="rightPart">
                    {text5.map((e,i)=>
                        <div className="choice">{e}</div>
                    )}
                    </div>
                </div>
            </div>
            <div className="color-button" onClick={move_down}>
                <Logo aria-label="aria-label"></Logo>
            </div>
            <div className="text">
                <div className="title">{text1}</div>
                <div className="content1">
                    <text className="text-normal">{text2[0]}</text>
                    <text className="text-color">{text2[1]}</text>
                    <text className="text-normal">{text2[2]}</text>
                    <text className="text-color">{text2[3]}</text>             
                </div>
                <div className="content2">
                    <text className="text-normal">{text2[4]}</text>
                    <text className="text-color">{text2[5]}</text>
                    <text className="text-normal">{text2[6]}</text>
                </div>
            </div>
            <div className="white-ball"></div>
            <div className="white-text">
                <text>{text3[0]}</text>
                <text>{text3[1]}</text>
            </div>
            <div className="white-box">
                <div className="color-ball"></div>
            </div>
        </div>
    </div>
    )
}
// let flag:boolean=true;
const Block0_2 = ({number1, text1, text2, text3}: Block0_2Props) => {
    const [open, setOpen] = useState(false)
    // const [ viewport, setViewport ] = useState({
    //     latitude:45.4211,
    //     longitude:-75.6903,
    //     width:"100px",
    //     height:"100px",
    //     zoom:10
    // });
    
    const change_map_size=()=>{
        setOpen(!open)
    }
    let arr=[]
    let test=0
    while(test<10){
        for(let i=2;i<5;i++){
            // console.log(i,`../../styles/src/image_home_${i}@2x.png`)
            let obj={ 'src':require(`../../styles/src/image_home_${i}@2x.png`).default}
            arr.push(obj)
        }
        test++
    }
    return (
        <div className="block2">
            <div className={"block2-map" + (open ? ' open' : '') } id="block2-id">
                <Map
                    // {...viewport}
                    initialViewState={{
                        longitude: 0.6,
                        latitude: 47.18,
                        zoom: 6.06
                    }}
                    style={{width: '960px', height: '1200px'}}
                    mapStyle="mapbox://styles/mapbox/streets-v9"
                    mapboxAccessToken="pk.eyJ1IjoicGl6enVwIiwiYSI6ImNsOTNtN3FzbzA1b3Mzdm9lZXpvcG94OXQifQ.PT2kirQB9_9_8By1AT41uQ"
                    // mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                    // onViewportChange={ viewport=>{
                    //         setViewport(viewport);
                    //     }}
                >
                    <Marker longitude={6} latitude={54} anchor="bottom" >
                        <Altarea aria-label="aria-label"></Altarea> 
                    </Marker>
                    <Marker longitude={8} latitude={53.8} anchor="bottom" >
                        <div className="number-ball" aria-label="aria-label">
                            13
                        </div>
                    </Marker>
                </Map>
                
                <Script id="show-scroll" strategy="lazyOnload">
                    {`console.log("1")`}
                </Script>
            </div>
            <div className={"click-move" + (open ? ' click-move-click' : '') } style={{}} onClick={change_map_size}>{'<'}</div>
            <div className="scroll-box-outside">
                <div className={"scroll-box" + (open ? ' box-show' : '') }>
                    {/* <Image
                        src={QR}
                    /> */}
                    <div className="scroll-title">{number1} {text1}</div>
                    {arr.map((e, i) =>
                        <div className="show-box">
                            <div className="picture-title">title</div>
                            <div className="picture-box picture-box1">
                                <div className="bgc"> 
                                    <Image key={i} src={ e.src} alt="brand1" className="picture"/>
                                    <div className="picture-text1">{text2[0]}</div>
                                    <div className="picture-text2">{text2[3]}</div>
                                </div>

                                <div className="white-bottom-box flex">
                                    <div className="Surface flex">
                                        <div className="Surface-icon"></div>
                                        <div className="Surface-name">
                                            <div className="Surface-Surface">{text3[0]}</div>
                                            <div className="Surface-info">{text3[1]}</div>
                                        </div>
                                    </div>
                                    <div className="Livraison flex">
                                        <div className="Livraison-icon"></div>
                                        <div className="Livraison-name">
                                            <div className="Surface-Surface">{text3[2]}</div>
                                            <div className="Surface-info">{text3[3]}</div>
                                        </div>
                                    </div>
                                    <div className="Decouvrir flex">
                                    Découvrir {'  >'}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className={"border-bottom" + (open ? ' border-bottom-click' : '') }>
                </div>
                <div className="border-selection">
                    <div className="selection">{"<"}</div>
                    <div className="selection selected">1</div>
                    <div className="selection">2</div>
                    <div className="selection">3</div>
                    <div className="selection">4</div>
                    <div className="selection">5</div>
                    <div className="selection">6</div>
                    <div className="selection">{">"}</div>
                </div>
            </div>
        </div>
    )
}
const Block0_3 = ({text1}: Block0_3Props) => {
    return (
    <div className="block3">
        <div className="left-box">
            <div className="text-box">
                <div className="text-box-title">{text1[0]}</div>
                <div className="text-box-text">
                    <text className="text1">{text1[1]}</text>
                    <text className="text2">{text1[2]}</text>
                </div>
                <div className="text-box-button">
                    <div className="letter-box"></div>
                    <div>{text1[3]}</div>
                </div>
            </div>
        </div>
        <div className="right-box">
            <div className="white-border">
                <div className="text">{text1[4]}</div>
            </div>
        </div>
    </div>
    )
}
const Block0_4 = ({text1}: Block0_4Props)=>{
    let arr=[]
    for(let i=1;i<25;i++){
        let obj={ 'src':require(`../../styles/src/brand/logo_client_${i}@2x.png`).default}
        // let obj={ 'src':`../../styles/src/brand/logo_client_${i}@2x.png`}
        arr.push(obj)
    }
    // const list = [{src: "!"}]
    // let src1=require("../../styles/src/brand/logo_client_1@2x.png").default;
    return (
        <div className="block4">
            <div className="block4-title">{text1}</div>
            <div className="brand-container">
                {/* <Image  src={ src1}  width="186px" height="100px" alt="brand1" className="brand"/> */}
                {arr.map((e, i) =>
                    // <div key={i}>{e.src}</div>
                    <div key={i} className="brand-box">
                        <Image key={i} src={ e.src} alt="brand1" className="brand"/>
                    </div>
                )}
            </div>
            <div className="border-selection">
                    <div className="selection">{"<"}</div>
                    <div className="selection selected">1</div>
                    <div className="selection">2</div>
                    <div className="selection">3</div>
                    <div className="selection">{">"}</div>
                </div>
        </div> 
    )
}
const Block0_5=({text1,text2,text3}: Block0_5Props)=>{
    return(
        <div className="block5">
            <div className="block5-top">
                <div className="top-icon"></div>
                <text className="top-name">{text1[0]}</text>
            </div>
            <div className="block5-middle">
                <div className="question">{text1[1]}</div>
                <div className="button">
                    <div className="message-icon"></div>
                    <div className="title-color-text">{text1[2]}</div>
                </div>
            </div>
            <div className="block5-bottom">
                <div className="options">
                    <div className="option">{text2[0]}</div>
                    <div className="option">{text2[1]}</div>
                    <div className="brand"></div>
                    <div className="option">{text2[2]}</div>
                    <div className="option">{text2[3]}</div>
                </div>
                <div className="declaration">
                    <div className="first-line">
                        <text className="text-normal">{text3[0]}</text>
                        <text className="text-bold">{text3[1]}</text>
                        <text className="text-normal">{text3[2]}</text>
                        <text className="text-bold">{text3[3]}</text>
                    </div>
                    <div className="second-line">{text3[4]}</div>
                </div>
            </div>

        </div>
    )
}


const Block1_1=({text0, text1, text2, text3, text4, text5}:Block1_1Props)=>{
    const move_down=()=>{
        scrollTo({
            top:800,left:0,behavior:"smooth"
        })
    }
    const [show, setShow] = useState(false)
    const show_box=()=>{
        setShow(!show)
    }
    return (
    <div className="block1_1">
        <div className="image">
            <div className="top-box">
                <div className="square"></div>
                <div className="title-text">{text0[0]}</div>
                <div className="title-text" onClick={show_box}>{text0[1]}</div>
                <div className="title-text">{text0[2]}</div>
                <div className="button">
                    <div className="message-icon"></div>
                    <div className="title-color-text">{text0[3]}</div>
                </div>
                <div className={(show ? 'chooseBox' : 'hidden')}>
                    <div className="leftPart">{text4}</div>
                    <div className="rightPart">
                    {text5.map((e,i)=>
                        <div className="choice">{e}</div>
                    )}
                    </div>
                </div>
            </div>
            <div className="color-button" onClick={move_down}>
                <Logo aria-label="aria-label"></Logo>
            </div>
            <div className="text">
                <div className="title Occitanie">{text1}</div>
                <div className="content1">
                    <text className="text-normal">{text2[0]}</text>
                </div>
                <div className="content2">
                    <text className="text-normal">{text2[1]}</text>
                </div>
            </div>
            <div className="white-ball"></div>
            <div className="white-text">
                <text>{text3[0]}</text>
                <text>{text3[1]}</text>
            </div>
            <div className="white-box OccitanieBackground3">
                <div className="color-ball OccitanieBackground7"></div>
            </div>
        </div>
    </div>
    )
}
const Block1_2=({number1, text1, text2, text3}:Block1_2Props)=>{
    let arr=[]
    let test=0
    while(test<10){
        for(let i=2;i<5;i++){
            // console.log(i,`../../styles/src/image_home_${i}@2x.png`)
            let obj={ 'src':require(`../../styles/src/image_home_${i}@2x.png`).default}
            arr.push(obj)
        }
        test++
    }
    return(
        <div className="block1_2">
            <div className="scroll-box-outside">
                <div className="scroll-box">
                    {arr.map((e, i) =>
                        <div className="show-box">
                            <div className="picture-title">title</div>
                            <div className="picture-box picture-box1">
                                <div className="bgc"> 
                                    <Image key={i} src={ e.src} alt="brand1" className="picture"/>
                                    <div className="picture-text1">{text2[0]}</div>
                                    <div className="picture-text2">{text2[3]}</div>
                                </div>

                                <div className="white-bottom-box flex">
                                    <div className="Surface flex">
                                        <div className="Surface-icon"></div>
                                        <div className="Surface-name">
                                            <div className="Surface-Surface">{text3[0]}</div>
                                            <div className="Surface-info">{text3[1]}</div>
                                        </div>
                                    </div>
                                    <div className="Livraison flex">
                                        <div className="Livraison-icon"></div>
                                        <div className="Livraison-name">
                                            <div className="Surface-Surface">{text3[2]}</div>
                                            <div className="Surface-info">{text3[3]}</div>
                                        </div>
                                    </div>
                                    <div className="Decouvrir flex">
                                    Découvrir {'  >'}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className="border-selection">
                    <div className="selection">{"<"}</div>
                    <div className="selection selected">1</div>
                    <div className="selection">2</div>
                    <div className="selection">3</div>
                    <div className="selection">4</div>
                    <div className="selection">5</div>
                    <div className="selection">6</div>
                    <div className="selection">{">"}</div>
                </div>
            </div>
        </div>
    )
}


const Block2_1=({text0, text1, text2, text3, text4,text5, number1}:Block2_1Props)=>{
    const [show, setShow] = useState(false)
    const show_box=()=>{
        setShow(!show)
    }
    return (
    <div className="block2_1">
        <div className="image">
        <div className="top-box">
                <div className="square"></div>
                <div className="title-text">{text0[0]}</div>
                <div className="title-text" onClick={show_box}>{text0[1]}</div>
                <div className="title-text">{text0[2]}</div>
                <div className="button">
                    <div className="message-icon"></div>
                    <div className="title-color-text">{text0[3]}</div>
                </div>
                <div className={(show ? 'chooseBox' : 'hidden')}>
                    <div className="leftPart">{text4}</div>
                    <div className="rightPart">
                    {text5.map((e,i)=>
                        <div className="choice">{e}</div>
                    )}
                    </div>
                </div>
            </div>
            <div className="text">
                <div className="brand">
                    <Logo_hill_side aria-label="aria-label"></Logo_hill_side>
                </div>
                <div className="text1">
                    {text1}
                </div>
                <div className="icons">
                    <div className="icon"></div>
                    <div className="icon"></div>
                    <div className="icon"></div>
                </div>
                <div className="infos">
                    <div className="line1">
                        <text className="title">{text2[0]}:</text>
                        <text className="content"> {number1[0]}</text>
                        <text className="content"> m<sup>2</sup></text>
                        <text className="content"> {text2[3]}</text>
                    </div>
                    <div className="line2">
                        <text className="title">{text2[1]}:</text>
                        <text className="content"> {number1[1]}<sup>e</sup></text>
                        <text className="content"> {text2[4]}</text>
                        <text className="content"> {number1[2]}</text>
                    </div>
                    <div className="line3">
                        <text className="title">{text2[2]}:</text>
                        <text className="content"> {text3[0]}</text>
                    </div>
                </div>
                <div className="button">
                    <div className="message-icon"></div>
                    <div className="title-color-text">{text0[3]}</div>
                </div>
            </div>
            <div className="white-ball"></div>
            <div className="white-box OccitanieBackground3">
                <div className="color-ball OccitanieBackground7"></div>
            </div>
        </div>
    </div>
    )
}
const Block2_2=({text1,text2}:Block2_2Props)=>{
    let arr=["transport1","transport2","transport3","transport4"]

    return(
        <div className="block2_2">
            <div className="title">{text1}</div>
            <div className="map">
                <Image src={plan_situation} aria-label="aria-label" className="mapimg"></Image>
            </div>
            <div className="transparents">
                {arr.map((e,i)=>
                        <div>{e}</div>
                )}
                <div className="vehicle1"></div>
            </div>
        </div>
    )
}


const EmptyBlock=()=>{
    // const {  width } = useWindowDimention()

    // useEffect(() => {
    //     document.documentElement.style.fontSize = (width / 1920) + 'px'
    // }, [width])
    return (
        <div className="EmptyBlock"></div>
    )
}
export default Block

// const useWindowDimention = () => { 
//     const [screenSize, getDimension] = useState({
//         dynamicWidth: window.innerWidth,
//         dynamicHeight: window.innerHeight
//       });
//       const setDimension = () => {
//         getDimension({
//           dynamicWidth: window.innerWidth,
//           dynamicHeight: window.innerHeight
//         })
//       }
      
//       useEffect(() => {
//         window.addEventListener('resize', setDimension);
        
//         return(() => {
//             window.removeEventListener('resize', setDimension);
//         })
//       }, [screenSize])

//       return { width: screenSize.dynamicWidth,
//     height: screenSize.dynamicHeight }
// }