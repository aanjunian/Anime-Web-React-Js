import { useState } from "react";

const Pagination = ({ page, lastPage, setPage }) => {

    const scrollTop = () => {
        scrollTo({
            behavior: "smooth",
            top: 0
        })
    }

    const handleNextPage = () => {
        setPage((prevState) => prevState + 1)
        scrollTop()
    }

    const handlePrevPage = () => {
        setPage((prevState) => prevState - 1)
        scrollTop()
    }

    return (

        <div className="text-xl flex justify-center item-center py-4 px-2 gap-4 text-color-primary">
            {
            page <=1 ? null :
            <button onClick={handlePrevPage} className="transition-all hover:text-color-accent underline">Prev</button>
            }
            <p>{page} of {lastPage}</p>
            {
            page >= lastPage ? null:
            <button onClick={handleNextPage} className="transition-all hover:text-color-accent underline">Next</button>
            }
        </div>
    )
}

export default Pagination