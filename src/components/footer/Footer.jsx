import SocialLink from "../../utils/SocialLink";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="max-w-screen-2xl container mx-auto py-4 lg:py-20 bg-slate-600 mt-4">
      {/* Footer Top content */}
      <div className="flex flex-row gap-4 justify-center items-center mb-5">
        <div>
          <h1 className="text-xl font-bold">Oh Yeah.</h1>
        </div>
        <div>
          <h2 className="text-lg font-semibold">
            FOOD FILTER LIST Project Practice
          </h2>
        </div>
      </div>
      {/* Footer Bottom content */}
      <div className="flex  gap-5 justify-center items-center">
        <p>Copyright © {currentYear}</p>
        <h1>Tanutsapon Jinaongkan</h1>
      </div>
      <div className="flex justify-center mt-4">
        <SocialLink />
      </div>
    </footer>
  );
};

export default Footer;
