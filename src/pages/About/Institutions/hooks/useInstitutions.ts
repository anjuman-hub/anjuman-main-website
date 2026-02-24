import { useState, useMemo } from 'react';
import { institutions } from '../constants/institutionsData';


export const useInstitutions = () => {
    const [activeFilter, setActiveFilter] = useState('All');

    const filteredInstitutions = useMemo(() =>
        activeFilter === 'All'
            ? institutions
            : institutions.filter(inst => inst.category === activeFilter),
        [activeFilter]
    );

    return {
        activeFilter,
        setActiveFilter,
        filteredInstitutions
    };
};
