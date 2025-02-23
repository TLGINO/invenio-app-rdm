// This file is part of InvenioRDM
// Copyright (C) 2022 CERN.
//
// Invenio App RDM is free software; you can redistribute it and/or modify it
// under the terms of the MIT License; see LICENSE file for more details.

import { i18next } from "@translations/invenio_app_rdm/i18next";
import React from "react";
import PropTypes from "prop-types";
import { Popup, Label, Icon } from "semantic-ui-react";

export const CompactStats = ({ uniqueViews, uniqueDownloads }) => {
  return (
    <>
      {uniqueViews != null && (
        <Popup
          size="tiny"
          content={i18next.t("Unique views")}
          trigger={
            <Label className="transparent">
              <Icon name="eye" />
              {uniqueViews}
            </Label>
          }
        />
      )}
      {uniqueDownloads != null && (
        <Popup
          size="tiny"
          content={i18next.t("Unique downloads")}
          trigger={
            <Label className="transparent">
              <Icon name="download" />
              {uniqueDownloads}
            </Label>
          }
        />
      )}
    </>
  );
};

CompactStats.propTypes = {
  uniqueViews: PropTypes.number,
  uniqueDownloads: PropTypes.number,
};

CompactStats.defaultProps = {
  uniqueViews: null,
  uniqueDownloads: null,
};
