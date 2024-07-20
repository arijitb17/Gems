import Container from "../Container"
import Cartclient from "./Cartclient"


const cart = () => {
  return (
    <div className="pt-8">
      <Container>
        <Cartclient/>
      </Container>
    </div>
  )
}

export default cart