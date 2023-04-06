import { useSelector } from 'react-redux';
import { getInputFilter, getUserInf } from './contactSlice';

export const DisplayedContacts = () => {
  const contactsInf = useSelector(getUserInf);
  const filterValue = useSelector(getInputFilter);

  const normalizedSearchingName = filterValue.toLocaleLowerCase().trim();

  return contactsInf.filter(({ name }) =>
    name.toLocaleLowerCase().trim().includes(normalizedSearchingName)
  );
};
