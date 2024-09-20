'use client'

import { useEffect, useState } from "react";
import ProductCart from "@/components/ProductCard";

export default function Home() {
	const [data, setData] = useState([]);
	useEffect(() => {
		const fetchProducts = async () => {

			try {
				const res = await fetch("https://api.escuelajs.co/api/v1/products?limit=8");
				const products = await res.json();
			
				setData(products);
			} catch(error) {
				console.log(error);
			}
		}
		fetchProducts();
	}, []);
	
  	return (
		<>
			<title>Nextjs</title>
			<main>
				<div className="grid grid-cols-4">
				{
					data.map((product: any) => (
						<ProductCart product={product} key={product.id}/>
					))
				}
				</div>
			</main>
		</>
  	);
}
