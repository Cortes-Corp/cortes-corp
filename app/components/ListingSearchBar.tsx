export default function ListingSearchBar() {
  return (
    <div className="   ">
      
        
      <form className=" w-[60rem]   bottom-[-2rem]  inset-x-0  absolute mx-auto  ">
      <div className='w-[10rem] rounded-md  h-[2.5rem] bg-red-600 text-center text-white flex '><p className="text-center my-auto w-full ">Search</p></div>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
          Search
        </label>
        <div className="relative">

          <button type='submit'  className=" rounded-lg cursor-pointer absolute bg-red-600 px-7 hover:bg-red-700 transition-all duration-300  inset-y-0  flex items-center  ">
            <svg
              className="w-4 h-4  text-white "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </button>
          <input
            type="search"
            id="default-search"
            className=" block shadow-md self-center rounded-lg text-[1rem] w-[]  py-5 p-4 ps-10 text-sm text-gray-900 border border-gray-300  bg-gray-50 md:w-full    "
            placeholder="City, County, or ZIP Code"
            required
          />
          {/* <button
            type="submit"
            className="text-white absolute mb-[0.2rem]  end-2.5 bottom-2.5 bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300   text-sm px-4 py-2 dark:bg-red-600 dark:hover:bg-red-600 dark:focus:ring-red-600">
            Search
          </button> */}
        </div>
      </form>
      </div>
  );
}
