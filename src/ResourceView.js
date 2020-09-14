import React, { Component } from "react";
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
  color: #2a2d37;
  line-height: 16px;
`;

const TextTertiary = styled.div`
  color: #989cac;
  font-size: 12px;
  line-height: 13px;
`;

const ResourceCardList = (props) => {
  return (
    <ResourceListWrap>
      {props.viewTypes === 0 && (
        <Image
          src={props.item.img_file_url}
          width="32px"
          height="32px"
          style={{
            borderRadius: "50%",
          }}
        />
      )}
      <ResourceListInfo>
        <TextPrimary>{props.item.slotName}</TextPrimary>
        <TextTertiary>{props.item.slotSubName[0]}</TextTertiary>
      </ResourceListInfo>
    </ResourceListWrap>
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
