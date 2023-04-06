import { InputFilter } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';

import { filterDisplay, getInputFilter } from 'redux/contactSlice';

export default function Filter() {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(getInputFilter);

  const handleFilterValue = ({ target }) => {
    dispatch(filterDisplay(target.value));
  };

  return (
    <InputFilter
      type="text"
      onChange={handleFilterValue}
      value={filteredContacts}
    ></InputFilter>
  );
}
