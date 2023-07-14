//Testimonial Data
const testimonials = [
    {
      head:"Ramco Systems Limited",
      job: "Head - Professional Services",
      name: "Sd: M.Anbazhagan",
     /*  image: "https://iffco-public-assets.s3.ap-south-1.amazonaws.com/s3fs-public/2020-03/Logo_4.svg",*/
     saying: "We find them to be very reliable and consistent in their performance. They have deployed well trained consultants at site with professional approach to the assignments and earned the utmost confidence of our clients.",
     
      testimonial:
        "This is to certify that M/S. Dowell Technologies Pvt.Ltd., Chennai 600 016 is associated with us as implementation Partner from March- 2004. They have been successfully implementing our ERP Application for our key clients in various locations in India. "
         
    },
    {
     head:"Infosys Technologies Limited",
    job: "For Infosys Technologies Limited,",
    name: "Sd: N SHIV SHANKAR DC Head.",
    saying:"The Services from Dowell Technologies Private Limited is satisfactory.",
    testimonial:
        "This is to certify that M/s. Dowell Technologies Private Limited, Chennai are associated with us as a Software Support Vendor since June 1999 supporting us with Resources for our Off-Shore Projects on Development and Implementation Operations.",
    },
    {
      head:"CA Satyam ASP Private Limited..",        
      name: "Sd: Bhrinder Khalsi CA Satyam ASP Pvt. Ltd.",
      job: "UI Designer, Affinity Agency",
      saying:"We wish Dowell Technologies all the very best for the future!!",
      testimonial:
        "This is to state that Dowell Technologies Pvt. Ltd., Chennai have successfully completed the project of ManMan Upgradation from Ver.8 to Ver11.2 at ITC-PPD, Chennai, Tiruvottiyur. The skill set required was expertise on VAX - DEC platform with a sound knowledge of FORTRAN. Despite the extensive customizations done by ITC-PPD, the team from Dowell took on this challenge and successfully completed the project of ManMan upgradation. ",
    },
    
    {
              head:"Mannai Trading Company Ltd",
              job: "For Dinesh Chandra.",
              name: "Sd:Manager - Computer Services",
             
             saying:"We have developed application software for many customers. In carrying out development of software, the services of Dowell Consultants, Madras, were obtained. Their team which included Mr. K.S. Sathya Prakash also, has done a very good job for us and deserves our appreciation.",
             
              testimonial:
                "We, Mannai Trading Company, Doha, State of Qatar, are distributors of Computers manufactured by Digital Equipment Corporation, USA Apart from carrying out various business activities, we develop software for in-house applications as well as for various clients in the State of Qatar.",
            },  
    {
              head:"ORBITECH Software Solutions Limited",
              job: "For ORBITECH Software Solutions Limited",
              name: "Sd:Balaji.V",
             saying: "Their services are appreciable and satisfactory.",
             
              testimonial:
                "This is to certify that Dowell Technologies Private Limited, Chennai have been providing us services for analysis, development and application support for some of our off shore and on-site operations. ",
            },   

            {
                head:"Digital Equipment (India) Ltd.",
                job: "For Digital India",
                name: " Sd: Mr. P. V. Venkatachalam",
               saying: " We have had a reliable association with M/s. Dowell Consultants.",
               
                testimonial:
                  "This is to certify that M/s Dowell Consultants, Chennai are associated with us as an Alliance partner since 1994 supporting us with resources for Systems Design, Study, Development, Implementation, Migration both for our on-site and remote operations. ",
              },   
  ];
  
  //Current Slide
  let i = 0;
  //Total Slides
  let j = testimonials.length;
  
  let testimonialContainer = document.getElementById("testimonial-container");
  let nextBtn = document.getElementById("next");
  let prevBtn = document.getElementById("prev");
  
  nextBtn.addEventListener("click", () => {
    i = (j + i + 1) % j;
    displayTestimonial();
  });
  prevBtn.addEventListener("click", () => {
    i = (j + i - 1) % j;
    displayTestimonial();
  });
  
  let displayTestimonial = () => {
    testimonialContainer.innerHTML = `
    <h1>${testimonials[i].head}</h1>
      <p>${testimonials[i].testimonial}</p> 
      <h6>${testimonials[i].job}</h6>
      <h5>${testimonials[i].saying}</h5>
    
      <h3>${testimonials[i].name}</h3>
     
    `;
  };
  window.onload = displayTestimonial;
  

