import { useCallback, useState } from 'react';

const useSearch = (search?: any) => {
  const [dataSearch, setDataSearch] = useState({ page: 1, size: 12, desc: 'true', ...search });

  const onSearchChange = useCallback((search: any) => {
    setDataSearch((current: any) => ({
      ...current,
      offset: 0,
      ...search,
    }));
  }, []);

  return [dataSearch, onSearchChange];
};

export default useSearch;
