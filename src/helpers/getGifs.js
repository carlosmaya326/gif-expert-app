export const getGifs = async (category) => {
	const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=VaVGa7VVxN3u81gm354aiPDf8ePkQZ4D`;
	const resp = await fetch(url);
	const { data } = await resp.json();
	
	const gifts = data.map( img => {
		return {
			id: img.id,
			title: img.title,
			url: img.images?.downsized_medium.url
		}
	});

	return gifts;
}