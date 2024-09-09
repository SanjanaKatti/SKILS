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
      <div className="flex flex-col items-center justify-center">
        <h1
          style={textStyleMain}
          className="text-6xl mt-36 mb-16 text-center text-red-500 font-bold"
        >
          ABOUT US
        </h1>
        <div>
          <img className="w-40 h-auto mb-12" src="/skils-LOGO.png" />
        </div>

        <div className="border-2 border-slate-500 w-11/12 md:w-2/3 flex flex-col md:flex-row items-center p-8 gap-8">
          <div className="text-center md:text-left w-full md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-3xl mb-6 text-center">KARVE NAGAR BRANCH</h2>
            <div className="text-xl border border-1 border-white font-thin text-gray-400 py-8">
              <p className="p-4">
                Natraj Society New Hall, Near Pratidnya Mangal Karyalaya,
                Karvenagar, Pune - 411052
              </p>
              <p className="p-4">reachme@skilshruti.com</p>
              <p className="p-4">+91 9545295657</p>
            </div>
          </div>

          <div className="w-full md:w-1/2 p-2 flex flex-col items-center">
            <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
              <input
                {...register("Name")}
                className="w-full h-10 bg-black text-white border-b border-white p-2 mb-4"
                placeholder="Full Name"
              />
              {errors.Name && (
                <p className="text-red-500 text-sm mb-2">
                  {errors.Name.message}
                </p>
              )}

              <input
                {...register("Email")}
                className="w-full h-10 bg-black text-white border-b border-white p-2 mb-4"
                placeholder="Email"
              />
              {errors.Email && (
                <p className="text-red-500 text-sm mb-2">
                  {errors.Email.message}
                </p>
              )}

              <input
                {...register("PhoneNumber")}
                className="w-full h-10 bg-black text-white border-b border-white p-2 mb-4"
                placeholder="Phone Number"
              />
              {errors.PhoneNumber && (
                <p className="text-red-500 text-sm mb-2">
                  {errors.PhoneNumber.message}
                </p>
              )}

              <textarea
                {...register("Message")}
                className="w-full h-32 bg-black text-white border-b border-white p-2 mb-4"
                placeholder="Message"
                rows="4"
              />
              {errors.Message && (
                <p className="text-red-500 text-sm mb-2">
                  {errors.Message.message}
                </p>
              )}

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

        <div className="border-2 border-slate-500 w-11/12 md:w-2/3 flex items-center justify-center mt-12 p-8">
          <div className="text-center">
            <h2 className="text-3xl mb-6">Camp Branch</h2>
            <p className="text-xl">
              Vibes The Fitness & Learning Studio, Dr. Babasaheb Ambedkar Road,
              Modi Colony, Pune Camp - 411001
            </p>
          </div>
        </div>

        <div className="mt-8 max-w-[1000px] w-full mx-auto">
          <FolSub />
        </div>
        <div className="max-w-[1000px] mx-auto mt-10 p-6">
          <h1 className="text-4xl font-bold text-red-600 mb-6 text-center">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-400 mb-4">
            Effective Date: [Insert Date]
          </p>
          <p className="text-base text-gray-400 mb-6">
            Welcome to SKILS (School of Kathak and Interdisciplinary Learning
            with Shruti). Your privacy is important to us. This Privacy Policy
            explains how we collect, use, disclose, and protect your information
            when you visit our website or use our services.
          </p>

          <h2 className="text-xl font-semibold mb-2">
            1. Information We Collect
          </h2>
          <p className="text-base text-gray-400 mb-4">
            We collect the following personal information from you:
          </p>
          <ul className="list-disc list-inside mb-6">
            <li>Name</li>
            <li>Email Address</li>
            <li>Phone Number</li>
            <li>Address</li>
          </ul>

          <h2 className="text-xl font-semibold mb-2">
            2. How We Collect Information
          </h2>
          <p className="text-base text-gray-400 mb-6">
            We collect personal information directly from you when you:
          </p>
          <ul className="list-disc list-inside mb-6">
            <li>Sign up for our Kathak classes or workshops.</li>
            <li>Subscribe to our newsletter.</li>
            <li>Contact us for inquiries or support.</li>
            <li>Register for any of our events or services.</li>
          </ul>

          <h2 className="text-xl font-semibold mb-2">
            3. How We Use Your Information
          </h2>
          <p className="text-base text-gray-400 mb-6">
            We use the personal information we collect for the following
            purposes:
          </p>
          <ul className="list-disc list-inside mb-6">
            <li>
              Email Marketing: To send you updates, newsletters, promotional
              materials, and information about our classes, workshops, and
              events.
            </li>
            <li>
              Contacting Prospective Students: To reach out to you regarding
              your interest in enrolling in our Kathak classes or workshops.
            </li>
            <li>
              Improving Our Services: To better understand your needs and
              improve our offerings.
            </li>
          </ul>

          <h2 className="text-xl font-semibold mb-2">
            4. Sharing and Disclosure of Information
          </h2>
          <p className="text-base text-gray-400 mb-6">
            We do not sell, rent, or share your personal information with third
            parties, except in the following circumstances:
          </p>
          <ul className="list-disc list-inside mb-6">
            <li>
              <strong>Service Providers:</strong> We may share your information
              with trusted service providers who assist us in operating our
              website or conducting our business, as long as they agree to keep
              this information confidential.
            </li>
            <li>
              <strong>Legal Requirements:</strong> We may disclose your
              information if required by law or in response to valid requests by
              public authorities.
            </li>
          </ul>

          <h2 className="text-xl font-semibold mb-2">5. Data Security</h2>
          <p className="text-base text-gray-400 mb-6">
            We are committed to protecting your personal information. We
            implement a variety of security measures to maintain the safety of
            your personal data. However, please note that no method of
            transmission over the Internet or method of electronic storage is
            100% secure.
          </p>

          <h2 className="text-xl font-semibold mb-2">
            6. Your Rights and Choices
          </h2>
          <p className="text-base text-gray-400 mb-6">You have the right to:</p>
          <ul className="list-disc list-inside mb-6">
            <li>
              Access and Update Your Information: You can request access to your
              personal information and request corrections if it is inaccurate
              or incomplete.
            </li>
            <li>
              Opt-Out of Marketing Communications: You can opt-out of receiving
              marketing emails from us at any time by following the unsubscribe
              instructions included in the email or contacting us directly.
            </li>
          </ul>

          <h2 className="text-xl font-semibold mb-2">
            7. Third-Party Websites
          </h2>
          <p className="text-base text-gray-400 mb-6">
            Our website may contain links to other websites that are not
            operated by us. We are not responsible for the privacy practices of
            third-party websites. We encourage you to review the privacy
            policies of any third-party sites you visit.
          </p>

          <h2 className="text-xl font-semibold mb-2">8. Children’s Privacy</h2>
          <p className="text-base text-gray-400 mb-6">
            Our services are not directed to children under the age of 13, and
            we do not knowingly collect personal information from children under
            13. If you believe we have collected information from a child under
            13, please contact us immediately.
          </p>

          <h2 className="text-xl font-semibold mb-2">
            9. Changes to This Privacy Policy
          </h2>
          <p className="text-base text-gray-400 mb-6">
            We may update our Privacy Policy from time to time. Any changes will
            be posted on this page with an updated effective date. We encourage
            you to review this policy periodically for any updates.
          </p>

          <h2 className="text-xl font-semibold mb-2">10. Contact Us</h2>
          <p className="text-base text-gray-400 mb-6">
            If you have any questions or concerns about this Privacy Policy or
            your personal information, please contact us at:
          </p>
          <p className="text-base text-gray-400 mb-6">
            Email: [Insert Email Address]
          </p>
          <p className="text-base text-gray-400 mb-6">
            Phone: [Insert Phone Number]
          </p>

          <p className="text-base text-gray-400 mt-6">
            Thank you for choosing SKILS. We value your trust and are committed
            to protecting your privacy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
