import {useEffect, useState} from 'react';
import Map,{Marker} from 'react-map-gl';
import Script from 'next/script'
import Image from "next/image";

const Block = () => {
    return <>
        {/* page1 */}
        <Block1_1 
        text0={["Le Groupe Altarea","Nos programmes","Nos références","Nous contacter"]}
        text1={"LE BUREAU EN RÉGION PAR COGEDIM"} 
        text2={["Premier promoteur en immobilier d'entreprise à l'échelle nationale, ","Cogedim","développe des opérations de bureau partout en France autour de 3 pôles majeurs : ","la prestation de services, les immeubles clés en main utilisateur et l'investissement.","Le Groupe a pour vocation d'","accompagner les entreprises de toutes tailles","dans leur stratégie d'implantation régionale dans un contexte où les modes de travail se transforment et les enjeux de développement durable sont prépondérants."]}
        text3={[
        "       ",
        "Imaginer le futur de l'immobilier d'entreprise"]}
        text4={"Découvrez nos projets immobiliers par région"}
        text5={["Auvergne Rhône-Alpes", "Bourgogne Franche-Comté","Bretagne", "Centre Val de Loire","Grand Est","Hauts-de-France","Normandie","Nouvelle Aquitaine","Occitanie","Pays de la Loire","Provence Alpes Côte d'Azur"]}
        propramme={["program1","program2","program3"]}
        introduce={"Les données recueillies ci-dessus sont nécessaires pour nous permettre de répondre à votre demande de renseignement dans le cadre de la commercialisation des programmes par Cogedim Provence. Pour en savoir plus sur le traitement de vos données et vos droits, cliquer ici."}
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
        <Block1_3 
        text1={[
        "Une culture entrepreneuriale",
        "Animé par une véritable culture entrepreneuriale",
        ", Cogedim a développé un fort ancrage territorial, gage d'une croissance durable. Acteur clé de la ville, au contact des métropoles et de leurs territoires, nous offrons à nos clients des solutions urbaines et immobilières à taille humaine. ",
        "Nous contacter",
        "L'immobilier d'entreprise au servive du développement des territoires.",
        ]}
        />

        <EmptyBlock />
    </>
}

