import PropTypes from 'prop-types';
import { Contact, Text, Button } from './ContactItem.styled';

export const ContactItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <Contact>
      <Text>
        {name}: {number}
      </Text>
      <Button type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </Button>
    </Contact>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
