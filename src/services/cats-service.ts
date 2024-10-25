
import * as catAdapter from '../adapters/cats-adapter' 

const getAllBreeds = async () => {
    const response = await catAdapter.getAllBreeds()
    return response;

};

const getBreedById = async (breed: string) => {
    const response = await catAdapter.getBreedById(breed)
    return response;
};

const search = async (query: any) => {

    function findMatches(cats: any, filters: any) {
        const matches = [];
      
        for (const cat of cats) {
          let isMatch = true;
      
          for (const key in filters) {
            if (filters.hasOwnProperty(key)) {
              const filterValue = filters[key].toString();
      
              // Manejo de campos con múltiples opciones (como temperamento)
              if (typeof filterValue === 'string' && key === 'temperament') {
                const temperaments = filterValue.split(',').map(t => t.trim());
                if (!temperaments.some(t => cat.temperament.includes(t))) {
                  isMatch = false;
                  break; // Salir del bucle si no hay coincidencia en el temperamento
                }
              } else if (cat[key] !== filterValue) {
                isMatch = false;
                break; // Salir del bucle si no hay coincidencia en otro campo
              }
            }
          }
      
          if (isMatch) {
            matches.push(cat);
          }
        }
      
        return matches;
    }

    const breeds = await getAllBreeds();
    const matchingCats = findMatches(breeds, query);

    // const response = catAdapter.search(filtersToString)
    return matchingCats;
};

const getImagesById = async (imageiId: string) => {
  const response = await catAdapter.getImagesById(imageiId)
  return response;
};

export { getAllBreeds, getBreedById, search, getImagesById }
