import { useState } from "react";
import {Container, Row, Col, Form, Button} from "react-bootstrap";

const Add = () => {
    const [description, setDescription] = useState("Тут пока ничего нет");
    const [discount, setDiscount] = useState(0);
    const [name, setName] = useState("");
    const [pictures, setPictures] = useState("https://img.freepik.com/premium-vector/cartoon-doodle-linear-dog-food-bowl-isolated-white-background_657999-3783.jpg");
    const [price, setPrice] = useState(100);
    const [stock, setStock] = useState(200);
    const [tags, setTags] = useState(["df"]);
    const [wight, setWight] = useState("100 г");

    return (
        <Container className="bs bg-light text-dark rounded-1 p-4">
            <Row>
                <Col xs={12}>
                    <h1>Добавить товар</h1>
                </Col>
            </Row>
            <Form>
                <Row>
                    <Col xs={12} sm={6}>
                        <Form.Group className="my-3">
                            <Form.Label htmlFor="name">Название товара</Form.Label>
                            <Form.Control
                            type="name" 
                            id="name"
                            value={name} 
                            onChange={(event) => {
                                setName(event.target.value)
                            }} 
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="price">Цена</Form.Label>
                            <Form.Control
                            type="number" 
                            id="price"
                            value={price} 
                            min={1}
                            max={9999}
                            onChange={(event) => {
                                setPrice(event.target.value)
                            }} 
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="discount">Скидка</Form.Label>
                            {/*
                            <Form.Range
                            id="discount"
                            value={[0, 5, 10, 15, 20, 25, 40, 60]} 
                            defaultValue={discount}
                            onChange={(event) => {
                                setDiscount(event.target.value)
                            }} 
                            />
                            */}
                            <Form.Select
                            id="discount"
                            defaultValue={discount}
                            onChange={(event) => {
                                setDiscount(event.target.value)
                            }}
                            >
                                <option value={0}>Без скидки</option>
                                <option value={5}>5 %</option>
                                <option value={10}>10 %</option>
                                <option value={15}>15 %</option>
                                <option value={20}>20 %</option>
                                <option value={25}>25 %</option>
                                <option value={40}>40 %</option>
                                <option value={60}>60 %</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="wight">Вес</Form.Label>
                            <Form.Control
                            type="name" 
                            id="wight"
                            value={wight} 
                            onChange={(event) => {
                                setWight(event.target.value)
                            }} 
                            />
                            <Form.Text>Вес прописывается с единицами измерения!</Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="stock">Количество на складе</Form.Label>
                            <Form.Control
                            type="number" 
                            id="stock"
                            step={10}
                            min={10}
                            max={1000}
                            value={stock} 
                            onChange={(event) => {
                                setStock(event.target.value)
                            }} 
                            />
                        </Form.Group>
                        

                    </Col>
                    <Col xs={12} sm={6}>
                        <Button variant={"outline-dark"} type="submit">Добавить</Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    )
}

export default Add;