import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
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
    <div className="my-20">
      <h2 className="flex flex-row text-6xl justify-center font-bold text-red-600 my-10">
        SAY HELLO!
      </h2>
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
  );
};

export default MessageForm;
