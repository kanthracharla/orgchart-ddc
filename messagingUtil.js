window._va_data_received = false;
function extractDataFromMessage(event) {
    if (!event || !event.data) return null;
    window._va_data_received = true;
    return event.data.data || [];
}
