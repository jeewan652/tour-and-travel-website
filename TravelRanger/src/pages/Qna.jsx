import React from "react";

import style_qna from "../CSS/Qna.module.css";

const Qna = () => {
  return (
    <>
      <div className={style_qna.container}>
        <div className={style_qna.top}>
          <div className={style_qna.left}>
            <h3>Q. Why TravelRanger?</h3>
            <p>Established in 2024, Travel Ranger has since positioned itself as one of <br />
              the leading neighbourhood friendly booking website, providing great offers,<br />
              competitive airfares, exclusive discounts, and a seamless online booking <br />
              experience to many of its customers. The experience of booking your flight <br />
              tickets, hotel, homestay, and holiday package through our desktop site can be<br />
              done with complete ease and no hassles at all. We also deliver amazing <br />
              offers, such as Instant Discounts, Fare Calendar, MyRewardsProgram, <br />
              MyWallet, and many more while updating them from time to time to better <br />
              suit our customers’ evolving needs and demands.</p>
          </div>

          <div className={style_qna.right}>
            <h3>Q. How to find the cheapest hotel deals in any city?</h3>

            <p>
              A. Travel Ranger, being the best neighbourhood hotel-booking site in the country,
              offers several discounts on budget <br /> hotels as well. If you
              are looking for the cheapest hotels with amazing deals on the app,
              you can tap on <br /> Sort & Filter option and drag down the Price
              option from Rs.0 to Rs.500 or from Rs.0 to Rs.1000. <br /> Choose
              from the various amenities you would need during your stay
              including access to Wi-Fi, <br />
              room service and in-house restaurants. The list will first show
              you the cheapest one on top. You can also <br /> sort by prices
              from Low to High, scroll down the list and find your preferred
              ones with great discounts.
            </p>
          </div>
        </div>

       
      </div>
    </>
  );
};

export default Qna;
