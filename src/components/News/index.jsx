import { useState, useEffect, useContext } from "react";
import Ctx from "../../context";
import "./style.css";

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
        <div>
            <h2>новости Lenta.ru</h2>
            <div className="news-block">
                {data.slice(0, 6).map((el, ind) => <img 
                key={ind} 
                src={el.urlToImage} 
                alt={el.title}
                />)}
            </div>
        </div>
    )
}

export default News;