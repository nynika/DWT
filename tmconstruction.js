//Testimonial Data
const testimonials = [
    {
      head:"Larsen & Toubro Limited - ECC Construction Group",
      job: "For Larsen & Toubro ",
      name: "Sd: MS Sundaram ,Systems Officer",
     saying: "We could forsee a very good future for this company promoted by a group of dedicated professionals.",
     
      testimonial:
        " This is to certify that M/s. Dowell Consultants, 6/76-9c, North Silver Street, Madras 600 016 has been associated with us in the system development, implementation and subsequent user orientations for Rate Analysis, Depreciation, Plant Monitoring, Personnel Information on VAX-11/750 and Micro-Vax hardware and also on PC hardware for Time Office, Sub-Contractor billing, Piping Monitoring, Cutting schedules and Structural steels for our various project sites and regions. Dowell Consultant partners need a special mention about their technical capabilities also. They are personally involved in developing/implementing the above systems. They have been rendering software support and data-entry services for the past five years. During these associations, we found them quite reliable and their performance is satisfactory. ",
    },
   
 
    
  ];
  
  //Current Slide
  let i = 0;
  //Total Slides
  let j = testimonials.length;
  
  let testimonialContainer = document.getElementById("testimonial-container");
 /*  let nextBtn = document.getElementById("next");
  let prevBtn = document.getElementById("prev");
   */
/*   nextBtn.addEventListener("click", () => {
    i = (j + i + 1) % j;
    displayTestimonial();
  });
  prevBtn.addEventListener("click", () => {
    i = (j + i - 1) % j;
    displayTestimonial();
  }); */
  
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
  