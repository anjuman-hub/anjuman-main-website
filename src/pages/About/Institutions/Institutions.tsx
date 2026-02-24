import { useInstitutions } from './hooks/useInstitutions'; 
import InstitutionHero from './components/InstitutionHero';
import InstitutionFilters from './components/InstitutionFilters';
import InstitutionGrid from './components/InstitutionGrid';
import InstitutionValues from './components/InstitutionValues';

const InstitutionsPage = () => {
    const { activeFilter, setActiveFilter, filteredInstitutions } = useInstitutions();

    return (
        <div className="pt-20 sm:pt-24 min-h-screen bg-gray-50">
            {/* Hero Section */}
            <InstitutionHero />

            {/* Filter Section */}
            <InstitutionFilters
                activeFilter={activeFilter}
                setActiveFilter={setActiveFilter}
            />

            {/* Main Content */}
            <InstitutionGrid institutions={filteredInstitutions} />

            {/* Values Section */}
            <InstitutionValues />
        </div>
    );
};

export default InstitutionsPage;
