interface componentInfo {
  currentPage: number;
  allElementsNumber:number;
  currentElements:number;
}

interface Props {
  prevPage: () => void;
  nextPage:() => void;
  isLoading: boolean;
  prevPageValidation:() => boolean;
  nextPageValidation:() => boolean;
  config: componentInfo;
}

export const PaginationTemplateApp = (
  { nextPage, prevPage, isLoading, prevPageValidation, nextPageValidation, config: {allElementsNumber, currentElements, currentPage} }: Props
) => {

  return (
    <div className="flex flex-col items-center mt-8 space-y-2">
      <span className="text-sm text-gray-700 dark:text-gray-400">
        Page: { currentPage + 1 } of { Math.ceil(allElementsNumber / currentElements) } - Questions: { currentElements }
      </span>
      <div className="inline-flex mt-2 xs:mt-0 space-x-2">
        <button
          onClick={ prevPage }
          disabled = { prevPageValidation() || isLoading }
          className="disabled:opacity-60 flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <svg className="w-4 h-4 mr-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
          </svg>
          Prev
        </button>
        <button
          onClick={ nextPage }
          disabled = { nextPageValidation() || isLoading }
          className="disabled:opacity-60 flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Next
          <svg className="w-4 h-4 ml-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </button>
      </div>
    </div>
  )
}
