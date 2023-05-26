import {ChevronDoubleLeft, ChevronDoubleRight, ChevronLeft, ChevronRight} from "react-bootstrap-icons";

const Item = ({val, start= false, end= false, next= false, prev= false, active= false, onClick}) => {
    let result;
    switch (true) {
    case start: result = <ChevronDoubleLeft/>; break;
    case end: result = <ChevronDoubleRight/>; break;
    case next: result = <ChevronRight/>; break;
    case prev: result = <ChevronLeft/>; break;
    default: result = val; break;
    }
    return (
        <div classname={active ? "pagination__item active" : "pagination__item"} onClick={onClick}>
            {result}
        </div>
    )
}

export default Item;