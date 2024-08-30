import Logo from "../../assets/Logo.png";
import useMediaQuery from "../../hooks/useMediaQuerey";
type Props = {};

const Footer = () => {
  const isAboveMediumQuery = useMediaQuery("(min:1060px)");
  return (
    <footer className=" bg-primary-300 py-16">
      <div className="mx-auto gap-16 justify-content w-5/6 md:flex">
        <div className="w-full mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="logo-image" />
          <p className="my-5">
            Lorem vitae ut augue auctor faucibus eget eget ut libero. Elementum
            purus et arcu massa dictum condimentum. Augue scelerisque iaculis
            orci ut habitant laoreet, laculis tristique.
          </p>
          <p>© Evogym All Rights Reserved.</p>
        </div>
        {/*LINKS */}
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Massa orci senectus</p>
          <p className="my-5">Et gravida id et etiam</p>
          <p className="my-5">Ullamcorper vivamus</p>
        </div>
        {/*CONTACT US */}
        <div>
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Tempus metus mattis risus volutpat egestas.</p>
          <p>(333)425-6825</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

/*















*/
