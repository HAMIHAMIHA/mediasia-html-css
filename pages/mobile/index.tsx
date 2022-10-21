// import {useEffect, useState} from 'react';
// import Map,{Marker} from 'react-map-gl';
// import Script from 'next/script';
// import Image from "next/image";
// import StyledInput from '@components/StyledInput';


const Block = () => {
    return <>
        {/* page1 */}
        <Block1_1
        text0={["Le Groupe Altarea","Nos programmes","Nos références","Nous contacter"]}
         />
    </>
}

interface Block1_1Props {
    text0: string[]

}

const Block1_1 = ({text0}: Block1_1Props) => {
    return (
        <div className="block1">
            mobile
        </div>
    )
}

export default Block