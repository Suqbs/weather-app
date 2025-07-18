import "./styles.css";
import data from "./exampleData.json";

console.log("Data:", data);

// const exampleCity = "Ankara";

// fetch(
//   `https://weather-api-proxy-for-odin-project.vercel.app/api/proxy?search=${encodeURIComponent(exampleCity)}`,
//   {
//     method: "GET",
//     headers: {},
//     mode: "cors",
//   },
// )
//   .then((response) => {
//     console.log("Response:", response);

//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     return response.json();
//   })
//   .then((data) => {
//     console.log("Data", data);
//   })
//   .catch((err) => {
//     console.error(err);
//   });
