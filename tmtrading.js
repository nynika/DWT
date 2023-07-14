//Testimonial Data
const testimonials = [
  {
    head:"Indian Potash Limited",
    job: "For INDIAN POTASH LIMITED",
    name: "Sd: Mr. K. L. Gopalakrishnan",
   saying: "We wish them all success in your future endeavours.",
   
    testimonial:
      " This is to certify that M/s. Dowell Technologies Pvt Ltd., Chennai  600 016 has developed a customized web based ERP (IPAS - Indian Potash Application System) on Oracle10g (Front End: Oracle Forms/Reports & Back End: Oracle DB) and it has been implemented on 1st October  2008 in all our 18 regions across India. The system is also maintained by them. The same has been  executed as per schedule in a Professional manner and their performance has been Excellent during the period. ",
  },
  {
   head:"Mannai Trading Company Ltd",
  job: " For MANNAI TRADING CO. LTD.,",
  name: "Sd: Mr. Moni George, Manager - MIS.",
  saying:"We wish them all Success in their future endeavours.",
  testimonial:
      "This is to certify that M/s. Dowell Consultants Pvt. Ltd., Chennai - 600 016, India,  has been involved in our Software Development activities in various areas for the last few years and we found their performance to be quite satisfactory.Recently they have also developed a payroll system for our group companies and the same is implemented successfully for a few of them. They are in the process of completing the same for the other companies also shortly.",
  },
  {
    head:"Wipro GE Medical Systems Private Ltd.",        
    name: "B.N.Manohar Sd: Information Systems Manager",
    job: "For Wipro GE Medical Systems Ltd.",
    saying:"We wish them all Success in their future endeavours.",
    testimonial:
      "This is to certify that, we have availed Software Services from M/s. Dowell Consultants, Madras - 600 016, during the period Feb'91 - Aug'91. They have developed PC-based Application Software. Thay have rendered good services to us during this period and their performance was good.",
  },
  {
            head:"I.T.C Limited - Greeting Cards Business",        
            name: "ANAND GARG Sd: FINANCE MANAGER",
            job: "For I.T.C Limited - Greeting Cards Business",
            saying:"We wish them all success.",
            testimonial:
              "This is to certify that M/S Dowell Technologies Pvt. Ltd. Chennai - 600 016 has developed and implemented an Invoicing system for our Greeting Cards Business Division using Oracle DataBase and Forms. The same has been executed as per schedule in a professional manner and their performance has been Excellent. They have also interfaced this Oracle system to the ManMan system (MRP II package) used by us for other applications.",
          },
  /* {
            head:"Protec Laboratories Pvt. Ltd",
            job: "For PROTEC LABORATORIES PVT LTD.",
            name: "A A ELECTRICWALA ,Sd: DIRECTOR",
           
           saying:"We wish them all success in your future endeavours.",
           
            testimonial:
              "This is to certify that M/s. DOWELL CONSULTANTS, 6/76-9C, NORTH SILVER STREET, CANTONMENT, MADRAS - 600 016 have been rendering Consultancy Services to us in Computer Software Development and Data Entry support since April 1990 to our best satisfcation. We find the partners as well as the employees fully knowledgeable and competent.",
          } */,  
  {
            head:"Indian Potash Limited",
  
            name: "Sd:Mr. V. Kannappan,Senior Manager",
           saying: "We wish more prospects in their endeavour.",
           job: "For INDIAN POTASH LIMITED",
           
            testimonial:
              " Certificate of Merit M/s Dowell Consultants Private Limited, 6/76-9c, North Silver Street, Cantonment, St.Thomas Mount, Chennai 600 016,  has been associated with Indian Potash Limited since 1990 in the development of Application Software.Their services has been utilised from time to time on our various projects.A special mention has to be made with reference to the conversion of our old dbase program into Foxpro to make it Y2K compliant enabling uninterrupted work on the system during the turn of the millennium. This task was assigned to them around 5th December, 1999 with a target date to complete it before the month end. They have successfully completed this assignment much ahead of the schedule, which helped us in implementing the same across all our locations before the turn of the century and the program continues to work successfully without any problem.The tasks assigned to M/s. Dowell Consultants Private Limited have been executed properly, which, according to us, is possible by their utmost commitment, sincerity and competence.  ",
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
