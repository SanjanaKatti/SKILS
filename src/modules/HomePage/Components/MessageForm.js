import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import * as yup from "yup";

const schema = yup.object().shape({
  Name: yup.string().required("Full Name is required"),
  PhoneNumber: yup
    .number()
    .typeError("Phone Number must be a number")
    .required("Phone Number is required")
    .positive("Phone Number must be positive")
    .integer("Phone Number must be an integer"),
  Email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  Message: yup.string().required("Message is required"),
});

const MessageForm = () => {
  const [result, setResult] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    setResult("Sending...");

    try {
      // Send form data to AWS Lambda Function URL
      const response = await fetch(
        "https://2nkh36kn7q2nphv5xgmc6xg3ay0ayhuq.lambda-url.ap-southeast-2.on.aws/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data), // Send form data as JSON
        }
      );

      // Handle the response
      if (response.ok) {
        const result = await response.json();
        setResult("Form Submitted Successfully and data stored in DynamoDB!");
        console.log("Response from Lambda:", result);
      } else {
        const errorData = await response.json();
        setResult("An error occurred: " + errorData.message);
        console.error("Error response from Lambda:", errorData);
      }
    } catch (error) {
      setResult("Request failed. Please try again.");
      console.error("Request error:", error);
    }
  };

  return (
    <div className="flex flex-col m-20 mx-auto max-w-[1000px] justify-between h-full font-oswald">
      <h2 className="flex flex-row text-6xl justify-center font-bold text-red-600 my-10">
        SAY HELLO!
      </h2>
      <div className="w-full flex flex-col justify-center items-center">
        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              {...register("Name")}
              className="w-full h-10 bg-black text-white border-b border-white mb-2 p-2"
              placeholder="Full Name"
            />
            {errors.Name && (
              <p className="text-red-500">{errors.Name.message}</p>
            )}
          </div>
          <div>
            <input
              {...register("Email")}
              className="w-full h-10 bg-black text-white border-b border-white mb-2 p-2"
              placeholder="Email"
            />
            {errors.Email && (
              <p className="text-red-500">{errors.Email.message}</p>
            )}
          </div>
          <div>
            <input
              {...register("PhoneNumber")}
              className="w-full h-10 bg-black text-white border-b border-white mb-2 p-2"
              placeholder="Phone Number"
            />
            {errors.PhoneNumber && (
              <p className="text-red-500">{errors.PhoneNumber.message}</p>
            )}
          </div>
          <div>
            <input
              {...register("Message")}
              className="w-full h-10 bg-black text-white border-b border-white mb-2 p-2"
              placeholder="Message"
            />
            {errors.Message && (
              <p className="text-red-500">{errors.Message.message}</p>
            )}
          </div>
          <div className="flex flex-col justify-center items-center mt-5">
            <input
              type="submit"
              className="w-60 h-10 bg-red-600 text-white mt-2 mb-6 rounded cursor-pointer"
              value="Submit"
            />
          </div>
          {result && <p className="text-center mt-4">{result}</p>}
        </form>
      </div>
    </div>
  );
};

export default MessageForm;
// import { useState } from "react";
// import { useForm } from "react-hook-form";

// const MessageForm = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();
//   const [result, setResult] = useState("");

//   const onSubmit = async (data) => {
//     setResult("Sending...");

//     try {
//       const response = await fetch(
//         "https://2nkh36kn7q2nphv5xgmc6xg3ay0ayhuq.lambda-url.ap-southeast-2.on.aws/",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(data),
//         }
//       );

//       if (response.ok) {
//         const result = await response.json();
//         setResult("Form Submitted Successfully and data stored in DynamoDB!");
//         console.log("Response from Lambda:", result);
//       } else {
//         const errorData = await response.json();
//         setResult("An error occurred: " + errorData.message);
//         console.error("Error response from Lambda:", errorData);
//       }
//     } catch (error) {
//       setResult("Request failed. Please try again.");
//       console.error("Request error:", error);
//     }
//   };

//   return (
//     <div className="my-20">
//       <h2 className="flex flex-row text-6xl justify-center font-bold text-red-600 my-10">
//         SAY HELLO!
//       </h2>
//       <div className="w-full flex flex-col justify-center items-center">
//         <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
//           <div>
//             <input
//               {...register("Name", { required: "Full Name is required" })}
//               className="w-full h-10 bg-black text-white border-b border-white mx-20 mb-2 p-2"
//               placeholder="Full Name"
//             />
//             {errors.Name && (
//               <p className="text-red-500">{errors.Name.message}</p>
//             )}
//           </div>
//           <div>
//             <input
//               {...register("Email", { required: "Email is required" })}
//               className="w-full h-10 bg-black text-white border-b border-white mx-20 mb-2 p-2"
//               placeholder="Email"
//             />
//             {errors.Email && (
//               <p className="text-red-500">{errors.Email.message}</p>
//             )}
//           </div>
//           <div>
//             <input
//               {...register("PhoneNumber", {
//                 required: "Phone Number is required",
//               })}
//               className="w-full h-10 bg-black text-white border-b border-white mx-20 mb-2 p-2"
//               placeholder="Phone Number"
//             />
//             {errors.PhoneNumber && (
//               <p className="text-red-500">{errors.PhoneNumber.message}</p>
//             )}
//           </div>
//           <div>
//             <input
//               {...register("Message", { required: "Message is required" })}
//               className="w-full h-10 bg-black text-white border-b border-white mx-20 mb-2 p-2"
//               placeholder="Message"
//             />
//             {errors.Message && (
//               <p className="text-red-500">{errors.Message.message}</p>
//             )}
//           </div>
//           <div className="flex flex-col justify-center items-center mt-5">
//             <input
//               type="submit"
//               className="w-60 h-10 bg-red-600 text-white mt-2 rounded cursor-pointer"
//               value="Submit"
//             />
//           </div>
//         </form>
//         <p className="mt-5 text-green-500">{result}</p>
//       </div>
//     </div>
//   );
// };

// export default MessageForm;
