import { useState, useEffect, useContext } from "react";
import Ctx from "../../context";
import "./style.css";
import {Carousel} from "@trendyol-js/react-carousel"

const News = () => {
    const {news} = useContext(Ctx);
    const [data, setData] = useState(news || []);

    useEffect(() => {
        //if (data.length) {
        const id = setTimeout(() => {
            let updateArr = [...data];
            let firstNew = updateArr.shift();
            updateArr.push(firstNew);
            setData(updateArr);
        }, 2000)
        return () => clearTimeout(id);
    //}se {  //setData(news.slice(0, 4));
}, [data])
    
    useEffect(() => {
        setData(news);
    }, [news])

    return (
        <>
        <div>
            <h2>1. Новости Lenta.ru</h2>
            <div className="news-block">
                {data.slice(0, 6).map((el, ind) => <img 
                key={ind} 
                src={el.urlToImage} 
                alt={el.title}
                />)}
            </div>
        </div>

        {/*<div>
        <h2>2. Новости Lenta.ru</h2>
            <Carousel cols={4} rows={1} gap={10} loop>
        {news.map((el, ind) => <Carousel.Item key={ind}>
        <img
                src={el.urlToImage} 
                alt={el.title}
                />
        </Carousel.Item>)}
            </Carousel>
            </div>
        
        <div>
            <h2>3. Новости Lenta.ru</h2>
        </div>
        */}
        </>
    )
}

export default News;