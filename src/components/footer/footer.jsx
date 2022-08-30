import React from "react";
import { FooterWrapper } from './footer.styles';


const Footer = () => {
    return (
        <FooterWrapper>
            <h5>
                &copy; {new Date().getFullYear()}
                <span> LoveBalloons</span>
            </h5>
            <h5> All Right Reserved</h5>
        </FooterWrapper>
    )

};

export default Footer;                                                               
