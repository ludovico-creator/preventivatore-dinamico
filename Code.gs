function doGet() {
  return HtmlService.createHtmlOutputFromFile('index')
    .setTitle('Preventivatore – Viaggi Voltaire')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
