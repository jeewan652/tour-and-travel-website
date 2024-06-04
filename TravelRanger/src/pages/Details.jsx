import React from"react";

import style_dl from"../CSS/Details.module.css";

const Details = () => {
  let str = [
   "Flights",
   " Hotels",
   " International Hotels",
   " Homestays and Villas",
   " International Holidays",
   " Book Train Tickets",
   " Cheap Tickets to India",
   " Trip Planner",
   " Gift Cards",
   " PNR Status",
  ];

  let str2 = [
   "About Us",
   " Investor Relations",
   " Careers",
   " Corporate Travel",
   " CSR Policy",
   " ForeignExchange",
   " List your hotel",
   " Customer Support",
   " Payment Security",
   " Privacy Policy",
   " User Agreement",
   " Terms of Service",
   " Make A Payment",
  ];

  let str4 = [
   "Hotels In Goa",
   " Hotels In Mumbai",
   " Hotels In Mahabaleshwar",
   " Hotels InMatheran",
   " Hotels In Lonavala",
   " Hotels In Delhi",
   " Hotels In Shimla",
   " Hotels In Lansdowne",
   " Hotels In Digha",
   " Hotels In Puri",
   " Hotels In Nainital",
   " Hotels In Shirdi",
   " Hotels In Bangalore",
   " Hotels InMussoorie",
   " Hotels In Manali",
   " Hotels Near Me",
   " Cheap Hotels",
   " Hotels In Jaipur",
   " Hotels In Udaipur",
   " Hotels In Pune",
   " Hotels In Pondicherry",
   " Hotels In Ooty",
   " Hotels In Kodaikanal",
   " Hotels In Darjeeling",
   " Hotels In Chandigarh",
   " Hotels In Mount abu",
   " Hotels In Ahmedabad",
   " Hotels In Kolkata",
   " Hotels In Ranthambore",
   " Jaisalmer Hotels",
   " Mysore Hotels",
  ];
  let str5 = [
   "The Leela Goa",
   " The Tamara Coorg",
   " Evolve Back Coorg",
   " Grand Hyatt Goa",
   " Taj Lake Palace Udaipur",
   " The Leela Palace Udaipur",
   " Grand Hyatt Mumbai",
   " Jw Marriott Chandigarh",
   " Alila Diwa Goa",
   " Evolve Back Hampi",
   " Evolve Back Kabini",
   " Hyatt Regency Mumbai",
   " Le Meridien Delhi",
   " Itc Grand Chola Chennai",
   " Rambagh Palace Jaipur",
   " Le Meridien Goa",
   " Taj Lands End Mumbai",
   " Jai Mahal Palace Jaipur",
   " Vythiri Resort Wayanad",
   " Red Earth Kabini",
   " Taj Mahal Tower Mumbai",
   " Wildflower Hall Shimla",
   " Azaya Beach Resort Goa",
   " Four Seasons HotelMumbai",
   " Taj Fort Aguada Resort & Spa Goa",
   " Itc Maratha Mumbai",
   " Park Hyatt Chennai",
   " Sea Shell Havelock",
   " Spice Tree Munnar",
  ];
  
  let str7 = [
   "Homestays In Chikmagalur",
   " Homestays In Coorg",
   " Homestays In Sakleshpur",
   " Homestays In Goa",
   " Homestays In Ooty",
   " Homestays In Darjeeling",
   " Homestays In Manali",
   " Homestays In Munnar",
   " Homestays In Wayanad",
   " Homestays In Bengaluru",
   " Homestays In Kasauli",
   " Homestays In Kodaikanal",
   " Homestays In Shimla",
   " Homestays In Mysore",
   " Homestays In Dandeli",
   " Homestays In Dehradun",
   " Homestays In Gokarna",
   " Homestays In Mussoorie",
   " Homestays In Nainital",
   " Homestays In Rishikesh",
   " Homestays In Vagamon",
   " Homestays In Alibaug",
   " Homestays In Kalimpong",
   " Homestays In Mangalore",
   " Homestays In Pondicherry",
   " Homestays In Yercaud",
   " Homestays In Coonoor",
   " Homestays In Kabini",
   " Homestays In Kasol",
   " Homestays In Kurseong",
   " Homestays In Mukteshwar",
  ];
  return (
    <>
      <div className={style_dl.container}>
        <div className={style_dl.smalldiv}>
          <h5>PRODUCT OFFERING</h5>
          <p>
            {str.map((ele, i) => {
              return <span key={i}>{ele},</span>;
            })}
          </p>

          <h5>TRAVEL RANGER</h5>
          <p>
            {str2.map((ele, i) => {
              return <span key={i}>{ele},</span>;
            })}
          </p>

          <h5>TOP CITIES</h5>
          <p>
            {str4.map((ele, i) => {
              return <span key={i}>{ele},</span>;
            })}
          </p>

          <h5> TOP PROPERTIES</h5>
          <p>
            {str5.map((ele, i) => {
              return <span key={i}>{ele},</span>;
            })}
          </p>

          <h5>TOP HOMESTAY CITIES</h5>
          <p>
            {str7.map((ele, i) => {
              return <span key={i}>{ele},</span>;
            })}
          </p>
        </div>
      </div>
    </>
  );
};

export default Details;
