import "./Image.css";
import { forwardRef } from 'react';
export default forwardRef(function Image({item,indexImage,index},indexRef){
    console.log(item);
    return (
        <section className="imageFigure">
            <img ref={indexRef} className={"image "+(indexImage===index?"selected":"")} src={item.image} alt={item.title}/>
            {/* <h6 className="imageTitle">{item.title}</h6> */}
        </section>
    );
});