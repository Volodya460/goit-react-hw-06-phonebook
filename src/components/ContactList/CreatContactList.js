import { LiList, ButtonContacts, UlContacts } from './ContactList.styled';
import { useDispatch } from 'react-redux';

import { DisplayedContacts } from 'redux/filterDisplay';
import { deleteContact } from 'redux/contactSlice';

export default function CreatContactList() {
  const dispatch = useDispatch();
  const displayedContacts = DisplayedContacts();
  return (
    <UlContacts>
      {displayedContacts.map(arr => (
        <LiList key={arr.id}>
          {arr.name}:{arr.number}
          <ButtonContacts
            type="button"
            onClick={() => dispatch(deleteContact(arr.id))}
          >
            Delet
          </ButtonContacts>
        </LiList>
      ))}
    </UlContacts>
  );
}
