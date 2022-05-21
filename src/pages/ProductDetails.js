import { useParams, Routes, Route } from "react-router-dom"

// nested routes
import Offers from "./Offers"

export default function ProductDetails() {
  const { id } = useParams()

  return (
    <div className="content">
      <div className="product">
        <div className="image">
          <img src="https://via.placeholder.com/520x460" alt="" />
        </div>
        <div className="details">
          <h2>Product - {id}</h2>
          <h3>Hoodie</h3>
          <p>A hoodie (in some cases it is also spelled hoody and alternatively known as a hooded sweatshirt) is a sweatshirt with a hood. Hoodies often include a muff sewn onto the lower front, and (usually) a drawstring to adjust the hood opening. It covers most of the head and neck and sometimes the face. Hoodies may be worn for protection against the environment (cold weather, rain, etc.)</p>
          <h3>Tees</h3>
          <p>A T-shirt, or tee shirt, is a style of fabric shirt named after the T shape of its body and sleeves. Traditionally, it has short sleeves and a round neckline, known as a crew neck, which lacks a collar. T-shirts are generally made of a stretchy, light, and inexpensive fabric and are easy to clean. The T-shirt evolved from undergarments used in the 19th century and, in the mid-20th century, transitioned from undergarment to general-use casual clothing.</p>
          <h3>Sneakers</h3>
          <p>Sneakers (also called trainers, athletic shoes, tennis shoes, gym shoes, kicks, sport shoes, flats, running shoes, or runners) are shoes primarily designed for sports or other forms of physical exercise, but which are now also widely used for everyday casual wear.</p>
        </div>
      </div>

      <Routes>
        <Route path="offers" element={<Offers />} />
      </Routes>

    </div>
  )
}
