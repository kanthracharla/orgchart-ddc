// messagingUtil.js
(function () {
  if (window.va && window.va.messagingUtil) return;

  window.va = window.va || {};
  window.va.messagingUtil = {
    setOnDataReceivedCallback: function (callback) {
      console.log("[va.messagingUtil] Listening for postMessage events...");

      function listener(event) {
        if (event && event.data && event.data.data) {
          console.log("[va.messagingUtil] Data received:", event.data);
          callback(event.data);
        }
      }

      window.addEventListener("message", listener, false);
    },

    postInitializationMessage: function () {
      console.log("[va.messagingUtil] Posting initialization message");
      window.parent.postMessage({ type: "initialized" }, "*");
    }
  };
})();
