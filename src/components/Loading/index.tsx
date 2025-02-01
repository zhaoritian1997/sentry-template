import React from 'react';

interface LoadingProps {
  loading?: boolean;
  children?: React.ReactNode;
}

const Loading: React.FC<LoadingProps> = ({ loading = false, children }) => {
  if (!loading) {
    return <>{children}</>;
  }

  return (
    <div className='relative w-full h-full'>
      <div className='absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-white bg-opacity-80 z-[1000]'>
        <div className='w-[40px] h-[40px] border-[4px] border-[#f3f3f3] border-t-[#3498db] rounded-[50%] animate-spin'></div>
      </div>
      <div className='opacity-60'>{children}</div>
    </div>
  );
};

export default Loading;
