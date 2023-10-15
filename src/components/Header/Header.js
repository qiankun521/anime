import Image from "./Image";
import ImageHover from "./ImageHover";
import { useState,useEffect,useRef } from "react";
import { flushSync } from 'react-dom';
import "./Header.css";
const data=[{"id":"undead-unluck","title":"Undead Unluck","image":"https://gogocdn.net/cover/undead-unluck-1696013292.png","url":"https://gogoanimehd.io/category/undead-unluck","genres":["Action","Comedy","Shounen","Super Power","Supernatural"]},{"id":"tokyo-revengers-tenjiku-hen","title":"Tokyo Revengers: Tenjiku-hen","image":"https://gogocdn.net/cover/tokyo-revengers-tenjiku-hen-1696013171.png","url":"https://gogoanimehd.io/category/tokyo-revengers-tenjiku-hen","genres":["Action","Delinquents","Drama","Shounen","Supernatural","Time Travel"]},{"id":"tate-no-yuusha-no-nariagari-season-3","title":"Tate no Yuusha no Nariagari Season 3","image":"https://gogocdn.net/cover/tate-no-yuusha-no-nariagari-season-3-1696012848.png","url":"https://gogoanimehd.io/category/tate-no-yuusha-no-nariagari-season-3","genres":["Action","Adventure","Drama","Fantasy","Isekai"]},{"id":"spy-x-family-season-2","title":"Spy x Family Season 2","image":"https://gogocdn.net/cover/spy-x-family-season-2-1696012743.png","url":"https://gogoanimehd.io/category/spy-x-family-season-2","genres":["Action","Childcare","Comedy","Shounen"]},{"id":"keikenzumi-na-kimi-to-keiken-zero-na-ore-ga-otsukiai-suru-hanashi","title":"Keikenzumi na Kimi to, Keiken Zero na Ore ga, Otsukiai suru Hanashi.","image":"https://gogocdn.net/cover/keikenzumi-na-kimi-to-keiken-zero-na-ore-ga-otsukiai-suru-hanashi-1696008922.png","url":"https://gogoanimehd.io/category/keikenzumi-na-kimi-to-keiken-zero-na-ore-ga-otsukiai-suru-hanashi","genres":["Romance","School"]},{"id":"kage-no-jitsuryokusha-ni-naritakute-2nd-season","title":"Kage no Jitsuryokusha ni Naritakute! 2nd Season","image":"https://gogocdn.net/cover/kage-no-jitsuryokusha-ni-naritakute-2nd-season-1696008348.png","url":"https://gogoanimehd.io/category/kage-no-jitsuryokusha-ni-naritakute-2nd-season","genres":["Action","Comedy","Fantasy","Isekai","Reincarnation"]}];
export default function Header(){
    const imageRef=useRef(null);
    const [indexImage,setIndexImage]=useState(0);
    function handleClick(){
        let tmp;
        if(indexImage!=0)tmp=indexImage-1;
        else tmp=data.length-1;
        flushSync(()=>setIndexImage(tmp));
        imageRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
          });
    }
    return (
        <>
            <header className="Header">
                {data.map((item,index)=>{
                    return <Image ref={index===indexImage?imageRef:null} key={index} item={item} indexImage={indexImage} index={index}></Image>
                })}
            </header>
            {/* <button onClick={handleClick}>上一个</button> */}
            <ImageHover data={data}></ImageHover>
        </>
        
    );
}