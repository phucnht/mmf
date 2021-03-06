import { Stack } from '@whammytechvn/wt-components';
import { MouseEventHandler } from 'react';

export interface ModalTypeConfirmProps {
  title?: string;
  description?: string;
  decline: MouseEventHandler<HTMLButtonElement> | undefined;
  confirm: MouseEventHandler<HTMLButtonElement> | undefined;
}

const ModalTypeConfirm = ({ title, description, confirm, decline }: ModalTypeConfirmProps) => {
  return (
    <Stack className="rounded-[2rem] shadow-lg relative flex-col w-full bg-blue-500 outline-none focus:outline-none border-[3px] border-green-200 text-white text-2xl font-bold">
      {title && (
        <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
          <h3 className="text-3xl font-semibold">{title}</h3>
        </div>
      )}
      {description && (
        <div className="relative p-6 flex-auto">
          <p className="my-4 text-blueGray-500 text-lg leading-relaxed">{description}</p>
        </div>
      )}
      <Stack className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
        <button
          className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={decline}
        >
          Close
        </button>
        <button
          className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={confirm}
        >
          Save
        </button>
      </Stack>
    </Stack>
  );
};

export default ModalTypeConfirm;
