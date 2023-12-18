import { FaTwitter , FaInstagram, FaFacebook} from "react-icons/fa";

const Footer = () => {
  return (
  
    <footer className="d-flex flex-wrap justify-content-between align-items-center px-5 py-3 border-top text-bg-dark fixed-footer">
      <div className="col-md-4 d-flex align-items-center">
        <a href="/" className="mb-3 me-2 mb-md-0  text-decoration-none lh-1">
          {/* <svg className="bi" width="30" height="24"><use xlink:href="#bootstrap"></use></svg> */}
        </a>
        <span className="mb-3 mb-md-0  text-white">© 2023 Company, Inc</span>
      </div>
  
      <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
        <li className="ms-3"><a className=" text-white" href="#"><FaTwitter/></a></li>
        <li className="ms-3"><a className=" text-white" href="#"><FaInstagram/></a></li>
        <li className="ms-3"><a className=" text-white" href="#"><FaFacebook/></a></li>
      </ul>
    </footer>
  
  )
}

export default Footer