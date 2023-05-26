import Item from './Item'
import "./style.css"

const Pagination = () => {
    return (
        <div classname="pagination">
        <Item start onClick = {() => {}}/>
        <Item prev onClick = {() => {}}/>
        <Item val={1} onClick = {() => {}}/>
        <Item val={2} onClick = {() => {}}/>
        <Item val={3} onClick = {() => {}}/>
        <Item val={4} onClick = {() => {}}/>
        <Item next onClick = {() => {}}/>
        <Item end onClick = {() => {}}/>
        </div>
    )
}

export default Pagination;