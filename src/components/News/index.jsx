import { useState, useEffect, useContext } from "react";
import Ctx from "../../context";

const News = () => {
    const {news} = useContext(Ctx);
    return (
        <div>
            <h2>новости Lenta.ru</h2>
            <div className="news-block">
                {news.map((el, ind) => <img 
                key={ind} 
                src={el.urlToImage} 
                alt={el.title}
                />)}
            </div>
        </div>
    )
}

export default News;