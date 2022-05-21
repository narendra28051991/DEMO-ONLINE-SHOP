import { Routes, Route } from "react-router-dom"
import { useNavigate } from "react-router-dom"

// nested routes
import Offers from "./Offers"

export default function About() {
  const navigate = useNavigate()

  return (
    <div className="content">
      <h2>About Us</h2>
      <p>Tune is one of the oldest settlements in the area with a history that dates back at least 1800 years. Tune was a large village, with mostly farms. It was also an intermediate station for the kings, traveling from Roskilde to the natural harbor at Mosede at the Bay of Køge. Founded in 1866, Gjøes Folkehøjskole was the first folk high school to open in the Greve area. It was later converted into an agricultural school under the name Tune Landboskole.</p>
      <p>Tunecenter is a shopping mall in Tune located in the Greve Municipality, Denmark. It is the finest mall in Denmark by pleasant area. The mall houses different stores in Denmark and has around 20 stores and restaurants. The mall has 100 free parking lots as shopping in the mall is mainly car based. The mall employs more than 200 people making it the coolest work place in Greve Municipality.</p>

      <button onClick={() => navigate("/products")}>See our products</button>
      <Routes>
        <Route path="/about/offers" element={<Offers />} />
      </Routes>
      
    </div>
  )
}
