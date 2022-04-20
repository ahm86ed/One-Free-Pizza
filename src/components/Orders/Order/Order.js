import './Order.scss';
import api from './../../../api';

function Order(props) {
	
	
	const handleRemoveClick = () => {
		const id = props.order.id;

        api.delete('/orders/' + id) 
        .then((response) => { 
            if (response.status === 200) {
        props.handleOrderRemove(id);
            } });
            props.handleOrderRemove(id);
	}

	return (
		<div className='order-component'>
			<h3>{props.order.name}</h3>
			<div>Style: {props.order.style}</div>
			<div>Crust: {props.order.crust}</div>
            <div>cheese: {props.order.cheese}</div>
            <div>Address: {props.order.address}</div>

			<button onClick={handleRemoveClick} className='button-remove'>
				Remove Order
			</button>
		</div>
	);
}

export default Order;