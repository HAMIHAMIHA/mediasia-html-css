import {useEffect, useState} from 'react';
import Map,{Marker} from 'react-map-gl';
import Script from 'next/script'
import Image from "next/image";
import Logo from '../../styles/src/Composant11_2.svg';
import Altarea from '../../styles/src/gps_altarea.svg';
import Logo_hill_side from '../../styles/src/page2/logo_hill_side.svg'
import Logo_hill_png from '../../styles/src/page2/logo_hill_side.png'
import plan_situation from "../../styles/src/page2/plan_situation@2x.png"
import Icon_open_photo from "../../styles/src/page2/icon_open_photo.svg"
// import { Divider } from 'antd';

// import transport1 from '../../styles/src/page2/icone_transport_1.svg'
// import transport2 from '../../styles/src/page2/icone_transport_2.svg'
// import transport3 from '../../styles/src/page2/icone_transport_3.svg'
// import transport4 from '../../styles/src/page2/icone_transport_4.svg'

const Block = () => {
    return <>
        {/* page0 */}
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
        {/* page1 */}
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
        {/* page2 */}
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
        text2={["Métro","Aéroport","TGV","Autoroute"]}
        text3={["Arrêt Jolimont, métro A 1 minute à pied","Aéroport Toulouse-Blagnac 15 minutes en voiture","Gare Toulouse Matabiau 5 minutes en métro","A61 5 minutes en voiture"]}
        />

        <Block2_3
        text1={["Adresse :","Promoteur :","Surface :","Parking :","Architecte :","Bureaux d'études :","Livraison prévisionnelle :","Labels et certifications :","Type de contrat :","Investisseur :","Stade :","A louer"]}
        text2={["53 rue Benjamin Baillaud, 31500 Toulouse","Cogedim","4 330 m² SDP","58 places en sous-sol","Devillers & Associés","OTEIS, Soconer, Bureau Veritas, Gambas Acoustique, Polyexpert Environnement","3e trimestre 2023","HQE® niveau excellent, BREEAM® niveau Very Good, RT 2012 -30%, E2C1","VEFA/BEFA","Tivoli Capital (quand a déjà été vendu / loué)","Travaux en cours",""]}
        text3={["Ce bien vous intéresse ?","Nous contacter"]}
        />

        <Block2_4
        text1={["Hill Side","Disposant d'une excellente accessibilité et visibilité, à proximité immédiate du nouveau quartier Guillemet, cet immeuble en R+5 bénéficie d'une flexibilité optimale grâce à la divisibilité des plateaux de bureaux en deux lots distincts sur chacun des niveaux. Hill Side a été conçu pour offrir des espaces de travail de haute qualité : hauteur libre des plateaux de bureaux de 2,70 m, avec l'ensemble des bureaux en premier jour et des ouvrant de confort par bureau.","Télécharger la brochure"]}
        />

        <Block2_5
        text1={["Plan de masse","Voir les plans"]}
        />

        <Block0_5
        text1={["UNE MARQUE ALTAREA","Vous avez besoin de plus d'informations ?","Nous contacter"]}
        text2={["Le Groupe Altarea","Nos programmes","Nos références","Nous contacter"]}
        text3={["Visitez le site"," Altarea"," et le site"," Cogedim pour les Particuliers","Copyright Altarea 2022 - Mentions Légales"]}
        />

        <Block3_1
        text0={["Le Groupe Altarea","Nos programmes","Nos références","Nous contacter"]}
        text1={["LE GROUPE ALTAREA","Fondé en 1994 par Alain Taravella, Altarea est aujourd'hui le premier développeur immobilier de France. Le Groupe a développé une plateforme de compétences immobilières et de développement unique au service de la transformation des villes, couvrant l'ensemble des classes d'actifs immobiliers (logement, commerce, bureau, logistique, hôtellerie, résidences services…). ","Cette spécificité lui permet de répondre efficacement et de manière globale aux enjeux de transformation des territoires et contribue à créer des villes agréables à vivre et ouvertes sur l'avenir."]}
        text4={"Découvrez nos projets immobiliers par région"}
        text5={["Auvergne Rhône-Alpes", "Bourgogne Franche-Comté","Bretagne", "Centre Val de Loire","Grand Est","Hauts-de-France","Normandie","Nouvelle Aquitaine","Occitanie","Pays de la Loire","Provence Alpes Côte d'Azur"]}
        />

        <Block3_2
        text1={["Activité","Porté par son modèle intégré unique en France, Altarea a pris une longueur d'avance sur le marché de la transformation urbaine, fondement de sa croissance future, pérenne et solide. Le Groupe propose une offre sur mesure qui favorise la réussite des projets urbains grâce à l'articulation de tous les savoir-faire de l'immobilier. Acteur multi-métier, son modèle intégré lui permet de mobiliser toutes les compétences nécessaires, quelle que soit la classe d'actif concernée."]}
        text2={["promoteur en logement","d'actifs de commerce sous gestion, dont","promoteur d'immobilier d'entreprise (sièges sociaux, bureaux, campus, hôtels, logistique)","développeur de grands projets urbains mixtes","3 Mds€ de réservations","2,4 Mds€ en quote-part","15 projets en développement"]}
        text3={["CLIENT","2","e","Cogedim élu Service Client de l'Année","47 000","au classement de la relation client HCG - Les Echos","pour la 5e année consécutive","emplois directs, indirects et induits soutenus en France"]}
        text4={["COLLABORATEURS","Top Employer 2022","1996","(certification internationale qui reconnaît l'excellence des pratiques RH)","collaborateurs"]}
        text5={["CLIMAT","Confirmation du statut Green Star 5*","-67,3%","au GRESB (agence de notation extra-financière) pour la 6e année consécutive","d'émissions de CO2 sur le patrimoine Commerce depuis 2010"]}
        />
        <Block3_3
        text1={[
        "Marque historique du Groupe",
        "L'acteur incontournable de l'immobilier neuf depuis 1963. Cogedim réalise de nombreux programmes immobiliers à l'identité architecturale affirmée et développe partout en France des opérations d'envergure, garantes de la pluralité de ses savoir-faire.",
        "Cogedim est particulièrement connu pour ses logements mais réalise également depuis plusieurs années des bureaux partout en France."]}
        text2={[
            "Les bureaux par Cogedim",
        "Cogedim a pour vocation d'accompagner les entreprises de toutes tailles dans leur stratégie d'implantation régionale dans un contexte où les modes de travail se transforment et les enjeux de développement durable sont prépondérants. Cogedim imagine ainsi le futur de l'immobilier de bureaux et s'adapte à ces changements pour en faire des lieux de rencontre plus attractifs et plus ouverts.",
        "L'immobilier d'entreprise en Régions regroupe une trentaine de collaborateurs répartis sur l'ensemble du territoire au sein des agences régionales de Cogedim. Ces implantations locales favorisent la connaissance des territoires, leurs spécificités et enjeux et permet ainsi de donner une réponse efficiente et adaptée aux mentalités et aux usages.",
        "EM Lyon, Lyon 7e"
            
    ]}
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
    text3: string[]
}
interface Block2_3Props{
    text1: string[]
    text2: string[]
    text3: string[]
}
interface Block2_4Props{
    text1: string[]
}
interface Block2_5Props{
    text1: string[]
}
interface Block3_1Props{
    text0: string[]
    text1: string[]
    text4: string
    text5: string[]
}
interface Block3_2Props{
    text1: string[]
    text2: string[]
    text3: string[]
    text4: string[]
    text5: string[]
}
interface Block3_3Props{
    text1: string[]
    text2: string[]
}



