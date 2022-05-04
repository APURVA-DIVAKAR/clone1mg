import React from 'react'
import styles from  './Covid.module.css'
const Covid = () => {
  return (
    <div>
        <div className={styles.covid}>
            <div>
                <h1>Combating Coronavirus in India</h1>
                  <p>As we are staring at a potential rise of coronavirus in India, testing, tracing and treating is the ideal way of curbing this spread. Testing on time helps provide early treatment which, in turn, prevents the spread to your loved ones and others around you.</p>
                  <hr/>
                  <h4>Experiencing COVID-like symptoms? To book a COVID-19 test at home, call on</h4>
                  <h1>1800- 212- 2353</h1>

            </div>
            <div>
                <img src="https://marketing-compaigns.s3.ap-south-1.amazonaws.com/emailer/Corona_landing_page/img-head.png" />
            </div>
        </div>
        <div className={styles.sec}>
            <div className={styles.first}>
                <h1>COVID-19 RT-PCR test</h1>
                <h3>Gold standard test to detect active coronavirus infection</h3>
                <button>BOOK NOW</button>
            </div>
            <div className={styles.im}>
                <img src="https://marketing-compaigns.s3.ap-south-1.amazonaws.com/emailer/Corona_landing_page/rtpcr.png"/>
            </div>
       </div>
       <div className={styles.ess}>
          <div>
              <h1>COVID Essentials: Everything you need</h1>
          </div>
          <div className={styles.flex}>
            <div>
                <img src="https://marketing-compaigns.s3.ap-south-1.amazonaws.com/emailer/Corona_landing_page/cold-cough.png" />
            </div>
            <div>
                <img src="https://marketing-compaigns.s3.ap-south-1.amazonaws.com/emailer/Corona_landing_page/track-your-vitals.png"/>
            </div>
            <div>
                <img src="https://marketing-compaigns.s3.ap-south-1.amazonaws.com/emailer/Corona_landing_page/hand-wash.png"/>
            </div>
            <div>
                <img src="https://marketing-compaigns.s3.ap-south-1.amazonaws.com/emailer/Corona_landing_page/mask&face.png" />
            </div>
            <div>
                <img src="https://marketing-compaigns.s3.ap-south-1.amazonaws.com/emailer/Corona_landing_page/immunity.png"/>
            </div>
            <div>
                <img src="https://marketing-compaigns.s3.ap-south-1.amazonaws.com/emailer/Corona_landing_page/disinfectants.png"/>
            </div>            
          </div>
       </div>
       <div className={styles.manag}>
           <div style={{backgroundColor:"lavenderblush",color:"brown"}}>
               <h2 style={{color:"brown"}}>COVID Antibody IgG (Quantitative)</h2>
               <hr style={{ height:"5px",backgroundColor:"brown"}} />
               <p style={{color:"brown"}}>The Antibody Test detects any past occurrence of the infection by looking for COVID-19 antibodies</p>
               <hr style={{ height:"2px",backgroundColor:"brown"}}/>
               <h4 style={{color:"brown"}}>Who should take the test ?</h4>
               <ul >
                   <li>Think you contracted the coronavirus in the past and have already recovered</li>
                   <li>Want to know if your body has encountered the infection and made antibodies against the coronavirus</li>
                   <li>Have recovered from COVID-19 and want to help people who need plasma therapy</li>
               </ul>
               <div className={styles.one}>
                   <h3 style={{color:"whitesmoke"}}>Book Now</h3>
               </div>
           </div>
           <div style={{backgroundColor:"honeydew",color:"darkslategray"}}>
           <h2 style={{color:"darkslategray"}}>Covid Home Care Essential</h2>
               <hr style={{ height:"5px",backgroundColor:"darkslategray"}} />
               <p style={{color:"darkslategray"}}>The COVID Home Care Essential package offers 33 tests (Includes CRP, CBC with NLR, ESR, BUN and more) that give important clues about the various health parameters.</p>
               <hr style={{ height:"2px",backgroundColor:"darkslategray"}} />
               <h4 style={{color:"darkslategray"}}>This test is recommended if you:</h4>
               <ul>
                   <li>Have been diagnosed with COVID-19 and need to understand how COVID-19 has impacted your health</li>
                   <li>Are getting COVID-19 care at home and notice any worsening of the symptoms</li>
                   <li>Have been advised by the doctor to check your biomarkers</li>
               </ul>
               <div className={styles.two}>
                   <h3 style={{color:"whitesmoke"}}>Book Now</h3>
               </div>
              
           </div>
           <div style={{backgroundColor:"bisque",color:"darkolivegreen"}}>
           <h2 style={{color:"darkslategray"}}>COVID Home Care Complete</h2>
               <hr style={{ height:"5px",backgroundColor:"darkolivegreen"}} />
               <p style={{color:"darkolivegreen"}}>The COVID Home Care Complete package offers 41 tests (Includes D-Dimer, IL-6, HbA1c, Serum electrolytes, etc., in addition to CRP, CBC with NLR, ESR, and more) that give important clues about the various health parameters.</p>
               <hr style={{ height:"2px",backgroundColor:"darkolivegreen"}}/>
               <h4 style={{color:"darkolivegreen"}} >This test is recommended if you:</h4>
               <ul>
                   <li>Have been diagnosed with COVID-19 and need to understand how COVID-19 has impacted your health</li>
                   <li>Are getting COVID-19 care at home and notice any worsening of the symptoms</li>
                   <li>Have been advised by the doctor to check your biomarkers</li>
               </ul>
               <div className={styles.last}>
                   <h3 style={{color:"whitesmoke"}}>Book Now</h3>
               </div>
           </div>
       </div>
    </div>
  )
}

export default Covid