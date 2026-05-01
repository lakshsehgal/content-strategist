function doGet(e)  { return handleRequest(e); }
function doPost(e) { return handleRequest(e); }

function handleRequest(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = e.parameter;

  sheet.appendRow([
    data.timestamp, data.full_name, data.email, data.phone,
    data.city, data.linkedin, data.role_type, data.experience,
    data.company, data.tools, data.platforms, data.portfolio,
    data.resume, data.d2c_experience, data.created_content,
    data.standout, data.fav_content, data.pitch, data.why_neuroid,
    data.wfo_delhi, data.current_ctc, data.expected_ctc,
    data.notice_period, data.additional_info
  ]);

  return ContentService.createTextOutput(JSON.stringify({status: 'success'}))
    .setMimeType(ContentService.MimeType.JSON);
}
