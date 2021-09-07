import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

const GifExpertApp = () => {
	const [categories, setCategories] = useState(['One punch', 'Samuray X', 'Dragon Ball']);

	return (
		<>
			<h2>GifExpertApp</h2>
			<hr />
			<AddCategory setCategories={ setCategories } />
			<ol>
				{
					categories.map(category => {
						return <li key={category}>{category}</li>
					})
				}
			</ol>
		</>
	);
}

export default GifExpertApp;