interface Block1_1Props {
    text0: string[]
    text1: string
    text2: string[]
    text3: string[]
    text4: string
    text5: string[]
    propramme: string[]
    introduce: string
}
interface Block1_2Props {
    number1: number
    text1: string
    text2: string[]
    text3: string[]
}
interface Block1_3Props {
    text1: string[]
}
//page1
const Block1_1 = ({text0, text1, text2, text3, text4, text5, propramme,introduce}: Block1_1Props) => {
    // let backgroundImage=require(`../../styles/src/image_home_1@2x.png`).default
    const move_down=()=>{
        scrollTo({
            top:800,left:0,behavior:"smooth"
        })
    }
    const [show, setShow] = useState(false)
    const show_box=()=>{
        setShow(!show)
    }
    const [showi,showInput] =useState(false)
    const show_input=()=>{
        showInput(!showi)
    }
    let arr=[];
    for(let i=0;i<propramme.length;i++){
        let obj={ 'selections':propramme[i]}
        arr.push(obj)
    }
    return (
    <div className="block1_1">
        {/* <Image src={backgroundImage} width={1920} height={1200}></Image> */}
        <div className="imageBox">
            <div className="mtopBox">
                <div className="left">
                    <div className="icon-logo_purple">
                        <span className="path1"></span>
                        <span className="path2"></span>
                        <span className="path3"></span>
                        <span className="path4"></span>
                        <span className="path5"></span>
                        <span className="path6"></span>
                        <span className="path7"></span>
                        <span className="path8"></span>
                        <span className="path9"></span>
                        <span className="path10"></span>
                    </div>
                    <div className="icon-menu"></div>
                </div>
                <div className="buttonm" onClick={show_input}>
                    <div className="icon-mail"></div>
                    <div className="title-color-text">{text0[3]}</div>
                </div>
            </div>
            <div className="topBox">
                <div className="square">
                    <div className="icon-logo_purple">
                        <span className="path1"></span>
                        <span className="path2"></span>
                        <span className="path3"></span>
                        <span className="path4"></span>
                        <span className="path5"></span>
                        <span className="path6"></span>
                        <span className="path7"></span>
                        <span className="path8"></span>
                        <span className="path9"></span>
                        <span className="path10"></span>
                    </div>
                </div>
                <div className="title-text">{text0[0]}</div>
                <div className="title-text" onClick={show_box}>{text0[1]}</div>
                <div className="title-text">{text0[2]}</div>
                <div className="button" onClick={show_input}>
                    <div className="icon-mail"></div>
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
            <div className="mtext-box">
                <div className="mtop-box">
                    <div className="text">
                        <div className="title">{text1}</div>
                        <div className="content1">
                            <text className="text-normal">{text2[0] } </text>
                            <text className="text-color">{text2[1] } </text>
                            <text className="text-normal">{text2[2] } </text>
                            <text className="text-color">{text2[3] } </text>             
                        </div>
                        <div className="content2">
                            <text className="text-normal">{text2[4] } </text>
                            <text className="text-color">{text2[5] } </text>
                            <text className="text-normal">{text2[6] } </text>
                        </div>
                    </div>
                    <div className="colorButton" onClick={move_down}>
                        <div className="icon-composant">
                            <span className="path1"></span>
                            <span className="path2"></span>
                        </div>
                    </div>
                    <div className="whiteText">
                        {text3[1]}
                    </div>
                </div>
            </div>
            <div className="text-box">
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
                <div className="color-button" onClick={move_down}>
                    <div className="icon-composant">
                        <span className="path1"></span>
                        <span className="path2"></span>
                    </div>
                </div>
            </div>
            <div className="white-text-box">
                <div className="white-text">
                    <text>{text3[0]}</text>
                    <text>{text3[1]}</text>
                </div>
            </div>
            <div className="white-ball-box">
                <div className="white-ball"></div>
            </div>
            <div className="white-box">
                <div className="color-ball"></div>
            </div>
        </div>
    </div>
    )
}
// let flag:boolean=true;
const Block1_2 = ({number1, text1, text2, text3}: Block1_2Props) => {
    const [open, setOpen] = useState(false)
    const change_map_size=()=>{
        setOpen(!open)
    }
    let arr=[]
    let arrm=[]
    let test=0
    while(test<10){
        for(let i=2;i<5;i++){
            let obj={ 'src':require(`../../styles/src/image_home_${i}@2x.png`).default,'icon':require(`../../styles/src/label_1@2x.png`).default}
            arr.push(obj)
        }
        test++
    }
    for(let i=2;i<5;i++){
        let obj={ 'src':require(`../../styles/src/image_home_${i}@2x.png`).default,'icon':require(`../../styles/src/label_1@2x.png`).default}
        arrm.push(obj)
    }
    let obj1={'src':require(`../../styles/src/image_home_2@2x.png`).default,'icon':require(`../../styles/src/label_1@2x.png`).default}
    arrm.push(obj1)
    return (
        <div className="block1_2">
            <div className="mblock2-map">
                <div className="title">
                    {number1} {text1}
                </div>
                <Map
                    // {...viewport}
                    initialViewState={{
                        longitude: 0.6,
                        latitude: 47.18,
                        zoom: 6.06
                    }}
                    style={{width: '100%', height: '400px'}}
                    mapStyle="mapbox://styles/mapbox/streets-v9"
                    mapboxAccessToken="pk.eyJ1IjoicGl6enVwIiwiYSI6ImNsOTNtN3FzbzA1b3Mzdm9lZXpvcG94OXQifQ.PT2kirQB9_9_8By1AT41uQ"
                    // mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                    // onViewportChange={ viewport=>{
                    //         setViewport(viewport);
                    //     }}
                >
                    <Marker longitude={6} latitude={54} anchor="bottom" >
                        <div className="icon-gps_altarea">
                            <span className="path1"></span>
                            <span className="path2"></span>
                            <span className="path3"></span>
                        </div>
                    </Marker>
                    <Marker longitude={8} latitude={53.8} anchor="bottom" >
                        <div className="number-ball" aria-label="aria-label">
                            13
                        </div>
                    </Marker>
                </Map>
            </div>
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
                        <div className="icon-gps_altarea">
                            <span className="path1"></span>
                            <span className="path2"></span>
                            <span className="path3"></span>
                        </div>
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
            <div className="scroll-boxm">
                {arrm.map((e, i) =>
                    <div className="show-box">
                        <div className="picture-title">
                            <Image key={i} src={ e.icon} alt="brand1" width={83} height={20}  className="picture"/>
                        </div>
                        <div className="picture-box picture-box1">
                            <div className="bgc"> 
                                <Image key={i} src={ e.src} alt="brand1" width={600} height={450} className="picture"/>
                                <div className="picture-text1">{text2[0]}</div>
                                <div className="picture-text2">{text2[3]}</div>
                            </div>
                            <div className="white-bottom-box">
                                <div className="Surface-flex">
                                    <div className="icon-calendrier"></div>
                                    <div className="Surface-name">
                                        <div className="Surface-Surface">{text3[0]}</div>
                                        <div className="Surface-info">{text3[1]}</div>
                                    </div>
                                </div>
                                <div className="Surface-flex">
                                    <div className="icon-surface"></div>
                                    <div className="Livraison-name">
                                        <div className="Surface-Surface">{text3[2]}</div>
                                        <div className="Surface-info">{text3[3]}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="Decouvrir">
                            <div>Découvrir</div>  
                            <div className="icon-right"></div>
                        </div>
                    </div>
                )}
                <div className="voir">
                    Voir plus de projets
                </div>
            </div>
            <div className="scroll-box-outside">
                <div className={"scroll-box" + (open ? ' box-show' : '') }>
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

                                <div className="white-bottom-box">
                                    <div className="Surface-flex">
                                        <div className="surface"></div>
                                        <div className="Surface-name">
                                            <div className="Surface-Surface">{text3[0]}</div>
                                            <div className="Surface-info">{text3[1]}</div>
                                        </div>
                                    </div>
                                    <div className="Surface-flex">
                                        <div className="calendrier"></div>
                                        <div className="Livraison-name">
                                            <div className="Surface-Surface">{text3[2]}</div>
                                            <div className="Surface-info">{text3[3]}</div>
                                        </div>
                                    </div>
                                    <div className="Decouvrir">
                                    Découvrir <div className="icon-right"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className={"border-bottom" + (open ? ' border-bottom-click' : '') }>
                </div>
                <div className="border-selection">
                    <div className="icon_left"></div>
                    <div className="selection selected">1</div>
                    <div className="selection">2</div>
                    <div className="selection">3</div>
                    <div className="selection">4</div>
                    <div className="selection">5</div>
                    <div className="selection">6</div>
                    <div className="icon_right"></div>
                </div>
                <div className={"click-move" + (open ? ' hidden' : '') } style={{}} onClick={change_map_size}>
                    <div className="icon-left"></div>
                </div>
                <div className={"click-move" + (open ? '' : ' hidden') } style={{}} onClick={change_map_size}>
                    <div className="icon-right"></div>
                </div>
            </div>
            
        </div>
    )
}
const Block1_3 = ({text1}: Block1_3Props) => {
    let src=require(`../../styles/src/image_home_5@2x.png`).default
    return (
    <div className="block1_3">
        <div className="left-box">
            <div className="text-box">
                <div className="text-box-title">{text1[0]}</div>
                <div className="text-box-text">
                    <text className="text1">{text1[1]}</text>
                    <text className="text2">{text1[2]}</text>
                </div>
                <div className="text-box-button">
                    <div className="icon-mail"></div>
                    <div>{text1[3]}</div>
                </div>
            </div>
        </div>
        <div className="right-box">
            <div className="white-border">
                <div className="text">{text1[4]}</div>
            </div>
            <Image src={src}></Image>
        </div>
    </div>
    )
}
const EmptyBlock=()=>{
    return (
        <div className="EmptyBlock"></div>
    )
}
export default Block