import React from 'react';

const Search = () => {
  return (
    <section>
      <div className='px-3 md:px-0 md:w-4/5 mx-auto py-16'>
        <p className='text-xs'>300+stays from 22 july 2022 to 30 july 2022</p>
        <h2 className='text-lg md:text-3xl font-semibold mt-2 mb-6'>
          Stays in NewYork
        </h2>
        <div className='hidden md:inline-flex space-x-2'>
          <button className='theme-btn text-xs' value='can flex'>
            Cancellation Flexibility
          </button>
          <button className='theme-btn text-xs' value='flexibility'>
            Flexibility
          </button>
          <button className='theme-btn text-xs' value='cancellation'>
            Cancellation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Search;
