import PropTypes from 'prop-types';
import { Label, Input } from './Filter.styled';

export const Filter = ({ value, onChangeFilter }) => {
  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        placeholder="Please enter a name"
        value={value}
        onChange={onChangeFilter}
      />
    </Label>
  );
};

Filter.protoTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};
