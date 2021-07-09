input.onButtonPressed(Button.A, function () {
    // Replace xxxxxxxxxxxxx with your ThingSpeak write API key#
    // 
    WiFiBit.executeHttpMethod(
    HttpMethod.GET,
    "api.thingspeak.com",
    80,
    "/update?api_key=xxxxxxxxxxxxxxxxxxfield1=" + Dice
    )
    basic.showIcon(IconNames.Yes)
})
input.onButtonPressed(Button.B, function () {
    Dice = randint(1, 6)
    basic.showNumber(Dice)
})
let Dice = 0
WiFiBit.connectToWiFiBit()
// Insert Your WiFi SSID & Password 
// 
WiFiBit.connectToWiFiNetwork("SSID", "Password")
WiFiBit.executeAtCommand("ATE0", 1000)
basic.showIcon(IconNames.Happy)
