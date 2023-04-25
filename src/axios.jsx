const axios = require('axios');
axios.get('https://econtractor.figgle.net/services').then(response => {
  console.log("response:");
  console.log(response.data);
  { response.data.services.map((service) => <p>{service.address}</p>) }
});
// const res=async()=>{await axios.post("https://econtractor.figgle.net/contact-us", {
//         firstName: "abc",
//         lastName: "def",
//         email: "ghi@def.com",
//         phone: "123123123",
//         feedback: "Very good"
// })}