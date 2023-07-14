//Testimonial Data
const testimonials = [
    {
      head:"Shriram Chits & Investments Limited",
      job: "For Shriram",
      name: "Sd: Ms. Ranjani Lakshmikanth, AGM(IS)",
     saying: "We wish them all success in your future endeavours.",
     
      testimonial:
        " This is to certify that M/s. Dowell Consultants Pvt. Ltd., Chennai 600 016 were involved in System Development & Maintenance Activities for around 2 years.They have also developed and successfully implemented an MIS system for our Legal Department during this period. We have found their services to be reliable and good. ",
    },
    {
     head:"Association Analytics Group",
    job: " For:AAG.,",
    name: "Sd: Mr.Arnold L. Kanov ,President",
    saying: "I look forward to continuing to work together in the future.",
    testimonial:
        "I want to express my gratitude and appreciation for everything you and Dowell Technologies have done for us in the development of our proprietary computer system.From the time I described the concept to you through the design and development of the finished product, you and your staff have been outstanding.During the design phase you provided important suggestions to improve the functionality of the system. After the system was developed, updates and enhancements were programmed and returned promptly. Overall, your performance was consistently of the highest caliber. Based upon the results we have achieved, I highly recommend your services.",
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
  