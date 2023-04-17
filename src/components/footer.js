import React from 'react'
import  { FaGithub,
    FaFacebookF,
    FaLinkedin,
    FaTwitter,
    FaYoutube } from "react-icons/fa";

const Footer = () => {
    return(
        <div className="">
            <p className="text-sm text-gray-400 text-center">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standar
            </p>
            <div className="flex justify-center gap-2 mt-3">
                <span className="footerIcon">
                    <FaYoutube/>
                </span>
                <span className="footerIcon">
                    <FaTwitter/>
                </span>
                <span className="footerIcon">
                    <FaLinkedin/>
                </span>
                <span className="footerIcon">
                    <FaFacebookF/>
                </span>
                <span className="footerIcon">
                    <FaGithub/>
                </span>

            </div>
        </div>
    )
}

export default Footer;