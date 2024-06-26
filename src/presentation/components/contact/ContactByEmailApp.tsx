import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import { ResponseApiInterface } from "../../../interfaces";
import { AlertApp } from "../messages/AlertApp";
import { LoadingApp } from "../loadings/LoadingApp";
import { ContactByEmailUsecase } from "../../../core/use-cases";



export const ContactByEmailApp = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [responseApp, setResponseApp] = useState<ResponseApiInterface>({
    error: false,
    succes: false,
    messageError: undefined,
    messageSucces: undefined,
  });

  const [contactData, setContactData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
    phoneNumber: 0,
  });

  const { email, message, fullName, subject , phoneNumber} = contactData;
  const { error, messageError, messageSucces, succes } = responseApp;


  const onChange = ( e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) => {
    const { target:{id, value} } = e;

    setContactData( prev => ({
      ...prev,
      [id]: value,
    }));
  };

  const onSubmit = async ( e:FormEvent<HTMLFormElement> ) => {
    e.preventDefault();

    setIsLoading(true);

    const data = await new ContactByEmailUsecase().byEmail(contactData);
    setResponseApp( data );

    setIsLoading( false );
  };


  useEffect(() => {

    if( succes && !error )
      setContactData({ fullName: '', email: '', subject: '', message: '', phoneNumber: 0 });

  }, [succes, error]);


  return (
    <div className="shadow-md rounded-md max-w-3xl md:w-full w-5/6 mx-auto bg-gray-50 py-3 mt-48">
        <h2 className="text-center text-blue-600 font-semibold text-3xl">Contact me</h2>
        <div className="flex items-center justify-center p-10">
          <div className="mx-auto w-full max-w-[550px]">
            <form id="contact" onSubmit={ onSubmit }>
              <div className="mb-5">
                <label
                  htmlFor="fullName"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Full Name <span className="opacity-50 ml-2 text-sm">**Required**</span>
                </label>
                <input
                  value={ fullName }
                  onChange={ onChange }
                  type="text"
                  name="name"
                  id="fullName"
                  placeholder="Full Name"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Email Address <span className="opacity-50 ml-2 text-sm">**Required**</span>
                </label>
                <input
                  value={ email }
                  onChange={ onChange }
                  type="email"
                  name="email"
                  id="email"
                  placeholder="example@domain.com"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="subject"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Subject <span className="opacity-50 ml-2 text-sm">**Optional**</span>
                </label>
                <input
                  value={ subject }
                  onChange={ onChange }
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Enter your subject"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="phoneNumber"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Phone Number <span className="opacity-50 ml-2 text-sm">**Optional**</span>
                </label>
                <input
                  value={ phoneNumber }
                  onChange={ onChange }
                  type="number"
                  name="phoneNumber"
                  id="phoneNumber"
                  placeholder="Enter your Phone Number"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="message"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Message <span className="opacity-50 ml-2 text-sm">**Required**</span>
                </label>
                <textarea
                  value={ message }
                  onChange={ onChange }
                  rows={4}
                  name="message"
                  id="message"
                  placeholder="Type your message"
                  className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                ></textarea>
              </div>
              <div>
                {
                  !isLoading
                  ? <button className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none" > Submit </button>
                  : <LoadingApp/>
                }
              </div>

              {
                error && !succes
                ? <AlertApp message={`${messageError}`} errorAlert/>
                : succes && (<AlertApp message={ `${messageSucces}` } succesAlert/>)
              }
            </form>
          </div>
        </div>
    </div>
  )
}

