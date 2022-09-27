import LogoClupp from '../assets/logo-clupp.png'
import '../styles/styles.css'

const Header = () => {
  return (
    <div>
      <div className="logo">
        <img src={LogoClupp} alt="clupp" width={200} />
      </div>
      <hr />
    </div>
  )
}

export default Header