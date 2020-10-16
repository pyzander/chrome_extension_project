// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';
let kButtonColors = ['#3aa757', '#e8453c', '#f9bb2d', '#4688f1'];
chrome.runtime.onInstalled.addListener(function() {
  for (let item of kButtonColors) {
    chrome.storage.sync.set({color: item}, function() {
      console.log("The color is " + item);
    })
  };
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {hostEquals: 'developer.chrome.com'},
      })
      ],
          actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});
