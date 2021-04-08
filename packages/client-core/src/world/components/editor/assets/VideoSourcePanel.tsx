import React from "react";
import PropTypes from "prop-types";
import MediaSourcePanel from "./MediaSourcePanel";
import { useTranslation } from "react-i18next";

/**
 * [VideoSourcePanel used to render view of MediaSourcePanel]
 * @param       {object} props
 * @constructor
 */
export default function VideoSourcePanel(props) {
  const { t } = useTranslation();
  return <MediaSourcePanel {...props} searchPlaceholder={props.source.searchPlaceholder || t('editor:asset.videoSourcePanel.ph-search')} />;
}

/**
 * [declairing propTypes for VideoSourcePanel]
 * @type {Object}
 */
VideoSourcePanel.propTypes = {
  source: PropTypes.object
};