import React from 'react';
import pic1 from '../images/photo1.png';
import pic2 from '../images/photo2.png';
import pic3 from '../images/photo3.png';
import pic4 from '../images/photo4.png';
import pic5 from '../images/photo5.png';
import pic6 from '../images/photo6.png';



function Images() {
    return (
        <div className="images-container">
            <ul>
                <li>
                    <p className="activity">Product owner</p>
                    <picture>
                        <img src={pic1} alt="bill-mahoney" />
                    </picture>
                    <p className="name">Bill Mahoney</p>
                </li>
                <li>
                    <p className="activity">Art Director</p>
                    <picture>
                        <img src={pic2} alt="saba-cabrera" />
                    </picture>
                    <p className="name">Saba Cabrera</p>
                </li>
                <li>
                    <p className="activity">Tech lead</p>
                    <picture>
                        <img src={pic3} alt="shae-le" />

                        <p className="name">Shae Le</p>
                    </picture>
                </li>
                <li>
                    <p className="activity">UX Designer</p>
                    <picture>
                        <img src={pic4} alt="skylah-lu" />
                    </picture>
                    <p className="name">Skylah Lu</p>
                </li>
                <li>
                    <p className="activity">Developer</p>
                    <picture>
                        <img src={pic5} alt="griffs-richard" />
                    </picture>
                    <p className="name">Griffs Richard</p>
                </li>
                <li>
                    <p className="activity">Developer</p>
                    <picture>
                        <img src={pic6} alt="stan-john" />
                    </picture>
                    <p className="name">Stan John</p>
                </li>
            </ul>
        </div>
    )
}

export default Images;