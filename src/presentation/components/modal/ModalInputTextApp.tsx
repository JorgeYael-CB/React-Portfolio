import { ChangeEvent, FC, useEffect, useState } from 'react';
import { AlertApp } from '../messages/AlertApp';

interface UserModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (name: string, email: string) => void;
  title?: string;
  text?: string;
  titleInitialValue?: string;
  textInitialValue?: string;
  customError?: CustomError;
  titleTex?: string;
  titleTitle?: string;
}

interface CustomError {
  messageError: string;
  infoAlert?: boolean;
  errorAlert?: boolean;
  succesAlert?: boolean;
  show: boolean;
}

export const ModalInputText: FC<UserModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title = 'User Information',
  text = 'Please enter the data',
  titleInitialValue = '',
  textInitialValue = '',
  customError,
  titleTex,
  titleTitle
}) => {
  const [name, setName] = useState<string>(textInitialValue);
  const [email, setEmail] = useState<string>(titleInitialValue);
  const [modalOpen, setModalOpen] = useState<boolean>(isOpen);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(name, email);
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setEmail(e.target.value);
  };

  useEffect(() => {
    setModalOpen(isOpen);
  }, [isOpen]);

  if (!modalOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 animate__animated animate__fadeIn">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl mb-4 font-semibold text-center text-gray-800">{title}</h2>
        <p className='text-center text-gray-600 mb-6'>{text}</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="text">
              {titleTex}
            </label>
            <input
              type='text'
              id="text"
              value={name}
              onChange={handleNameChange}
              className="border border-gray-300 p-3 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-5">
            <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="title">
              {titleTitle}
            </label>
            <input
              type='email'
              id="title"
              value={email}
              onChange={handleEmailChange}
              className="border border-gray-300 p-3 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {customError && customError.show && (
            <AlertApp
              message={customError.messageError}
              errorAlert={customError.errorAlert}
              infoAlert={customError.infoAlert}
              succesAlert={customError.succesAlert}
            />
          )}

          <div className="flex justify-end">
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200 ease-in-out">
              Submit
            </button>
            <button type="button" onClick={onClose} className="bg-gray-600 text-white px-4 py-2 rounded ml-2 hover:bg-gray-700 transition duration-200 ease-in-out">
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
