import './ImageHover.css'
export default function ImageHover({data}){
    return (
        <div className='imageHoverContainer'>
            {data.map((item,index)=>{
                return <img className="imageHover" key={index} src={item.image} alt={item.title}/>
            })}
        </div>
    )
}