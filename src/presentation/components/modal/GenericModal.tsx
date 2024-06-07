// GenericModal.tsx
import { FC, ReactNode } from 'react';

interface GenericModalProps {
  children: ReactNode;
}


export const GenericModal: FC<GenericModalProps> = ({ children }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        {children}
      </div>
    </div>
  );
};
