import React from "react";
import facebook from "../../assets/img-icon/logo-facebook.png";
import youtube from "../../assets/img-icon/logo-youtube.png";
import whatsapp from "../../assets/img-icon/logo-whatsapp.png";
import x from "../../assets/img-icon/x.png";

const SocialMedia: React.FC = () => {
  return (
    <div className="flex gap-6">
      <a href="#" className="text-white ml-8">
        <img src={facebook} className="h-8 w-8" alt="" />
      </a>
      <a href="#" className="text-white">
        <img src={youtube} className="h-8 w-8" alt="" />
      </a>
      <a href="#" className="text-white">
        <img src={x} className="h-8 w-8" alt="" />
      </a>
      <a href="#" className="text-white">
        <img src={whatsapp} className="h-8 w-8" alt="" />
      </a>
    </div>
  );
};

export default SocialMedia;
