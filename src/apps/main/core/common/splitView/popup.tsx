/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*-
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { SplitView } from "./splitView";

export function Popup() {
  const gSplitView = SplitView.getInstance();
  return (
    <xul:panel id="splitView-panel" type="arrow" position="bottomleft topleft">
      <xul:vbox id="splitView-box">
        <xul:vbox class="panel-header">
          <h1>
            <span data-l10n-id="split-view-title" />
          </h1>
        </xul:vbox>
        <xul:toolbarseparator />
        <xul:vbox id="splitView-vbox">
          <h3 class="splitView-title">
            <span data-l10n-id="split-view-position" />
          </h3>
          <xul:hbox id="splitView-position-selector">
            <xul:vbox
              id="splitView-position-selector-left"
              class="splitView-select-box"
              onClick={() =>
                gSplitView.handleSplitViewPanelRevseOptionClick(false)
              }
            >
              <label
                data-l10n-id="split-view-position-left"
                class="splitView-select-label"
              />
              <xul:hbox
                id="splitView-position-selector-content-left"
                class="splitView-select-content-box"
              >
                <div />
                <div />
              </xul:hbox>
            </xul:vbox>
            <xul:vbox
              id="splitView-position-selector-right"
              class="splitView-select-box"
              onClick={() =>
                gSplitView.handleSplitViewPanelRevseOptionClick(true)
              }
            >
              <label
                data-l10n-id="split-view-position-right"
                class="splitView-select-label"
              />
              <xul:hbox
                id="splitView-position-selector-content-right"
                class="splitView-select-content-box"
              >
                <div />
                <div />
              </xul:hbox>
            </xul:vbox>
          </xul:hbox>
          <xul:toolbarseparator />
          <h3 class="splitView-title">Split View</h3>
          <xul:hbox id="splitView-flex-selector">
            <xul:vbox
              id="splitView-flex-selector-row"
              class="splitView-select-box"
              onClick={() =>
                gSplitView.handleSplitViewPanelTypeOptionClick("row")
              }
            >
              <label
                data-l10n-id="split-view-flex-row"
                class="splitView-select-label"
              />
              <xul:hbox
                id="splitView-flex-selector-content-row"
                class="splitView-select-content-box"
              >
                <div />
                <div />
              </xul:hbox>
            </xul:vbox>
            <xul:vbox
              id="splitView-flex-selector-column"
              class="splitView-select-box"
              onClick={() =>
                gSplitView.handleSplitViewPanelTypeOptionClick("column")
              }
            >
              <label
                data-l10n-id="split-view-flex-column"
                class="splitView-select-label"
              />
              <xul:vbox
                id="splitView-flex-selector-content-column"
                class="splitView-select-content-box"
              >
                <div />
                <div />
              </xul:vbox>
            </xul:vbox>
          </xul:hbox>
          <button
            id="splitView-remove-button"
            data-l10n-id="split-view-remove-button"
            class="footer-button"
            type="button"
            onClick={() => gSplitView.unsplitCurrentView()}
          />
        </xul:vbox>
      </xul:vbox>
    </xul:panel>
  );
}
