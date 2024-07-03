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
    color: "#FF264A",
    fontFamily: '"Oswald", Sans-serif',
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
      <div className="flex flex-col items-center justify center">
        <h1 style={textStyleMain} className="text-6xl mt-40 mb-20 ">
          CONTACT US
        </h1>
        <div>
          <img className="w-40 h-auto m-10" src="/skils-LOGO.png" />
        </div>
        <div className="border-2 border-slate-500 w-2/3 h-1/3 flex flex-row">
          <div className="text-3xl m-8 pb-10 w-1/2 flex flex-col items-center justify-center">
            KARVE NAGAR BRANCH
            <div className="flex flex-col text-xl border-2 border-white mt-6">
              <div className="p-2 font-thin">
                Natraj Society New Hall, Near Pratidnya Mangal Karyalaya,
                Karvenagar, Pune - 411052
              </div>
              <div className="p-2">reachme@skilshruti.com</div>
              <div className="p-2">+91 9545295657</div>
            </div>
          </div>
          <div>
            <div className="w-full flex flex-col justify-center items-center">
              <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <input
                    {...register("Name")}
                    className="w-full h-10 bg-black text-white border-b border-white mx-20 mb-2 p-2"
                    placeholder="Full Name"
                  />
                  {errors.Name && (
                    <p className="text-red-500">{errors.Name.message}</p>
                  )}
                </div>
                <div>
                  <input
                    {...register("Email")}
                    className="w-full h-10 bg-black text-white border-b border-white mx-20 mb-2 p-2"
                    placeholder="Email"
                  />
                  {errors.Email && (
                    <p className="text-red-500">{errors.Email.message}</p>
                  )}
                </div>
                <div>
                  <input
                    {...register("PhoneNumber")}
                    className="w-full h-10 bg-black text-white border-b border-white mx-20 mb-2 p-2"
                    placeholder="Phone Number"
                  />
                  {errors.PhoneNumber && (
                    <p className="text-red-500">{errors.PhoneNumber.message}</p>
                  )}
                </div>
                <div>
                  <input
                    {...register("Message")}
                    className="w-full h-10 bg-black text-white border-b border-white mx-20 mb-2 p-2"
                    placeholder="Message"
                  />
                  {errors.Message && (
                    <p className="text-red-500">{errors.Message.message}</p>
                  )}
                </div>
                <div className="flex flex-col justify-center items-center mt-5">
                  <input
                    type="submit"
                    className="w-60 h-10 bg-red-600 text-white mt-2 rounded cursor-pointer"
                    value="Submit"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="border-2 border-slate-500 w-2/3 h-1/3 flex flex-row  items-center justify-center m-10">
          <div className="border-2 border-white m-4 flex flex-col items-center justify-center">
            <div className="text-3xl mt-8">Camp Branch </div>
            <div className="my-10 mx-28">
              Vibes The Fitness & learning Studio, Dr. Babasaheb Ambedkar Road,
              Modi Colony, Pune Camp - 411001
            </div>
          </div>
        </div>
        <div className="m-4">
          <FolSub />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
