import React, { useState, useEffect } from "react";
import styles from "./SearchBox.module.css";
import ConnectingAirportsIcon from "@mui/icons-material/ConnectingAirports";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import FareTypes from "./FareTypes";
import { useNavigate } from "react-router-dom";
import { border } from "@mui/system";
import axios from "axios";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";

const SearchBox = () => {
  const [from, setFrom] = React.useState("");
  const [to, setTo] = React.useState("");
  const [newData, setNewData] = useState([]);
  const [departure, setDeparture] = React.useState(null);
  const [retrn, setRetrn] = React.useState(null);
  const [selectedButtonColor, setSelectedButtonColor] = useState(1);

  const [travellers, setTravellers] = React.useState(null);
  const arr = [1, 2, 3, 4, 5, 6, 7, 8];
  let ar1 = [0, 1, 2, 3, 4, 5];
  const [openTravellers, setOpenTravellers] = useState(false);
  const [togglePassengerColor, setTogglePassengerColor] = useState(false);
  const navigate = useNavigate();
  const onClickModal = (e) => {
    setOpenTravellers(!openTravellers);
    e.stopPropagation();
  };

  const handleSearch = async () => {
    return await axios
      .get(
        `https://tour-and-travel-f248c-default-rtdb.asia-southeast1.firebasedatabase.app/flights.json?q=${from}`
      )
      .then((response) => handleNewSearch(response.data))
      .catch((err) => console.log(err));
  };

  const handleNewSearch = (a) => {
    const dataArray = Object.values(a);
    let c = dataArray.filter((e) => {
      return e.from === from && e.to === to;
    });

    setNewData(c);
  };

  const onClickNoOfPass = (val) => {
    setTravellers(val);
  };
  const handleSubmit = () => {
    navigate("/flights");
  };

  const [data, setData] = useState([]);
  const [value, setValue] = useState([]);
  const [value1, setValue1] = useState([]);
  let dataLS = JSON.parse(localStorage.getItem("dataKey"));

  // setNewData(dataLS);

  useEffect(() => {
    loadFlightData();
  }, []);

  const loadFlightData = async () => {
    return await axios
      .get(
        "https://tour-and-travel-f248c-default-rtdb.asia-southeast1.firebasedatabase.app/flights.json"
      )
      .then((response) => setData(response.data))
      .catch((err) => console.log(err));
  };

  const handleSortLH = async (e) => {
    return await axios
      .get(
        `https://musafir-backend.onrender.com/flights?q=${from}&_sort=price&_order=asc`
      )
      .then((response) => handleSortLHE(response.data))
      .catch((err) => console.log(err));
  };

  const handleSortLHE = (a) => {
    let d = a.filter((e) => {
      return e.from === from && e.to === to;
    });

    setNewData(d);
  };

  const handleSortHL = async (e) => {
    return await axios
      .get(
        `https://musafir-backend.onrender.com/flights?q=${from}&_sort=price&_order=desc`
      )
      .then((response) => handleSortHLE(response.data))
      .catch((err) => console.log(err));
  };

  const handleSortHLE = (a) => {
    let f = a.filter((e) => {
      return e.from === from && e.to === to;
    });

    setNewData(f);
  };
  return (
    <>
      <div className={styles.flight_wrapper}>
        <div className={styles.flight_container}>
          <div className={styles.tripInternational}>
            <div className={styles.multiple_trip}>
              <div>
                <input checked={true} type="radio" name="trip" />
                <div>ONEWAY</div>
              </div>
              <div>
                <input type="radio" name="trip" />
                <div>ROUND TRIP</div>
              </div>
              {/* <div>
                <input type="radio" name="trip" />
                <div>MULTICITY</div>
              </div> */}
            </div>
            <div className={styles.book}>
              Book International and Domestic Flights
            </div>
          </div>

          {/* location of from and to  including date and passenger starts  */}
          <div className={styles.bookingSearch}>
            <div className={styles.fromToConnecting}>
              <div className={styles.fromTo}>
                <div className={styles.from}>
                  <FormControl sx={{ width: "100%" }}>
                    <InputLabel
                      sx={{ width: "100%" }}
                      id="demo-simple-select-label"
                    >
                      From
                    </InputLabel>
                    <Select
                      fullWidth
                      sx={{ width: "100%" }}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={from}
                      label="from"
                      onChange={(e) => setFrom(e.target.value)}
                    >
                      <MenuItem value={"DELHI"}>New Delhi</MenuItem>
                      <MenuItem value={"MUMBAI"}>Mumbai</MenuItem>
                      <MenuItem value={"PUNE"}>Pune</MenuItem>
                      <MenuItem value={"BANGALORE"}>Bangalore</MenuItem>
                      <MenuItem value={"CHENNAI"}>Chennai</MenuItem>
                      <MenuItem value={"HYDERABAD"}>Hyderabad</MenuItem>
                      <MenuItem value={"KOLKATA"}>Kolkata</MenuItem>

                      <MenuItem value={"JAIPUR"}>Jaipur</MenuItem>
                      <MenuItem value={"LUCKNOW"}>Lucknow</MenuItem>
                      <MenuItem value={"GOA"}>Goa</MenuItem>
                      <MenuItem value={"BHUBANESWAR"}>Bhubaneswar</MenuItem>
                      <MenuItem value={"VARANASI"}>Varanasi</MenuItem>
                      <MenuItem value={"COIMBATORE"}>Coimbatore</MenuItem>
                      <MenuItem value={"NAGPUR"}>Nagpur</MenuItem>
                      <MenuItem value={"RAIPUR"}>Raipur</MenuItem>
                      <MenuItem value={"INDORE"}>Indore</MenuItem>
                      <MenuItem value={"VISHAKHAPATNAM"}>
                        Visakhapatnam
                      </MenuItem>
                      <MenuItem value={"VIZAG"}>Vizag</MenuItem>
                      <MenuItem value={"BHOPAL"}>Bhopal</MenuItem>
                      <MenuItem value={"RANCHI"}>Ranchi</MenuItem>
                      <MenuItem value={"SURAT"}>Surat</MenuItem>
                      <MenuItem value={"KOCHI"}>Kochi</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className={styles.connectingIcon}>
                  <ConnectingAirportsIcon fontSize="large" color="grey" />
                </div>
                <div className={styles.to}>
                  <FormControl sx={{ width: "100%" }}>
                    <InputLabel
                      fullWidth
                      sx={{ width: "100%" }}
                      id="demo-simple-select-label"
                    >
                      To
                    </InputLabel>
                    <Select
                      sx={{ width: "100%" }}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={to}
                      label="to"
                      onChange={(e) => setTo(e.target.value)}
                    >
                      <MenuItem value={"BANGALORE"}>Bangalore</MenuItem>
                      <MenuItem value={"MUMBAI"}>Mumbai</MenuItem>
                      <MenuItem value={"PUNE"}>Pune</MenuItem>
                      <MenuItem value={"DELHI"}>New Delhi</MenuItem>
                      <MenuItem value={"CHENNAI"}>Chennai</MenuItem>
                      <MenuItem value={"HYDERABAD"}>Hyderabad</MenuItem>
                      <MenuItem value={"KOLKATA"}>Kolkata</MenuItem>
                      <MenuItem value={"AHMEDABAD"}>Ahmedabad</MenuItem>
                      <MenuItem value={"JAIPUR"}>Jaipur</MenuItem>
                      <MenuItem value={"LUCKNOW"}>Lucknow</MenuItem>
                      <MenuItem value={"GOA"}>Goa</MenuItem>
                      <MenuItem value={"BHUBANESWAR"}>Bhubaneswar</MenuItem>
                      <MenuItem value={"VARANASI"}>Varanasi</MenuItem>
                      <MenuItem value={"COIMBATORE"}>Coimbatore</MenuItem>
                      <MenuItem value={"NAGPUR"}>Nagpur</MenuItem>
                      <MenuItem value={"RAIPUR"}>Raipur</MenuItem>
                      <MenuItem value={"INDORE"}>Indore</MenuItem>
                      <MenuItem value={"VISHAKHAPATNAM"}>
                        Visakhapatnam
                      </MenuItem>
                      <MenuItem value={"VIZAG"}>Vizag</MenuItem>
                      <MenuItem value={"BHOPAL"}>Bhopal</MenuItem>
                      <MenuItem value={"RANCHI"}>Ranchi</MenuItem>
                      <MenuItem value={"SURAT"}>Surat</MenuItem>
                      <MenuItem value={"KOCHI"}>Kochi</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
            </div>
            <div>
            <DatePicker
                label="Departure"
                value={departure}
                disablePast={true}
                onChange={(newValue) => {
                  setDeparture(newValue);
                }}
                renderInput={(params) => (
                  <TextField {...params} error={false} />
                )}
              />
            </div>

            <div className={styles.travellerContainer}>
              <div onClick={onClickModal}>
                <div className={styles.travellersText}>TRAVELLERS</div>
                <div
                  className={styles.noOfTraveller}
                  style={{ marginTop: "-6px" }}
                >
                  <span>{travellers}</span>
                  {travellers > 1 ? "Travellers" : ""}
                </div>
              </div>

              <div
                className={
                  openTravellers ? styles.traveller_modal : styles.noDisplay
                }
              >
                <div className={styles.adultChild}>ADULTS (12y +)</div>
                <div className={styles.passengerButtonContainer}>
                  {arr.map((val) => (
                    <div
                      key={val}
                      className={`${
                        selectedButtonColor === val
                          ? styles.clickPassenger
                          : styles.passengerButton
                      }`}
                      onClick={() => {
                        setTogglePassengerColor(!togglePassengerColor);
                        onClickNoOfPass(val);
                        setSelectedButtonColor(val);
                      }}
                    >
                      {val}
                    </div>
                  ))}
                </div>

                {/* for children and inf */}
                <div className={styles.infantChildren}>
                  <div>
                    <div className={styles.adultChild}>
                      CHILDREN (2y - 12y )
                    </div>
                    <div className={styles.passengerButtonContainer}>
                      {ar1.map((val) => (
                        <div
                          key={val}
                          className={
                            val === 0
                              ? styles.clickPassenger
                              : styles.passengerButton
                          }
                          onClick={() => {
                            setTogglePassengerColor(!togglePassengerColor);
                            onClickNoOfPass(val);
                          }}
                        >
                          {val}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className={styles.adultChild}>INFANTS (below 2y)</div>
                    <div className={styles.passengerButtonContainer}>
                      {ar1.map((val) => (
                        <div
                          key={val}
                          className={
                            val === 0
                              ? styles.clickPassenger
                              : styles.passengerButton
                          }
                          onClick={() => {
                            setTogglePassengerColor(!togglePassengerColor);
                            onClickNoOfPass(val);
                          }}
                        >
                          {val}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* for children and inf */}

                <div className={styles.modalApplyText} onClick={onClickModal}>
                  <div>Apply</div>
                </div>
              </div>
            </div>
          </div>
          {/* location of departure and arrival  including date and passenger end  */}

          <FareTypes />
        </div>
        <div className={styles.buttonContainer}>
          <div type="submit" onClick={handleSearch}>
            SEARCH
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.filters}>
            <div className={styles.firstFilter}>
              <h3>Sort by price</h3>
              <div className={styles.divi}>
                <input type="checkbox" onChange={handleSortLH} />
                <p>Low to High</p>
              </div>
              <div className={styles.divi}>
                <input type="checkbox" onChange={handleSortHL} />
                <p>High to Low</p>
              </div>
            </div>
            <div className={styles.firstFilter}>
              <h3>Popular Filters</h3>
              <div className={styles.divi}>
                <input type="checkbox" />
                <p>stop</p>
              </div>
              <div className={styles.divi}>
                <input type="checkbox" />
                <p>Late Departures</p>
              </div>
              <div className={styles.divi}>
                <input type="checkbox" />
                <p>Refundable Fares</p>
              </div>
            </div>
            <div className={styles.firstFilter}>
              <h3>Alliances & Airlines</h3>
              <div className={styles.divi}>
                <input type="checkbox" />
                <p>Air India</p>
              </div>
              <div className={styles.divi}>
                <input type="checkbox" />
                <p>IngiGO</p>
              </div>
              <div className={styles.divi}>
                <input type="checkbox" />
                <p>SpiceJet</p>
              </div>
              <div className={styles.divi}>
                <input type="checkbox" />
                <p>GoAir</p>
              </div>
              <div className={styles.divi}>
                <input type="checkbox" />
                <p>Vistara</p>
              </div>
            </div>
            <div className={styles.firstFilter}>
              <h3>Layover Airports</h3>
              <div className={styles.divi}>
                <input type="checkbox" />
                <p>IGI</p>
              </div>
              <div className={styles.divi}>
                <input type="checkbox" />
                <p>CSMI</p>
              </div>
            </div>
            <div className={styles.firstFilter}>
              <h3>Select Range ₹</h3>
              <input type="range" min="1000" max="10000" />
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <Box
            sx={{
              minWidth: 120,
              mt: "20px",
              display: ["block"],
              alignSelf: "end",
            }}
          >
            <FormControl>
              <InputLabel
                id="demo-simple-select-label"
                sx={{ fontSize: "20px" }}
              >
                Sort
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Filter"
              >
                <MenuItem onClick={handleSortHL} value={"hl"}>
                  High to Low
                </MenuItem>
                <MenuItem onClick={handleSortLH} value={"lh"}>
                  Low to High
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
          {newData && newData.length > 0 ? (
            newData.map((e, index) => (
              <div key={index} className={styles.flightCard}>
                <div className={styles.flightName}>
                  <div className={styles.logo}>
                    <img
                      src={
                        e.airline === "IndiGo"
                          ? "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/6E.png?v=7"
                          : e.airline === "AirIndia"
                          ? "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/I5.png?v=7"
                          : e.airline === "Vistara"
                          ? "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/UK.png?v=7"
                          : e.airline === "SpiceJet"
                          ? "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/SG.png?v=7"
                          : e.airline === "GoAir"
                          ? "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/G8.png?v=7"
                          : "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/G8.png?v=7"
                      }
                      alt=""
                    />
                  </div>
                  <div>
                    <div>{e.airline}</div>
                    <div>{e.number}</div>
                  </div>
                </div>
                <div className={styles.flighttime}>
                  <div>{e.departure}</div>
                  <br />
                  <div>{e.from}</div>
                </div>
                <div className={styles.totalTime}>
                  <div>{e.totalTime}</div>
                  <hr />
                  <div>non-stop</div>
                </div>
                <div className={styles.flighttime}>
                  <div>{e.arrival}</div>
                  <br />
                  <div>{e.to}</div>
                </div>
                <div className={styles.price}>Rs.{e.price}</div>
                
                  <Link to="/booking" 
                   className={styles.bookNow}
                   onClick={() => {
                     localStorage.setItem("bookData", JSON.stringify(e));
                   }}>
                    <button className="bookNowbtn"
                    >
                        <span className="bookNowicon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" fill="currentColor" class="bi bi-airplane-fill" viewBox="0 0 16 16">
                      <path d="M6.428 1.151C6.708.591 7.213 0 8 0s1.292.592 1.572 1.151C9.861 1.73 10 2.431 10 3v3.691l5.17 2.585a1.5 1.5 0 0 1 .83 1.342V12a.5.5 0 0 1-.582.493l-5.507-.918-.375 2.253 1.318 1.318A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.354-.854l1.319-1.318-.376-2.253-5.507.918A.5.5 0 0 1 0 12v-1.382a1.5 1.5 0 0 1 .83-1.342L6 6.691V3c0-.568.14-1.271.428-1.849Z"></path>
                    </svg>
                        </span>
                        <span className="bookNowtext">Book Now</span>
                    </button>
                  </Link>
              </div>
            ))
          ) : (
            <h1>No Flights Found</h1>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchBox;
