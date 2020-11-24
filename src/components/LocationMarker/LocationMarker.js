// Assets
import { Icon } from "@iconify/react";
import fireIcon from "@iconify/icons-mdi/fire-alert";
import "./styles.scss";

const LocationMarker = ({ lat, lng, onClick, id, i }) => {
  return (
    <div className="location-marker" onClick={onClick}>
      <Icon icon={fireIcon} className="location-icon" />
    </div>
  );
};

export default LocationMarker;
