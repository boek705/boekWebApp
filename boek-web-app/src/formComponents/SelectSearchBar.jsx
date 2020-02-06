import React from "react";
import Select from "react-select";

const SelectSearchBar = props => {
  return (
    <Select
      isDisabled={props.disabled}
      className="select-search-box"
      placeholder={props.placeholder}
      value={props.value}
      options={props.options}
      onChange={val => props.handleChange(val.value)}
    />
  );
};

export default SelectSearchBar;
