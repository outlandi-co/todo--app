import PropTypes from 'prop-types';
import { useSettings } from '../Context/Settings/Settings';

const Settings = ({ children }) => {
  useSettings(); // Using the hook to access settings

  return (
    <div>
      {children}
    </div>
  );
};

Settings.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Settings;
