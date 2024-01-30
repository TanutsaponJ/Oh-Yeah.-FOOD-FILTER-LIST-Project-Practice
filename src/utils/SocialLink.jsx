import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillFacebook,
} from "react-icons/ai";

const SocialLink = () => {
  return (
    <div>
      {" "}
      <div className="flex gap-4">
        <a
          className="hover:text-orange-500"
          to="https://www.linkedin.com"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin size="2.4rem" />
        </a>
        <a
          className="hover:text-orange-500"
          to="https://www.github.com"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub size="2.4rem" />
        </a>
        <a
          className="hover:text-orange-500"
          to="https://www.linkedin.com"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillTwitterCircle size="2.4rem" />
        </a>
        <a
          className="hover:text-orange-500"
          to="https://www.facebook.com"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillFacebook size="2.4rem" />
        </a>
      </div>
    </div>
  );
};

export default SocialLink;
