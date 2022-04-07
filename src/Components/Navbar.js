import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
	return (
		<div>
			<nav class="navbar fixed-top navbar-dark bg-secondary">

				<div class="container-fluid">
					<NavLink to='/' className='nav-link' style={{ fontSize: '25px', fontWeight: 'bold', color: 'white' }}>News Website</NavLink>
					<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button>
					<div class="collapse navbar-collapse" id="navbarSupportedContent">
						<ul class="navbar-nav ms-auto mb-2 mb-lg-0">
							<NavLink to="/" className='nav-link' style={{ fontSize: '25px', fontWeight: 'bold' }}>Home</NavLink>

						</ul>

					</div>
				</div>
			</nav>
		</div>
	)
}

export default Navbar