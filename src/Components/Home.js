import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';





const Array = [
	{
		Name: 'All'
	},
	{
		Name: 'Bussiness'
	},
	{
		Name: 'General',
	},
	{
		Name: 'Entertainment'
	},
	{
		Name: 'Health'
	},
	{
		Name: 'Technology'
	},
	{
		Name: 'Science'
	},
	{
		Name: 'Sports'
	},
]
const Home = () => {

	const [data, setData] = useState([])
	useEffect(() => {
		submitHandler('All')
	}, [])

	const submitHandler = (e) => {
		console.log({ e })
		fetch(`https://newsapi.org/v2/everything?q=${e}&apiKey=5e99ec9d1aa94abfb0b46f72b43fe67d`).then(
			response => response.json()
		).then((res) => {
			console.log(res.articles);
			setData(res.articles)
		}
		)
	}
	return (
		<>
			<div>
				<Swiper

					breakpoints={{
						// when window width is >= 640px
						640: {
							width: 640,
							slidesPerView: 2,

						},
						// when window width is >= 768px
						768: {
							width: 768,
							slidesPerView: 3,
						},
					}}
				>

					{
						Array.map(item =>
							<div >
								<SwiperSlide>
									<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '15px' }}>
										<div className='col-md-1' style={{ marginTop: '80px', }}>
											<button type="button" class="btn btn-outline-secondary btn-lg" style={{ width: '150px' }} onClick={() => submitHandler(item.Name)}>{item.Name}</button>
										</div>
									</div>
								</SwiperSlide>
							</div>
						)
					}

				</Swiper>
			</div >
			<div className='row' style={{ backgroundColor: '#F0F8FF' }}>

				{
					data !== [] && data !== undefined ?
						data.map(news =>
							<div className='col-md-4' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
								<div className='card' style={{ width: '350px', margin: '10px', borderRadius: '20px' }}>
									<img className='card-img-top' src={news.urlToImage} height="250" width="260"
										style={{ borderTopLeftRadius: '20px', borderTopRightRadius: '20px' }} alt="img" />
									<div className='card-body text-center' >
										<h6>{news.title}</h6>
										<p>{news.description}</p>
										<div style={{ display: 'flex', justifyContent: 'space-between' }}>
											<p style={{ fontSize: '10px' }}> Author : <strong>{news.author}</strong></p>
											<p style={{ fontSize: '10px' }}> <strong>Date : </strong>{news.publishedAt}</p>

										</div>

										< a href={news.url} target="_blank" rel="noopener noreferrer " > <button type="button" class="btn btn-primary btn-sm" >Read More</button></a >


									</div>

								</div>
							</div>
						)
						:
						null

				}
			</div>
		</>
	)
}

export default Home;