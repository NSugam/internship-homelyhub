import React, { useState } from 'react'
import FilterModal from '../FilterModal';

const Filter = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    //State for storing selected filters
    const [selectedFilters, setselectedFilters] = useState({});

    //Function to handle opening the modal
    const handleOpenModel = () => {
        setIsModalOpen(true);
    }

    //Function to handle closing the modal
    const handleCloseModal = () => {
        setIsModalOpen(false);
    }

    //Function to handle changes in filters
    const handleFilterChange = (filterName, value) => {
        setselectedFilters((prevFilters) => ({
            ...prevFilters, [filterName]: value
        }))
    }

    return (
        <>
            <span class="material-symbols-outlined" onClick={handleOpenModel}>
                tune
            </span>
            {isModalOpen && (
                <FilterModal
                    selectedFilters={selectedFilters}
                    onFilterChange={handleFilterChange}
                    onClose={handleCloseModal}
                />
            )}

        </>
    )
}

export default Filter
