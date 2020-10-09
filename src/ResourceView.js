import React, { Component } from "react";
import moment from "moment";
import { PropTypes } from "prop-types";
import styled from "styled-components";
import Image from "./Components/Image";

const ResourceListWrap = styled.div`
  height: 72px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  padding-right: 25px;
  border-bottom: 2px solid;
  &:last-child {
    border: none;
  }
  .option-drop-down {
    visibility: hidden;
  }
`;

const ResourceListInfo = styled.div`
  flex: auto;
  margin-left: 6px;
`;

const TextPrimary = styled.div`
  color: ${(props) => (props.day ? "#fff" : "#2a2d37")};
  line-height: 16px;
  font-size: ${(props) => (props.font ? "16px" : "15px")};
`;

const TextTertiary = styled.div`
  color: ${(props) => (props.day ? "#fff" : "#989cac")};
  font-size: 13px;
  line-height: 13px;
  margin-top: 4px;
`;

const ResourceWeekWrap = styled.div`
  height: 72px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  justify-content: end;
  margin-right: 5px;
`;

const ResourceWeekListInfo = styled.div`
  flex: auto;
  text-align: end;
  padding: 14px 10px;
  background: ${(props) => (props.day ? "#4fbc7b" : "#fff")};
`;

const ResourceCardList = (props) => {
  const SameDateCheck = (currentDate) => {
    const now = moment().format("YYYY-MM-DD");
    if (currentDate === now) return true;
    else return false;
  };
  return (
    <React.Fragment>
      {props.viewTypes === 0 ? (
        <ResourceListWrap>
          <Image
            src={props.item.img_file_url}
            width="32px"
            height="32px"
            style={{
              borderRadius: "50%",
            }}
          />
          <ResourceListInfo>
            <TextPrimary>{props.item.slotName}</TextPrimary>
            <TextTertiary>{props.item.slotSubName[0]}</TextTertiary>
          </ResourceListInfo>
        </ResourceListWrap>
      ) : (
        <ResourceWeekWrap>
          <ResourceWeekListInfo day={SameDateCheck(props.item.current_date)}>
            <TextPrimary day={SameDateCheck(props.item.current_date)} font>
              {props.item.slotName}
            </TextPrimary>
            <TextTertiary day={SameDateCheck(props.item.current_date)}>
              {props.item.slotSubName[0]}
            </TextTertiary>
          </ResourceWeekListInfo>
        </ResourceWeekWrap>
      )}
    </React.Fragment>
  );
};

class ResourceView extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    schedulerData: PropTypes.object.isRequired,
    contentScrollbarHeight: PropTypes.number.isRequired,
    slotClickedFunc: PropTypes.func,
    slotItemTemplateResolver: PropTypes.func,
  };

  render() {
    const {
      schedulerData,
      contentScrollbarHeight,
      slotClickedFunc,
      slotItemTemplateResolver,
      customViewType,
    } = this.props;
    const { renderData } = schedulerData;
    let width = schedulerData.getResourceTableWidth() - 2;
    let paddingBottom = contentScrollbarHeight;
    let resourceList = renderData.map((item) => {
      let a =
        slotClickedFunc != undefined ? (
          <a
            onClick={() => {
              slotClickedFunc(schedulerData, item);
            }}
          >
            <ResourceCardList item={item} viewTypes={customViewType} />
          </a>
        ) : (
          <ResourceCardList item={item} viewTypes={customViewType} />
        );
      let slotItem = (
        <div
          className="overflow-text header2-text"
          style={{ textAlign: "left" }}
        >
          {a}
        </div>
      );
      if (!!slotItemTemplateResolver) {
        let temp = slotItemTemplateResolver(
          schedulerData,
          item,
          slotClickedFunc,
          width,
          "overflow-text header2-text"
        );
        if (!!temp) slotItem = temp;
      }

      return (
        <div key={item.slotId}>
          <div data-resource-id={item.slotId}>{slotItem}</div>
        </div>
      );
    });

    return (
      <div style={{ paddingBottom: paddingBottom }}>
        <div className="resource-table">
          <div>{resourceList}</div>
        </div>
      </div>
    );
  }
}

export default ResourceView;
