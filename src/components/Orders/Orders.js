import {useState, useEffect} from 'react';
import Order from './Order/Order';
import './Orders.scss';
import api from './../../api';
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";


function Orders() {
	
	const [orders, setOrders]= useState([]);
    const [loading, setLoading] = useState(true);


	useEffect(()=>{
		api.get('/orders')
        .then((response) => { 
            if (response.status === 200) { 
                setOrders(response.data); 
                setLoading(false);
            } 
            });
		
	}, []);


	const handleOrderRemove = (id) => {
		let updatedOrder = orders.filter(
			(order) => order.id !== id
		);
		setOrders(updatedOrder);
        }

	/*const addOrder = (newOrder) => {
		const updatedOrder = [...orders,newOrder ];
		setOrders(updatedOrder);
		console.log(orders);
	}*/

	const override = css`
	display: block;
	margin: 0 auto;
	border-color: #e5a701;
`;


	return (
	<div className='orders-component'>
		<h2>Orders</h2>
		
		{orders.length > 0 ? (
		<>
			

			{orders.map(
				(order, index) => (
					<Order
						key={index}
						order={order}

						handleOrderRemove={handleOrderRemove} />
				)
			)}
			</>
		) : (<div>No Orders.</div>)

			} 
{loading && (
				<div className="ClockLoader">
					<ClipLoader color={"#ffffff"} loading={loading} css={override} size={150} />
				</div>
			)}
		</div>
		
	);
} 

export default Orders;