import { AiFillStar } from 'react-icons/ai';
import { BsFillBagHeartFill } from "react-icons/bs";

const Card = ({img, title, star, review, newPrice, prevPrice}) => {
  return (
    <section className='card'>
        <img className='card-image' src={img} alt={title} />
        <div className="card-details">
          <h3 className='card-title'>{title}</h3>
          <section className="card-reviews">
            {star}
            {star}
            {star}
            {star}
            <span className="total-reviews">{review}</span>
          </section>
          <section className="card-price">
            <div className="price">
              <del>{prevPrice}</del> {newPrice}
            </div>
            <div className="bag">
              <BsFillBagHeartFill  className='bag-icon'/>
            </div>
          </section>
        </div>
      </section>
  )
}

export default Card;