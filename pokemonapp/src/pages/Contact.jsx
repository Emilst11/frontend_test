import React from "react";
import MainLayouts from "../layouts/MainLayouts";
import { HiOutlineMailOpen } from 'react-icons/hi'
import { FaWhatsapp, FaLinkedin } from 'react-icons/fa'
import '../styles/Contact.scss'

const Contact = () => {
    return(
        <MainLayouts>
            <div className="contact">
                <h1>Contact</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ea quasi odio minus molestiae debitis iste non modi quam accusantium, vitae asperiores, illo impedit ut.</p>
                <ul>
                    <li>
                        <HiOutlineMailOpen/>
                        <span>emil15setiawan@gmail.com</span>
                    </li>
                    <li>
                        <FaWhatsapp/>
                        <span>089512887331</span>
                    </li>
                    <li>
                        <FaLinkedin/>
                        <a href="https://www.linkedin.com/in/emil-setiawan-040842234/">Emil Setiawan</a>
                    </li>
                </ul>
            </div>
        </MainLayouts>
    )
}

export default Contact