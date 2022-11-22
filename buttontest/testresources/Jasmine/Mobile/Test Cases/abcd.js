it("buttontest/abcd", async function() {
	var _data = testcaseData_1669099303176.dataset;
	await voltmx.automation.playback.waitFor(["buttontest/Form1","Button0ba9623b33b8242"]);
	voltmx.automation.button.click(["buttontest/Form1","Button0ba9623b33b8242"]);
	voltmx.automation.alert.click(0);
});