import { useContext } from "react";
import AlertContext from "../../context/alert/alertContext";
import { Icon } from "@iconify/react";

function Alert() {
  const { alert } = useContext(AlertContext);

  return (
    <div
      className="flex items-start mb-4 space-x-2 h-6 "
      style={{ visibility: alert ? "visible" : "hidden" }}
    >
      <Icon icon="codicon:error" color="red" width="25" height="25" />
      <strong>
        {" "}
        <p className="flex-1 text-base font-semibold leading-7 text-white">
          {alert?.msg}
        </p>
      </strong>
    </div>
  );
}

export default Alert;
