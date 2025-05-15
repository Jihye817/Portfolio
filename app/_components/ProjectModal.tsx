import { Dispatch, SetStateAction } from 'react';

interface ProjectModalProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

function ProjectModal({ isOpen, setIsOpen }: ProjectModalProps) {
  return (
    isOpen && (
      <div className='fixed inset-0 z-10 z-999 flex min-h-dvh w-dvw items-center justify-center bg-black/50'>
        <div className='w-[60%] rounded-[1rem] border-1 bg-neutral-600 p-10'>
          <div className='border-b-1 pb-[1rem]'>title</div>
          <div>body</div>
          <div onClick={() => setIsOpen(false)}>close</div>
        </div>
      </div>
    )
  );
}

export default ProjectModal;
