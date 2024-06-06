import React from 'react'
import laptop from '../../images/home/mac-laptop.jpg'
function Main() {
  return (
    <div>
        <section className="main-highlight-wrapper">
			<div className="internal-wrapper"> 
				<div className="model">
					16-inch model
				</div>

				<div className="product-title">
					MacBook Pro
				</div>

				<div className="brief-description">
					The best for the brightest.
				</div>

				<div className="links-wrapper">
					<ul>
						<li><a href="">Learn more</a></li>
						<li><a href="">Buy</a></li>
					</ul> 
				</div>

				<div className="main-image-wrapper">
					<img src = {laptop } />
				</div>

			</div>
		</section> 
    </div>
  )
}
export default Main;