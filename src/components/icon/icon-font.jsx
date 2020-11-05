import React from "react";
import PropTypes from "prop-types";
import "./icon-font.scss";

IconFont.propTypes = {
  /**
   * Clases CSS adicionales para el icono.
   */
  className: PropTypes.string,
  /**
   * Nombre del icono. Dicho nombre será exactamente el mismo que el nombre del icono en el inspector de Figma
   */
  icon: PropTypes.string.isRequired,
  /**
   * Color del icono. En formato hexadecimal '#FFFFFF' (Nota: Si necesitas incluir estados en el componente (:hover, :focus etc) implementa el color por className y no por esta prop))
   */
  iconColor: PropTypes.string,
  /**
   * Tamaño del icono (preferible siempre en medidas relativas "REM")
   */
  iconSize: PropTypes.string,
  /**
   * Funcion a la que se llama en el evento Click
   */
  onClick: PropTypes.func,
};

function IconFont({
  className,
  icon,
  iconColor,
  iconSize,
  onClick = () => {},
}) {
  return (
    <div
      className={`icon-font ${className ? className : ""}`}
      onClick={onClick}
    >
      <span
        className={`icon-font__image ${icon}`}
        style={{ color: iconColor, fontSize: iconSize }}
      />
    </div>
  );
}
export default IconFont;