//page0
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
//page1
const Block1_1=({text0, text1, text2, text3, text4, text5}:Block1_1Props)=>{
    const move_down=()=>{
        scrollTo({
            top:4900,left:0,behavior:"smooth"
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

//page2
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
const Block2_2=({text1,text2,text3}:Block2_2Props)=>{
    let arr_name=["1","2","3","4","1","2","3"]
    let arr=[]
        for(let i of arr_name){
            // console.log(i,`../../styles/src/image_home_${i}@2x.png`)
            let obj={ 'src':require(`../../styles/src/page2/icone_transport_${i}@2x.png`).default,"id":parseInt(i)-1}
            arr.push(obj)
        }
    return(
    <div className="block2_2">
        <div className="title">{text1}</div>
        <div className="map">
            <Image src={plan_situation} aria-label="aria-label" className="mapimg"></Image>
        </div>
        <div className="transparents">
            {arr.map((e,i)=>
                <div key={i} className="transport-boxs">
                    <div className="transport-box">
                        <Image key={i} src={ e.src} alt="brand1" className="transport" />
                    </div>
                    <div className="transport-name">{text2[e.id]}</div>
                    <div className="transport-journey">{text3[e.id]}</div>
                </div>
            )}
            <div className="vehicle1"></div>
        </div>
    </div>
    )
}
const Block2_3=({text1,text2,text3}:Block2_3Props)=>{ 
    let src=require(`../../styles/src/page2/image_programme_2@2x.png`).default
    let arr=[]
    for(let a=0;a<text1.length;a++){
        let obj={ 'title':text1[a] ,"content":text2[a]}
        arr.push(obj)
    }
    const [show, setShow] = useState(false)
    const show_box=()=>{
        setShow(!show)
    }
    return(
        <div className="block2_3">
            <div className="inner_box">
                <div className="leftBox">
                    <div className="image" onClick={show_box}>
                        <Image src={src} alt="image_programme_2" className="image"/>
                        <div className="share">
                            <Icon_open_photo aria-label="aria-label">
                            </Icon_open_photo>
                        </div>
                    </div>
                    <div className="changeButton">
                        <div className="yellowBall"></div>
                        <div className="yellowBall"></div>
                        <div className="yellowBall"></div>
                        <div className="yellowBall"></div>
                    </div>
                </div>
                <div className="rightBox">
                    <div className="logo">
                        {/* <Logo_hill_png aria-label="aria-label">
                        </Logo_hill_png> */}
                        <Image src={Logo_hill_png} aria-label="aria-label" className="logoHill"></Image>
                        
                    </div>
                    {arr.map((e,i)=>
                        <div className="messages">
                            <text className="title">{e.title} </text>
                            <text className="content">{e.content}</text>
                        </div>
                    )}
                    <div className="bottom">
                        <div className="question">{text3[0]}</div>
                        <div className="button">
                            <div className="message-icon"></div>
                            <div className="title-color-text">{text3[1]}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
const Block2_4=({text1}:Block2_4Props)=>{
    let src=require(`../../styles/src/page2/image_programme_3@2x.png`).default
    return(
        <div className="block2_4">
            <div className="left">
                <div className="title">{text1[0]}</div>
                <div className="content">{text1[1]}</div>
                <div className="button">{text1[2]}</div>
            </div>
            <div className="right">
                <Image  src={src} alt="brand1" className="brand"/>
            </div>
        </div>
    )
}
const Block2_5=({text1}:Block2_5Props)=>{
    let src=require(`../../styles/src/page2/pland_de_masse@2x.png`).default
    return(
        <div className="block2_5">
            <div className="title">{text1[0]}</div>
            <div className="picture">
                <Image  src={src} alt="brand1" className="brand"/>
            </div>
            <div className="button">{text1[1]}</div>
        </div>
    )  
}
//page3
const Block3_1=({text0,text1,text4,text5}:Block3_1Props)=>{
    const [show, setShow] = useState(false)
    const show_box=()=>{
        setShow(!show)
    }
    let src=require(`../../styles/src/page3/photo_alain_taravella@2x.png`).default
    return (
    <div className="block3_1">
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
            <div className="title1">
                {text1[0]}
            </div>
            <div className="paragraph">
                {text1[1]}
            </div>
            <div className="paragraph">
                {text1[2]}
            </div>
        </div>
        <div className="white-ball"></div>
        <div className="white-box">
            <div className="color-ball"></div>
            <div className="picture">
                <Image  src={src} alt="brand1" />
            </div>
        </div>
        </div>
    </div>
    )
}
const Block3_2=({text1,text2,text3,text4,text5}:Block3_2Props)=>{
    let src1=require(`../../styles/src/page3/graphique@2x.png`).default
    let src2=require(`../../styles/src/page3/organigrame@2x.png`).default
    return(
        <div className="block3_2">
            <div className="ActivitePart">
                <div className="left">
                    <Image  src={src1} alt="brand1" className="brand"/>
                </div>
                <div className="right">
                    <div className="text">
                        <div className="title">{text1[0]}</div>
                        <div className="content">{text1[1]}</div>
                    </div>
                    <div className="picture">
                        <Image  src={src2} alt="brand1" className="brand"/>
                    </div>
                </div>
            </div>
            <div className="clientPart">
                <div className="left">
                    <div className="mds">3 Mds €</div>
                    <div className="de">de chiffre d'affaires</div>
                    <div className="infos">
                        <div className="info">
                            <div className="line1">2<sup>e</sup></div>
                            <div className="line2">{text2[0]}</div>
                            <div className="line3"></div>
                            <div className="line4">{text2[4]}</div>
                        </div>
                        <div className="info">
                            <div className="line1">
                                <text className="five">5,3<text className="mds"> Mds<sup>2</sup></text></text>
                            </div>
                            <div className="line2">{text2[1]}</div>
                            <div className="line3"></div>
                            <div className="line4">{text2[5]}</div>
                        </div>
                        <div className="info">
                            <div className="line1"> 1<sup>er</sup></div>
                            <div className="line2">{text2[2]}</div>
                        </div>
                        <div className="info">
                            <div className="line1"> 1<sup>er</sup></div>
                            <div className="line2">{text2[3]}</div>
                            <div className="line3"></div>
                            <div className="line4">{text2[6]}</div>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="client">{text3[0]}</div>
                    <div className="clientContent">
                        <div className="item">
                            <div className="firstTitle">{text3[1]}<sup>{text3[2]}</sup></div>
                            <div className="clientText">{text3[5]}</div>
                        </div>
                        <div className="item">
                            <div className="secondTitle">{text3[3]}</div>
                            <div className="clientText">{text3[6]}</div>
                        </div>
                        <div className="item">
                            <div className="thirdTitle">{text3[4]}</div>
                            <div className="clientText">{text3[7]}</div>
                        </div>
                    </div>
                    <div className="coll">{text4[0]}</div>
                    <div className="collContent">
                        <div className="item">
                            <div className="firstTitle">{text4[1]}</div>
                            <div className="clientText">{text4[3]}</div>
                        </div>
                        <div className="item2">
                            <div className="secondTitle">{text4[2]}</div>
                            <div className="clientText2">{text4[4]}</div>
                        </div>
                    </div>
                    <div className="climat">{text5[0]}</div>
                    <div className="climatContent">
                        <div className="item">
                            <div className="firstTitle">{text5[1]}</div>
                            <div className="clientText">{text5[3]}</div>
                        </div>
                        <div className="item2">
                            <div className="secondTitle">{text5[2]}</div>
                            <div className="clientText2">{text5[4]}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
const Block3_3=({text1,text2}:Block3_3Props)=>{
    let src=require(`../../styles/src/page3/image_page_groupe_1@2x.png`).default
    return(
        <div className="block3_3">
            <div className="top">
                <div className="left">
                    <div className="content">{text1[0]}</div>
                </div>
                <div className="right">
                    <div className="content2">{text1[1]}</div>
                    <div className="content2">{text1[2]}</div>
                </div>
            </div>
            <div className="bottom">
                <div className="left">
                    <div className="title">{text2[0]}</div>
                    <div className="content">{text2[1]}</div>
                    <div className="content">{text2[2]}</div>
                </div>
                <div className="right">
                    <div className="rightPicture">
                        <Image  src={src} alt="brand1"/>
                    </div>
                    <div className="smallText">{text2[3]}</div>
                </div>
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