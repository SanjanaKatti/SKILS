import NavigationBar from "@/modules/HomePage/Components/NavigationBar";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import FolSub from "@/modules/HomePage/Components/FolSub";

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

const ContactUs = () => {
  const textStyleMain = {
    fontSize: "60px",
    textTransform: "uppercase",
    letterSpacing: "2px",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <NavigationBar currentPage="ContactUs" />
      <div className="flex flex-col items-center justify-center px-4 md:px-8">
        <h1
          style={textStyleMain}
          className="text-4xl sm:text-5xl md:text-6xl mt-12 mb-16 text-center text-red-500 font-bold"
        >
          ABOUT US
        </h1>
        <div>
          <img className="w-32 h-auto mb-8 sm:w-40" src="/skils-LOGO.png" />
        </div>

        <div className="border-2 border-slate-500 w-full sm:w-11/12 md:w-2/3 flex flex-col sm:flex-row items-center p-6 sm:p-8 gap-6 sm:gap-8">
          <div className="text-center sm:text-left w-full sm:w-1/2 mb-6 sm:mb-0">
            <h2 className="text-2xl sm:text-3xl mb-6 text-center">KARVE NAGAR BRANCH</h2>
            <div className="text-lg sm:text-xl border border-1 border-white font-thin text-gray-400 py-6 sm:py-8">
              <p className="p-4">Natraj Society New Hall, Near Pratidnya Mangal Karyalaya, Karvenagar, Pune - 411052</p>
              <p className="p-4">reachme@skilshruti.com</p>
              <p className="p-4">+91 9545295657</p>
            </div>
          </div>

          <div className="w-full sm:w-1/2 p-2 flex flex-col items-center">
            <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
              <input
                {...register("Name")}
                className="w-full h-10 bg-black text-white border-b border-white p-2 mb-4"
                placeholder="Full Name"
              />
              {errors.Name && <p className="text-red-500 text-sm mb-2">{errors.Name.message}</p>}

              <input
                {...register("Email")}
                className="w-full h-10 bg-black text-white border-b border-white p-2 mb-4"
                placeholder="Email"
              />
              {errors.Email && <p className="text-red-500 text-sm mb-2">{errors.Email.message}</p>}

              <input
                {...register("PhoneNumber")}
                className="w-full h-10 bg-black text-white border-b border-white p-2 mb-4"
                placeholder="Phone Number"
              />
              {errors.PhoneNumber && <p className="text-red-500 text-sm mb-2">{errors.PhoneNumber.message}</p>}

              <textarea
                {...register("Message")}
                className="w-full h-32 bg-black text-white border-b border-white p-2 mb-4"
                placeholder="Message"
                rows="4"
              />
              {errors.Message && <p className="text-red-500 text-sm mb-2">{errors.Message.message}</p>}

              <div className="flex justify-center mt-6">
                <input
                  type="submit"
                  className="w-40 h-10 bg-red-600 text-white rounded cursor-pointer"
                  value="Submit"
                />
              </div>
            </form>
          </div>
        </div>

        <div className="border-2 border-slate-500 w-full sm:w-11/12 md:w-2/3 flex items-center justify-center mt-12 p-8">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl mb-6">Camp Branch</h2>
            <p className="text-lg sm:text-xl">
              Vibes The Fitness & Learning Studio, Dr. Babasaheb Ambedkar Road, Modi Colony, Pune Camp - 411001
            </p>
          </div>
        </div>

        <div className="mt-8 max-w-[1000px] w-full mx-auto">
          <FolSub />
        </div>

        <div className="max-w-[1000px] mx-auto mt-10 p-6 sm:p-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-red-600 mb-6 text-center">Privacy Policy</h1>
          <p className="text-sm sm:text-base text-gray-400 mb-4">Effective Date: [Insert Date]</p>
          <p className="text-base sm:text-lg text-gray-400 mb-6">
            Welcome to SKILS (School of Kathak and Interdisciplinary Learning with Shruti). Your privacy is important to us. This Privacy Policy
            explains how we collect, use, disclose, and protect your information when you visit our website or use our services.
          </p>
          {/* Rest of the Privacy Policy content */}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
