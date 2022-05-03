import React from "react";
import { Nav } from "../Styleing/Navbar_Styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Advertisement from "./Advertisement";

export const Navbar = () => {
  return (
    <>
      <Nav>
        <div className="navbar">
          <div className="navbarlogo_tabs">
            <div id="logo">
              <img
                src="https://www.1mg.com/images/tata_1mg_logo.svg"
                alt="TATA 1mg"
                className="logo_img"
              />
            </div>
            <div id="tabs">
              <div>MEDICINES</div>
              <div>
                LAB TESTS
                <div className="reddiv">SAFE</div>
              </div>
              <div>ASK DOCTOR</div>
              <div>COVID-19</div>
              <div>AYURVEDA</div>
              <div>
                CARE PLAN
                <div className="reddiv">SAVE MORE</div>
              </div>
            </div>
          </div>
          <div id="loginSignup">
            <div>
              <a href="login.html" className="logandsign">
                Login
              </a>{" "}
              |
              <a href="signUp.html" className="logandsign">
                Sign Up
              </a>
            </div>
            <div>Offers</div>
            <div className="cart_icon">
              <div className="cart_svg"></div>
              <div className="count">0</div>
            </div>
            <div style={{ fontSize: "14px" }}>Need Help ?</div>
          </div>
        </div>
        <div className="navbar1">
          <div className="navbar_inner_div">
            <div className="location_bar_innerdiv">
              <div>
                <i
                  className="material-icons location_icon"
                  style={{ fontSize: "16px" }}
                >
                  &#xe0c8;
                </i>
                <input
                  className="searchbarinfo styles__search-input___3I6VS"
                  type="text"
                  autoComplete="off"
                  name="name"
                  data-auto-search-bar="true"
                  placeholder="Enter Your City"
                  style={{ fontWeight: "700" }}
                />
                <i
                  className="material-icons location_icon"
                  style={{ fontSize: "16px" }}
                >
                  my_location
                </i>
              </div>
            </div>
            <div className="search_bar">
              <div className="search_bar_innerdiv styles__search-input___3I6VS">
                <input
                  className="searchbarinfo"
                  type="text"
                  autoComplete="off"
                  name="name"
                  data-auto-search-bar="true"
                  placeholder="Search for Medicines and Health Products"
                />

                <div className="search_icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="13"
                    fill="currentColor"
                    className="bi bi-search"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="navbar_2nd_part">
            <div className="spark_img">
              <img
                src="https://res.cloudinary.com/du8msdgbj/image/upload/v1570695364/quick_buy_rebrand_lqpnce.svg"
                alt=""
              />
            </div>
            <div className="navbar_discount">
              QUICK BUY! Flat 25% off on medicines*
            </div>
            <div className="upload_btn">
              <a
                className="upload_anc"
                href="google.com"
                data-auto-upload-prescription="true"
              >
                <span>Upload</span>
              </a>
            </div>
          </div>
        </div>
        <div className="dropdown_div">
          <ul>
            <li>
              <a href="#">
                Health Resource Center
                <FontAwesomeIcon className="dropdown_icon" icon={faAngleDown} />
              </a>
              <ul className="dropdown">
                <div className="container1">
                  <div className="notborder">
                    <li>
                      <a href="#">All Diseases</a>
                    </li>
                    <li>
                      <a href="#">All Medicines</a>
                    </li>
                    <li>
                      <a href="#">Medicines by Therapeutic className</a>
                    </li>
                  </div>
                </div>
              </ul>
            </li>
            <li>
              <a href="#">
                Covid Essentials
                <FontAwesomeIcon className="dropdown_icon" icon={faAngleDown} />
              </a>
              <ul className="dropdown">
                <div className="container1">
                  <div className="notborder">
                    <li>
                      <a href="#">Covid-19 Self test kits</a>
                    </li>
                    <li>
                      <a href="#">Oxygen Cans & Concentrators</a>
                    </li>
                    <li>
                      <a href="#">Masks</a>
                    </li>
                    <li>
                      <a href="#">Sanitizers & Handwash Products</a>
                    </li>
                    <li>
                      <a href="#">Boost Your Immunity</a>
                    </li>
                    <li>
                      <a href="#">Thermometer</a>
                    </li>
                    <li>
                      <a href="#">Chyawanprash</a>
                    </li>
                  </div>
                </div>
              </ul>
            </li>
            <li>
              <a href="#">
                Featured
                <FontAwesomeIcon className="dropdown_icon" icon={faAngleDown} />
              </a>
              <ul className="dropdown">
                <div className="container1">
                  <div className="notborder">
                    <li>
                      <a href="#">Winter Care</a>
                    </li>
                    <li className="innerli">
                      <a href="#">Hair & Scalp Care</a>
                      <a href="#">Cough & Cold</a>
                      <a href="#">Fever & Headache</a>
                      <a href="#">Vaporizers & Nebulizers</a>
                      <a href="#">Heating Aid</a>
                      <a href="#">Winter Combos</a>
                    </li>
                    <li>
                      <a href="#">Tata 1mg Health Products</a>
                    </li>
                    <li>
                      <a href="#">Trending Products</a>
                    </li>
                    <li>
                      <a href="#">New Arrivals on Tata 1MG</a>
                    </li>
                  </div>
                  <div>
                    <li>
                      <a href="#">Buy More, Save More</a>
                    </li>
                    <li>
                      <a href="#">Vaccination</a>
                    </li>
                    <li>
                      <a href="#">Minimum 33% Off</a>
                    </li>
                    <li>
                      <a href="#">Combos</a>
                    </li>
                    <li>
                      <a href="#">Deals of the Day</a>
                    </li>
                    <li>
                      <a href="#">Top Brands</a>
                    </li>
                    <li className="innerli">
                      <a href="#">Accu-Chek</a>
                      <a href="#">Ensure</a>
                      <a href="#">Revital</a>
                      <a href="#">Optimum Nutrition (ON)</a>
                      <a href="#">Dr. Morepen</a>
                      <a href="#">Pediasure</a>
                    </li>
                  </div>
                </div>
              </ul>
            </li>
            <li>
              <a href="#">
                Products
                <FontAwesomeIcon className="dropdown_icon" icon={faAngleDown} />
              </a>
              <ul className="dropdown">
                <div className="container1">
                  <div className="notborder">
                    <li>
                      <a href="#">Vitamins & Supplements</a>
                    </li>
                    <li className="innerli">
                      <a href="#">Multivitamins</a>
                      <a href="#">Vitamins A-Z</a>
                      <a href="#">Mineral Supplements</a>
                    </li>
                    <li>
                      <a href="#">Nutritional Drinks</a>
                    </li>
                    <li className="innerli">
                      <a href="#">Adult Daily Nutrition</a>
                      <a href="#">Kids Nutrition (2-15 Yrs)</a>
                      <a href="#">For Women</a>
                    </li>
                    <li>
                      <a href="#">Health Food & Drinks</a>
                    </li>
                    <li className="innerli">
                      <a href="#">Green Tea & Herbal Tea</a>
                      <a href="#">Apple Cider Vinegar</a>
                      <a href="#">Healthy Snacks</a>
                    </li>
                  </div>
                  <div>
                    <li>
                      <a href="#">Protein Supplements</a>
                    </li>
                    <li className="innerli">
                      <a href="#">Whey Protein</a>
                      <a href="#">Amino Acids</a>
                      <a href="#">Mass Gainers</a>
                      <a href="#">Workout Essential</a>
                      <a href="#">Fat Burners</a>
                    </li>
                    <li>
                      <a href="#">Omega & Fish Oil</a>
                    </li>
                    <li className="innerli">
                      <a href="#">Fish Oil</a>
                      <a href="#">Cod Liver Oil</a>
                      <a href="#">Flax Seed Oil</a>
                    </li>
                    <li>
                      <a href="#">Immunity Boosters</a>
                    </li>
                    <li className="innerli">
                      <a href="#">Chyawanprasha</a>
                      <a href="#">Vitamin C</a>
                      <a href="#">Herbal Teas</a>
                      <a href="#">Antioxidant Supplements</a>
                      <a href="#">Ayurvedic Supplements</a>
                    </li>
                  </div>
                  <div>
                    <li>
                      <a href="#">Specialty Supplements</a>
                    </li>
                    <li className="innerli">
                      <a href="#">Green Supplements</a>
                      <a href="#">Beauty Supplements</a>
                      <a href="#">Pre and Probiotics</a>
                      <a href="#">Glucosamine</a>
                      <a href="#">Collagen</a>
                      <a href="#">Antioxidants</a>
                      <a href="#">Biotin</a>
                    </li>
                    <li>
                      <a href="#">Weight Management</a>
                    </li>
                    <li className="innerli">
                      <a href="#">Weight Management Herbs</a>
                      <a href="#">Meal Replacements</a>
                      <a href="#">Weight Gain</a>
                    </li>
                  </div>
                </div>
              </ul>
            </li>
            <li>
              <a href="#">
                Diabetes
                <FontAwesomeIcon className="dropdown_icon" icon={faAngleDown} />
              </a>
              <ul className="dropdown">
                <div className="container1">
                  <div className="notborder">
                    <li>
                      <a href="#">Devices</a>
                    </li>
                    <li className="innerli">
                      <a href="#">Blood Glucose Monitors</a>
                      <a href="#">Test Strips & Lancets</a>
                      <a href="#">Syringes & Pens</a>
                    </li>
                    <li>
                      <a href="#">Diabetic Medicines</a>
                    </li>
                    <li className="innerli">
                      <a href="#">Vitamins, Minerals & Antioxidants</a>
                      <a href="#">Homeopathy Medicines</a>
                      <a href="#">Ayurvedic Medicines</a>
                    </li>
                  </div>
                  <div>
                    <li>
                      <a href="#">Sugar Substitutes</a>
                    </li>
                    <li>
                      <a href="#">Diabetic Diet</a>
                    </li>
                    <li className="innerli">
                      <a href="#">Juices & Vinegars</a>
                      <a href="#">Superfoods</a>
                    </li>
                    <li>
                      <a href="#">Diabetic Foot Health</a>
                    </li>
                  </div>
                </div>
              </ul>
            </li>
            <li>
              <a href="#">
                Healthcare Devices
                <FontAwesomeIcon className="dropdown_icon" icon={faAngleDown} />
              </a>
              <ul className="dropdown">
                <div className="container2">
                  <div className="notborder">
                    <li>
                      <a href="#">Masks (N95, Surgical and more)</a>
                    </li>
                    <li className="innerli">
                      <a href="#">Face Shield</a>
                      <a href="#">Surgical Masks</a>
                      <a href="#">N95 Masks</a>
                    </li>
                    <li>
                      <a href="#">Oxygen Concentrators & Cans</a>
                    </li>
                    <li>
                      <a href="#">BP Monitors</a>
                    </li>
                    <li>
                      <a href="#">Nebulizers & Vaporizers</a>
                    </li>
                    <li>
                      <a href="#">Oximeters & Pedometers</a>
                    </li>
                    <li>
                      <a href="#">Vital Signs Monitors & Wearables</a>
                    </li>
                    <li>
                      <a href="#">Weighing Scales</a>
                    </li>
                  </div>
                  <div>
                    <li>
                      <a href="#">Thermometers</a>
                    </li>
                    <li className="innerli">
                      <a href="#">IR Thermometers</a>
                    </li>
                    <li>
                      <a href="#">Body Massager</a>
                    </li>

                    <li>
                      <a href="#">Diabetes Monitors</a>
                    </li>
                    <li>
                      <a href="#">Mobility Equipments</a>
                    </li>
                    <li>
                      <a href="#">Exercise Equipments</a>
                    </li>
                    <li>
                      <a href="#">Doctor's Corner</a>
                    </li>
                    <li className="innerli">
                      <a href="#">Stethoscopes</a>
                      <a href="#">Tapes & Bandages</a>
                      <a href="#">Clinical Diagnostic Equipments</a>
                      <a href="#">Dressings & Wound Care</a>
                    </li>
                  </div>
                  <div>
                    <li>
                      <a href="#">Supports & Braces</a>
                    </li>
                    <li className="innerli">
                      <a href="#">Neck & Shoulder Suppor</a>
                      <a href="#">Knee & Leg Support</a>
                      <a href="#">Back & Abdomen Support</a>
                      <a href="#">Ankle & Foot Support</a>
                      <a href="#">Hand & Wrist Braces</a>
                      <a href="#">Arm & Elbow Support</a>
                      <a href="#">Cervical Pillows</a>
                      <a href="#">Compression support & sleeves</a>
                      <a href="#">Heel support</a>
                    </li>
                  </div>
                </div>
              </ul>
            </li>
            <li>
              <a href="#">
                Personal Care{" "}
                <FontAwesomeIcon className="dropdown_icon" icon={faAngleDown} />
              </a>
              <ul className="dropdown">
                <div className="container2">
                  <div className="notborder">
                    <li>
                      <a href="#">Sexual Wellness</a>
                    </li>
                    <li className="innerli">
                      <a href="#">Condoms</a>
                      <a href="#">Lubricants & Massage Gels</a>
                      <a href="#">Personal body massagers</a>
                      <a href="#">Men Performance Enhancers</a>
                      <a href="#">Sexual Health Supplements</a>
                    </li>
                    <li>
                      <a href="#">Skin Care</a>
                    </li>
                    <li className="innerli">
                      <a href="#">Body Lotions</a>
                      <a href="#">Mosquito Repellents</a>
                      <a href="#">Lip Balm</a>
                      <a href="#">Acne Care</a>
                      <a href="#">Bath Essentials</a>
                      <a href="#">Facewash</a>
                      <a href="#">Sanitizers & Handwash</a>
                      <a href="#">Sunscreen Products</a>
                    </li>
                  </div>
                  <div>
                    <li>
                      <a href="#">Baby Care</a>
                    </li>
                    <li className="innerli">
                      <a href="#">Baby & Infant Food</a>
                      <a href="#">Baby Diapers, wipes & more</a>
                      <a href="#">Nursing & Feeding</a>
                      <a href="#">Baby Bath Essentials</a>
                      <a href="#">Baby Skin Care</a>
                      <a href="#">Baby Healthcare</a>
                      <a href="#">Baby Oral Health</a>
                    </li>
                    <li>
                      <a href="#">Hair Care</a>
                    </li>
                    <li className="innerli">
                      <a href="#">Shampoo</a>
                      <a href="#">Hair Conditioners</a>
                      <a href="#">Hair Growth Supplements</a>
                      <a href="#">Hair Oils</a>
                      <a href="#">Hair Growth for Men</a>
                    </li>
                  </div>
                  <div>
                    <li>
                      <a href="#">Elderly Care</a>
                    </li>
                    <li className="innerli">
                      <a href="#">Adult Diapers</a>
                      <a href="#">Bone & Joint Health</a>
                      <a href="#">Living & Safety Aids</a>
                      <a href="#">Orthopaedic Supports</a>
                    </li>
                    <li>
                      <a href="#">Women Care</a>
                    </li>
                    <li className="innerli">
                      <a href="#">Feminine Hygiene</a>
                      <a href="#">Women Care Supplements</a>
                      <a href="#">Mother Care</a>
                      <a href="#">Menopause</a>
                      <a href="#">Polycystic Ovary Syndrome</a>
                    </li>
                  </div>
                  <div>
                    <li>
                      <a href="#">Men Care</a>
                    </li>
                    <li className="innerli">
                      <a href="#">Men Grooming</a>
                    </li>
                    <li>
                      <a href="#">Oral Care</a>
                    </li>
                    <li>
                      <a href="#">Pet Care</a>
                    </li>
                    <li className="innerli">
                      <a href="#">Pet Grooming</a>
                      <a href="#">Pet Food</a>
                      <a href="#">Pet Health Care</a>
                    </li>
                  </div>
                </div>
              </ul>
            </li>
            <li>
              <a href="#">
                Health Conditions
                <FontAwesomeIcon className="dropdown_icon" icon={faAngleDown} />
              </a>
              <ul className="dropdown">
                <div className="container2">
                  <div className="notborder">
                    <li>
                      <a href="#">Stomach Care</a>
                    </li>
                    <li>
                      <a href="#">Heart Care</a>
                    </li>
                    <li>
                      <a href="#">Bone, Joint & Muscle Care</a>
                    </li>
                    <li>
                      <a href="#">Pain Relief</a>
                    </li>
                    <li className="innerli">
                      <a href="#">Heating Aids</a>
                    </li>
                    <li>
                      <a href="#">Eye Care</a>
                    </li>
                    <li className="innerli">
                      <a href="#">Eye Lubricants</a>
                    </li>
                    <li>
                      <a href="#">Ear Care</a>
                    </li>
                    <li className="innerli">
                      <a href="#">Hearing Aid Devices</a>
                    </li>
                  </div>
                  <div>
                    <li>
                      <a href="#">First Aid</a>
                    </li>
                    <li>
                      <a href="#">Liver Care</a>
                    </li>
                    <li>
                      <a href="#">Cold & Cough</a>
                    </li>
                    <li>
                      <a href="#">Fever</a>
                    </li>
                    <li>
                      <a href="#">Mental Wellness</a>
                    </li>
                    <li>
                      <a href="#">Kidney Care</a>
                    </li>
                    <li>
                      <a href="#">Respiratory Care</a>
                    </li>
                    <li>
                      <a href="#">Piles, Fissures & Fistula</a>
                    </li>
                    <li>
                      <a href="#">Smoking Cessation</a>
                    </li>
                  </div>
                </div>
              </ul>
            </li>
            <li>
              <a href="#">
                Ayurveda Products
                <FontAwesomeIcon className="dropdown_icon" icon={faAngleDown} />
              </a>
              <ul className="dropdown">
                <div className="container2">
                  <div className="notborder">
                    <li>
                      <a href="#">Ayurveda Top Brands</a>
                    </li>
                    <li className="innerli">
                      <a href="#">Dabur</a>
                      <a href="#">Sri Sri Tattva</a>
                      <a href="#">Baidyanath Products</a>
                      <a href="#">Kerala Ayurveda</a>
                      <a href="#">Jiva Ayurveda</a>
                      <a href="#">Tata 1mg Herbal Supplements</a>
                      <a href="#">Patanjali</a>
                    </li>
                    <li>
                      <a href="#">Popular categories</a>
                    </li>
                    <li className="innerli">
                      <a href="#">Herbal Juice</a>
                      <a href="#">Herbal Juice</a>
                      <a href="#">Ayurveda Personal Care</a>
                      <a href="#">Ayurvedic Immunity Boosters</a>
                      <a href="#">Explore Popular Herbs</a>
                      <a href="#">Herbal Supplements</a>
                    </li>
                  </div>
                  <div>
                    <li>
                      <a href="#">Top Health Concerns</a>
                    </li>
                    <li className="innerli">
                      <a href="#">Ayurvedic Respiratory care</a>
                      <a href="#">Cough, Cold & Fever</a>
                      <a href="#">Sexual Wellness</a>
                      <a href="#">Bone, Joint and Muscle Care</a>
                      <a href="#">Stomach Care</a>
                      <a href="#">Diabetes Care</a>
                      <a href="#">Liver Care</a>
                      <a href="#">Mind Care</a>
                      <a href="#">Cardiac Care</a>
                    </li>
                    <li>
                      <a href="#">Unani Medicines</a>
                    </li>
                    <li className="innerli">
                      <a href="#">Hamdard Unani</a>
                      <a href="#">AMU Dawakhana</a>
                      <a href="#">Rex Remedies</a>
                      <a href="#">Dehlvi Remedies</a>
                    </li>
                  </div>
                </div>
              </ul>
            </li>
            <li>
              <a href="#">
                Homeopathy{" "}
                <FontAwesomeIcon className="dropdown_icon" icon={faAngleDown} />
              </a>
              <ul className="dropdown">
                <div className="container2">
                  <div className="notborder">
                    <li>
                      <a href="#">Homeopathy Top Brands</a>
                    </li>
                    <li className="innerli">
                      <a href="#">SBL Homoeopathy</a>
                      <a href="#">Dr Reckeweg</a>
                      <a href="#">Dr Willmar Schwabe India</a>
                      <a href="#">Adel Pekana</a>
                      <a href="#">BJAIN Homeopathy</a>
                      <a href="#">Bakson's</a>
                      <a href="#">Allen</a>
                      <a href="#">Wheezal</a>
                      <a href="#">Dr Willmar Schwabe Germany</a>
                      <a href="#">Haslab</a>
                      <a href="#">Medisynth</a>
                      <a href="#">Boiron</a>
                      <a href="#">Bhandari</a>
                      <a href="#">Dr Bakshi Bakson</a>
                      <a href="#">Dr Batra's</a>
                    </li>
                    <li>
                      <a href="#">Homeopathy Wellness Combos</a>
                    </li>
                  </div>
                  <div>
                    <li>
                      <a href="#">Homeopathy Popular Categories</a>
                    </li>
                    <li className="innerli">
                      <a href="#">Homeopathic Care for Cold & Cough</a>
                      <a href="#">Respiratory Wellness</a>
                      <a href="#">Homeopathy Covid Essentials</a>
                      <a href="#">Sexual Health</a>
                      <a href="#">Hair Care Products</a>
                      <a href="#">Skin Care Products</a>
                      <a href="#">Children's Health</a>
                      <a href="#">Women's Health</a>
                    </li>
                    <li>
                      <a href="#">Homeopathy Medicines</a>
                    </li>
                    <li className="innerli">
                      <a href="#">Homeopathic Drops</a>
                      <a href="#">Dilutions</a>
                      <a href="#">Mother Tinctures</a>
                      <a href="#">Trituration</a>
                      <a href="#">Bio Combinations</a>
                      <a href="#">Millesimal LM Potencies</a>
                      <a href="#">Biochemics</a>
                      <a href="#">Bach Flower Remedies</a>
                    </li>
                  </div>
                </div>
              </ul>
            </li>
          </ul>
        </div>
      </Nav>
      <Advertisement />
    </>
  );
};
