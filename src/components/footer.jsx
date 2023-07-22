import React from "react";
import Linkedin from "./footer_images/linked.png";
import github from "./footer_images/github.jpg";
import insta from "./footer_images/instaBlack.jpg";


export default function Footer(){
    return(
        <div class="footer-container" id="footer">
            <div class="margin-top-bottom">
                <p class="footer-text-segment1">Social Media Handles</p>

                <div class="footer">
                    <a target="_blank" href="https://www.linkedin.com/in/pratham-agarwal-9a4505223/">
                        <img class="round-img-net" id="LinkedIn-img" src={Linkedin} />
                    </a>
                    <a target="_blank" href="https://github.com/WannaBeChicken">
                        <img class="round-img-net" id="github-img" src={github} />
                    </a>
                    <a target="_blank" href="https://www.instagram.com/pratham.agarwal.169/">
                        <img class="round-img-net" id="insta-img" src={insta} />
                    </a>
                </div>
                <p class="footer-text-segment1">
                    Created By Pratham Agarwal using React  @All Rights Reserved
                </p>
                <p class="footer-text-segment1">
                    <a target="_blank" class="text-xs" id="mymail"
                        href="mailto:prathamdavbistupur@gmail.com">prathamdavbistupur@gmail.com</a>
                </p>
            </div>
        </div>
    )
}