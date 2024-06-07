// Modal.tsx
import { ChangeEvent, FC, useEffect, useState } from 'react';
import { AlertApp } from '../messages/AlertApp';


type onClose = () => void;

interface ModalProps {
  isOpen: boolean;
  onClose: onClose;
  onCodeSubmit: (code: number) => void;
  title?:string;
  text?:string;
  maxLength?:number;
  customError?: CustomError;
};

interface CustomError {
  messageError:string;
  infoAlert?:boolean;
  errorAlert?:boolean;
  succesAlert?:boolean;
  show: boolean;
}



export const ModalNumberInput: FC<ModalProps> = (
  { isOpen, onClose, onCodeSubmit, title = 'Enter Authentication Code', text = '', maxLength = 6, customError }
) => {
  const [code, setCode] = useState<number>(0);
  const [IsOpen, setIsOpen] = useState<boolean>(isOpen);


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCodeSubmit(code);
  };

  const onChange = ( e:ChangeEvent<HTMLInputElement> ) => {
    const { target:{value} } = e;

    if( isNaN( +value ) ) return;
    setCode( +value );
  };


  useEffect(() => {
    setIsOpen( isOpen );
  }, [isOpen, IsOpen]);


  if (!IsOpen) return null;


  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl mb-1 font-bold"> { title } </h2>

        <p className='text-center text-sm font-normal mb-2'>
          { text }
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            maxLength={ maxLength }
            value={ code }
            onChange={ onChange }
            className="border p-2 mb-4 w-full"
          />

          {
            (customError && customError.show)
            &&
            <AlertApp
              message={ customError.messageError }
              errorAlert={ customError.errorAlert }
              infoAlert={ customError.infoAlert }
              succesAlert={ customError.succesAlert }
            />
          }

          <div className="flex justify-end">
            <button type="submit" className="bg-blue-500 text-white p-2 rounded mr-2">
              Submit
            </button>
            <button onClick={ e => {
              e.preventDefault()
              onClose()
            }} className="bg-gray-500 text-white p-2 rounded">
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};