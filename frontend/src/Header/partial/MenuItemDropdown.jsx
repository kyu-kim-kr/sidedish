import React from "react";
import styled from "styled-components";
import { cssFlexStartCol } from "../../common/CommonStyledCSS";

const StyledMenuItemDropdown = styled.div`
  visibility: ${({ dropdownVisible }) =>
    dropdownVisible ? "visible" : "hidden"};
  position: absolute;
`;

const DropdownItems = styled.ul`
  ${cssFlexStartCol};
  width: 100%;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 0px 4px rgba(204, 204, 204, 0.5),
    0px 2px 4px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(4px);

  margin-top: 16px;
`;

const DropdownItem = styled.li`
  text-decoration: none;
  cursor: pointer;

  color: ${({ theme }) => theme.colors.gray};
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSize.m};
  margin: 8px 0px;

  &:hover {
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.black};
  }
`;

const MenuItemDropdown = ({ data, dropdownVisible }) => {
  const dropdownItems =
    data &&
    data.map((v, i) => (
      <DropdownItem key={i} href="#">
        {v}
      </DropdownItem>
    ));

  return (
    <StyledMenuItemDropdown dropdownVisible={dropdownVisible}>
      <DropdownItems>{dropdownItems && dropdownItems}</DropdownItems>
    </StyledMenuItemDropdown>
  );
};

export default MenuItemDropdown;
