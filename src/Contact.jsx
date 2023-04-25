// import React, { useState,useRef } from "react";
// import "./styles.css";
// import emailjs from '@emailjs/browser';
// const Contact = () => {
//   const [data, setData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     dob: "",
//     number: "",
//     msg: ""
//   });
//   const form = useRef();
//   const inputEvent = (event) => {
//     const { name, value } = event.target;
//     setData((preVal) => {
//       return {
//         ...preVal,
//         [name]: value
//       };
//     });
//   };

//   const formSubmit = (e) => {
//     alert(
//       `Form submitted ,Name:${data.firstName} ${data.lastName}, Email: ${data.email}, 
//       Phone:${data.Phone}, DoB:${data.dob}, Message:${data.msg} `
//     );
//   };
//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm('service_t1p8hej', 'template_hznf4za', form.current, 'gf8lg73rf2QJNl671')
//       .then((result) => {
//           console.log(result.text);
//       }, (error) => {
//           console.log(error.text);
//       });
//   };
//   return (
//     <>
//       <div className="my-5">
//         <h1 className="text-center">Contact US</h1>
//       </div>
//       <div className="container contact_div">
//         <div className="row">
//           <div className="col-md-5 col-10 mx-auto">
//             <form ref={form} onSubmit={sendEmail}>
//               <div class="form-group">
//                 <label>First Name</label>
//                 <input
//                   type="First Name"
//                   class="form-control"
//                   id="exampleFormControlInput1"
//                   name="firstName"
//                   value={data.firstName}
//                   onChange={inputEvent}
//                   placeholder="First Name"
//                 />
//               </div>
//               <div class="form-group">
//                 <label for="exampleFormControlInput1">Last Name</label>
//                 <input
//                   type="last Name"
//                   class="form-control"
//                   id="exampleFormControlInput1"
//                   name="lastName"
//                   value={data.lastName}
//                   onChange={inputEvent}
//                   placeholder="last Name"
//                 />
//               </div>
//               <div class="form-group">
//                 <label for="exampleFormControlInput1">Email address</label>
//                 <input
//                   type="email"
//                   class="form-control"
//                   id="exampleFormControlInput1"
//                   name="user_email"
//                   value={data.email}
//                   onChange={inputEvent}
//                   placeholder="name@example.com"
//                 />
//               </div>
//               <div class="form-group">
//                 <label for="exampleFormControlInput1">Date Of Birth</label>
//                 <input
//                   type="DoB"
//                   class="form-control"
//                   id="exampleFormControlInput1"
//                   name="dob"
//                   value={data.dob}
//                   onChange={inputEvent}
//                   placeholder="DD-MM-YYYY"
//                 />
//               </div>
//               <div class="form-group">
//                 <label for="exampleFormControlInput1">Phone No.</label>
//                 <input
//                   type="text"
//                   class="form-control"
//                   id="exampleFormControlInput1"
//                   name="number"
//                   value={data.number}
//                   onChange={inputEvent}
//                   placeholder="mobile number"
//                 />
//               </div>

//               <div class="form-group">
//                 <label for="exampleFormControlTextarea1">FeedBack</label>
//                 <textarea
//                   class="form-control"
//                   id="exampleFormControlTextarea1"
//                   rows="3"
//                   name="msg"
//                   value={data.msg}
//                   onChange={inputEvent}
//                 ></textarea>
//               </div>

//               <button class="btn buttonS " type="submit">
//                 Submit
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Contact;






import React, { useState ,useEffect} from "react";
import "./styles.css";
import axios from 'axios';
import { CleaningServices } from "@mui/icons-material";
const Contact = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    number: "",
    msg: ""
  });
  const inputEvent = (event) => {
    const { name, value } = event.target;
    setData((preVal) => {
      return {
        ...preVal,
        [name]: value
      };
    });
  };

  const formSubmit = async (e) => {
    e.preventDefault();
    const {firstName,lastName,email,number,msg}=data;
    if(firstName && lastName && email && number && msg){
    const res=fetch("https://econtarctor-default-rtdb.asia-southeast1.firebasedatabase.app/contactusData.json",
    {
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify({
        firstName,
        lastName,
        email,
        number,
        msg
      }),
    });
    if(res)
    {setData({
    firstName: "",
    lastName: "",
    email: "",
    number: "",
    msg: ""
    });
      alert("Thank You");}
    else
    {alert("Please enter complete data");}
  }
  else
  {alert("Please enter complete data");}
  }
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact US</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-5 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div class="form-group">
                <label>First Name</label>
                <input
                  type="First Name"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="firstName"
                  value={data.firstName}
                  onChange={inputEvent}
                  placeholder="First Name"
                />
              </div>
              <div class="form-group">
                <label for="exampleFormControlInput1">Last Name</label>
                <input
                  type="last Name"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="lastName"
                  value={data.lastName}
                  onChange={inputEvent}
                  placeholder="last Name"
                />
              </div>
              <div class="form-group">
                <label for="exampleFormControlInput1">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={data.email}
                  onChange={inputEvent}
                  placeholder="name@example.com"
                />
              </div>
              <div class="form-group">
                <label for="exampleFormControlInput1">Phone No.</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="number"
                  value={data.number}
                  onChange={inputEvent}
                  placeholder="mobile number"
                />
              </div>

              <div class="form-group">
                <label for="exampleFormControlTextarea1">FeedBack</label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="msg"
                  value={data.msg}
                  onChange={inputEvent}
                ></textarea>
              </div>

              <button class="btn buttonS " type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;