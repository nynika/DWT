//Testimonial Data
const testimonials = [
    {
      head:"Jaigopal Garodia Vivekananda Vidyalaya",
      job: "For Jaigopal Garodia Vivekananda Vidyalaya",
      name: "Sd: Mr. N. Hariharasubramanian, Hony. Correspondent",
     saying: "We could see a very good future for this company promoted by a group of dedicated professionals.",
     
      testimonial:
        "Our institution has been availing the services of M/s Dowell Consultants for the past three years, in the field of computer education. They have been doing their assignments in a highly professional way, thus evoking interest for the subject and also bringing good results. On seeing their performance, we readily recommended them to other institutions also. They are rendering similar services to G.K. Shetty, Hindu Vidyalaya, Adambakkam and a few other schools in the city. ",
    },
    {
     head:"Modern Indian Educational Society",
    job: " For:Modern Indian Educational Society.,",
    name: "Sd: M K SRINIVASAN,Secretary and Correspondent",
    saying: "Their all-round performance has been found to be very good for the past one year.",
    testimonial:
        "The Society have engaged M/s DOWELL CONSULTANTS to handle Computer Science classes in Plus One and Plus Two standards of the Modern Senior Secondary School and to conduct Computer classes of the Modern Computer Centre for the general public in the evening. They have been rendering their services in a highly professional manner and have established a good reputation both in the school and the computer centre. They have a very good team of dedicated computer professionals who are very sincere in performing their tasks.",
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
  