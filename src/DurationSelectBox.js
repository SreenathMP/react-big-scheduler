import React, { useState, useEffect, useRef } from "react";
import styled, { ThemeProvider } from "styled-components";
import Icon from "antd/lib/icon";
import theme from "./config/styles";

const FilterWrap = styled.div`
  position: absolute;
  z-index: 10;
  width: 180px;
  background: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.grey1};
  margin-top: ${(props) => props.marginTop};
  margin-left: ${(props) => props.marginLeft};
`;

const FilterDefinedWrap = styled.div`
  margin: 15px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

const FilterDefinedOption = styled.div`
  position: relative;
  line-height: 20px;
  height: auto;
  padding: 5px 5px 5px 20px;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: ${(props) => props.theme.fontSize.p};
  &:hover {
    color: ${(props) => props.theme.colors.accent};
    font-weight: 500;
  }
  color: ${(props) =>
    !props.isSelected
      ? props.theme.colors.textSecondary
      : props.theme.colors.textPrimary};
  font-weight: ${(props) =>
    !props.isSelected ? props.theme.weight.normal : props.theme.weight.medium};
  cursor: pointer;
  &:before {
    content: " \\2713";
    display: ${(props) => (props.isSelected ? "block" : "none")};
    color: ${(props) => props.theme.colors.accent};
    position: absolute;
    width: 10px;
    height: 10px;
    left: 0;
  }
`;

const ChartFilter = styled.div`
  color: #6e717c;
  font-size: ${(props) => props.theme.fontSize.p};
  line-height: ${(props) => (props.height ? props.height : "26px")};
  padding-left: 30px;
  border: ${(props) => (props.border ? "1px solid #c2c4cf" : "0px solid")};
`;

const IconWrap = styled(Icon)`
  position: absolute;
  text-align: end;
  right: 0;
  top: 14px;
  margin-right: 18px;
`;

export default function DurationSelectBox(props) {
  const {
    onChangeOption,
    parseId,
    currentValue,
    optionList,
    optionKey,
    optionValue,
    width,
    backgroundColor,
    height,
    border,
    marginLeft,
    marginTop,
  } = props;

  const filterRef = useRef(null);
  const filterInnerRef = useRef(null);
  const [showFilter, setShowFilter] = useState(false);

  const getCurrentOption = (optionVal) => {
    let copyVal = {};
    optionList.map((option) => {
      Object.entries(option).map(([key, value]) => {
        if (optionVal === value) {
          copyVal = option;
        }
        return key;
      });
      return null;
    });
    return copyVal;
  };

  const filterDurationOptions = (optionVal, optionKeyParam) => {
    let copyVal = optionVal;
    const currentOption = getCurrentOption(optionVal);
    Object.entries(currentOption).map(([key, value]) => {
      if (key === optionKey && optionKeyParam) {
        copyVal = value;
      }
      if (key === optionValue && !optionKeyParam) {
        copyVal = value;
      }
      return null;
    });
    return copyVal.toString().substring(0, 18);
  };

  const getRenderOption = (option, optionKeyParam) => {
    let copyVal = "";
    Object.entries(option).map(([key, value]) => {
      if (key === optionKey && optionKeyParam) {
        copyVal = value;
      }
      if (key === optionValue && !optionKeyParam) {
        copyVal = value;
      }
      return null;
    });
    return copyVal.toString().substring(0, 18);
  };

  const handleClickOutside = (event) => {
    if (
      filterInnerRef &&
      filterInnerRef !== null &&
      filterRef &&
      filterRef !== null
    ) {
      if (
        filterInnerRef.current &&
        filterInnerRef.current.contains(event.target)
      ) {
        return null;
      }
      if (filterRef.current && filterRef.current.contains(event.target)) {
        setShowFilter(!showFilter);
        return null;
      }
      setShowFilter(false);
    }
    return null;
  };

  useEffect(() => {
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const setFilter = (filter) => {
    setShowFilter(false);
    onChangeOption(filter, parseId);
  };

  return (
    <ThemeProvider theme={theme}>
      <div
        ref={filterRef}
        style={{
          position: "relative",
          cursor: "pointer",
          width: width !== undefined ? width : "130px",
          backgroundColor:
            backgroundColor !== undefined ? backgroundColor : "#fff",
        }}
      >
        <ChartFilter
          height={height !== undefined ? height : "26px"}
          border={border !== undefined}
        >
          {filterDurationOptions(currentValue, true)}
          <IconWrap
            type="down"
            style={{
              fontSize: "12px",
            }}
          ></IconWrap>
        </ChartFilter>
      </div>
      {showFilter && (
        <FilterWrap
          ref={filterInnerRef}
          marginLeft={marginLeft !== undefined ? marginLeft : "0px"}
          marginTop={marginTop !== undefined ? marginTop : "3px"}
        >
          <div
            style={{
              textAlign: "right",
              padding: "0 5px",
              fontSize: "18px",
            }}
          />
          <FilterDefinedWrap>
            {optionList.map((filter) => (
              <FilterDefinedOption
                key={getRenderOption(filter, false)}
                isSelected={
                  filterDurationOptions(currentValue, false) ===
                  getRenderOption(filter, false)
                }
                onClick={() => setFilter(filter)}
              >
                {getRenderOption(filter, true)}
              </FilterDefinedOption>
            ))}
          </FilterDefinedWrap>
        </FilterWrap>
      )}
    </ThemeProvider>
  );
}
