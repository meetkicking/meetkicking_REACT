import React from "react";
import { Row, Col } from "react-bootstrap";
import backGround from "../../assets/images/backGround.png"



const Block = ({ pic, bg, caption, text }) => {
	let style = {
		backgroundImage: `url(https://bogatyr.club/uploads/posts/2023-06/1687365508_bogatyr-club-p-milie-korgi-foni-krasivo-11.jpg)`,
		backgroundSize: "auto 100%",
		backgroundColor: bg,
	};

	return <Row style={style}>
		<Col xs={8} style={{ padding: "30px" }}>
			<h3 style={{ fontWeight: "bold", paddingBottom: "10px" }}>{caption}</h3>
			<p>{text}</p>
		</Col>
		<Col xs={4} style={{ padding: "15px" }}>
			<img src={pic}
				alt={caption}
				className="w-100" />
		</Col>

	</Row>

}

export default Block