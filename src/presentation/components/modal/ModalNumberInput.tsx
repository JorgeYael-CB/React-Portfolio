// Modal.tsx
import { ChangeEvent, FC, useState } from 'react';


type onClose = (
  isOpen: boolean,
  setIsOpen: ( IsOpen:boolean ) => void,
) => void;


interface ModalProps {
  isOpen: boolean;
  onClose: onClose;
  onCodeSubmit: (code: number) => void;
  title?:string;
  text?:string;
  maxLength?:number
};


export const ModalNumberInput: FC<ModalProps> = ({ isOpen, onClose, onCodeSubmit, title = 'Enter Authentication Code', text = '', maxLength = 6 }) => {
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

  const onClickClose = () => {
    onClose( isOpen, setIsOpen );
  };


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
          <div className="flex justify-end">
            <button type="submit" className="bg-blue-500 text-white p-2 rounded mr-2">
              Submit
            </button>
            <button onClick={  onClickClose } className="bg-gray-500 text-white p-2 rounded">
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};