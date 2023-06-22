// import News from "../components/News";
import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Block from "../components/AdBlock/AdBlock";
import image_1 from "../assets/images/image_1.png"
import News from "../components/News"
// import data from "../assets/data.json"
import Card from "../components/Card";
import Ctx from "../context"
import { useContext } from "react";
import { useNavigate } from "react-router";


let ads = [
	{
		caption: "Opti Meal",
		text: "Ваш питомец попросит добавки",
		//bg: "#ffcc00",
		pic: "https://cdn.shopify.com/s/files/1/0089/0493/3476/products/251Optimeal_dog_large_dry_chiken_8.8Lb_74618_grande.png",

	},
	{
		caption: "Merrick",
		text: "И звери сыты, и деньги целы",
		//bg: "#b5ccdc",
		pic: "https://pngimg.com/uploads/dog_food/dog_food_PNG37.png"
	},
	{
		caption: "Pedigree",
		text: "Доволен пес - доволен хозяин",
		//bg: "#dfa0a6",
		pic: "https://wikimeat.storage.yandexcloud.net/thumb/9/97/Pedigree.png/1200px-Pedigree.png"
	}
]
const Main = () => {

	const { user } = useContext(Ctx);
	const { goods } = useContext(Ctx);
	const { setServerGoods } = useContext(Ctx);
	const { setModalActive } = useContext(Ctx);
	const navigate = useNavigate();

	return (
		<>
			<Row className="gx-10 gy-5">
				<Col xs={12}>
					<div></div>
				</Col>
			</Row>

			<Row className="gx-5 gy-4">
				<Col xs={12}>
					<Block {...ads[0]} />
					{/* первая рекламная карточка на весь экран */}
				</Col>

			</Row>

			<Row className="gx-5 gy-4">
				<h2 style={{ paddingTop: "15px" }}>Примеры товаров в нашем интернет-магазине</h2>
				{goods.filter((el, i) => i >= 4 && i < 8).map(el => (
					<Col xs={12} md={3} key={el._id}>
						<Card {...el} img={el.pictures} setServerGoods={setServerGoods} />
					</Col>
				))}
			</Row>

			<Row className="gx-5 gy-4">
				<Col xs={12} md={6}>
					{/* вторая и третья рекламная карточка каждая занимает по половине экрана */}
					<Block {...ads[1]} />
				</Col>
				<Col xs={12} md={6}>
					<Block {...ads[2]} />

				</Col>
				<News />
			</Row>
		</>
	);

}
export default Main