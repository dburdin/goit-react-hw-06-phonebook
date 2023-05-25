import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

import { FilterField } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterField = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <FilterField
      type="text"
      name="filter"
      placeholder="Find contacts by name"
      onChange={handleFilterField}
    />
  );
};
