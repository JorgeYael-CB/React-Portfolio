// UserModal.tsx
import { ChangeEvent, FC, useEffect, useState } from 'react';
import { AlertApp } from '../messages/AlertApp';

interface UserModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (name: string, email: string) => void;
  title?: string;
  text?: string;
  titleInitialValue?:string
  textInitialValue?:string
  customError?: CustomError;
  titleTex?:string;
  titleTitle?:string;
  typeTextModal: 'Textarea' | 'email' | 'text';
  typeTitleModal: 'Textarea' | 'email' | 'text';
}

interface CustomError {
  messageError:string;
  infoAlert?:boolean;
  errorAlert?:boolean;
  succesAlert?:boolean;
  show: boolean;
}



export const ModalInputText: FC<UserModalProps> = (
  { isOpen, onClose, onSubmit, typeTitleModal, title = 'User Information', text = 'Please enter the data', titleInitialValue = '', textInitialValue = '', customError, titleTex, titleTitle, typeTextModal }
) => {
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
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl mb-1 font-bold text-center"> {title} </h2>
        <p className='text-center text-sm font-normal mb-4'>
          { text }
        </p>
        <form onSubmit={handleSubmit}>

          {
            titleTex
            &&
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="text">
                { titleTex }
              </label>
              {
                typeTextModal === 'email' || typeTextModal === 'text'
                  ?
                    <input
                      type={ typeTextModal === 'text' ? 'text' : 'email' }
                      id="text"
                      value={name}
                      onChange={ handleNameChange }
                      className="border p-2 mb-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                :
                <textarea
                  id="text"
                  value={name}
                  onChange={ handleNameChange }
                  className="border p-2 mb-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                </textarea>
              }
            </div>
          }

          {
            titleTitle
            &&
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                { titleTitle }
              </label>
              {
                typeTitleModal === 'email' || typeTitleModal === 'text'
                ?
                  <input
                    type={ typeTitleModal === 'text' ? 'text' : 'email' }
                    id="title"
                    value={ email }
                    onChange={ handleEmailChange }
                    className="border p-2 mb-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                :
                <textarea
                  id="title"
                  value={ email }
                  onChange={ handleEmailChange }
                  className="resize-none border p-2 mb-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                </textarea>
              }
            </div>
          }

          {
            (customError && customError.show)
            &&
            <AlertApp message={customError.messageError} errorAlert={customError.errorAlert} infoAlert={customError.infoAlert} succesAlert={customError.succesAlert}/>
          }

          <div className="flex justify-end">
            <button type="submit" className="bg-blue-500 text-white p-2 rounded mr-2 hover:bg-blue-600">
              Submit
            </button>
            <button type="button" onClick={onClose} className="bg-gray-500 text-white p-2 rounded hover:bg-gray-600">
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
